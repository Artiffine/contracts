/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NFTContractBase,
  NFTContractBaseInterface,
} from "../../../contracts/interfaces/NFTContractBase";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPublicMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerToken",
        type: "uint256",
      },
    ],
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
  "0x60806040526010805460ff191690553480156200001b57600080fd5b50604051620029f1380380620029f18339810160408190526200003e9162000268565b84518590859062000057906002906020850190620000f5565b5080516200006d906003906020840190620000f5565b5050506200008a620000846200009f60201b60201c565b620000a3565b601192909255601255601355506200032a9050565b3390565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010390620002ed565b90600052602060002090601f01602090048101928262000127576000855562000172565b82601f106200014257805160ff191683800117855562000172565b8280016001018555821562000172579182015b828111156200017257825182559160200191906001019062000155565b506200018092915062000184565b5090565b5b8082111562000180576000815560010162000185565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001c357600080fd5b81516001600160401b0380821115620001e057620001e06200019b565b604051601f8301601f19908116603f011681019082821181831017156200020b576200020b6200019b565b816040528381526020925086838588010111156200022857600080fd5b600091505b838210156200024c57858201830151818301840152908201906200022d565b838211156200025e5760008385830101525b9695505050505050565b600080600080600060a086880312156200028157600080fd5b85516001600160401b03808211156200029957600080fd5b620002a789838a01620001b1565b96506020880151915080821115620002be57600080fd5b50620002cd88828901620001b1565b60408801516060890151608090990151979a919950979695509350505050565b600181811c908216806200030257607f821691505b602082108114156200032457634e487b7160e01b600052602260045260246000fd5b50919050565b6126b7806200033a6000396000f3fe6080604052600436106101fe5760003560e01c806365f130971161011d57806395d89b41116100b0578063d2d65ff51161007f578063e985e9c511610064578063e985e9c5146105a8578063f2fde38b146105f1578063ffe630b51461061157600080fd5b8063d2d65ff514610573578063e8a3d4851461059357600080fd5b806395d89b41146104fe578063a22cb46514610513578063b88d4fde14610533578063c87b56dd1461055357600080fd5b8063833b9499116100ec578063833b949914610495578063853828b6146104ab5780638da5cb5b146104c0578063938e3d7b146104de57600080fd5b806365f13097146104375780636ecd23061461044d57806370a0823114610460578063715018a61461048057600080fd5b80632f745c591161019557806355f804b31161016457806355f804b3146103c8578063564566a8146103e85780636352211e146104025780636373a6b11461042257600080fd5b80632f745c591461035257806332cb6b0c1461037257806342842e0e146103885780634f6ccce7146103a857600080fd5b8063095ea7b3116101d1578063095ea7b3146102b457806318160ddd146102d457806323b872dd146102f35780632a55205a1461031357600080fd5b806301ffc9a71461020357806304634d8d1461023857806306fdde031461025a578063081812fc1461027c575b600080fd5b34801561020f57600080fd5b5061022361021e366004612111565b610631565b60405190151581526020015b60405180910390f35b34801561024457600080fd5b5061025861025336600461214a565b610642565b005b34801561026657600080fd5b5061026f610650565b60405161022f91906121ea565b34801561028857600080fd5b5061029c6102973660046121fd565b6106e2565b6040516001600160a01b03909116815260200161022f565b3480156102c057600080fd5b506102586102cf366004612216565b610709565b3480156102e057600080fd5b50600a545b60405190815260200161022f565b3480156102ff57600080fd5b5061025861030e366004612240565b610840565b34801561031f57600080fd5b5061033361032e36600461227c565b6108c7565b604080516001600160a01b03909316835260208301919091520161022f565b34801561035e57600080fd5b506102e561036d366004612216565b610982565b34801561037e57600080fd5b506102e560115481565b34801561039457600080fd5b506102586103a3366004612240565b610a2a565b3480156103b457600080fd5b506102e56103c33660046121fd565b610a45565b3480156103d457600080fd5b506102586103e336600461232a565b610ae9565b3480156103f457600080fd5b506010546102239060ff1681565b34801561040e57600080fd5b5061029c61041d3660046121fd565b610b04565b34801561042e57600080fd5b5061026f610b69565b34801561044357600080fd5b506102e560125481565b61025861045b366004612373565b610bf7565b34801561046c57600080fd5b506102e561047b366004612396565b610dc9565b34801561048c57600080fd5b50610258610e63565b3480156104a157600080fd5b506102e560135481565b3480156104b757600080fd5b50610258610e77565b3480156104cc57600080fd5b50600c546001600160a01b031661029c565b3480156104ea57600080fd5b506102586104f936600461232a565b610eeb565b34801561050a57600080fd5b5061026f610f06565b34801561051f57600080fd5b5061025861052e3660046123c1565b610f15565b34801561053f57600080fd5b5061025861054e3660046123f4565b610f20565b34801561055f57600080fd5b5061026f61056e3660046121fd565b610fae565b34801561057f57600080fd5b5061025861058e366004612470565b611015565b34801561059f57600080fd5b5061026f611030565b3480156105b457600080fd5b506102236105c336600461248b565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b3480156105fd57600080fd5b5061025861060c366004612396565b61103d565b34801561061d57600080fd5b5061025861062c36600461232a565b6110ca565b600061063c826110e5565b92915050565b61064c82826110f0565b5050565b60606002805461065f906124b5565b80601f016020809104026020016040519081016040528092919081815260200182805461068b906124b5565b80156106d85780601f106106ad576101008083540402835291602001916106d8565b820191906000526020600020905b8154815290600101906020018083116106bb57829003601f168201915b5050505050905090565b60006106ed8261120a565b506000908152600660205260409020546001600160a01b031690565b600061071482610b04565b9050806001600160a01b0316836001600160a01b031614156107a35760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b03821614806107bf57506107bf81336105c3565b6108315760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161079a565b61083b838361126e565b505050565b61084a33826112e9565b6108bc5760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161079a565b61083b838383611368565b60008281526001602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046bffffffffffffffffffffffff169282019290925282916109465750604080518082019091526000546001600160a01b0381168252600160a01b90046bffffffffffffffffffffffff1660208201525b60208101516000906127109061096a906bffffffffffffffffffffffff1687612506565b610974919061253b565b915196919550909350505050565b600061098d83610dc9565b8210610a015760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161079a565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b61083b83838360405180602001604052806000815250610f20565b6000610a50600a5490565b8210610ac45760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161079a565b600a8281548110610ad757610ad761254f565b90600052602060002001549050919050565b610af161154d565b805161064c90600d906020840190612062565b6000818152600460205260408120546001600160a01b03168061063c5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161079a565b600e8054610b76906124b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba2906124b5565b8015610bef5780601f10610bc457610100808354040283529160200191610bef565b820191906000526020600020905b815481529060010190602001808311610bd257829003601f168201915b505050505081565b6000610c02600a5490565b60105490915060ff16610c7d5760405162461bcd60e51b815260206004820152602260248201527f53616c65206d7573742062652061637469766520746f206d696e7420746f6b6560448201527f6e73000000000000000000000000000000000000000000000000000000000000606482015260840161079a565b6012548260ff161115610cd25760405162461bcd60e51b815260206004820152601b60248201527f4578636565646564206d617820746f6b656e2070757263686173650000000000604482015260640161079a565b601154610ce260ff841683612565565b1115610d305760405162461bcd60e51b815260206004820181905260248201527f507572636861736520776f756c6420657863656564206d617820746f6b656e73604482015260640161079a565b348260ff16601354610d429190612506565b1115610d905760405162461bcd60e51b815260206004820152601f60248201527f45746865722076616c75652073656e74206973206e6f7420636f727265637400604482015260640161079a565b60005b8260ff168160ff16101561083b57610db733610db260ff841685612565565b6115a7565b80610dc18161257d565b915050610d93565b60006001600160a01b038216610e475760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161079a565b506001600160a01b031660009081526005602052604090205490565b610e6b61154d565b610e7560006115c1565b565b610e7f61154d565b4780610ecd5760405162461bcd60e51b815260206004820152601c60248201527f436f6e74726163742062616c616e6365206d757374206265203e203000000000604482015260640161079a565b610ee8610ee2600c546001600160a01b031690565b47611620565b50565b610ef361154d565b805161064c90600f906020840190612062565b60606003805461065f906124b5565b61064c338383611739565b610f2a33836112e9565b610f9c5760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161079a565b610fa884848484611808565b50505050565b6060610fb98261120a565b6000610fc3611886565b90506000815111610fe3576040518060200160405280600081525061100e565b80610fed84611895565b604051602001610ffe92919061259d565b6040516020818303038152906040525b9392505050565b61101d61154d565b6010805460ff1916911515919091179055565b600f8054610b76906124b5565b61104561154d565b6001600160a01b0381166110c15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161079a565b610ee8816115c1565b6110d261154d565b805161064c90600e906020840190612062565b600061063c826119c7565b6127106bffffffffffffffffffffffff821611156111765760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c2065786365656460448201527f2073616c65507269636500000000000000000000000000000000000000000000606482015260840161079a565b6001600160a01b0382166111cc5760405162461bcd60e51b815260206004820152601960248201527f455243323938313a20696e76616c696420726563656976657200000000000000604482015260640161079a565b604080518082019091526001600160a01b039092168083526bffffffffffffffffffffffff9091166020909201829052600160a01b90910217600055565b6000818152600460205260409020546001600160a01b0316610ee85760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161079a565b6000818152600660205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841690811790915581906112b082610b04565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806112f583610b04565b9050806001600160a01b0316846001600160a01b0316148061133c57506001600160a01b0380821660009081526007602090815260408083209388168352929052205460ff165b806113605750836001600160a01b0316611355846106e2565b6001600160a01b0316145b949350505050565b826001600160a01b031661137b82610b04565b6001600160a01b0316146113f75760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161079a565b6001600160a01b0382166114725760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161079a565b61147d838383611a05565b61148860008261126e565b6001600160a01b03831660009081526005602052604081208054600192906114b19084906125cc565b90915550506001600160a01b03821660009081526005602052604081208054600192906114df908490612565565b9091555050600081815260046020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600c546001600160a01b03163314610e755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161079a565b61064c828260405180602001604052806000815250611a10565b600c80546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b804710156116965760405162461bcd60e51b815260206004820152602360248201527f436f6e74726163742062616c616e6365206d757374206265203e3d205f616d6f60448201527f756e740000000000000000000000000000000000000000000000000000000000606482015260840161079a565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146116e3576040519150601f19603f3d011682016040523d82523d6000602084013e6116e8565b606091505b505090508061083b5760405162461bcd60e51b815260206004820152601060248201527f5472616e73666572206661696c65642e00000000000000000000000000000000604482015260640161079a565b816001600160a01b0316836001600160a01b0316141561179b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161079a565b6001600160a01b03838116600081815260076020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611813848484611368565b61181f84848484611a8e565b610fa85760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161079a565b6060600d805461065f906124b5565b6060816118d557505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156118ff57806118e9816125e3565b91506118f89050600a8361253b565b91506118d9565b60008167ffffffffffffffff81111561191a5761191a61229e565b6040519080825280601f01601f191660200182016040528015611944576020820181803683370190505b5090505b8415611360576119596001836125cc565b9150611966600a866125fe565b611971906030612565565b60f81b8183815181106119865761198661254f565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506119c0600a8661253b565b9450611948565b60006001600160e01b031982167f780e9d6300000000000000000000000000000000000000000000000000000000148061063c575061063c82611be6565b61083b838383611c58565b611a1a8383611d10565b611a276000848484611a8e565b61083b5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161079a565b60006001600160a01b0384163b15611bdb57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611ad2903390899088908890600401612612565b602060405180830381600087803b158015611aec57600080fd5b505af1925050508015611b1c575060408051601f3d908101601f19168201909252611b199181019061264e565b60015b611bc1573d808015611b4a576040519150601f19603f3d011682016040523d82523d6000602084013e611b4f565b606091505b508051611bb95760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161079a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611360565b506001949350505050565b60006001600160e01b031982167f80ac58cd000000000000000000000000000000000000000000000000000000001480611c4957506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061063c575061063c82611e6b565b6001600160a01b038316611cb357611cae81600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b611cd6565b816001600160a01b0316836001600160a01b031614611cd657611cd68382611ed2565b6001600160a01b038216611ced5761083b81611f6f565b826001600160a01b0316826001600160a01b03161461083b5761083b828261201e565b6001600160a01b038216611d665760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161079a565b6000818152600460205260409020546001600160a01b031615611dcb5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161079a565b611dd760008383611a05565b6001600160a01b0382166000908152600560205260408120805460019290611e00908490612565565b9091555050600081815260046020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160e01b031982167f2a55205a00000000000000000000000000000000000000000000000000000000148061063c57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b031983161461063c565b60006001611edf84610dc9565b611ee991906125cc565b600083815260096020526040902054909150808214611f3c576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090611f81906001906125cc565b6000838152600b6020526040812054600a8054939450909284908110611fa957611fa961254f565b9060005260206000200154905080600a8381548110611fca57611fca61254f565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a8054806120025761200261266b565b6001900381819060005260206000200160009055905550505050565b600061202983610dc9565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b82805461206e906124b5565b90600052602060002090601f01602090048101928261209057600085556120d6565b82601f106120a957805160ff19168380011785556120d6565b828001600101855582156120d6579182015b828111156120d65782518255916020019190600101906120bb565b506120e29291506120e6565b5090565b5b808211156120e257600081556001016120e7565b6001600160e01b031981168114610ee857600080fd5b60006020828403121561212357600080fd5b813561100e816120fb565b80356001600160a01b038116811461214557600080fd5b919050565b6000806040838503121561215d57600080fd5b6121668361212e565b915060208301356bffffffffffffffffffffffff8116811461218757600080fd5b809150509250929050565b60005b838110156121ad578181015183820152602001612195565b83811115610fa85750506000910152565b600081518084526121d6816020860160208601612192565b601f01601f19169290920160200192915050565b60208152600061100e60208301846121be565b60006020828403121561220f57600080fd5b5035919050565b6000806040838503121561222957600080fd5b6122328361212e565b946020939093013593505050565b60008060006060848603121561225557600080fd5b61225e8461212e565b925061226c6020850161212e565b9150604084013590509250925092565b6000806040838503121561228f57600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156122cf576122cf61229e565b604051601f8501601f19908116603f011681019082821181831017156122f7576122f761229e565b8160405280935085815286868601111561231057600080fd5b858560208301376000602087830101525050509392505050565b60006020828403121561233c57600080fd5b813567ffffffffffffffff81111561235357600080fd5b8201601f8101841361236457600080fd5b611360848235602084016122b4565b60006020828403121561238557600080fd5b813560ff8116811461100e57600080fd5b6000602082840312156123a857600080fd5b61100e8261212e565b8035801515811461214557600080fd5b600080604083850312156123d457600080fd5b6123dd8361212e565b91506123eb602084016123b1565b90509250929050565b6000806000806080858703121561240a57600080fd5b6124138561212e565b93506124216020860161212e565b925060408501359150606085013567ffffffffffffffff81111561244457600080fd5b8501601f8101871361245557600080fd5b612464878235602084016122b4565b91505092959194509250565b60006020828403121561248257600080fd5b61100e826123b1565b6000806040838503121561249e57600080fd5b6124a78361212e565b91506123eb6020840161212e565b600181811c908216806124c957607f821691505b602082108114156124ea57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612520576125206124f0565b500290565b634e487b7160e01b600052601260045260246000fd5b60008261254a5761254a612525565b500490565b634e487b7160e01b600052603260045260246000fd5b60008219821115612578576125786124f0565b500190565b600060ff821660ff811415612594576125946124f0565b60010192915050565b600083516125af818460208801612192565b8351908301906125c3818360208801612192565b01949350505050565b6000828210156125de576125de6124f0565b500390565b60006000198214156125f7576125f76124f0565b5060010190565b60008261260d5761260d612525565b500690565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261264460808301846121be565b9695505050505050565b60006020828403121561266057600080fd5b815161100e816120fb565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220b44b1e645a53308a7cdb9b3b7daa825894cbdac85443e7c6da1fa98d60b05e1864736f6c63430008090033";

type NFTContractBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTContractBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTContractBase__factory extends ContractFactory {
  constructor(...args: NFTContractBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    maxSupply: PromiseOrValue<BigNumberish>,
    maxPublicMint: PromiseOrValue<BigNumberish>,
    pricePerToken: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTContractBase> {
    return super.deploy(
      name,
      symbol,
      maxSupply,
      maxPublicMint,
      pricePerToken,
      overrides || {}
    ) as Promise<NFTContractBase>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    maxSupply: PromiseOrValue<BigNumberish>,
    maxPublicMint: PromiseOrValue<BigNumberish>,
    pricePerToken: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      maxSupply,
      maxPublicMint,
      pricePerToken,
      overrides || {}
    );
  }
  override attach(address: string): NFTContractBase {
    return super.attach(address) as NFTContractBase;
  }
  override connect(signer: Signer): NFTContractBase__factory {
    return super.connect(signer) as NFTContractBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTContractBaseInterface {
    return new utils.Interface(_abi) as NFTContractBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTContractBase {
    return new Contract(address, _abi, signerOrProvider) as NFTContractBase;
  }
}