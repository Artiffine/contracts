// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import '../INFTContractBase.sol';

/**
 * Extends INFTContractBase with AllowList functionality
 * Owner of the smart contract can add addresses to allowlist and allow them to mint 0-N tokens
 * Owner can enable and disable allow list sale
 */
interface INFTContractWithAllowlist is INFTContractBase {
    // attributes
    function isAllowlistSaleActive() external view returns (bool);

    // allowlist mint
    function setIsAllowlistSaleActive(bool isActive) external;

    function setAllowlistAddresses(address[] calldata addresses, uint8 numAllowedToMint) external;

    function allowlistMintAmount(address addr) external view returns (uint8);

    function mintAllowlisted(uint8 numberOfTokens) external payable;
}
