import { TiltedFinanceEnvironment } from "./types"

const devConstants: TiltedFinanceEnvironment = {
  tiltChain: {
    chainId: 5,
    chainSlug: 'goerli',
    tiltDistributorAddress: '0xda02F7454d84f8A8D246606fC1be95f4808ee0FF',
    tiltTokenAddress: '0xA7e5Af8b7f447B3B68bEeCb9A9795Da158697b1b',
    tiltDistributorTimeLockAddress: '0x26789f598C5BDb67ef05eF7859788D4f55612d95',
    tiltDistributorTimeLockProposerAddress: '0x2245e690fa1dbcf3fc49182e19298545d513aa0f',
    developerVestingWalletAddress: '',
    treasuryContractAddress: '',
  },
  eventsChain: {
    chainId: 1666600000,
    chainSlug: 'harmony',
    tiltEventsAddress: '0x7b5b5c0A9Aa22504e8Dd25177ad16f1CC69A0164',
    tiltEventsPublisherAddress: '0xb241a2882c624a31f94faecb7991ba33ca01d1e6',
    tiltMerkleRootEventsAddress: '0x26f4A59dbfa18757C38c8bb02A8de5447D946b7B',
    tiltMerkleRootEventsPublisherAddress: '0x72ad9bd6fa5711da0e519f250c219f5e82c141e5',
  },
  batchesChain: {
    chainId: 80001,
    chainSlug: 'polygon-mumbai',
    tiltBatchRegistryAddress: '0xFBAE238BCD58A416b3eab8B823b5599eC306fe4f',
    tiltBatchRegistryPublisherAddress: '0xb5128c483fa56d15613d7afd8310cd29e9486a17',
  },
  merkleTree: {
    blocksPerDistributionUpdate: 5555, // 3 hours
    blocksForNextProposalUpdate: 5555,
  },
  publicEndpoints: {
    merkleTreeAPI: 'https://merkletree-dev.tilted.finance',
    TiltEventsSubgraphAPI: 'https://api.thegraph.com/subgraphs/name/tiltedfinance/tiltedfinance-accounts',

    tiltedInterface: 'https://appdev.tilted.finance',
    tiltedAPI: 'https://apidev.tilted.finance',

    tiltedScanAPI: 'https://apidev.tiltedscan.io',
    tiltedScanInterface: 'https://dev.tiltedscan.io',
  }
}

export default devConstants;