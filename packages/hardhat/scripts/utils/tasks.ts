import { BigNumber } from '@ethersproject/bignumber'
import { ContractTransaction } from '@ethersproject/contracts'
import { formatEther, formatUnits, parseUnits } from '@ethersproject/units'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import chalk from 'chalk'
import prompt from 'prompt-sync'

import { formatContractTransaction, formatContractReceipt } from './'

export const promptUserForGasPrice = async (
  deployer: SignerWithAddress
): Promise<BigNumber> => {
  const feeData = await deployer.getFeeData()
  console.log('Current fee data: ', {
    'gasPrice:': feeData.gasPrice ? formatUnits(feeData.gasPrice, 9) : '???',
    'maxFeePerGas:': feeData.maxFeePerGas
      ? formatUnits(feeData.maxFeePerGas, 9)
      : '???',
    'maxPriorityFeePerGas:': feeData.maxPriorityFeePerGas
      ? formatUnits(feeData.maxPriorityFeePerGas, 9)
      : '???',
  })

  const userGasPrice = prompt()(`Enter gas price (gwei): `)
  const gasPrice = parseUnits(userGasPrice, 9)
  const confirmGas = prompt()(
    `Confirm gas price ${chalk.greenBright(
      formatEther(gasPrice) + ' ETH'
    )} == ${chalk.greenBright(formatUnits(gasPrice, 9) + ' gwei')}: (y/n) `
  )
  if (confirmGas !== 'y') {
    process.exit(1)
  }

  return gasPrice
}

export const awaitAndPrintTransactionResult = async (
  transaction: ContractTransaction
) => {
  console.log(`Transaction details:`)
  console.log(formatContractTransaction(transaction))
  const contractReceipt = await transaction.wait()
  console.log('Waiting for transaction receipt...')
  console.log(`Transaction receipt:`)
  console.log(formatContractReceipt(contractReceipt))
}
