import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import { task } from 'hardhat/config'
import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-etherscan'

import { config as envConfig } from './.env'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (_args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${envConfig.ALCHEMY_GOERLI_API_KEY}`,
      accounts: [`0x${envConfig.GOERLI_PRIVATE_KEY}`],
    },
    // mainnet: {
    //   url: `https://eth-mainnet.g.alchemy.com/v2/${envConfig.ALCHEMY_MAINNET_API_KEY}`,
    //   accounts: [`0x${envConfig.MAINNET_PRIVATE_KEY}`],
    // },
  },
  etherscan: {
    apiKey: envConfig.ETHERSCAN_API_KEY,
  },
}

export default config
