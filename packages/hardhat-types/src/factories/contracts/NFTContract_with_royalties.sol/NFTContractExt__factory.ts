/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTContractExt,
  NFTContractExtInterface,
} from "../../../contracts/NFTContract_with_royalties.sol/NFTContractExt";

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
    inputs: [],
    name: "isWhitelistSaleActive",
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
    name: "mintWhitelisted",
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
        name: "_data",
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
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "setIsWhitelistSaleActive",
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
    name: "setWhitelistAddresses",
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
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "whitelistMintAmount",
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
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526010805461ffff191690553480156200001c57600080fd5b50604080518082018252600d81526c417274696666696e6544656d6f60981b60208083019182528351808501909452600584526420a92a24a360d91b9084015281519192916200006f91600291620000fe565b50805162000085906003906020840190620000fe565b505050620000a26200009c620000a860201b60201c565b620000ac565b620001e1565b3390565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010c90620001a4565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600181811c90821680620001b957607f821691505b60208210811415620001db57634e487b7160e01b600052602260045260246000fd5b50919050565b6127c480620001f16000396000f3fe6080604052600436106101aa5760003560e01c806301ffc9a7146101af57806306fdde03146101e4578063081812fc14610206578063095ea7b31461023e5780630cc03f721461026057806318160ddd1461027357806323b872dd146102925780632a55205a146102b25780632f745c59146102f157806332cb6b0c1461031157806342842e0e146103275780634f6ccce71461034757806355f804b314610367578063564566a8146103875780636352211e146103a15780636373a6b1146103c157806365a24bc0146103d657806365f13097146103f65780636ecd23061461040b57806370a082311461041e578063715018a61461043e5780638135fbdf14610453578063833b94991461049e578063853828b6146104b85780638da5cb5b146104cd578063938e3d7b146104e257806395d89b4114610502578063a22cb46514610517578063b88d4fde14610537578063b98451cf14610557578063c87b56dd14610576578063d2d65ff514610596578063e8a3d485146105b6578063e985e9c5146105cb578063f2fde38b146105eb578063ffcb8dca1461060b578063ffe630b51461062b575b600080fd5b3480156101bb57600080fd5b506101cf6101ca366004612055565b61064b565b60405190151581526020015b60405180910390f35b3480156101f057600080fd5b506101f961065c565b6040516101db91906120ca565b34801561021257600080fd5b506102266102213660046120dd565b6106ee565b6040516001600160a01b0390911681526020016101db565b34801561024a57600080fd5b5061025e610259366004612112565b61077b565b005b61025e61026e36600461214d565b61088c565b34801561027f57600080fd5b50600a545b6040519081526020016101db565b34801561029e57600080fd5b5061025e6102ad366004612168565b610a34565b3480156102be57600080fd5b506102d26102cd3660046121a4565b610a65565b604080516001600160a01b0390931683526020830191909152016101db565b3480156102fd57600080fd5b5061028461030c366004612112565b610b11565b34801561031d57600080fd5b506102846103e881565b34801561033357600080fd5b5061025e610342366004612168565b610ba7565b34801561035357600080fd5b506102846103623660046120dd565b610bc2565b34801561037357600080fd5b5061025e610382366004612251565b610c55565b34801561039357600080fd5b506010546101cf9060ff1681565b3480156103ad57600080fd5b506102266103bc3660046120dd565b610c9b565b3480156103cd57600080fd5b506101f9610d12565b3480156103e257600080fd5b5061025e6103f1366004612299565b610da0565b34801561040257600080fd5b50610284600a81565b61025e61041936600461214d565b610e4f565b34801561042a57600080fd5b5061028461043936600461231c565b610fa0565b34801561044a57600080fd5b5061025e611027565b34801561045f57600080fd5b5061048c61046e36600461231c565b6001600160a01b031660009081526011602052604090205460ff1690565b60405160ff90911681526020016101db565b3480156104aa57600080fd5b50610284655af3107a400081565b3480156104c457600080fd5b5061025e611062565b3480156104d957600080fd5b506102266110f2565b3480156104ee57600080fd5b5061025e6104fd366004612251565b611101565b34801561050e57600080fd5b506101f9611143565b34801561052357600080fd5b5061025e610532366004612347565b611152565b34801561054357600080fd5b5061025e61055236600461237a565b61115d565b34801561056357600080fd5b506010546101cf90610100900460ff1681565b34801561058257600080fd5b506101f96105913660046120dd565b61118f565b3480156105a257600080fd5b5061025e6105b13660046123f5565b61125a565b3480156105c257600080fd5b506101f961129c565b3480156105d757600080fd5b506101cf6105e6366004612410565b6112a9565b3480156105f757600080fd5b5061025e61060636600461231c565b6112d7565b34801561061757600080fd5b5061025e6106263660046123f5565b611374565b34801561063757600080fd5b5061025e610646366004612251565b6113bd565b6000610656826113ff565b92915050565b60606002805461066b9061243a565b80601f01602080910402602001604051908101604052809291908181526020018280546106979061243a565b80156106e45780601f106106b9576101008083540402835291602001916106e4565b820191906000526020600020905b8154815290600101906020018083116106c757829003601f168201915b5050505050905090565b60006106f98261140a565b61075f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061078682610c9b565b9050806001600160a01b0316836001600160a01b031614156107f45760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610756565b336001600160a01b0382161480610810575061081081336112a9565b61087d5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610756565b6108878383611427565b505050565b6000610897600a5490565b601054909150610100900460ff166108f05760405162461bcd60e51b815260206004820152601c60248201527b57686974656c6973742073616c65206973206e6f742061637469766560201b6044820152606401610756565b3360009081526011602052604090205460ff90811690831611156109615760405162461bcd60e51b815260206004820152602260248201527f4578636565646564206d617820617661696c61626c6520746f20707572636861604482015261736560f01b6064820152608401610756565b6103e861097160ff84168361248b565b111561098f5760405162461bcd60e51b8152600401610756906124a3565b346109a360ff8416655af3107a40006124d8565b11156109c15760405162461bcd60e51b8152600401610756906124f7565b33600090815260116020526040812080548492906109e390849060ff1661252e565b92506101000a81548160ff021916908360ff16021790555060005b8260ff168160ff16101561088757610a2233610a1d60ff84168561248b565b611495565b80610a2c81612551565b9150506109fe565b610a3e33826114af565b610a5a5760405162461bcd60e51b815260040161075690612571565b610887838383611579565b60008281526001602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046001600160601b0316928201929092528291610ada5750604080518082019091526000546001600160a01b0381168252600160a01b90046001600160601b031660208201525b602081015160009061271090610af9906001600160601b0316876124d8565b610b0391906125d8565b915196919550909350505050565b6000610b1c83610fa0565b8210610b7e5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610756565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b6108878383836040518060200160405280600081525061115d565b6000610bcd600a5490565b8210610c305760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610756565b600a8281548110610c4357610c436125ec565b90600052602060002001549050919050565b33610c5e6110f2565b6001600160a01b031614610c845760405162461bcd60e51b815260040161075690612602565b8051610c9790600d906020840190611fa6565b5050565b6000818152600460205260408120546001600160a01b0316806106565760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610756565b600e8054610d1f9061243a565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4b9061243a565b8015610d985780601f10610d6d57610100808354040283529160200191610d98565b820191906000526020600020905b815481529060010190602001808311610d7b57829003601f168201915b505050505081565b33610da96110f2565b6001600160a01b031614610dcf5760405162461bcd60e51b815260040161075690612602565b60005b60ff8116831115610e4957816011600086868560ff16818110610df757610df76125ec565b9050602002016020810190610e0c919061231c565b6001600160a01b031681526020810191909152604001600020805460ff191660ff9290921691909117905580610e4181612551565b915050610dd2565b50505050565b6000610e5a600a5490565b60105490915060ff16610eba5760405162461bcd60e51b815260206004820152602260248201527f53616c65206d7573742062652061637469766520746f206d696e7420746f6b656044820152616e7360f01b6064820152608401610756565b600a8260ff161115610f0c5760405162461bcd60e51b815260206004820152601b60248201527a4578636565646564206d617820746f6b656e20707572636861736560281b6044820152606401610756565b6103e8610f1c60ff84168361248b565b1115610f3a5760405162461bcd60e51b8152600401610756906124a3565b34610f4e60ff8416655af3107a40006124d8565b1115610f6c5760405162461bcd60e51b8152600401610756906124f7565b60005b8260ff168160ff16101561088757610f8e33610a1d60ff84168561248b565b80610f9881612551565b915050610f6f565b60006001600160a01b03821661100b5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610756565b506001600160a01b031660009081526005602052604090205490565b336110306110f2565b6001600160a01b0316146110565760405162461bcd60e51b815260040161075690612602565b611060600061170e565b565b3361106b6110f2565b6001600160a01b0316146110915760405162461bcd60e51b815260040161075690612602565b47806110de5760405162461bcd60e51b815260206004820152601c60248201527b0436f6e74726163742062616c616e6365206d757374206265203e20360241b6044820152606401610756565b6110ef6110e96110f2565b47611760565b50565b600c546001600160a01b031690565b3361110a6110f2565b6001600160a01b0316146111305760405162461bcd60e51b815260040161075690612602565b8051610c9790600f906020840190611fa6565b60606003805461066b9061243a565b610c97338383611852565b61116733836114af565b6111835760405162461bcd60e51b815260040161075690612571565b610e498484848461191d565b606061119a8261140a565b6111fe5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610756565b6000611208611950565b905060008151116112285760405180602001604052806000815250611253565b806112328461195f565b604051602001611243929190612637565b6040516020818303038152906040525b9392505050565b336112636110f2565b6001600160a01b0316146112895760405162461bcd60e51b815260040161075690612602565b6010805460ff1916911515919091179055565b600f8054610d1f9061243a565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b336112e06110f2565b6001600160a01b0316146113065760405162461bcd60e51b815260040161075690612602565b6001600160a01b03811661136b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610756565b6110ef8161170e565b3361137d6110f2565b6001600160a01b0316146113a35760405162461bcd60e51b815260040161075690612602565b601080549115156101000261ff0019909216919091179055565b336113c66110f2565b6001600160a01b0316146113ec5760405162461bcd60e51b815260040161075690612602565b8051610c9790600e906020840190611fa6565b600061065682611a5c565b6000908152600460205260409020546001600160a01b0316151590565b600081815260066020526040902080546001600160a01b0319166001600160a01b038416908117909155819061145c82610c9b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610c97828260405180602001604052806000815250611a81565b60006114ba8261140a565b61151b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610756565b600061152683610c9b565b9050806001600160a01b0316846001600160a01b0316148061154d575061154d81856112a9565b806115715750836001600160a01b0316611566846106ee565b6001600160a01b0316145b949350505050565b826001600160a01b031661158c82610c9b565b6001600160a01b0316146115f05760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610756565b6001600160a01b0382166116525760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610756565b61165d838383611ab4565b611668600082611427565b6001600160a01b0383166000908152600560205260408120805460019290611691908490612666565b90915550506001600160a01b03821660009081526005602052604081208054600192906116bf90849061248b565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b03868116918217909255915184939187169160008051602061276f83398151915291a4505050565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b804710156117bc5760405162461bcd60e51b815260206004820152602360248201527f436f6e74726163742062616c616e6365206d757374206265203e3d205f616d6f6044820152621d5b9d60ea1b6064820152608401610756565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611809576040519150601f19603f3d011682016040523d82523d6000602084013e61180e565b606091505b50509050806108875760405162461bcd60e51b815260206004820152601060248201526f2a3930b739b332b9103330b4b632b21760811b6044820152606401610756565b816001600160a01b0316836001600160a01b031614156118b05760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610756565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611928848484611579565b61193484848484611abf565b610e495760405162461bcd60e51b81526004016107569061267d565b6060600d805461066b9061243a565b6060816119835750506040805180820190915260018152600360fc1b602082015290565b8160005b81156119ad5780611997816126cf565b91506119a69050600a836125d8565b9150611987565b6000816001600160401b038111156119c7576119c76121c6565b6040519080825280601f01601f1916602001820160405280156119f1576020820181803683370190505b5090505b841561157157611a06600183612666565b9150611a13600a866126ea565b611a1e90603061248b565b60f81b818381518110611a3357611a336125ec565b60200101906001600160f81b031916908160001a905350611a55600a866125d8565b94506119f5565b60006001600160e01b0319821663780e9d6360e01b1480610656575061065682611bbd565b611a8b8383611bfd565b611a986000848484611abf565b6108875760405162461bcd60e51b81526004016107569061267d565b610887838383611d29565b60006001600160a01b0384163b15611bb257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611b039033908990889088906004016126fe565b6020604051808303816000875af1925050508015611b3e575060408051601f3d908101601f19168201909252611b3b9181019061273b565b60015b611b98573d808015611b6c576040519150601f19603f3d011682016040523d82523d6000602084013e611b71565b606091505b508051611b905760405162461bcd60e51b81526004016107569061267d565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611571565b506001949350505050565b60006001600160e01b031982166380ac58cd60e01b1480611bee57506001600160e01b03198216635b5e139f60e01b145b80610656575061065682611de1565b6001600160a01b038216611c535760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610756565b611c5c8161140a565b15611ca85760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610756565b611cb460008383611ab4565b6001600160a01b0382166000908152600560205260408120805460019290611cdd90849061248b565b909155505060008181526004602052604080822080546001600160a01b0319166001600160a01b038616908117909155905183929060008051602061276f833981519152908290a45050565b6001600160a01b038316611d8457611d7f81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b611da7565b816001600160a01b0316836001600160a01b031614611da757611da78382611e16565b6001600160a01b038216611dbe5761088781611eb3565b826001600160a01b0316826001600160a01b031614610887576108878282611f62565b60006001600160e01b0319821663152a902d60e11b148061065657506301ffc9a760e01b6001600160e01b0319831614610656565b60006001611e2384610fa0565b611e2d9190612666565b600083815260096020526040902054909150808214611e80576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090611ec590600190612666565b6000838152600b6020526040812054600a8054939450909284908110611eed57611eed6125ec565b9060005260206000200154905080600a8381548110611f0e57611f0e6125ec565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a805480611f4657611f46612758565b6001900381819060005260206000200160009055905550505050565b6000611f6d83610fa0565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b828054611fb29061243a565b90600052602060002090601f016020900481019282611fd4576000855561201a565b82601f10611fed57805160ff191683800117855561201a565b8280016001018555821561201a579182015b8281111561201a578251825591602001919060010190611fff565b5061202692915061202a565b5090565b5b80821115612026576000815560010161202b565b6001600160e01b0319811681146110ef57600080fd5b60006020828403121561206757600080fd5b81356112538161203f565b60005b8381101561208d578181015183820152602001612075565b83811115610e495750506000910152565b600081518084526120b6816020860160208601612072565b601f01601f19169290920160200192915050565b602081526000611253602083018461209e565b6000602082840312156120ef57600080fd5b5035919050565b80356001600160a01b038116811461210d57600080fd5b919050565b6000806040838503121561212557600080fd5b61212e836120f6565b946020939093013593505050565b803560ff8116811461210d57600080fd5b60006020828403121561215f57600080fd5b6112538261213c565b60008060006060848603121561217d57600080fd5b612186846120f6565b9250612194602085016120f6565b9150604084013590509250925092565b600080604083850312156121b757600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b60006001600160401b03808411156121f6576121f66121c6565b604051601f8501601f19908116603f0116810190828211818310171561221e5761221e6121c6565b8160405280935085815286868601111561223757600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561226357600080fd5b81356001600160401b0381111561227957600080fd5b8201601f8101841361228a57600080fd5b611571848235602084016121dc565b6000806000604084860312156122ae57600080fd5b83356001600160401b03808211156122c557600080fd5b818601915086601f8301126122d957600080fd5b8135818111156122e857600080fd5b8760208260051b85010111156122fd57600080fd5b602092830195509350612313918601905061213c565b90509250925092565b60006020828403121561232e57600080fd5b611253826120f6565b8035801515811461210d57600080fd5b6000806040838503121561235a57600080fd5b612363836120f6565b915061237160208401612337565b90509250929050565b6000806000806080858703121561239057600080fd5b612399856120f6565b93506123a7602086016120f6565b92506040850135915060608501356001600160401b038111156123c957600080fd5b8501601f810187136123da57600080fd5b6123e9878235602084016121dc565b91505092959194509250565b60006020828403121561240757600080fd5b61125382612337565b6000806040838503121561242357600080fd5b61242c836120f6565b9150612371602084016120f6565b600181811c9082168061244e57607f821691505b6020821081141561246f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561249e5761249e612475565b500190565b6020808252818101527f507572636861736520776f756c6420657863656564206d617820746f6b656e73604082015260600190565b60008160001904831182151516156124f2576124f2612475565b500290565b6020808252601f908201527f45746865722076616c75652073656e74206973206e6f7420636f727265637400604082015260600190565b600060ff821660ff84168082101561254857612548612475565b90039392505050565b600060ff821660ff81141561256857612568612475565b60010192915050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b6000826125e7576125e76125c2565b500490565b634e487b7160e01b600052603260045260246000fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008351612649818460208801612072565b83519083019061265d818360208801612072565b01949350505050565b60008282101561267857612678612475565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006000198214156126e3576126e3612475565b5060010190565b6000826126f9576126f96125c2565b500690565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906127319083018461209e565b9695505050505050565b60006020828403121561274d57600080fd5b81516112538161203f565b634e487b7160e01b600052603160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212203bace65985dbe45ba97cf63aedbf2bd85152cd6cd4c8632c2f54ec1ad816a77f64736f6c634300080a0033";

type NFTContractExtConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTContractExtConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTContractExt__factory extends ContractFactory {
  constructor(...args: NFTContractExtConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTContractExt> {
    return super.deploy(overrides || {}) as Promise<NFTContractExt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTContractExt {
    return super.attach(address) as NFTContractExt;
  }
  override connect(signer: Signer): NFTContractExt__factory {
    return super.connect(signer) as NFTContractExt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTContractExtInterface {
    return new utils.Interface(_abi) as NFTContractExtInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTContractExt {
    return new Contract(address, _abi, signerOrProvider) as NFTContractExt;
  }
}
