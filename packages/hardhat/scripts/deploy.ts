// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { Contract } from 'ethers'
import { config as hardhatConfig, ethers } from 'hardhat'
import fs from 'fs'
import path from 'path'
import prompt from 'prompt-sync'
import { formatEther } from '@ethersproject/units'

import { getConfigByChainId } from './config'
import {
  promptUserForGasPrice,
  awaitAndPrintTransactionResult,
} from './utils/tasks'
import { formatContractTransaction } from './utils'

enum Artifacts {
  'NFTContract' = 'NFTContract',
  'Multicall' = 'Multicall',
}

const CONTRACT_ARTIFACT_NAME: Artifacts = Artifacts.NFTContract

async function deployMulticallContract() {
  const confirm = prompt()(`Do you want deploy Multicall contract?: (y/n) `)
  if (confirm !== 'y') {
    console.log('Nothing deployed')
    return
  }
  console.log('Deploying multicall contract...')
  const MulticallContract = await ethers.getContractFactory(Artifacts.Multicall)
  const multicallContract = await MulticallContract.deploy()
  await multicallContract.deployed()
  saveFrontendFiles(multicallContract, 'MulticallContract')
  console.log('Multicall deployed to:', multicallContract.address)
}

async function main() {
  // get the deployer address
  const [deployer] = await ethers.getSigners()
  const chainId = await deployer.getChainId()
  const config = getConfigByChainId(chainId)
  const isLocalDeploy = chainId === 1337

  const ownerAddress = await deployer.getAddress()
  const balance = formatEther(await deployer.getBalance())
  console.log(
    `Chain ID: ${chainId} (${config.chainName}).
    \nDeploying the contract ${CONTRACT_ARTIFACT_NAME} with the account:`,
    ownerAddress,
    `balance: ${balance} ETH`
  )

  const gasPrice = await promptUserForGasPrice(deployer)
  console.log('Deploying contracts...')

  // deploy multichain only on localhost
  if (isLocalDeploy) {
    deleteFrontendFiles()
    await deployMulticallContract()
  }

  // deploy the main contract
  const NFTContract = await ethers.getContractFactory(CONTRACT_ARTIFACT_NAME)

  const contract = await NFTContract.deploy({ gasPrice })

  console.log('Deploying contract to address: ', contract.address)
  console.log(formatContractTransaction(contract.deployTransaction))

  await contract.deployed()

  await awaitAndPrintTransactionResult(contract.deployTransaction)

  if (isLocalDeploy) {
    saveFrontendFiles(contract, 'NFTContract')
  }
  console.log('YourContract deployed to:', contract.address)
}

function deleteFrontendFiles() {
  try {
    const contractsFile = path.join(
      hardhatConfig.paths.root,
      './scripts/config',
      '/localContractAddress.ts'
    )

    fs.unlinkSync(contractsFile)
  } catch (e) {
    // do nothing
  }
}

function saveFrontendFiles(contract: Contract, contractName: string) {
  const contractsDir = path.join(hardhatConfig.paths.root, './scripts/config')

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir)
  }

  fs.appendFileSync(
    contractsDir + '/localContractAddress.ts',
    `export const ${contractName}_address = '${contract.address}'\n`
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
