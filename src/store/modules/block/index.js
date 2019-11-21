import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)


const state = {
  blocks: [],
  blocksTotalSize: 0,
  blockNumber: {
    blockInfo: {},
    trans: []
  },
  txHash: {
    blcokInfo: {},
    tranInfo: {},
    tran: {}
  },
  address: {
    accountInfo: {},
    trans: []
  }
}

const module = {
  state,
  mutations,
  actions,
  getters
}

export default module;
