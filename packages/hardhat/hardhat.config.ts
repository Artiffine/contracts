import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import { task } from 'hardhat/config'
import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-etherscan'

import {
  ALCHEMY_RINKEBY_API_KEY,
  RINKEBY_PRIVATE_KEY,
  MAINNET_PRIVATE_KEY,
  ALCHEMY_MAINNET_API_KEY,
  ETHERSCAN_API_KEY,
} from './.env/vars'

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
  // paths: {
  //   artifacts: '../frontend/artifacts',
  // },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_RINKEBY_API_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
  typechain: {
    outDir: '../hardhat-types/src',
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
}

export default config
