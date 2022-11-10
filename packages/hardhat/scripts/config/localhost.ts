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

const allowlist: string[] = []

const contractAddress = NFTContract

const baseUri = ''

const contractUri = 'ipfs://xxx'

const provenanceHash = ''

const config: Config = {
  chainName: 'localhost',
  contractAddress,
  allowlist,
  baseUri,
  contractUri,
  provenanceHash,
}

export default config
