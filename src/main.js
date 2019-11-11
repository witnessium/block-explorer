import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as types from '@/store/mutation-types'

import './assets/css/global.scss'
import 'babel-polyfill'

import IconVue from '@/components/common/IconVue'
import ContainerVue from '@/components/common/ContainerVue'
import RowVue from '@/components/common/RowVue'
import ColVue from '@/components/common/ColVue'
import HeaderTitleVue from '@/components/common/HeaderTitleVue'
import InfoVue from '@/components/common/InfoVue'
import PaginateVue from '@/components/common/PaginateVue'


Vue.config.productionTip = false

Vue.component(IconVue.name, IconVue)
Vue.component(ContainerVue.name, ContainerVue)
Vue.component(RowVue.name, RowVue)
Vue.component(ColVue.name, ColVue)
Vue.component(HeaderTitleVue.name, HeaderTitleVue)
Vue.component(InfoVue.name, InfoVue)
Vue.component(PaginateVue.name, PaginateVue)

Vue.prototype.$eventHub = new Vue()
Vue.prototype.$types = types

Vue.prototype.$paginate = (array, index, size)  => {
  index = Math.abs(parseInt(index))
  index = index > 0 ? index - 1 : index
  size = parseInt(size);
  size = size < 1 ? 1 : size

  return [...(array.filter((value, n) => {
      return (n >= (index * size)) && (n < ((index+1) * size))
  }))]
}


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
