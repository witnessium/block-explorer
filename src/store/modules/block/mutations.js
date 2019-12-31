import * as types from '../../mutation-types'

function guard(arg) {
  if (arg) return arg
  else return 'N/A'
}

const mutations = {
  [types.FIND_ALL_BLOCKS](state, blocks) {
    state.blocks = blocks.items
    state.blocksTotalSize = blocks.totalSize
  },

  [types.FIND_BLOCK_NUMBER](state, blockNumber) {
    state.blockNumber = blockNumber
  },

  [types.FIND_TX_HASH](state, param) {
    if (param.ticket.photo) {
      state.txHash.photoSrc = param.photoSrc
    }
    state.txHash.ticketInfo = {
      blockNumber: guard(param.ticket.nonce),
      owner:       guard(param.ticket.owner),
      license:     guard(param.ticket.license),
      car:         guard(param.ticket.car),
      phone:       guard(param.ticket.phone),
      violation:   guard(param.ticket.violation),
      occuredAt:   guard(param.ticket.occuredAt),
      location:    guard(param.ticket.location),
      amount:      guard(param.ticket.amount),
    };
    state.txHash.paymentInfo = {
      ticketTxHash: guard(param.ticket.ticketTxHash),
      payedAt: guard(param.ticket.payedAt),
      paymentDescription: guard(param.ticket.paymentDescription),
    };
  },

  [types.FIND_ADDRESS](state, param) {
    state.address = {
      licenseInfo: param.summary,
      tickets: param.tickets,
    };
    state.trans = param.tickets
  },
}

export default mutations
