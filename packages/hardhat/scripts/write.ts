// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'
import cliSelect from 'cli-select'
import chalk from 'chalk'
import prompt from 'prompt-sync'
import { ContractTransaction } from '@ethersproject/contracts'
import { formatEther } from '@ethersproject/units'

import type { NFTContract } from '../../hardhat-types/src/contracts/NFTContract'
import {
  awaitAndPrintTransactionResult,
  promptUserForGasPrice,
} from './utils/tasks'
import { getConfigByChainId } from './config'

enum Options {
  enableWhitelistSale = 'enableWhitelistSale',
  disableWhitelistSale = 'disableWhitelistSale',
  enableSale = 'enableSale',
  disableSale = 'disableSale',
  setWhitelistAddresses = 'setWhitelistAddresses',
  setBaseURI = 'setBaseURI',
  setContractURI = 'setContractURI',
  withdrawAll = 'withdrawAll',
  setProvenance = 'setProvenance',
}

async function main() {
  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners()
  const chainId = await deployer.getChainId()
  const config = getConfigByChainId(chainId)

  if (!config.contractAddress) {
    console.error('Missing contract address in config')
    process.exit(1)
  }

  const ownerAddress = await deployer.getAddress()
  const balance = formatEther(await deployer.getBalance())
  console.log(
    `Chain ID: ${chainId} (${config.chainName}).
    \nInteracting with the contract ${config.contractAddress} with the account:`,
    ownerAddress,
    `balance: ${balance} ETH`
  )

  // We get the contract to interact with
  const nftContract = (await ethers.getContractAt(
    'NFTContract',
    config.contractAddress
  )) as NFTContract

  // get user options
  console.log(`Select function to call on smart contract:`)
  const { id, value } = await cliSelect({
    values: Options,
    unselected: '◯',
    selected: chalk.greenBright('●'),
    valueRenderer: (value, selected) => {
      if (selected) {
        return chalk.greenBright(value)
      }
      return value
    },
  })

  // prompt confirm
  const confirm = prompt()(
    `Do you want to call function ${chalk.greenBright(
      id
    )} on chain ${chalk.greenBright(chainId)}: (y/n) `
  )
  if (confirm !== 'y') {
    process.exit(1)
  }

  const gasPrice = await promptUserForGasPrice(deployer)

  // do the work
  console.log('Communicating with the blockchain...')
  let res: ContractTransaction | undefined = undefined
  switch (id) {
    case Options.enableWhitelistSale:
      res = await nftContract.setIsWhitelistSaleActive(true, { gasPrice })
      break
    case Options.disableWhitelistSale:
      res = await nftContract.setIsWhitelistSaleActive(false, { gasPrice })
      break
    case Options.enableSale:
      res = await nftContract.setIsSaleActive(true, { gasPrice })
      break
    case Options.disableSale:
      res = await nftContract.setIsSaleActive(false, { gasPrice })
      break
    case Options.withdrawAll:
      res = await nftContract.withdrawAll({ gasPrice })
      break
    case Options.setWhitelistAddresses:
      const { whiteList } = config
      if (whiteList.length === 0) {
        console.error('No addresses on the whiteList!', whiteList)
        process.exit(1)
      }
      res = await nftContract.setWhitelistAddresses(whiteList, 1, {
        gasPrice,
      })
      break
    case Options.setBaseURI:
      const { baseUri } = config
      if (!baseUri || baseUri.charAt(baseUri.length - 1) !== '/') {
        console.error('Missing baseUri, or does not end with "/"!', baseUri)
        process.exit(1)
      }
      res = await nftContract.setBaseURI(baseUri, {
        gasPrice,
      })
      break
    case Options.setContractURI:
      const { contractUri } = config
      if (!contractUri) {
        console.error('Missing contractUri!', contractUri)
        process.exit(1)
      }
      res = await nftContract.setContractURI(contractUri, {
        gasPrice,
      })
      break
    case Options.setProvenance:
      const { provenance } = config
      if (!provenance) {
        console.error('Missing provenance!', provenance)
        process.exit(1)
      }
      res = await nftContract.setProvenance(provenance, {
        gasPrice,
      })
      break
    default:
      console.error('Invalid selection!')
      break
  }

  if (!res) {
    console.error(
      'Missing contract transaction! But the operation was probably completed.'
    )
    return
  }

  await awaitAndPrintTransactionResult(res)

  console.log(
    chalk.greenBright(`\n🚀 Operation ${id} succeded! Hash: ${res.hash}`)
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
