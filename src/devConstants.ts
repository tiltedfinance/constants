import { TiltedFinanceEnvironment } from "./types"

const devConstants: TiltedFinanceEnvironment = {
  tiltChain: {
    chainId: 42,
    chainSlug: 'kovan',
    tiltDistributorAddress: '0xee80a0cffa49b0e6aa9504eb3e1a9d86e5fc44aa',
    tiltTokenAddress: '0x031852B8dE042B3f40C4012F085De0C203F173CA',
    tiltDistributorTimeLockAddress: '0xCfd672B265C81f7eC0898E6Fea5B64Ac8D46FCDb',
    tiltDistributorTimeLockProposerAddress: '0x8ed19f62a263398d49b80689d1d31624e7ebeac0',
    developerVestingWalletAddress: '',
    treasuryContractAddress: '',
  },
  eventsChain: {
    chainId: 1666600000,
    chainSlug: 'harmony',
    tiltEventsAddress: '0x7b5b5c0A9Aa22504e8Dd25177ad16f1CC69A0164',
    tiltEventsPublisherAddress: '0xb241a2882c624a31f94faecb7991ba33ca01d1e6',
  },
  batchesChain: {
    chainId: 80001,
    chainSlug: 'polygon-mumbai',
    tiltBatchRegistryAddress: '0xFBAE238BCD58A416b3eab8B823b5599eC306fe4f',
    tiltBatchRegistryPublisherAddress: '0xb5128c483fa56d15613d7afd8310cd29e9486a17',
  },
  merkleTree: {
    blocksPerDistributionUpdate: 50000, // 27 hours
    blocksForNextProposalUpdate: 50000,
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