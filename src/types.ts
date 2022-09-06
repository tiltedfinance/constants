/**
 * Contains all the addresses, endpoints and constants for a TiltedFinance environment
 *
 * @interface TiltedFinanceEnvironment
 */
export interface TiltedFinanceEnvironment {

  /** Information about the chain where TILT tokens are minted and distributed */
  tiltChain: {

    /** Chain ID */
    chainId: number

    /** Chain Slug (example: mainnet, kovan) */
    chainSlug: string

    /** Address of the TiltDistributor contract */
    tiltDistributorAddress: string

    /** Address of the TILT ERC-20 token contract */
    tiltTokenAddress: string

    /** Address of the time lock contract for TiltDistributor */
    tiltDistributorTimeLockAddress: string

    /** Address of the proposer for TiltDistributorTimeLock */
    tiltDistributorTimeLockProposerAddress: string

    /** Address of the developer vesting contract */
    developerVestingWalletAddress: string

    /** Address of governance treasury contract */
    treasuryContractAddress: string
  },

  /** Information about the chain where player events are stored */
  eventsChain: {

    /** Chain ID */
    chainId: number

    /** Chain Slug (example: mainnet, kovan) */
    chainSlug: string

    /** Address of the TiltEvents contract */
    tiltEventsAddress: string

    /** Address of the event publisher for TiltEvents */
    tiltEventsPublisherAddress: string

    /** Address of the TiltMerkleRootEvents contract */
    tiltMerkleRootEventsAddress: string

    /** Address of the event publisher for TiltMerkleRootEvents */
    tiltMerkleRootEventsPublisherAddress: string
  },

  /** Information about the chain where player events BATCHES are stored */
  batchesChain: {

    /** Chain ID */
    chainId: number

    /** Chain Slug (example: mainnet, kovan) */
    chainSlug: string

    /** Address of the TiltBatchRegistry contract */
    tiltBatchRegistryAddress: string

    /** Address of the event publisher for TiltBatchRegistry */
    tiltBatchRegistryPublisherAddress: string
  }

  /* Merkle tree build constants */
  merkleTree: {
    
    /* Blocks needed for a for merkle root update */
    blocksPerDistributionUpdate: number
    
    /* Blocks needed for a for proposing a merkle root update */
    blocksForNextProposalUpdate: number
  }

  /* List of public urls */
  publicEndpoints: {

    /* API for merkle proofs */
    merkleTreeAPI: string,
    /* API for subgraph querying */
    TiltEventsSubgraphAPI: string,

    /* Interface for players */
    tiltedInterface: string,
    /* API for mining matches and verifying address */
    tiltedAPI: string,

    /* API for TiltedFinance scanner */
    tiltedScanAPI: string,
    /* Interface for TiltedFinance scanner */
    tiltedScanInterface: string,
  }
}