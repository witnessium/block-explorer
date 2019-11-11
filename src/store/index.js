import Vue from 'vue'
import Vuex from 'vuex'
import block from './modules/block'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules : {
    block
  }
})

export default store
