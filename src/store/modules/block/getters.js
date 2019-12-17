
import { formatNumber } from '@/util/format.js'

export const findAllBlocks = state => state.blocks

export const findAllBlocksCnt = state => state.blocksTotalSize

export const findBlockNumber = state => state.blockNumber

export const findTxHash = state => state.txHash

export const findAddress = state => state.address

export const findAccountInfo = state => {
  const info = state.address.accountInfo
  if (info) return {
    balance: formatNumber(info.balance),
  }
}
