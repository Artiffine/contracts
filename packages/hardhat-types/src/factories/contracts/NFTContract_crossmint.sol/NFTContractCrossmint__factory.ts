/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NFTContractCrossmint,
  NFTContractCrossmintInterface,
} from "../../../contracts/NFTContract_crossmint.sol/NFTContractCrossmint";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_PUBLIC_MINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRICE_PER_TOKEN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROVENANCE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "allowlistMintAmount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "numberOfTokens",
        type: "uint8",
      },
    ],
    name: "crossmint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isAllowlistSaleActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isSaleActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "numberOfTokens",
        type: "uint8",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "numberOfTokens",
        type: "uint8",
      },
    ],
    name: "mintAllowlisted",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint8",
        name: "numAllowedToMint",
        type: "uint8",
      },
    ],
    name: "setAllowlistAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "contractUri_",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fraction",
        type: "uint96",
      },
    ],
    name: "setDefaultRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "setIsAllowlistSaleActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "setIsSaleActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "provenance",
        type: "string",
      },
    ],
    name: "setProvenance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526010805460ff199081169091556014805490911690553480156200002757600080fd5b506040518060400160405280600e81526020016d417274696666696e6544656d6f3360901b8152506040518060400160405280600681526020016541525449463360d01b815250612710600a655af3107a4000848481600290805190602001906200009492919062000132565b508051620000aa90600390602084019062000132565b505050620000c7620000c1620000dc60201b60201c565b620000e0565b60119290925560125560135550620002159050565b3390565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200014090620001d8565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b600181811c90821680620001ed57607f821691505b602082108114156200020f57634e487b7160e01b600052602260045260246000fd5b50919050565b612d4980620002256000396000f3fe60806040526004361061029f5760003560e01c806365f130971161016e578063a22cb465116100cb578063e8a3d4851161007f578063ec0c268311610064578063ec0c26831461074a578063f2fde38b1461075d578063ffe630b51461077d57600080fd5b8063e8a3d485146106ec578063e985e9c51461070157600080fd5b8063b88d4fde116100b0578063b88d4fde1461068c578063c87b56dd146106ac578063d2d65ff5146106cc57600080fd5b8063a22cb4651461064c578063b3485d8d1461066c57600080fd5b8063833b9499116101225780638da5cb5b116101075780638da5cb5b146105f9578063938e3d7b1461061757806395d89b411461063757600080fd5b8063833b9499146105ce578063853828b6146105e457600080fd5b806370a082311161015357806370a0823114610579578063715018a6146105995780637b6cba5c146105ae57600080fd5b806365f13097146105505780636ecd23061461056657600080fd5b80632a55205a1161021c5780634f6ccce7116101d0578063564566a8116101b5578063564566a8146105015780636352211e1461051b5780636373a6b11461053b57600080fd5b80634f6ccce7146104c157806355f804b3146104e157600080fd5b806332cb6b0c1161020157806332cb6b0c1461047857806342842e0e1461048e5780634acde4d1146104ae57600080fd5b80632a55205a146104195780632f745c591461045857600080fd5b8063081812fc1161027357806318160ddd1161025857806318160ddd1461038f57806323b872dd146103ae57806325a466f4146103ce57600080fd5b8063081812fc14610337578063095ea7b31461036f57600080fd5b806210f81e146102a457806301ffc9a7146102d357806304634d8d146102f357806306fdde0314610315575b600080fd5b3480156102b057600080fd5b506014546102be9060ff1681565b60405190151581526020015b60405180910390f35b3480156102df57600080fd5b506102be6102ee3660046126c9565b61079d565b3480156102ff57600080fd5b5061031361030e366004612702565b6107ae565b005b34801561032157600080fd5b5061032a6107bc565b6040516102ca91906127a2565b34801561034357600080fd5b506103576103523660046127b5565b61084e565b6040516001600160a01b0390911681526020016102ca565b34801561037b57600080fd5b5061031361038a3660046127ce565b610875565b34801561039b57600080fd5b50600a545b6040519081526020016102ca565b3480156103ba57600080fd5b506103136103c93660046127f8565b6109ac565b3480156103da57600080fd5b506104076103e9366004612834565b6001600160a01b031660009081526015602052604090205460ff1690565b60405160ff90911681526020016102ca565b34801561042557600080fd5b5061043961043436600461284f565b610a33565b604080516001600160a01b0390931683526020830191909152016102ca565b34801561046457600080fd5b506103a06104733660046127ce565b610aee565b34801561048457600080fd5b506103a060115481565b34801561049a57600080fd5b506103136104a93660046127f8565b610b96565b6103136104bc366004612882565b610bb1565b3480156104cd57600080fd5b506103a06104dc3660046127b5565b610dce565b3480156104ed57600080fd5b506103136104fc366004612929565b610e72565b34801561050d57600080fd5b506010546102be9060ff1681565b34801561052757600080fd5b506103576105363660046127b5565b610e8d565b34801561054757600080fd5b5061032a610ef2565b34801561055c57600080fd5b506103a060125481565b610313610574366004612882565b610f80565b34801561058557600080fd5b506103a0610594366004612834565b611132565b3480156105a557600080fd5b506103136111cc565b3480156105ba57600080fd5b506103136105c9366004612982565b6111e0565b3480156105da57600080fd5b506103a060135481565b3480156105f057600080fd5b506103136111fb565b34801561060557600080fd5b50600c546001600160a01b0316610357565b34801561062357600080fd5b50610313610632366004612929565b61126f565b34801561064357600080fd5b5061032a61128a565b34801561065857600080fd5b5061031361066736600461299d565b611299565b34801561067857600080fd5b506103136106873660046129d0565b6112a4565b34801561069857600080fd5b506103136106a7366004612a54565b61132c565b3480156106b857600080fd5b5061032a6106c73660046127b5565b6113b4565b3480156106d857600080fd5b506103136106e7366004612982565b61141b565b3480156106f857600080fd5b5061032a611436565b34801561070d57600080fd5b506102be61071c366004612ad0565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b610313610758366004612afa565b611443565b34801561076957600080fd5b50610313610778366004612834565b6115f5565b34801561078957600080fd5b50610313610798366004612929565b611682565b60006107a88261169d565b92915050565b6107b882826116a8565b5050565b6060600280546107cb90612b24565b80601f01602080910402602001604051908101604052809291908181526020018280546107f790612b24565b80156108445780601f1061081957610100808354040283529160200191610844565b820191906000526020600020905b81548152906001019060200180831161082757829003601f168201915b5050505050905090565b6000610859826117c2565b506000908152600660205260409020546001600160a01b031690565b600061088082610e8d565b9050806001600160a01b0316836001600160a01b0316141561090f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b038216148061092b575061092b813361071c565b61099d5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610906565b6109a78383611826565b505050565b6109b633826118a1565b610a285760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f7665640000000000000000000000000000000000006064820152608401610906565b6109a7838383611920565b60008281526001602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046bffffffffffffffffffffffff16928201929092528291610ab25750604080518082019091526000546001600160a01b0381168252600160a01b90046bffffffffffffffffffffffff1660208201525b602081015160009061271090610ad6906bffffffffffffffffffffffff1687612b75565b610ae09190612baa565b915196919550909350505050565b6000610af983611132565b8210610b6d5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610906565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6109a78383836040518060200160405280600081525061132c565b6000610bbc600a5490565b60145490915060ff16610c115760405162461bcd60e51b815260206004820152601c60248201527f416c6c6f776c6973742073616c65206973206e6f7420616374697665000000006044820152606401610906565b3360009081526015602052604090205460ff9081169083161115610c9d5760405162461bcd60e51b815260206004820152602260248201527f4578636565646564206d617820617661696c61626c6520746f2070757263686160448201527f73650000000000000000000000000000000000000000000000000000000000006064820152608401610906565b601154610cad60ff841683612bbe565b1115610cfb5760405162461bcd60e51b815260206004820181905260248201527f507572636861736520776f756c6420657863656564206d617820746f6b656e736044820152606401610906565b348260ff16601354610d0d9190612b75565b1115610d5b5760405162461bcd60e51b815260206004820152601f60248201527f45746865722076616c75652073656e74206973206e6f7420636f7272656374006044820152606401610906565b3360009081526015602052604081208054849290610d7d90849060ff16612bd6565b92506101000a81548160ff021916908360ff16021790555060005b8260ff168160ff1610156109a757610dbc33610db760ff841685612bbe565b611b05565b80610dc681612bf9565b915050610d98565b6000610dd9600a5490565b8210610e4d5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610906565b600a8281548110610e6057610e60612c19565b90600052602060002001549050919050565b610e7a611b1f565b80516107b890600d90602084019061261a565b6000818152600460205260408120546001600160a01b0316806107a85760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610906565b600e8054610eff90612b24565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2b90612b24565b8015610f785780601f10610f4d57610100808354040283529160200191610f78565b820191906000526020600020905b815481529060010190602001808311610f5b57829003601f168201915b505050505081565b6000610f8b600a5490565b60105490915060ff16610feb5760405162461bcd60e51b815260206004820152602260248201527f53616c65206d7573742062652061637469766520746f206d696e7420746f6b656044820152616e7360f01b6064820152608401610906565b6012548260ff1611156110405760405162461bcd60e51b815260206004820152601b60248201527f4578636565646564206d617820746f6b656e20707572636861736500000000006044820152606401610906565b60115461105060ff841683612bbe565b111561109e5760405162461bcd60e51b815260206004820181905260248201527f507572636861736520776f756c6420657863656564206d617820746f6b656e736044820152606401610906565b348260ff166013546110b09190612b75565b11156110fe5760405162461bcd60e51b815260206004820152601f60248201527f45746865722076616c75652073656e74206973206e6f7420636f7272656374006044820152606401610906565b60005b8260ff168160ff1610156109a75761112033610db760ff841685612bbe565b8061112a81612bf9565b915050611101565b60006001600160a01b0382166111b05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610906565b506001600160a01b031660009081526005602052604090205490565b6111d4611b1f565b6111de6000611b79565b565b6111e8611b1f565b6014805460ff1916911515919091179055565b611203611b1f565b47806112515760405162461bcd60e51b815260206004820152601c60248201527f436f6e74726163742062616c616e6365206d757374206265203e2030000000006044820152606401610906565b61126c611266600c546001600160a01b031690565b47611bd8565b50565b611277611b1f565b80516107b890600f90602084019061261a565b6060600380546107cb90612b24565b6107b8338383611cf1565b6112ac611b1f565b60005b60ff811683111561132657816015600086868560ff168181106112d4576112d4612c19565b90506020020160208101906112e99190612834565b6001600160a01b031681526020810191909152604001600020805460ff191660ff929092169190911790558061131e81612bf9565b9150506112af565b50505050565b61133633836118a1565b6113a85760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f7665640000000000000000000000000000000000006064820152608401610906565b61132684848484611dc0565b60606113bf826117c2565b60006113c9611e3e565b905060008151116113e95760405180602001604052806000815250611414565b806113f384611e4d565b604051602001611404929190612c2f565b6040516020818303038152906040525b9392505050565b611423611b1f565b6010805460ff1916911515919091179055565b600f8054610eff90612b24565b600061144e600a5490565b60105490915060ff166114ae5760405162461bcd60e51b815260206004820152602260248201527f53616c65206d7573742062652061637469766520746f206d696e7420746f6b656044820152616e7360f01b6064820152608401610906565b6012548260ff1611156115035760405162461bcd60e51b815260206004820152601b60248201527f4578636565646564206d617820746f6b656e20707572636861736500000000006044820152606401610906565b60115461151360ff841683612bbe565b11156115615760405162461bcd60e51b815260206004820181905260248201527f507572636861736520776f756c6420657863656564206d617820746f6b656e736044820152606401610906565b348260ff166013546115739190612b75565b11156115c15760405162461bcd60e51b815260206004820152601f60248201527f45746865722076616c75652073656e74206973206e6f7420636f7272656374006044820152606401610906565b60005b8260ff168160ff161015611326576115e384610db760ff841685612bbe565b806115ed81612bf9565b9150506115c4565b6115fd611b1f565b6001600160a01b0381166116795760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610906565b61126c81611b79565b61168a611b1f565b80516107b890600e90602084019061261a565b60006107a882611f7f565b6127106bffffffffffffffffffffffff8216111561172e5760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c2065786365656460448201527f2073616c655072696365000000000000000000000000000000000000000000006064820152608401610906565b6001600160a01b0382166117845760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c6964207265636569766572000000000000006044820152606401610906565b604080518082019091526001600160a01b039092168083526bffffffffffffffffffffffff9091166020909201829052600160a01b90910217600055565b6000818152600460205260409020546001600160a01b031661126c5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610906565b6000818152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061186882610e8d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806118ad83610e8d565b9050806001600160a01b0316846001600160a01b031614806118f457506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806119185750836001600160a01b031661190d8461084e565b6001600160a01b0316145b949350505050565b826001600160a01b031661193382610e8d565b6001600160a01b0316146119af5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610906565b6001600160a01b038216611a2a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610906565b611a35838383611fbd565b611a40600082611826565b6001600160a01b0383166000908152600560205260408120805460019290611a69908490612c5e565b90915550506001600160a01b0382166000908152600560205260408120805460019290611a97908490612bbe565b9091555050600081815260046020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6107b8828260405180602001604052806000815250611fc8565b600c546001600160a01b031633146111de5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610906565b600c80546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80471015611c4e5760405162461bcd60e51b815260206004820152602360248201527f436f6e74726163742062616c616e6365206d757374206265203e3d205f616d6f60448201527f756e7400000000000000000000000000000000000000000000000000000000006064820152608401610906565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611c9b576040519150601f19603f3d011682016040523d82523d6000602084013e611ca0565b606091505b50509050806109a75760405162461bcd60e51b815260206004820152601060248201527f5472616e73666572206661696c65642e000000000000000000000000000000006044820152606401610906565b816001600160a01b0316836001600160a01b03161415611d535760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610906565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611dcb848484611920565b611dd784848484612046565b6113265760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610906565b6060600d80546107cb90612b24565b606081611e8d57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611eb75780611ea181612c75565b9150611eb09050600a83612baa565b9150611e91565b60008167ffffffffffffffff811115611ed257611ed261289d565b6040519080825280601f01601f191660200182016040528015611efc576020820181803683370190505b5090505b841561191857611f11600183612c5e565b9150611f1e600a86612c90565b611f29906030612bbe565b60f81b818381518110611f3e57611f3e612c19565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611f78600a86612baa565b9450611f00565b60006001600160e01b031982167f780e9d630000000000000000000000000000000000000000000000000000000014806107a857506107a88261219e565b6109a7838383612210565b611fd283836122c8565b611fdf6000848484612046565b6109a75760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610906565b60006001600160a01b0384163b1561219357604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061208a903390899088908890600401612ca4565b602060405180830381600087803b1580156120a457600080fd5b505af19250505080156120d4575060408051601f3d908101601f191682019092526120d191810190612ce0565b60015b612179573d808015612102576040519150601f19603f3d011682016040523d82523d6000602084013e612107565b606091505b5080516121715760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610906565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611918565b506001949350505050565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061220157506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806107a857506107a882612423565b6001600160a01b03831661226b5761226681600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b61228e565b816001600160a01b0316836001600160a01b03161461228e5761228e838261248a565b6001600160a01b0382166122a5576109a781612527565b826001600160a01b0316826001600160a01b0316146109a7576109a782826125d6565b6001600160a01b03821661231e5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610906565b6000818152600460205260409020546001600160a01b0316156123835760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610906565b61238f60008383611fbd565b6001600160a01b03821660009081526005602052604081208054600192906123b8908490612bbe565b9091555050600081815260046020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160e01b031982167f2a55205a0000000000000000000000000000000000000000000000000000000014806107a857507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146107a8565b6000600161249784611132565b6124a19190612c5e565b6000838152600960205260409020549091508082146124f4576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a5460009061253990600190612c5e565b6000838152600b6020526040812054600a805493945090928490811061256157612561612c19565b9060005260206000200154905080600a838154811061258257612582612c19565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a8054806125ba576125ba612cfd565b6001900381819060005260206000200160009055905550505050565b60006125e183611132565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b82805461262690612b24565b90600052602060002090601f016020900481019282612648576000855561268e565b82601f1061266157805160ff191683800117855561268e565b8280016001018555821561268e579182015b8281111561268e578251825591602001919060010190612673565b5061269a92915061269e565b5090565b5b8082111561269a576000815560010161269f565b6001600160e01b03198116811461126c57600080fd5b6000602082840312156126db57600080fd5b8135611414816126b3565b80356001600160a01b03811681146126fd57600080fd5b919050565b6000806040838503121561271557600080fd5b61271e836126e6565b915060208301356bffffffffffffffffffffffff8116811461273f57600080fd5b809150509250929050565b60005b8381101561276557818101518382015260200161274d565b838111156113265750506000910152565b6000815180845261278e81602086016020860161274a565b601f01601f19169290920160200192915050565b6020815260006114146020830184612776565b6000602082840312156127c757600080fd5b5035919050565b600080604083850312156127e157600080fd5b6127ea836126e6565b946020939093013593505050565b60008060006060848603121561280d57600080fd5b612816846126e6565b9250612824602085016126e6565b9150604084013590509250925092565b60006020828403121561284657600080fd5b611414826126e6565b6000806040838503121561286257600080fd5b50508035926020909101359150565b803560ff811681146126fd57600080fd5b60006020828403121561289457600080fd5b61141482612871565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156128ce576128ce61289d565b604051601f8501601f19908116603f011681019082821181831017156128f6576128f661289d565b8160405280935085815286868601111561290f57600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561293b57600080fd5b813567ffffffffffffffff81111561295257600080fd5b8201601f8101841361296357600080fd5b611918848235602084016128b3565b803580151581146126fd57600080fd5b60006020828403121561299457600080fd5b61141482612972565b600080604083850312156129b057600080fd5b6129b9836126e6565b91506129c760208401612972565b90509250929050565b6000806000604084860312156129e557600080fd5b833567ffffffffffffffff808211156129fd57600080fd5b818601915086601f830112612a1157600080fd5b813581811115612a2057600080fd5b8760208260051b8501011115612a3557600080fd5b602092830195509350612a4b9186019050612871565b90509250925092565b60008060008060808587031215612a6a57600080fd5b612a73856126e6565b9350612a81602086016126e6565b925060408501359150606085013567ffffffffffffffff811115612aa457600080fd5b8501601f81018713612ab557600080fd5b612ac4878235602084016128b3565b91505092959194509250565b60008060408385031215612ae357600080fd5b612aec836126e6565b91506129c7602084016126e6565b60008060408385031215612b0d57600080fd5b612b16836126e6565b91506129c760208401612871565b600181811c90821680612b3857607f821691505b60208210811415612b5957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612b8f57612b8f612b5f565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612bb957612bb9612b94565b500490565b60008219821115612bd157612bd1612b5f565b500190565b600060ff821660ff841680821015612bf057612bf0612b5f565b90039392505050565b600060ff821660ff811415612c1057612c10612b5f565b60010192915050565b634e487b7160e01b600052603260045260246000fd5b60008351612c4181846020880161274a565b835190830190612c5581836020880161274a565b01949350505050565b600082821015612c7057612c70612b5f565b500390565b6000600019821415612c8957612c89612b5f565b5060010190565b600082612c9f57612c9f612b94565b500690565b60006001600160a01b03808716835280861660208401525083604083015260806060830152612cd66080830184612776565b9695505050505050565b600060208284031215612cf257600080fd5b8151611414816126b3565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220d2068ba1759d9fe167fbc883a0a3433b8561a7430a21985f64ee4d8b29fe38bb64736f6c63430008090033";

type NFTContractCrossmintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTContractCrossmintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTContractCrossmint__factory extends ContractFactory {
  constructor(...args: NFTContractCrossmintConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTContractCrossmint> {
    return super.deploy(overrides || {}) as Promise<NFTContractCrossmint>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTContractCrossmint {
    return super.attach(address) as NFTContractCrossmint;
  }
  override connect(signer: Signer): NFTContractCrossmint__factory {
    return super.connect(signer) as NFTContractCrossmint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTContractCrossmintInterface {
    return new utils.Interface(_abi) as NFTContractCrossmintInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTContractCrossmint {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NFTContractCrossmint;
  }
}