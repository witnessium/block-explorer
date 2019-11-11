<template>
  <row-vue
    class="d-flex"
  >
    <col-vue cols="5">
      <div class="history-hash text">
        <span 
          :class="`ml-24 ${isPrimary('sender')}`"
        >{{  isSender? item.sendAddress: item.myAddress }}</span>
      </div>
    </col-vue>
    <col-vue cols="5">
      <span :class="[isPrimary('receiver'), 'text']" >{{ isSender? item.myAddress: item.receiveAddress }}</span>
    </col-vue>
    <col-vue cols="2" class="text-align-right">
      <h5 class="mr-24 text"><b>{{ item.value }}</b></h5>
    </col-vue>
  </row-vue>
</template>

<script>
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
      }
    }
  }
</script>
