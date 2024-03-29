import rinkebyConfig from './rinkeby'
import localhostConfig from './localhost'
import mainetConfig from './mainnet'

export type Config = {
  chainName: string
  allowlist: string[]
  contractAddress: string
  baseUri: string
  contractUri: string
  provenanceHash: string
}

export const getConfigByChainId = (chainId: number) => {
  switch (chainId) {
    case 1:
      return mainetConfig
    case 4:
      return rinkebyConfig
    case 1337:
      return localhostConfig
    default:
      throw new Error('Unknown chain id')
  }
}
