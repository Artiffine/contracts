// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import '@openzeppelin/contracts/access/Ownable.sol';
import './INFTContractWithWithdrawal.sol';

/**
 * Extends any contract with withdrawAll() functionality
 * withdrawAll() can be called by owner. Owner's address receives all the funds from contract
 */
abstract contract NFTContractWithWithdrawal is Ownable, INFTContractWithWithdrawal {
    // withdraw functions
    function withdrawAll() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, 'Contract balance must be > 0');
        _widthdraw(owner(), address(this).balance);
    }

    function _widthdraw(address address_, uint256 amount_) private {
        require(address(this).balance >= amount_, 'Contract balance must be >= _amount');
        (bool success, ) = address_.call{value: amount_}('');
        require(success, 'Transfer failed.');
    }
}
