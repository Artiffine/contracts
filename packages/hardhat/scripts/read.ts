// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { formatEther } from '@ethersproject/units'
import { ethers } from 'hardhat'

import type { NFTContract } from '../../hardhat-types/src/contracts/NFTContract'
import { getConfigByChainId } from './config'

async function main() {
  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners()
  const chainId = await deployer.getChainId()
  const config = getConfigByChainId(chainId)

  if (!config.contractAddress) {
    console.error('Missing contract address in config')
    process.exit(1)
  }

  console.log(
    `Chain ID: ${chainId} (${config.chainName}).
    \nInteracting with he contract ${config.contractAddress} with the account:`,
    await deployer.getAddress()
  )

  // We get the contract to deploy
  const nftContract = (await ethers.getContractAt(
    'NFTContract',
    config.contractAddress
  )) as NFTContract

  // interact with the contract
  console.log('name', await nftContract.name())
  console.log('symbol', await nftContract.symbol())
  console.log('MAX_SUPPLY', await nftContract.MAX_SUPPLY())
  console.log('MAX_PUBLIC_MINT', await nftContract.MAX_PUBLIC_MINT())
  console.log(
    'PRICE_PER_TOKEN',
    formatEther(await nftContract.PRICE_PER_TOKEN())
  )
  console.log('PROVENANCE', await nftContract.PROVENANCE())
  console.log('isSaleActive', await nftContract.isSaleActive())
  console.log(
    'isWhitelistSaleActive',
    await nftContract.isWhitelistSaleActive()
  )

  console.log('contractURI', await nftContract.contractURI())
  console.log(
    'wl amount',
    config.whiteList[0],
    config.whiteList[0]
      ? await nftContract.whitelistMintAmount(config.whiteList[0])
      : '??'
  )
  const totalSupply = (await nftContract.totalSupply()).toNumber()
  console.log('totalSupply', totalSupply)
  console.log(
    'token uri:',
    totalSupply > 0 ? await nftContract.tokenURI(0) : '??'
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
