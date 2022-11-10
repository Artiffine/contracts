/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type {
  INFTContractWithWithdrawal,
  INFTContractWithWithdrawalInterface,
} from '../../../../contracts/interfaces/extensions/INFTContractWithWithdrawal'

const _abi = [
  {
    inputs: [],
    name: 'withdrawAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class INFTContractWithWithdrawal__factory {
  static readonly abi = _abi
  static createInterface(): INFTContractWithWithdrawalInterface {
    return new utils.Interface(_abi) as INFTContractWithWithdrawalInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INFTContractWithWithdrawal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as INFTContractWithWithdrawal
  }
}