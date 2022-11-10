// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './extensions/NFTContractWithWithdrawal.sol';
import './INFTContractBase.sol';

/**
 * NFT Contract Base
 * Basic OpenZeppelin ERC721 implementation
 * Included: Royalties
 * NOT-Included: Allowlist
 */
contract NFTContractBase is ERC721, ERC721Enumerable, ERC721Royalty, Ownable, NFTContractWithWithdrawal, INFTContractBase {
    using SafeMath for uint256;

    string private _baseURIextended;
    string public PROVENANCE;
    string public contractURI;

    bool public isSaleActive = false;

    uint256 public MAX_SUPPLY;
    uint256 public MAX_PUBLIC_MINT;
    uint256 public PRICE_PER_TOKEN;

    constructor(
        string memory name,
        string memory symbol,
        uint256 maxSupply,
        uint256 maxPublicMint,
        uint256 pricePerToken
    ) ERC721(name, symbol) {
        MAX_SUPPLY = maxSupply;
        MAX_PUBLIC_MINT = maxPublicMint;
        PRICE_PER_TOKEN = pricePerToken;
    }

    // override base functions
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(ERC721, ERC721Enumerable, ERC721Royalty, IERC165) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        _baseURIextended = baseURI_;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }

    function setProvenance(string memory provenance) public onlyOwner {
        PROVENANCE = provenance;
    }

    function setContractURI(string memory contractUri_) external onlyOwner {
        contractURI = contractUri_;
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721Royalty) {
        super._burn(tokenId);
        _resetTokenRoyalty(tokenId);
    }

    function setDefaultRoyalty(address recipient, uint96 fraction) public {
        _setDefaultRoyalty(recipient, fraction);
    }

    // public mint
    function setIsSaleActive(bool isActive) public onlyOwner {
        isSaleActive = isActive;
    }

    function mint(uint8 numberOfTokens) public payable {
        uint256 ts = totalSupply();
        require(isSaleActive, 'Sale must be active to mint tokens');
        require(numberOfTokens <= MAX_PUBLIC_MINT, 'Exceeded max token purchase');
        require(ts + numberOfTokens <= MAX_SUPPLY, 'Purchase would exceed max tokens');
        require(PRICE_PER_TOKEN * numberOfTokens <= msg.value, 'Ether value sent is not correct');

        for (uint8 i = 0; i < numberOfTokens; i++) {
            _safeMint(msg.sender, ts + i);
        }
    }
}
