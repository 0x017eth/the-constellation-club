import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TheConstellationClub',
  tokenName: 'Constellation Card',
  tokenSymbol: 'TCC',
  hiddenMetadataUri: 'ipfs://QmQBsKSGXVNnXxbRafGwxwfnWVDwLpZhhdZj9PCkur7SYV/hidden.json',
  maxSupply: 1200,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.09,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.15,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x55BD2b43726C7755423d775275a2900c4811Af29",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
