import { TiltedFinanceEnvironment } from "./types"

const prodConstants: TiltedFinanceEnvironment = {
  tiltChain: {
    chainId: 1,
    chainSlug: 'mainnet',
    tiltDistributorAddress: '',
    tiltTokenAddress: '',
    tiltDistributorTimeLockAddress: '',
    tiltDistributorTimeLockProposerAddress: '',
    developerVestingWalletAddress: '',
    treasuryContractAddress: '',
  },
  eventsChain: {
    chainId: 1666600000,
    chainSlug: 'harmony',
    tiltEventsAddress: '',
    tiltEventsPublisherAddress: '',
    tiltMerkleRootEventsAddress: '',
    tiltMerkleRootEventsPublisherAddress: '',
  },
  batchesChain: {
    chainId: 137,
    chainSlug: 'polygon',
    tiltBatchRegistryAddress: '',
    tiltBatchRegistryPublisherAddress: '',
  },
  merkleTree: {
    blocksPerDistributionUpdate: 300000,
    blocksForNextProposalUpdate: 220000,
  },
  publicEndpoints: {
    merkleTreeAPI: 'https://merkle-distribution.tilted.finance',
    TiltEventsSubgraphAPI: 'https://api.thegraph.com/subgraphs/name/tiltedfinance/tiltedfinance-accounts',

    tiltedInterface: 'https://app.tilted.finance',
    tiltedAPI: 'https://api.tilted.finance',

    tiltedScanAPI: 'https://api.tiltedscan.io',
    tiltedScanInterface: 'https://tiltedscan.io',
  }
}

export default prodConstants;