export const mockENSName = ({ id = '', ...ensName } = {}) => ({
  id,
  account: mockAccount({
    id,
    ...ensName.account,
  }),
})

export const mockAccount = ({ id = '', ...account } = {}) => ({
  id,
  ethBalance: '0',
  tokenBalance: '0',
  ...account,
  broadcaster: mockBroadcaster({
    id,
    ...account.broadcaster,
  }),
  delegator: mockDelegator({
    id,
    ...account.delegator,
  }),
  transcoder: mockTranscoder({
    id,
    ...account.transcoder,
  }),
})

export const mockBroadcaster = ({ id = '', ...broadcaster } = {}) => ({
  deposit: '0',
  id,
  jobs: [],
  withdrawBlock: '0',
  ...broadcaster,
})

export const mockDelegator = ({ id = '', ...delegator } = {}) => ({
  allowance: '0',
  bondedAmount: '0',
  id,
  delegateAddress: '',
  delegatedAmount: '0',
  fees: '0',
  lastClaimRound: '0',
  pendingFees: '0',
  pendingStake: '0',
  startRound: '0',
  status: 'Unbonded',
  withdrawRound: '0',
  ...delegator,
})

export const mockTranscoder = ({ id = '', ...transcoder } = {}) => ({
  active: false,
  feeShare: '0',
  id,
  lastRewardRound: '0',
  pricePerSegment: '0',
  pendingRewardCut: '0',
  pendingFeeShare: '0',
  pendingPricePerSegment: '0',
  rewardCut: '0',
  status: '',
  totalStake: '0',
  ...transcoder,
})