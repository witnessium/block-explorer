import * as types from '../../mutation-types'
import blockData from '../../blockData'

const findAllBlocks = ({commit}) => {
  let i = 0;
  let blocks = Array.from({length: 10000}, () => {
    i ++;
    return {
      blockNumber: Number(90000) + i,
      blockHash: Math.random().toString(36) + Math.random().toString(36) + Math.random().toString(36) + Math.random().toString(36)+ Math.random().toString(36)+ Math.random().toString(36),
      timestamp: '2019-09-03 14:26:25',
      numberOfTx: i
    }
  })
  commit(types.FIND_ALL_BLOCKS, blocks)
}

const findBlockNumber = ({commit}, blcokNumber) => {
  commit(types.FIND_BLOCK_NUMBER, Object.assign({}, blcokNumber, blockData.blockNumberData))
}

const findTxHash = ({commit}, txHash) => {
  commit(types.FIND_TX_HASH, Object.assign({}, txHash, blockData.txHashData))
}

const findAddress = ({commit}, address) => {
  commit(types.FIND_ADDRESS, Object.assign({}, address, blockData.addressData))
}

export default {
  [types.FIND_ALL_BLOCKS]: findAllBlocks,
  [types.FIND_BLOCK_NUMBER]: findBlockNumber,
  [types.FIND_TX_HASH]: findTxHash,
  [types.FIND_ADDRESS]: findAddress,
}