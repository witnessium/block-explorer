<template>
  <container-vue name="tx-hahs-app">
    <!-- 해쉬 어디서 가지고오는지 모르겠어요... -->
    <header-title-vue
      title="Transaction Hash"
      :subTitle="$route.params.txHash||'37df93d26b1741a0efa601320ebc9b1e54a7cc7db1f43d92bd3728695eaa5eb5'"
    ></header-title-vue>
    <row-vue class="info">
      <col-vue cols="12" class="mt-12">
	<row-vue>
          <col-vue cols="3" class="col-sm-5">
            <ul class="header pr-md-8 pr-sm-2" >
              <li id="photo-desc" class="text">Photo</li>
            </ul>
          </col-vue>
          <col-vue cols="9" class="col-sm-7">
            <ul>
              <li id="photo" class="text">
		<img v-bind:src="photoSrc">
              </li>
            </ul>
          </col-vue>
	</row-vue>
      </col-vue>
    </row-vue>
    <info-vue :info="ticketInfo" class="mt-43"></info-vue>
    <info-vue :info="paymentInfo" class="mt-43"></info-vue>
  </container-vue>
</template>

<script>
  import TranInfoVue from '@/components/common/TranInfoVue'
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'TxHash',
    data(){
      return {
        ticketInfoData: {
          title: 'Ticket Info',
          headers: [
            { key: 'blockNumber', title: 'Block Number', router: 'block-number', params: [{key: 'blockNumber', name: 'blockNumber'}]},
            { key: 'owner', title: 'Owner Name'},
            { key: 'license', title: 'License Number', router: 'license', params: [{key: 'license', name: 'license'}]},
            { key: 'car', title: 'Car Number'},
            { key: 'phone', title: 'Phone Number'},
            { key: 'violation', title: 'Violation'},
            { key: 'occuredAt', title: 'Occured At'},
            { key: 'location', title: 'Location'},
            { key: 'amount', title: 'Amount'},
          ],
        },
        paymentInfoData: {
          title: 'Payment Info',
          headers: [
            { key: 'ticketTxHash', title: 'Ticket Tx Hash'},
            { key: 'payedAt', title: 'Payed At'},
            { key: 'paymentDescription', title: 'Description'},
          ],
        },
      }
    },
    created(){
      this.$store.dispatch( this.$types.FIND_TX_HASH, {
	txHash: this.$route.params. txHash
      })
    },
    computed:{
      ...mapGetters([
        'findTxHash'
      ]),
      ...mapState({
	photoSrc: state => state.block.txHash.photoSrc,
      }),
      ticketInfo(){
        return Object.assign({}, this.ticketInfoData, {
          item: this.findTxHash.ticketInfo
        })
      },
      paymentInfo(){
        return Object.assign({}, this.paymentInfoData, {
          item: this.findTxHash.paymentInfo
        })
      },
    },
  }
</script>

<style lang="scss">
  .info{
    ul{
      box-shadow: 0 rem(1.5) $gray;
      line-height: 1.71;
      list-style-type: none;
      position: relative;
      margin: 0;
      padding: 0;

      &.header{
        font-weight: 700;
      }
      li{
        position: relative;
        display: block;
        padding: rem(10.5) rem(24);
        background-color: $white;
        border-bottom: 1px solid $gray-300;
        border-right: rem(1) solid$light-gray;;
        border-left: rem(1) solid $light-gray;;
      }
      li#photo-desc{
        height: 250px;
        line-height:220px;
      }
      li#photo{
        height: 250px;
        img{
          max-height:230px;
          border:1px solid 999;
          filter:drop-shadow(5px 5px 5px #999);
        }
      }
    }

    .badge{
      width: rem(10);
      height: rem(17);
      background: $primary;
      transform: skewx(10deg);
      float: left;
      margin-right: rem(8);
      margin-left: rem(12);
    }
  }
</style>
