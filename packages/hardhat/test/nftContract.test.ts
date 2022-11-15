import { ethers } from 'hardhat'
import type { ContractFactory } from 'ethers'
import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { expect } from 'chai'
import { formatEther } from '@ethersproject/units'

import { NFTContract } from '../typechain-types/contracts'
import { getAddress } from 'ethers/lib/utils'
import { constants } from "ethers";

enum Artifacts {
  'NFTContract' = 'NFTContract',
  'Azuki' = 'Azuki',
}

const CONTRACT_ARTIFACT_NAME: Artifacts = Artifacts.NFTContract
const ADMIN_REVERT_STRING: string = "Caller is not the admin/owner"
const OWNABLE_REVERT_STRING: string = "Ownable: caller is not the owner"

describe('NFTContract', () => {
  let Token: ContractFactory
  let contract: NFTContract
  let admin: SignerWithAddress
  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress
  let addr3: SignerWithAddress
  let addr4: SignerWithAddress
  let addrs: SignerWithAddress[]

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory(CONTRACT_ARTIFACT_NAME);
    [admin, owner, addr1, addr2, addr3, addr4, ...addrs] = await ethers.getSigners()

    contract = (await Token.deploy(owner.address)) as NFTContract
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
      await expect(contract.connect(owner).withdrawAll()).to.be.revertedWith(
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

  describe('recoverToken', () => {
    it('should not recover address zero', async () => {
      let action = contract.connect(owner).recoverToken(constants.AddressZero);
      await expect(action).to.be.revertedWith("Token is address zero");
    })

    it('should be callable only by owner', async () => {
      let adminCall = contract.connect(admin).recoverToken(constants.AddressZero);
      await expect(adminCall).to.be.revertedWith(OWNABLE_REVERT_STRING);

      let userCall = contract.connect(addr1).recoverToken(constants.AddressZero);
      await expect(userCall).to.be.revertedWith(OWNABLE_REVERT_STRING);
    })
  })

  describe('addAdmin', () => {
    it('should not add address zero', async () => {
      let action = contract.connect(owner).addAdmin(constants.AddressZero)
      await expect(action).to.be.revertedWith("Admin cannot be address zero")
    })

    it('should not add existing admin again', async () => {
      let action = contract.connect(owner).addAdmin(admin.address)
      await expect(action).to.be.revertedWith("Admin already exists")
    })

    it('should be callable only by owner', async () => {
      let addAdmin = contract.connect(admin).addAdmin(addr3.address)
      await expect(addAdmin).to.be.revertedWith("Ownable: caller is not the owner")

      let addUser = contract.connect(addr3).addAdmin(addr3.address)
      await expect(addUser).to.be.revertedWith("Ownable: caller is not the owner")
    })

    it('should emit event', async () => {
      let action = contract.connect(owner).addAdmin(addr3.address)
      await expect(action).to.emit(contract, "AdminAdded").withArgs(addr3.address)
    })
  })

  describe('removeAdmin', () => {
    it('should not add address zero', async () => {
      let action = contract.connect(owner).removeAdmin(constants.AddressZero)
      await expect(action).to.be.revertedWith("Admin cannot be address zero")
    })

    it('should not add existing admin again', async () => {
      let action = contract.connect(owner).removeAdmin(addr3.address)
      await expect(action).to.be.revertedWith("Admin does not exist")
    })

    it('should be callable only by owner', async () => {
      let addAdmin = contract.connect(admin).removeAdmin(admin.address)
      await expect(addAdmin).to.be.revertedWith("Ownable: caller is not the owner")

      let addUser = contract.connect(addr3).removeAdmin(admin.address)
      await expect(addUser).to.be.revertedWith("Ownable: caller is not the owner")
    })

    it('should emit event', async () => {
      let action = contract.connect(owner).removeAdmin(admin.address)
      await expect(action).to.emit(contract, "AdminAdded").withArgs(admin.address)
    })
  })

  describe('access control', () => {
    it('admin should be able to call these functions', async () => {
      let setIsAllowlistSaleActive = contract.setIsAllowlistSaleActive(true)
      let setAllowlistAddresses = contract.setAllowlistAddresses([addr1.address], 1)
      let setMaxSupply = contract.setMaxSupply(1000)
      let setMaxPublicMint = contract.setMaxPublicMint(1000)
      let setPricePerToken = contract.setPricePerToken(1000)
      let setPricePerTokenAllowlist = contract.setPricePerTokenAllowlist(1)
      let setBaseURI = contract.setBaseURI("uri")
      let setProvenance = contract.setProvenance("provenanve")
      let setContractURI = contract.setContractURI("uri")
      let setIsSaleActive = contract.setIsSaleActive(true)
      let freeMint = contract.freeMint(10, addr1.address)

      await expect(setIsAllowlistSaleActive).to.not.be.reverted
      await expect(setAllowlistAddresses).to.not.be.reverted
      await expect(setMaxSupply).to.not.be.reverted
      await expect(setMaxPublicMint).to.not.be.reverted
      await expect(setPricePerToken).to.not.be.reverted
      await expect(setPricePerTokenAllowlist).to.not.be.reverted
      await expect(setBaseURI).to.not.be.reverted
      await expect(setProvenance).to.not.be.reverted
      await expect(setContractURI).to.not.be.reverted
      await expect(setIsSaleActive).to.not.be.reverted
      await expect(freeMint).to.not.be.reverted
    })

    it('second admin should be able to call these functions', async () => {
      await contract.connect(owner).addAdmin(addr4.address)

      let setIsAllowlistSaleActive = contract.connect(addr4).setIsAllowlistSaleActive(true)
      let setAllowlistAddresses = contract.connect(addr4).setAllowlistAddresses([addr1.address], 1)
      let setMaxSupply = contract.connect(addr4).setMaxSupply(1000)
      let setMaxPublicMint = contract.connect(addr4).setMaxPublicMint(1000)
      let setPricePerToken = contract.connect(addr4).setPricePerToken(1000)
      let setPricePerTokenAllowlist = contract.connect(addr4).setPricePerTokenAllowlist(1)
      let setBaseURI = contract.connect(addr4).setBaseURI("uri")
      let setProvenance = contract.connect(addr4).setProvenance("provenanve")
      let setContractURI = contract.connect(addr4).setContractURI("uri")
      let setIsSaleActive = contract.connect(addr4).setIsSaleActive(true)
      let freeMint = contract.connect(addr4).freeMint(10, addr1.address)

      await expect(setIsAllowlistSaleActive).to.not.be.reverted
      await expect(setAllowlistAddresses).to.not.be.reverted
      await expect(setMaxSupply).to.not.be.reverted
      await expect(setMaxPublicMint).to.not.be.reverted
      await expect(setPricePerToken).to.not.be.reverted
      await expect(setPricePerTokenAllowlist).to.not.be.reverted
      await expect(setBaseURI).to.not.be.reverted
      await expect(setProvenance).to.not.be.reverted
      await expect(setContractURI).to.not.be.reverted
      await expect(setIsSaleActive).to.not.be.reverted
      await expect(freeMint).to.not.be.reverted
    })

    it('owner should be able to call these functions', async () => {
      let setIsAllowlistSaleActive = contract.connect(owner).setIsAllowlistSaleActive(true)
      let setAllowlistAddresses = contract.connect(owner).setAllowlistAddresses([addr1.address], 1)
      let setMaxSupply = contract.connect(owner).setMaxSupply(1000)
      let setMaxPublicMint = contract.connect(owner).setMaxPublicMint(1000)
      let setPricePerToken = contract.connect(owner).setPricePerToken(1000)
      let setPricePerTokenAllowlist = contract.connect(owner).setPricePerTokenAllowlist(1)
      let setBaseURI = contract.connect(owner).setBaseURI("uri")
      let setProvenance = contract.connect(owner).setProvenance("provenanve")
      let setContractURI = contract.connect(owner).setContractURI("uri")
      let setIsSaleActive = contract.connect(owner).setIsSaleActive(true)
      let freeMint = contract.connect(owner).freeMint(10, addr1.address)
      let addAdmin = contract.connect(owner).addAdmin(addr4.address)
      let removeAdmin = contract.connect(owner).removeAdmin(addr4.address)
      let withdrawAll = contract.connect(owner).withdrawAll()

      await expect(setIsAllowlistSaleActive).to.not.be.reverted
      await expect(setAllowlistAddresses).to.not.be.reverted
      await expect(setMaxSupply).to.not.be.reverted
      await expect(setMaxPublicMint).to.not.be.reverted
      await expect(setPricePerToken).to.not.be.reverted
      await expect(setPricePerTokenAllowlist).to.not.be.reverted
      await expect(setBaseURI).to.not.be.reverted
      await expect(setProvenance).to.not.be.reverted
      await expect(setContractURI).to.not.be.reverted
      await expect(setIsSaleActive).to.not.be.reverted
      await expect(freeMint).to.not.be.reverted
      await expect(addAdmin).to.not.be.reverted
      await expect(removeAdmin).to.not.be.reverted
      await expect(withdrawAll).to.not.be.revertedWith(OWNABLE_REVERT_STRING).and.to.not.be.revertedWith(ADMIN_REVERT_STRING);
    })

    it('users should not be able to call these functions', async () => {
      let setIsAllowlistSaleActive = contract.connect(addr1).setIsAllowlistSaleActive(true)
      let setAllowlistAddresses = contract.connect(addr1).setAllowlistAddresses([addr1.address], 1)
      let setMaxSupply = contract.connect(addr1).setMaxSupply(1000)
      let setMaxPublicMint = contract.connect(addr1).setMaxPublicMint(1000)
      let setPricePerToken = contract.connect(addr1).setPricePerToken(1000)
      let setPricePerTokenAllowlist = contract.connect(addr1).setPricePerTokenAllowlist(1)
      let setBaseURI = contract.connect(addr1).setBaseURI("uri")
      let setProvenance = contract.connect(addr1).setProvenance("provenanve")
      let setContractURI = contract.connect(addr1).setContractURI("uri")
      let setIsSaleActive = contract.connect(addr1).setIsSaleActive(true)
      let freeMint = contract.connect(addr1).freeMint(10, addr1.address)
      let addAdmin = contract.connect(addr1).addAdmin(addr4.address)
      let removeAdmin = contract.connect(addr1).removeAdmin(addr4.address)
      let recoverToken = contract.connect(addr1).recoverToken(addr4.address)
      let withdrawAll = contract.connect(addr1).withdrawAll()

      await expect(setIsAllowlistSaleActive).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setAllowlistAddresses).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setMaxSupply).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setMaxPublicMint).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setPricePerToken).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setPricePerTokenAllowlist).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setBaseURI).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setProvenance).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setContractURI).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(setIsSaleActive).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(freeMint).to.be.revertedWith(ADMIN_REVERT_STRING)
      await expect(addAdmin).to.be.revertedWith(OWNABLE_REVERT_STRING)
      await expect(removeAdmin).to.be.revertedWith(OWNABLE_REVERT_STRING)
      await expect(recoverToken).to.be.revertedWith(OWNABLE_REVERT_STRING)
      await expect(withdrawAll).to.be.revertedWith(OWNABLE_REVERT_STRING)
    })
  })

  it('admins should not be able to call these functions', async () => {
    let addAdmin = contract.connect(admin).addAdmin(addr4.address)
    let removeAdmin = contract.connect(admin).removeAdmin(addr4.address)
    let recoverToken = contract.connect(admin).recoverToken(addr4.address)
    let withdrawAll = contract.connect(admin).withdrawAll()

    await expect(addAdmin).to.be.revertedWith(OWNABLE_REVERT_STRING)
    await expect(removeAdmin).to.be.revertedWith(OWNABLE_REVERT_STRING)
    await expect(recoverToken).to.be.revertedWith(OWNABLE_REVERT_STRING)
    await expect(withdrawAll).to.be.revertedWith(OWNABLE_REVERT_STRING)
  })
})
