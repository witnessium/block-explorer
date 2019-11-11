<template>
  <row-vue class="info">
    <col-vue cols="12">
      <div class="badge"></div><span class="h4">{{ info.title }}</span>
    </col-vue>
    <col-vue cols="12" class="mt-12">
      <row-vue>
        <col-vue cols="2" class="col-sm-5">
          <ul class="header pr-md-8 pr-sm-2" >
            <li
              v-for="(header, idx) in info.headers"
              :key="idx"
              class="text"
            >
              {{header.title}}
            </li>
          </ul>
        </col-vue>
        <col-vue cols="10" class="col-sm-7">
          <ul>
            <li
              v-for="(header, idx) in info.headers"
              :key="idx"
              class="text"
            >
              <span @click="goRouter(header.router)" :class="`${header.router ? 'text-primary text-decoration-underline' : ''}`">{{info.item[header.key]}}</span>
            </li>
          </ul>
        </col-vue>  
      </row-vue>
    </col-vue>
  </row-vue>
</template>

<script>
  export default {
    name: 'info-vue',
    props: ['info'],
    methods: {
      goRouter(routerName){
        if (routerName)
          this.$router.push(routerName)
      }
    }
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