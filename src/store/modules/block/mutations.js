import * as types from '../../mutation-types'

const mutations = {
  [types.FIND_ALL_BLOCKS](state, blocks) {
    state.blocks = blocks.items
    state.blocksTotalSize = blocks.totalSize
  },

  [types.FIND_BLOCK_NUMBER](state, blcokNumber) {
    state.blockNumber = blcokNumber
  },

  [types.FIND_TX_HASH](state, txHash) {
    state.txHash = txHash
  },

  [types.FIND_ADDRESS](state, address) {
    state.address = address
  },
}

export default mutations
