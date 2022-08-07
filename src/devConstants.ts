import { TiltedFinanceEnvironment } from "./types"

const devConstants: TiltedFinanceEnvironment = {
  tiltChain: {
    chainId: 42,
    chainSlug: 'kovan',
    tiltDistributorAddress: '0xae776beb6a8e7907796ca425c921fd350171c370',
    tiltTokenAddress: '0x031852B8dE042B3f40C4012F085De0C203F173CA',
    tiltDistributorTimeLockAddress: '',
    tiltDistributorTimeLockProposerAddress: '',
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
    blocksPerDistributionUpdate: 300000,
    blocksForNextProposalUpdate: 220000,
  },
  publicEndpoints: {
    merkleTreeAPI: 'https://merkle-distribution-dev.tilted.finance',
    TiltEventsSubgraphAPI: 'https://api.thegraph.com/subgraphs/name/tiltedfinance/tiltedfinance-accounts',

    tiltedInterface: 'https://appdev.tilted.finance',
    tiltedAPI: 'https://apidev.tilted.finance',

    tiltedScanAPI: 'https://apidev.tiltedscan.io',
    tiltedScanInterface: 'https://dev.tiltedscan.io',
  }
}

export default devConstants;