import { config } from './vars'

interface IConfig {
  // goerli
  ALCHEMY_GOERLI_API_KEY: string
  GOERLI_PRIVATE_KEY: string
  // mainnet
  ALCHEMY_MAINNET_API_KEY: string
  MAINNET_PRIVATE_KEY: string
  // etherscan
  ETHERSCAN_API_KEY: string
}

export type { IConfig }
export { config }
