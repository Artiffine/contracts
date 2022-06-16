// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract NFTContractSimple is ERC721, ERC721Enumerable, Ownable {
    using SafeMath for uint256;

    string private _baseURIextended;
    string public PROVENANCE;
    string public contractURI;

    bool public isSaleActive = false;
    bool public isWhitelistSaleActive = false;

    uint256 public constant MAX_SUPPLY = 1000;
    uint256 public constant MAX_PUBLIC_MINT = 10;
    uint256 public constant PRICE_PER_TOKEN = 0.0001 ether;

    mapping(address => uint8) private _whitelist;

    constructor() ERC721('ArtiffineDemo', 'ARTIF') {}

    // whitelist mint
    function setIsWhitelistSaleActive(bool isActive) external onlyOwner {
        isWhitelistSaleActive = isActive;
    }

    function setWhitelistAddresses(address[] calldata addresses, uint8 numAllowedToMint) external onlyOwner {
        for (uint8 i = 0; i < addresses.length; i++) {
            _whitelist[addresses[i]] = numAllowedToMint;
        }
    }

    function whitelistMintAmount(address addr) external view returns (uint8) {
        return _whitelist[addr];
    }

    function mintWhitelisted(uint8 numberOfTokens) external payable {
        uint256 ts = totalSupply();
        require(isWhitelistSaleActive, 'Whitelist sale is not active');
        require(numberOfTokens <= _whitelist[msg.sender], 'Exceeded max available to purchase');
        require(ts + numberOfTokens <= MAX_SUPPLY, 'Purchase would exceed max tokens');
        require(PRICE_PER_TOKEN * numberOfTokens <= msg.value, 'Ether value sent is not correct');

        _whitelist[msg.sender] -= numberOfTokens;
        for (uint8 i = 0; i < numberOfTokens; i++) {
            _safeMint(msg.sender, ts + i);
        }
    }

    // override base functions
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
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

    // withdraw functions
    function withdrawAll() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, 'Contract balance must be > 0');
        _widthdraw(owner(), address(this).balance);
    }

    function _widthdraw(address _address, uint256 _amount) private {
        require(address(this).balance >= _amount, 'Contract balance must be >= _amount');
        (bool success, ) = _address.call{value: _amount}('');
        require(success, 'Transfer failed.');
    }
}
