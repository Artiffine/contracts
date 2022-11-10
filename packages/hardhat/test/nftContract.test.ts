import { ethers } from 'hardhat'
import type { ContractFactory } from 'ethers'
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { formatEther } from '@ethersproject/units'

import { NFTContract } from '../typechain-types/contracts'

enum Artifacts {
  'NFTContract' = 'NFTContract',
  'Azuki' = 'Azuki',
}

const CONTRACT_ARTIFACT_NAME: Artifacts = Artifacts.NFTContract

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
    it('Should set the isSaleActive state to true & false', async () => {
      // check init state
      expect(await contract.isSaleActive()).to.equal(false)
      // activate
      await contract.setIsSaleActive(true)
      expect(await contract.isSaleActive()).to.equal(true)
      // disable
      await contract.setIsSaleActive(false)
      expect(await contract.isSaleActive()).to.equal(false)
    })
  })

  describe('Allowlist Sale Activation', () => {
    it('Should set the isAllowlistSaleActive state to true & false', async () => {
      // check init state
      expect(await contract.isAllowlistSaleActive()).to.equal(false)
      // activate
      await contract.setIsAllowlistSaleActive(true)
      expect(await contract.isAllowlistSaleActive()).to.equal(true)
      // disable
      await contract.setIsAllowlistSaleActive(false)
      expect(await contract.isAllowlistSaleActive()).to.equal(false)
    })
  })

  describe('MAX_SUPPLY setters', () => {
    it('Should set the MAX_SUPPLY value', async () => {
      const NEW_MAX_SUPPLY = 1000
      // check init state
      expect(await contract.MAX_SUPPLY()).to.not.equal(NEW_MAX_SUPPLY)
      // set new value
      await contract.setMaxSupply(NEW_MAX_SUPPLY)
      expect(await contract.MAX_SUPPLY()).to.equal(NEW_MAX_SUPPLY)
    })
  })

  describe('MAX_PUBLIC_MINT setters', () => {
    it('Should set the MAX_PUBLIC_MINT value', async () => {
      const NEW_MAX_PUBLIC_MINT = 20
      // check init state
      expect(await contract.MAX_PUBLIC_MINT()).to.not.equal(NEW_MAX_PUBLIC_MINT)
      // set new value
      await contract.setMaxPublicMint(NEW_MAX_PUBLIC_MINT)
      expect(await contract.MAX_PUBLIC_MINT()).to.equal(NEW_MAX_PUBLIC_MINT)
    })
  })

  describe('PRICE_PER_TOKEN setters', () => {
    it('Should set the PRICE_PER_TOKEN value', async () => {
      const NEW_PRICE_PER_TOKEN = 1
      // check init state
      expect(await contract.PRICE_PER_TOKEN()).to.not.equal(NEW_PRICE_PER_TOKEN)
      // set new value
      await contract.setPricePerToken(NEW_PRICE_PER_TOKEN)
      expect(await contract.PRICE_PER_TOKEN()).to.equal(NEW_PRICE_PER_TOKEN)
    })
  })

  describe('PRICE_PER_TOKEN_ALLOWLIST setters', () => {
    it('Should set the PRICE_PER_TOKEN_ALLOWLIST value', async () => {
      const NEW_PRICE_PER_TOKEN_ALLOWLIST = 1
      // check init state
      expect(await contract.PRICE_PER_TOKEN_ALLOWLIST()).to.not.equal(
        NEW_PRICE_PER_TOKEN_ALLOWLIST
      )
      // set new value
      await contract.setPricePerTokenAllowlist(NEW_PRICE_PER_TOKEN_ALLOWLIST)
      expect(await contract.PRICE_PER_TOKEN_ALLOWLIST()).to.equal(
        NEW_PRICE_PER_TOKEN_ALLOWLIST
      )
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

  describe('Free Mint to another address', () => {
    it('Mint should work only if isSaleActive is true', async () => {
      // init check
      expect(await contract.totalSupply()).to.equal(0)
      expect(await contract.balanceOf(owner.address)).to.equal(0)
      expect(await contract.balanceOf(addr1.address)).to.equal(0)
      expect(await contract.balanceOf(addr2.address)).to.equal(0)

      // start the mint
      await expect(contract.connect(owner).freeMint(1, addr1.address)).not.to.be
        .reverted
      expect(await contract.balanceOf(owner.address)).to.equal(0)
      expect(await contract.balanceOf(addr1.address)).to.equal(1)
      expect(await contract.balanceOf(addr2.address)).to.equal(0)
    })
  })

  describe('Allowlist Mint', () => {
    it('Allowlist Mint should work only if isAllowlistSaleActive is true', async () => {
      // init check
      expect(await contract.totalSupply()).to.equal(0)
      expect(await contract.isAllowlistSaleActive()).to.equal(false)
      expect(await contract.balanceOf(addr1.address)).to.equal(0)

      // try to mint, but should fail, because the mint has never started
      const PRICE_PER_TOKEN_ALLOWLIST =
        await contract.PRICE_PER_TOKEN_ALLOWLIST()
      await expect(
        contract
          .connect(addr1)
          .mintAllowlisted(1, { value: PRICE_PER_TOKEN_ALLOWLIST })
      ).to.be.revertedWith('Allowlist sale is not active')
      expect(await contract.balanceOf(addr1.address)).to.equal(0)

      // start the mint
      await contract.setIsAllowlistSaleActive(true)
      expect(await contract.isAllowlistSaleActive()).to.equal(true)

      // should fail on allowlist amount
      await expect(
        contract
          .connect(addr1)
          .mintAllowlisted(1, { value: PRICE_PER_TOKEN_ALLOWLIST })
      ).to.be.revertedWith('Exceeded max available to purchase')

      // add to the allowlist
      await contract.setAllowlistAddresses([addr1.address], 1)

      // mint 1 token
      await expect(
        contract
          .connect(addr1)
          .mintAllowlisted(1, { value: PRICE_PER_TOKEN_ALLOWLIST })
      ).not.to.be.reverted
      expect(await contract.balanceOf(addr1.address)).to.equal(1)
    })
  })

  describe('Mint', () => {
    it('Mint should work only if isSaleActive is true', async () => {
      // init check
      expect(await contract.totalSupply()).to.equal(0)
      expect(await contract.isSaleActive()).to.equal(false)
      expect(await contract.balanceOf(addr1.address)).to.equal(0)

      // try to mint, but should fail, because the mint has never started
      const PRICE_PER_TOKEN = await contract.PRICE_PER_TOKEN()
      await expect(
        contract
          .connect(addr1)
          .mint(1, addr1.address, { value: PRICE_PER_TOKEN })
      ).to.be.revertedWith('Sale must be active to mint token')
      expect(await contract.balanceOf(addr1.address)).to.equal(0)

      // start the mint
      await contract.setIsSaleActive(true)
      expect(await contract.isSaleActive()).to.equal(true)

      // mint 1 token
      await expect(
        contract
          .connect(addr1)
          .mint(1, addr1.address, { value: PRICE_PER_TOKEN })
      ).not.to.be.reverted
      expect(await contract.balanceOf(addr1.address)).to.equal(1)
    })
  })

  describe('Mint to another address', () => {
    it('Mint should work only if isSaleActive is true', async () => {
      // init check
      expect(await contract.totalSupply()).to.equal(0)
      expect(await contract.isSaleActive()).to.equal(false)
      expect(await contract.balanceOf(addr1.address)).to.equal(0)
      expect(await contract.balanceOf(addr2.address)).to.equal(0)

      // try to mint, but should fail, because the mint has never started
      const PRICE_PER_TOKEN = await contract.PRICE_PER_TOKEN()
      await expect(
        contract
          .connect(addr1)
          .mint(1, addr2.address, { value: PRICE_PER_TOKEN })
      ).to.be.revertedWith('Sale must be active to mint token')
      expect(await contract.balanceOf(addr1.address)).to.equal(0)
      expect(await contract.balanceOf(addr2.address)).to.equal(0)

      // start the mint
      await contract.setIsSaleActive(true)
      expect(await contract.isSaleActive()).to.equal(true)

      // mint 1 token
      await expect(
        contract
          .connect(addr1)
          .mint(1, addr2.address, { value: PRICE_PER_TOKEN })
      ).not.to.be.reverted
      expect(await contract.balanceOf(addr1.address)).to.equal(0)
      expect(await contract.balanceOf(addr2.address)).to.equal(1)
    })
  })

  describe('Mint All', async () => {
    it('End to end test', async () => {
      await contract.setIsSaleActive(true)
      const maxSupply = (await contract.MAX_SUPPLY()).toNumber()
      // const maxSupply = Math.min((await contract.MAX_SUPPLY()).toNumber(), 10)
      const PRICE_PER_TOKEN = await contract.PRICE_PER_TOKEN()

      // continue only if you really want to mint all
      return

      const promises = Array.from(Array(maxSupply).keys()).map(
        async (_, index) => {
          const res = await contract
            .connect(addr1)
            .mint(1, addr1.address, { value: PRICE_PER_TOKEN })
          // const receipt = await res.wait()
          // console.log(`${index + 1} gasUsed`, receipt.gasUsed.toNumber())
          return res
        }
      )

      await Promise.all(promises)

      expect(await contract.balanceOf(addr1.address)).to.equal(maxSupply)

      // check contract balance, should be MAX_SUPPLY * PRICE_PER_TOKEN
      expect(await contract.provider.getBalance(contract.address)).to.equal(
        PRICE_PER_TOKEN.mul(maxSupply)
      )

      // assert
      await contract.withdrawAll()
      expect(await contract.provider.getBalance(contract.address)).to.equal(0)

      console.log('==== wallet balances after last mint ====')
      console.log({
        contract: formatEther(
          await contract.provider.getBalance(contract.address)
        ),
        owner: formatEther(await contract.provider.getBalance(owner.address)),
      })

      // should fail
      await expect(
        contract
          .connect(addr1)
          .mint(1, addr1.address, { value: PRICE_PER_TOKEN })
      ).to.be.revertedWith('Purchase would exceed max tokens')
    })
  })
})
