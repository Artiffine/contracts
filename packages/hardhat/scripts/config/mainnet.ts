import type { Config } from '.'

const whiteList: string[] = []

const contractAddress = '...'

const baseUris = {
  premint: 'ipfs://.../', // anonyms
  postmint: 'ipfs://.../',
}
const baseUri = baseUris.postmint

const contractUri = 'ipfs://...'

// SHA-256 of contractUri 'ipfs://.../'
const provenance = '...'

const config: Config = {
  chainName: 'mainnet',
  contractAddress,
  whiteList,
  baseUri,
  contractUri,
  provenance,
}

export default config
