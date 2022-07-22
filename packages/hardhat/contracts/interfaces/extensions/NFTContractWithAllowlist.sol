// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import '../NFTContractBase.sol';
import './INFTContractWithAllowlist.sol';

/**
 * Extends INFTContractBase with AllowList functionality
 * Owner of the smart contract can add addresses to allowlist and allow them to mint 0-N tokens
 * Owner can enable and disable allow list sale
 */
abstract contract NFTContractWithAllowlist is NFTContractBase, INFTContractWithAllowlist {
    bool public isAllowlistSaleActive = false;
    mapping(address => uint8) internal _allowlist;

    function setIsAllowlistSaleActive(bool isActive) external onlyOwner {
        isAllowlistSaleActive = isActive;
    }

    function setAllowlistAddresses(address[] calldata addresses, uint8 numAllowedToMint) external onlyOwner {
        for (uint8 i = 0; i < addresses.length; i++) {
            _allowlist[addresses[i]] = numAllowedToMint;
        }
    }

    function allowlistMintAmount(address addr) external view returns (uint8) {
        return _allowlist[addr];
    }

    function mintAllowlisted(uint8 numberOfTokens) external payable {
        uint256 ts = totalSupply();
        require(isAllowlistSaleActive, 'Allowlist sale is not active');
        require(numberOfTokens <= _allowlist[msg.sender], 'Exceeded max available to purchase');
        require(ts + numberOfTokens <= MAX_SUPPLY, 'Purchase would exceed max tokens');
        require(PRICE_PER_TOKEN * numberOfTokens <= msg.value, 'Ether value sent is not correct');

        _allowlist[msg.sender] -= numberOfTokens;
        for (uint8 i = 0; i < numberOfTokens; i++) {
            _safeMint(msg.sender, ts + i);
        }
    }
}
