// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import './interfaces/NFTContractBase.sol';
import './interfaces/extensions/NFTContractWithAllowlist.sol';

/**
 * Example ERC721 contract with Allowlist and Crossmint integration for FIAT payments
 */
contract NFTContractCrossmint is NFTContractBase, NFTContractWithAllowlist {
    constructor() NFTContractBase('ArtiffineDemo3', 'ARTIF3', 10_000, 10, 0.0001 ether) {}

    function crossmint(address to, uint8 numberOfTokens) public payable {
        uint256 ts = totalSupply();
        require(isSaleActive, 'Sale must be active to mint tokens');
        require(numberOfTokens <= MAX_PUBLIC_MINT, 'Exceeded max token purchase');
        require(ts + numberOfTokens <= MAX_SUPPLY, 'Purchase would exceed max tokens');
        require(PRICE_PER_TOKEN * numberOfTokens <= msg.value, 'Ether value sent is not correct');

        for (uint8 i = 0; i < numberOfTokens; i++) {
            _safeMint(to, ts + i);
        }
    }
}
