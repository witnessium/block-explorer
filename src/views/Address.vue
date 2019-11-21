<template>
  <container-vue name="address-app">
    <header-title-vue
      title="Account Address"
      :subTitle="$route.params.address|| '3BEj4fH3kTA4iS5Dtm8JKXW9MBiA9pqD9Y'"
    ></header-title-vue>
    
    <info-vue :info="accountInfo" class="mt-31"></info-vue>
    <div class="row mt-50 transaction">
      <h4 class="mb-2">Transaction History</h4>
      <tran-info-vue 
        v-for="(tran,idx) in tranList"
        :key="idx"
        :tranInfo="tran"
        :headers="headerInfo[tran.type]"
        type="address"
      ></tran-info-vue>
    </div>
   <paginate-vue 
      :pageCount="totalSize"
      v-model="page"
      :pageRange="3"
    ></paginate-vue>
  </container-vue>
</template>
<script>
  import TranInfoVue from '@/components/common/TranInfoVue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Address',
    components: {
      TranInfoVue
    },
    data() {
      return {
        page: 1,
        itemSize: 15,
        accountInfoData: {
          title: 'Account Info',
          headers: [
            {key: 'balance', title: 'Balance(WIT)'}
          ],
        },
        headerInfo: {
          sender: [
            'Sender’s Address',
            'My Address',
            'Value(WIT)'
          ],
          receiver: [
            'My Address',
            'Receiver’s Address',
            'Value(WIT)'
          ]
        },
      }
    },
    created(){
      this.$store.dispatch( this.$types.FIND_ADDRESS, {})
    },
    computed:{
      ...mapGetters([
        'findAddress'
      ]),
      accountInfo(){
        return Object.assign({}, this.accountInfoData, {
          item: this.findAddress.accountInfo 
        })
      },
      tranList(){
        return this.$paginate(this.findAddress.trans, this.page, this.itemSize)
      },
      totalSize(){
        return Math.ceil(this.findAddress.trans.length/ this.itemSize)
      },
    },
  }
</script>