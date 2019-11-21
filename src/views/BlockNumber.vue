<template>
  <container-vue name="block-number-app">
    <header-title-vue
      title="Block Number"
      :subTitle="$route.params.blockNumber"
    ></header-title-vue>
    <info-vue :info="blockInfo" class="mt-31"></info-vue>

    <div class="row mt-50 transaction">
      <h2 class="mb-7">Transaction</h2>
      <tran-info-vue 
        v-for="(tran,idx) in tranList"
        :key="idx"
        :tranInfo="tran"
        :headers="headers"
        type="blockNumber"
      ></tran-info-vue>

      <paginate-vue 
        :pageCount="totalSize"
        v-model="page"
        :pageRange="3"
      ></paginate-vue>  
    </div>
  </container-vue>
</template>
<script>
  import TranInfoVue from '@/components/common/TranInfoVue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      TranInfoVue
    },
    created(){  
      this.$store.dispatch( this.$types.FIND_BLOCK_NUMBER, {})
    },
    computed:{
      ...mapGetters([
        'findBlockNumber'
      ]),
      blockInfo(){
        return Object.assign({}, this.info, {
          item: this.findBlockNumber.blockInfo 
        })
      },
      tranList(){
        return this.$paginate(this.findBlockNumber.trans, this.page, this.itemSize)
      },
      totalSize(){
        return Math.ceil(this.findBlockNumber.trans.length/ this.itemSize)
      },
    },
    data(){
      return {
        page: 1,
        itemSize: 15,
        /** Block Info **/
        info: {
          title: 'Block Info',
          headers: [
            { key: 'blockHash', title: 'Block Hash'},
            { key: 'blockNumber', title: 'Block Number'},
            { key: 'timestamp', title: 'Timestamp'},
            { key: 'numberOfTX', title: 'number of Tx'},
            { key: 'rootHash', title: 'State Root hash'},
            { key: 'prevHash', title: 'Previous hash', router: 'tx-hash', params: [{key: 'prevHash', name: 'txHash'}]},
          ],
        },
        headers: [
          'Sender’s Address',
          'Receiver’s Address',
          'Value(WIT)',
        ],
        
      }
    }
    
  }
</script>