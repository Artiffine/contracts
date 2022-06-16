import { ethers } from 'hardhat'
import type { ContractFactory } from 'ethers'
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { parseEther, formatEther } from '@ethersproject/units'

import type { NFTContract } from '../../hardhat-types/src/contracts/NFTContract'

const CONTRACT_ARTIFACT_NAME = 'Azuki'
const PRICE_PER_TOKEN = '0.0001'

describe('NFTContract', () => {
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

    contract = (await Token.deploy()) as NFTContract
    await contract.deployed()
  })

  describe('Deployment', () => {
    it('Should set the right owner', async function () {
      expect(await contract.owner()).to.equal(owner.address)
    })

    it('Should assign the total supply of tokens to the owner', async () => {
      const ownerBalance = await contract.balanceOf(owner.address)
      expect(await contract.totalSupply()).to.equal(ownerBalance)
    })
  })

  describe('Sale Activation', () => {
    it("Should return the isSaleActive state once it's changed", async () => {
      expect(await contract.isSaleActive()).to.equal(false)

      await contract.setIsSaleActive(true)
      expect(await contract.isSaleActive()).to.equal(true)
    })
  })

  describe('WithdrawAll', () => {
    it('Should not work balance is 0', async () => {
      // init check
      expect(await contract.balanceOf(addr1.address)).to.equal(0)

      // try to withdraw
      await expect(contract.withdrawAll()).to.be.revertedWith(
        'Contract balance must be > 0'
      )
    })
  })

  describe('Mint', () => {
    it('Mint should work only if isSaleActive is true', async () => {
      // init check
      expect(await contract.totalSupply()).to.equal(0)
      expect(await contract.isSaleActive()).to.equal(false)
      expect(await contract.balanceOf(addr1.address)).to.equal(0)

      // try to mint, but should fail, because the mint has never started
      await expect(
        contract.connect(addr1).mint(1, { value: parseEther('1') })
      ).to.be.revertedWith('Sale must be active to mint token')
      expect(await contract.balanceOf(addr1.address)).to.equal(0)

      // start the mint
      await contract.setIsSaleActive(true)
      expect(await contract.isSaleActive()).to.equal(true)

      // mint 1 token
      await expect(contract.connect(addr1).mint(1, { value: parseEther('1') }))
        .not.to.be.reverted
      expect(await contract.balanceOf(addr1.address)).to.equal(1)
    })
  })

  describe('Mint All', async () => {
    it('End to end test', async () => {
      await contract.setIsSaleActive(true)
      const maxSupply = (await contract.MAX_SUPPLY()).toNumber()

      const promises = Array.from(Array(maxSupply).keys()).map(
        async (_, index) => {
          const res = await contract
            .connect(addr1)
            .mint(1, { value: parseEther(PRICE_PER_TOKEN) })
          // const receipt = await res.wait()
          // console.log(`${index + 1} gasUsed`, receipt.gasUsed.toNumber())
          return res
        }
      )

      await Promise.all(promises)

      expect(await contract.balanceOf(addr1.address)).to.equal(maxSupply)

      // check contract balance, should be MAX_SUPPLY * PRICE_PER_TOKEN
      expect(await contract.provider.getBalance(contract.address)).to.equal(
        parseEther(PRICE_PER_TOKEN).mul(maxSupply)
      )

      // assert
      await contract.withdrawAll()
      expect(await contract.provider.getBalance(contract.address)).to.equal(0)

      console.log('==== wallet balances after last mint')
      console.log({
        contract: formatEther(
          await contract.provider.getBalance(contract.address)
        ),
        owner: formatEther(await contract.provider.getBalance(owner.address)),
      })
    })
  })
})
