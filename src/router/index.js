import Vue from 'vue'
import VueRouter from 'vue-router'
import Block from '@/views/Block'
import BlockNumber from '@/views/BlockNumber'
import TxHash from '@/views/TxHash'
import Address from '@/views/Address'
import NewTicket from '@/views/NewTicket'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'block',
    component: Block,
    props: true
  },
  {
    path: '/new',
    name: 'new-ticket',
    component: NewTicket,
    props: true
  },
  {
    path: '/block-number/:blockNumber?',
    name: 'block-number',
    component: BlockNumber,
  },
  {
    path: '/tx-hash/:txHash?',
    name: 'tx-hash',
    component: TxHash,
  },
  {
    path: '/license/:license?',
    name: 'license',
    component: Address,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
