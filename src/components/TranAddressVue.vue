<template>
  <row-vue
    class="d-flex"
  >
    <col-vue cols="5">
      <div class="history-hash text">
        <span 
          :class="`ml-24 ${isPrimary('sender')} ${isSender? 'hand': ''}`"
          @click="isSender? $router.push({name: 'address', params: {address: item.sendAddress}}).catch(err => {}): ''"
        >
          {{  isSender? item.sendAddress: item.myAddress }}
        </span>
      </div>
    </col-vue>
    <col-vue cols="5">
      <span 
        :class="[isPrimary('receiver'), 'text', !isSender? 'hand': ''] " 
        @click="!isSender? $router.push({name: 'address', params: {address: item.receiveAddress}}).catch(err => {}): ''"
      >
        {{ isSender? item.myAddress: item.receiveAddress }}
      </span>
    </col-vue>
    <col-vue cols="2" class="text-align-right">
      <h5 class="mr-24 text"><b>{{ comma(item.value) }}</b></h5>
    </col-vue>
  </row-vue>
</template>

<script>
  import { formatNumber } from '../util/format.js'

  export default {
    props: ['item', 'type'],
    computed:{
      isSender(){
        return this.type === 'sender'
      },
    },
    methods:{
      isPrimary(type){
        return this.type === type ? 'text-primary': ''
      },
      comma(obj) {
	return formatNumber(obj);
      },
    }
  }
</script>
