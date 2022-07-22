import { ethers } from 'hardhat'
import type { ContractFactory } from 'ethers'
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { parseEther } from '@ethersproject/units'

import type { NFTContract } from '../../hardhat-types/src/contracts/NFTContract'

const CONTRACT_ARTIFACT_NAME = 'Azuki'

const PRICE_PER_TOKEN = '0.0001'
const MAX_SUPPLY = 1_000
const MAX_PUBLIC_MINT = 10

describe('NFTContract production config', () => {
  let Token: ContractFactory
  let contract: NFTContract
  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress
  let addr3: SignerWithAddress
  let addr4: SignerWithAddress
  let addrs: SignerWithAddress[]

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory(CONTRACT_ARTIFACT_NAME)
    ;[owner, addr1, addr2, addr3, addr4, ...addrs] = await ethers.getSigners()

    contract = (await Token.deploy()) as unknown as NFTContract
    await contract.deployed()
  })

  describe('The config should not have any testing values', () => {
    it('Should set the right owner', async function () {
      expect(await contract.owner()).to.equal(owner.address)
    })

    it('Should have correct PRICE_PER_TOKEN', async () => {
      expect(await contract.PRICE_PER_TOKEN()).to.equal(
        parseEther(PRICE_PER_TOKEN)
      )
    })

    it('Should have correct MAX_SUPPLY', async () => {
      expect(await contract.MAX_SUPPLY()).to.equal(MAX_SUPPLY)
    })

    it('Should have correct MAX_PUBLIC_MINT', async () => {
      expect(await contract.MAX_PUBLIC_MINT()).to.equal(MAX_PUBLIC_MINT)
    })

    it('Should have correct isSaleActive', async () => {
      expect(await contract.isSaleActive()).to.equal(false)
    })

    it('Should have correct isAllowlistSaleActive', async () => {
      expect(await contract.isAllowlistSaleActive()).to.equal(false)
    })

    it('Should have correct PROVENANCE', async () => {
      expect(await contract.PROVENANCE()).to.equal('')
    })

    it('Should have correct contractURI', async () => {
      expect(await contract.contractURI()).to.equal('')
    })
  })
})
