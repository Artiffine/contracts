// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

/**
 * Extends any contract with withdrawAll() functionality
 * withdrawAll() can be called by owner. Owner's address receives all the funds from contract
 */
interface INFTContractWithWithdrawal {
    function withdrawAll() external;
}
