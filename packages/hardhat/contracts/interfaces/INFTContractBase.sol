// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol';
import './extensions/INFTContractWithWithdrawal.sol';

/**
 * NFT Contract Base
 * Basic OpenZeppelin ERC721 implementation
 * Included: Royalties
 * NOT-Included: Allowlist
 */
interface INFTContractBase is IERC721, IERC721Enumerable, INFTContractWithWithdrawal {
    // attributes

    function PROVENANCE() external view returns (string memory);

    function contractURI() external view returns (string memory);

    function isSaleActive() external view returns (bool);

    function MAX_SUPPLY() external view returns (uint256);

    function MAX_PUBLIC_MINT() external view returns (uint256);

    function PRICE_PER_TOKEN() external view returns (uint256);

    // NFT Functions

    function setBaseURI(string memory baseURI_) external;

    function setProvenance(string memory provenance) external;

    function setContractURI(string memory contractUri_) external;

    function setDefaultRoyalty(address recipient, uint96 fraction) external;

    // Public mint
    function setIsSaleActive(bool isActive) external;

    function mint(uint8 numberOfTokens) external payable;
}
