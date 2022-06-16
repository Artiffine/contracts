import type { Config } from '.'
// the contract address module can be missing at this point
// import { NFTContract } from '../../../frontend/artifacts/contracts/contractAddress'
let NFTContract = ''
try {
  const config = require('../../../frontend/artifacts/contracts/contractAddress')
  NFTContract = config.NFTContract || ''
} catch (e) {
  console.log('File frontend/artifacts/contracts/contractAddress not found')
}

const whiteList: string[] = [
  '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
]

const contractAddress = NFTContract

const baseUri = ''

const contractUri = 'ipfs://xxx'

const provenance = ''

const config: Config = {
  chainName: 'localhost',
  contractAddress,
  whiteList,
  baseUri,
  contractUri,
  provenance,
}

export default config
