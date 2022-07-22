import { ethers } from 'hardhat'
import { BigNumber, Contract } from 'ethers'
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { parseEther } from '@ethersproject/units'

import type { NFTContract } from '../../hardhat-types/src/contracts/NFTContract'

const CONTRACT_ARTIFACT_NAME_1 = 'Azuki'
const CONTRACT_ARTIFACT_NAME_2 = 'NFTContractSimple'
const CONTRACT_ARTIFACT_NAME_3 = 'NFTContract'
const CONTRACT_ARTIFACT_NAME_4 = 'NFTContractCrossmint'
const CONTRACT_ARTIFACT_NAME_5 = 'NFTContractConstructor'

describe('NFTContract Gas Estimator', () => {
  let contracts: { [key: string]: NFTContract } = {}
  let owner: SignerWithAddress
  let addrs: SignerWithAddress[]

  beforeEach(async function () {
    ;[owner, ...addrs] = await ethers.getSigners()

    const deployContract = async (artifact: string, ...args: any[]) => {
      // Get the ContractFactory and Signers here.
      const Token = await ethers.getContractFactory(artifact)
      const contract = (await Token.deploy(...args)) as unknown as NFTContract
      await contract.deployed()
      return contract
    }

    contracts = {
      [CONTRACT_ARTIFACT_NAME_1]: await deployContract(
        CONTRACT_ARTIFACT_NAME_1
      ),
      [CONTRACT_ARTIFACT_NAME_2]: await deployContract(
        CONTRACT_ARTIFACT_NAME_2
      ),
      [CONTRACT_ARTIFACT_NAME_3]: await deployContract(
        CONTRACT_ARTIFACT_NAME_3
      ),
      [CONTRACT_ARTIFACT_NAME_4]: await deployContract(
        CONTRACT_ARTIFACT_NAME_4
      ),
      [CONTRACT_ARTIFACT_NAME_5]: await deployContract(
        CONTRACT_ARTIFACT_NAME_5,
        'Test name',
        'TST',
        BigNumber.from(`${1_000}`),
        BigNumber.from(`${10}`),
        parseEther(`${0.0001}`)
      ),
    }
  })

  const callOnAllContracts = async <T>(
    fce: (c: NFTContract) => Promise<T> | T
  ) => {
    const results = Object.entries(contracts).reduce<
      Promise<{
        [key: string]: Promise<T>
      }>
    >((acc, [key, contract]) => {
      return { ...acc, [key]: fce(contract) }
    }, {} as any)
    const awaited = await Promise.all(
      Object.values(results).map(async (c) => await c)
    )
    return results
  }

  const getMintTable = async function () {
    const res = await callOnAllContracts(async (contract) => {
      await contract.setIsSaleActive(true)
      const pricePerToken = await contract.PRICE_PER_TOKEN()
      const maxPublicMint = (await contract.MAX_PUBLIC_MINT()).toNumber()

      const promises = Array.from(Array(maxPublicMint).keys()).map(
        async (index) => {
          const amount = index + 1
          return (
            await contract.estimateGas.mint(amount, {
              value: pricePerToken.mul(amount),
            })
          ).toNumber()
        }
      )
      const mintGasUsedArray = await Promise.all(promises)

      return mintGasUsedArray
    })

    const mintLenght = (await Object.values(res)[0]).length

    let table = {} as { [key: string]: {} }
    for (let index = 0; index < mintLenght; index++) {
      const entries = Object.entries(res)

      for (const entry of entries) {
        const [key, valuePromises] = entry
        const values = await valuePromises
        table[`mint_${index + 1}`] = {
          ...(table[`mint_${index + 1}`] ?? {}),
          [key]: values[index],
        }
      }
    }

    console.log(table)

    return table
  }

  describe('Gas used', () => {
    it('by contract owner', async function () {
      console.log(
        await callOnAllContracts(async (contract) =>
          (await contract.deployTransaction.wait()).gasUsed.toNumber()
        )
      )
      console.table({
        deploy: await callOnAllContracts(async (contract) =>
          (await contract.deployTransaction.wait()).gasUsed.toNumber()
        ),
        enableSale: await callOnAllContracts(async (contract) =>
          (await contract.estimateGas.setIsSaleActive(true)).toNumber()
        ),
        disableSale: await callOnAllContracts(async (contract) =>
          (await contract.estimateGas.setIsSaleActive(false)).toNumber()
        ),
        enableAllowlistSale: await callOnAllContracts(async (contract) =>
          (await contract.estimateGas.setIsAllowlistSaleActive(true)).toNumber()
        ),
        disableAllowlistSale: await callOnAllContracts(async (contract) =>
          (
            await contract.estimateGas.setIsAllowlistSaleActive(false)
          ).toNumber()
        ),
        setAllowList1Addresses: await callOnAllContracts(async (contract) =>
          (
            await contract.estimateGas.setAllowlistAddresses([owner.address], 1)
          ).toNumber()
        ),
        setAllowList10Addresses: await callOnAllContracts(async (contract) =>
          (
            await contract.estimateGas.setAllowlistAddresses(
              Array(10).fill(owner.address),
              1
            )
          ).toNumber()
        ),
        '-------': await callOnAllContracts(() => '-------'),
        ...(await getMintTable()),
      })
    })
  })
})
