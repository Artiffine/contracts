import type { Config } from '.'

const allowlist: string[] = []

const contractAddress = '...'

const baseUris = {
  premint: 'ipfs://.../', // anonyms
  postmint: 'ipfs://.../',
}
const baseUri = baseUris.postmint

const contractUri = 'ipfs://...'

// SHA-256 of contractUri 'ipfs://.../'
const provenanceHash = '...'

const config: Config = {
  chainName: 'mainnet',
  contractAddress,
  allowlist,
  baseUri,
  contractUri,
  provenanceHash,
}

export default config
