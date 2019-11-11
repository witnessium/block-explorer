import Vue from 'vue'
import VueRouter from 'vue-router'
import Block from '@/views/Block'
import BlockNumber from '@/views/BlockNumber'
import TxHash from '@/views/TxHash'
import Address from '@/views/Address'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'block',
    component: Block,
    props: true
  },
  {
    path: '/block-number',
    name: 'block-number',
    component: BlockNumber,
  },
  {
    path: '/tx-hash',
    name: 'tx-hash',
    component: TxHash,
  },
  {
    path: '/address',
    name: 'address',
    component: Address,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
