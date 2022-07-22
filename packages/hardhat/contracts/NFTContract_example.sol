// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import './interfaces/NFTContractBase.sol';
import './interfaces/extensions/NFTContractWithAllowlist.sol';

/**
 * Example ERC721 contract with Allowlist
 */
contract NFTContractExample is NFTContractBase, NFTContractWithAllowlist {
    constructor() NFTContractBase('ArtiffineDemo3', 'ARTIF3', 10_000, 10, 0.0001 ether) {}
}
