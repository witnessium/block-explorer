<template>
  <row-vue class="d-flex" >
    <col-vue cols="5" class="text mr-sm-10">
      <div class="hash text" :style="!item.amt? 'width: 90% !important;': ''">
        <span 
          :class="`ml-24 text-primary text hand`"
          v-if="item.sendAddress"
          @click="$router.push({name: 'address', params: {address: item.sendAddress}})"
        >{{ item.sendAddress }}</span>
      </div>
      <div class="amount text" v-if="item.amt">
        ({{ item.amt }}WIT)
      </div>
    </col-vue>
    <col-vue cols="5" class="text-primary text" >
      <span
        class="hand" 
        @click="$router.push({name: 'address', params: {address: item.receiveAddress}})"
      >
          {{ item.receiveAddress }}
      </span>
    </col-vue>
    <col-vue cols="2" class="text-align-right">
      <h5 class="mr-24 text"><b>{{ item.value }}</b></h5>
    </col-vue>
  </row-vue>
</template>
<script>
export default {
  props: ['item']
}
</script>