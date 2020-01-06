<template>
  <col-vue cols="12" class="mt-16 tran-dtl ">
    <row-vue >
      <col-vue cols="9" style="margin: 0 0;" class="col-sm-7">
        <row-vue style="border: none;border-bottom: 0.07143rem solid #b7b7b7;"  class="text" :class="getTilteBg">
          <col-vue cols="12" :class="type === 'tx'? 'col-sm-12 text': ''">
            <span class="ml-24 h5" >{{ getTitle() }}</span>
            <span
              class="ml-23 text-primary tran-hash hand"
              @click="goRouter(tranInfo)"
            >{{ tranInfo.tranHash|| tranInfo.sendAddress }}</span> 
          </col-vue>
        </row-vue>
      </col-vue>
      <col-vue cols="3" style="margin: 0 0;" class="col-sm-5">
        <row-vue style="border: none;border-bottom: 0.07143rem solid #b7b7b7;"  class="text" :class="getTilteBg">
          <col-vue cols="12" class="text-align-right" v-if="tranInfo.amount">
            <h5 class="mr-24">Total Value {{ comma(tranInfo.amount) }}</h5>
          </col-vue>
        </row-vue>
      </col-vue>
    </row-vue>

    <row-vue :class="`bg-gray ${type === 'address'? 'text-black': ''} `">
      <col-vue
        v-for="(header, idx) in headers"
        :key="idx"
        :cols="getCols(idx)"
      >
        <h5 :class="[getColClass(idx), 'text']">{{ header }}</h5>
      </col-vue>
    </row-vue>
    
    <!--  Address List -->
    <template v-if="type === 'address'">
      <tran-address-vue 
        v-for="(item, tranIdx) in tranInfo.items"
        :key="`tran${tranIdx}`"
        :item="item"
        :type="tranInfo.type"
      ></tran-address-vue>
    </template>

    <!-- BlockNumber List -->
    <template v-else-if="type === 'blockNumber'">
      <tran-block-number-vue 
        v-for="(item, tranIdx) in tranInfo.items"
        :key="`tran${tranIdx}`"
        :item="item"
      ></tran-block-number-vue>  
    </template>
    
    <!-- Tx Info -->
    <template v-else-if="type === 'tx'">
      <tran-tx-vue 
        v-for="(item, tranIdx) in tranInfo.items"
        :key="`tran${tranIdx}`"
        :item="item"
      ></tran-tx-vue>  
    </template>
  </col-vue>
</template>

<script>
  import TranBlockNumberVue from '@/components/TranBlockNumberVue'
  import TranTxVue from '@/components/TranTxVue'
  import TranAddressVue from '@/components/TranAddressVue'

  import { formatNumber } from '../../util/format.js'

  export default {
    components: {
      TranBlockNumberVue,
      TranTxVue,
      TranAddressVue
    },
    props: ['tranInfo', 'headers', 'type'],
    computed:{
      isPrimary(){
        return this.type === 'sender'? '': 'text-primary'
      },
      getTilteBg(){
        return !this.tranInfo.payedAt? '': ( this.tranInfo. payedAt? 'tran-sender': 'tran-receiver')
      }
    },
    methods: {
      getTitle(){
        return this.type === 'tx'? 'Sender\'s Address': 'Transaction Hash'
      },
      
      getCols(idx){
        return idx === (this.headers.length -1) ? '2' :'5'
      },
      getColClass(idx){
        return idx === 0? 'ml-24': ( idx === 2? 'mr-24 text-align-right': '' )
      },
      goRouter(info){
        if ( ['address', 'blockNumber'].indexOf(this.type) > -1){
          this.$router.push({name: 'tx-hash', params: {txHash: info.tranHash}})
        }else if ( this.type === 'tx'){
          this.$router.push({name: 'address', params: {address: info.sendAddress}})

        }
      },
      comma(obj) {
	return formatNumber(obj);
      },
    }
  }
</script>
