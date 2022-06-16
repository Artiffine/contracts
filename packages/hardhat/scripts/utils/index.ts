import { ContractReceipt, ContractTransaction } from '@ethersproject/contracts'
import { formatUnits } from '@ethersproject/units'

export const formatContractTransaction = (t: ContractTransaction) => {
  return {
    ...t,
    data: t.data.substr(0, 10) + '...',
    gasPrice: t.gasPrice ? formatUnits(t.gasPrice, 9) : '???',
    maxPriorityFeePerGas: t.maxPriorityFeePerGas
      ? formatUnits(t.maxPriorityFeePerGas, 9)
      : '???',
    maxFeePerGas: t.maxFeePerGas ? formatUnits(t.maxFeePerGas, 9) : '???',
    gasLimit: t.maxFeePerGas ? formatUnits(t.gasLimit, 9) : '???',
    value: formatUnits(t.value, 1),
  }
}

export const formatContractReceipt = (r: ContractReceipt) => {
  return {
    ...r,
    gasUsed: r.gasUsed ? formatUnits(r.gasUsed, 9) : '???',
    cumulativeGasUsed: r.cumulativeGasUsed
      ? formatUnits(r.cumulativeGasUsed, 9)
      : '???',
    effectiveGasPrice: r.effectiveGasPrice
      ? formatUnits(r.effectiveGasPrice, 9)
      : '???',
  }
}
