<template>
  <container-vue name="tx-hahs-app">
    <header-title-vue
      title="Transaction Hash"
      subTitle="1JcVUNtN3XLJLwtKQi4qhn2khqmeKuXL1H1JcVn2khqmeK…"
    ></header-title-vue>
    <info-vue :info="blockInfo" class="mt-32"></info-vue>
    <info-vue :info="tranInfo" class="mt-43"></info-vue>
    <div class="row mt-24 transaction">
      <tran-info-vue
        :headers="headers"
        :tranInfo="tran"
        type="tx"
      >
      </tran-info-vue>
    </div>
  </container-vue>
</template>
<script>
  import TranInfoVue from '@/components/common/TranInfoVue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'TxHash',
    components: {
      TranInfoVue
    },
    data(){
      return {
        blockInfoData: {
          title: 'Block Info',
          headers: [
            { key: 'blockNumber', title: 'Block Number', router: '/block-number'},
            { key: 'blockHash', title: 'Block Hash'},
            { key: 'timestamp', title: 'Timestamp'},
            { key: 'rootHash', title: 'State Root hash'},
          ],
        },
        tranInfoData: {
          title: 'Transaction Info',
          headers: [
            { key: 'tranHash', title: 'Transaction Hash'},
            { key: 'totalValue', title: 'Total Value(WIT)'},
          ],
        },
        headers: [
          'UTXO’s Transaction Hash (amount)',
          'Receiver’s Address',
          'Value(WIT)'
        ],
      }
    },
    created(){
      this.$store.dispatch( this.$types.FIND_TX_HASH, {})
    },
    computed:{
      ...mapGetters([
        'findTxHash'
      ]),
      blockInfo(){
        return Object.assign({}, this.blockInfoData, {
          item: this.findTxHash.blockInfo 
        })
      },
      tranInfo(){
        return Object.assign({}, this.tranInfoData, {
          item: this.findTxHash.tranInfo 
        })
      },
      tran(){
        return this.findTxHash.tran
      }
    },
  }
</script>