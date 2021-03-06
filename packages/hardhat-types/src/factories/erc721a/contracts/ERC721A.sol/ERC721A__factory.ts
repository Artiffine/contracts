/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC721A,
  ERC721AInterface,
} from "../../../../erc721a/contracts/ERC721A.sol/ERC721A";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
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
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
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
    ],
    name: "ConsecutiveTransfer",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010f9380380620010f98339810160408190526200003491620001df565b8151620000499060029060208501906200006c565b5080516200005f9060039060208401906200006c565b5050600080555062000286565b8280546200007a9062000249565b90600052602060002090601f0160209004810192826200009e5760008555620000e9565b82601f10620000b957805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e9578251825591602001919060010190620000cc565b50620000f7929150620000fb565b5090565b5b80821115620000f75760008155600101620000fc565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013a57600080fd5b81516001600160401b038082111562000157576200015762000112565b604051601f8301601f19908116603f0116810190828211818310171562000182576200018262000112565b816040528381526020925086838588010111156200019f57600080fd5b600091505b83821015620001c35785820183015181830184015290820190620001a4565b83821115620001d55760008385830101525b9695505050505050565b60008060408385031215620001f357600080fd5b82516001600160401b03808211156200020b57600080fd5b620002198683870162000128565b935060208501519150808211156200023057600080fd5b506200023f8582860162000128565b9150509250929050565b600181811c908216806200025e57607f821691505b602082108114156200028057634e487b7160e01b600052602260045260246000fd5b50919050565b610e6380620002966000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d6578063b88d4fde146101e9578063c87b56dd146101fc578063e985e9c51461020f57600080fd5b80636352211e146101a857806370a08231146101bb57806395d89b41146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b31461015757806318160ddd1461016c57806323b872dd1461018257806342842e0e1461019557600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004610acb565b61024b565b60405190151581526020015b60405180910390f35b61011f6102e8565b60405161010e9190610b40565b61013f61013a366004610b53565b61037a565b6040516001600160a01b03909116815260200161010e565b61016a610165366004610b88565b6103d7565b005b600154600054035b60405190815260200161010e565b61016a610190366004610bb2565b6104a8565b61016a6101a3366004610bb2565b610685565b61013f6101b6366004610b53565b6106a5565b6101746101c9366004610bee565b6106b0565b61011f610718565b61016a6101e4366004610c09565b610727565b61016a6101f7366004610c5b565b6107d6565b61011f61020a366004610b53565b610820565b61010261021d366004610d37565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b0319831614806102ae57507f80ac58cd000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b806102e257507f5b5e139f000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6060600280546102f790610d6a565b80601f016020809104026020016040519081016040528092919081815260200182805461032390610d6a565b80156103705780601f1061034557610100808354040283529160200191610370565b820191906000526020600020905b81548152906001019060200180831161035357829003601f168201915b5050505050905090565b6000610385826108cb565b6103bb576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006103e2826106a5565b9050336001600160a01b03821614610434576103fe813361021d565b610434576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526006602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006104b3826108f2565b9050836001600160a01b0316816001600160a01b031614610500576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526006602052604090208054338082146001600160a01b0388169091141761056657610530863361021d565b610566576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0385166105a6576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156105b157600082555b6001600160a01b038681166000908152600560205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260046020526040902055600160e11b831661063c576001840160008181526004602052604090205461063a57600054811461063a5760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b6106a0838383604051806020016040528060008152506107d6565b505050565b60006102e2826108f2565b60006001600160a01b0382166106f2576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b6060600380546102f790610d6a565b6001600160a01b03821633141561076a576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6107e18484846104a8565b6001600160a01b0383163b1561081a576107fd8484848461096c565b61081a576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061082b826108cb565b610861576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061087860408051602081019091526000815290565b905080516000141561089957604051806020016040528060008152506108c4565b806108a384610a63565b6040516020016108b4929190610da5565b6040516020818303038152906040525b9392505050565b60008054821080156102e2575050600090815260046020526040902054600160e01b161590565b60008160005481101561093a57600081815260046020526040902054600160e01b8116610938575b806108c457506000190160008181526004602052604090205461091a565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906109a1903390899088908890600401610dd4565b602060405180830381600087803b1580156109bb57600080fd5b505af19250505080156109eb575060408051601f3d908101601f191682019092526109e891810190610e10565b60015b610a46573d808015610a19576040519150601f19603f3d011682016040523d82523d6000602084013e610a1e565b606091505b508051610a3e576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b604080516080810191829052607f0190826030600a8206018353600a90045b8015610aa057600183039250600a81066030018353600a9004610a82565b50819003601f19909101908152919050565b6001600160e01b031981168114610ac857600080fd5b50565b600060208284031215610add57600080fd5b81356108c481610ab2565b60005b83811015610b03578181015183820152602001610aeb565b8381111561081a5750506000910152565b60008151808452610b2c816020860160208601610ae8565b601f01601f19169290920160200192915050565b6020815260006108c46020830184610b14565b600060208284031215610b6557600080fd5b5035919050565b80356001600160a01b0381168114610b8357600080fd5b919050565b60008060408385031215610b9b57600080fd5b610ba483610b6c565b946020939093013593505050565b600080600060608486031215610bc757600080fd5b610bd084610b6c565b9250610bde60208501610b6c565b9150604084013590509250925092565b600060208284031215610c0057600080fd5b6108c482610b6c565b60008060408385031215610c1c57600080fd5b610c2583610b6c565b915060208301358015158114610c3a57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610c7157600080fd5b610c7a85610b6c565b9350610c8860208601610b6c565b925060408501359150606085013567ffffffffffffffff80821115610cac57600080fd5b818701915087601f830112610cc057600080fd5b813581811115610cd257610cd2610c45565b604051601f8201601f19908116603f01168101908382118183101715610cfa57610cfa610c45565b816040528281528a6020848701011115610d1357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610d4a57600080fd5b610d5383610b6c565b9150610d6160208401610b6c565b90509250929050565b600181811c90821680610d7e57607f821691505b60208210811415610d9f57634e487b7160e01b600052602260045260246000fd5b50919050565b60008351610db7818460208801610ae8565b835190830190610dcb818360208801610ae8565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152610e066080830184610b14565b9695505050505050565b600060208284031215610e2257600080fd5b81516108c481610ab256fea2646970667358221220b3e71ef95f97099a5b28ac9ab79128d2a7edbe8ca4400f35e0cf252b94013aa964736f6c63430008090033";

type ERC721AConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721A__factory extends ContractFactory {
  constructor(...args: ERC721AConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721A> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721A>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721A {
    return super.attach(address) as ERC721A;
  }
  override connect(signer: Signer): ERC721A__factory {
    return super.connect(signer) as ERC721A__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AInterface {
    return new utils.Interface(_abi) as ERC721AInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721A {
    return new Contract(address, _abi, signerOrProvider) as ERC721A;
  }
}
