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
    if (param.ticket.footage) {
      state.txHash.footageSrc = param.footageSrc
    }
    state.txHash.ticketInfo = {
      blockNumber: guard(param.ticket.nonce),
      driverName : guard(param.ticket.driverName),
      licenseNo  : guard(param.ticket.licenseNo),
      plateNo    : guard(param.ticket.plateNo),
      contactInfo: guard(param.ticket.contactInfo),
      offense    : guard(param.ticket.offense),
      location   : guard(param.ticket.location),
      date       : guard(param.ticket.date),
      penalty    : guard(param.ticket.penalty),
    };
    state.txHash.paymentInfo = {
      ticketTxHash: guard(param.ticket.ticketTxHash),
      paymentDate : guard(param.ticket.paymentDate),
      paymentType : guard(param.ticket.paymentType),
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
