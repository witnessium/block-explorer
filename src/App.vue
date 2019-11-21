<template>
  <div id="app">
    <header>
        <div class="navbar">
          <img src="@/assets/images/witnessium-logo.png" class="logo" @click="$router.push('/')"/>
        </div>
        <nav class="navbar-collapse"> 
          <ul>
            <li @click="$router.push('/')">
              <a :class="isActive('block')" >Blocks</a>
            </li>
            <li @click="$router.push('/tx-hash')">
              <a :class="isActive('tx-hash')" >Transactions</a>
            </li>
            <li @click="$router.push('/address')" :key="$route.fullPath">
              <a :class="isActive('address')" >Addresses</a>
            </li>
          </ul>
          <div class="float-right search">
            <div class="input-icons"> 
              <icon-vue name="search"></icon-vue>
              <input class="input" type="text" placeholder="Input Text">
            </div> 
          </div>
        </nav>
    </header>
    <transition name="fade">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    isActive(name){
      return this.$route.name  === name? 'active': ''
    }
  }
}
</script>

<style lang="scss" scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  header{
    line-height: 1.71;
    height: rem(56);
    background-color: $white;
    box-shadow: 0 rem(2) rem(4) 0 rgba(0, 28, 88, 0.2);
    margin-bottom: rem(4);

    .navbar{
      float: left;
      height: rem(56)!important;
    }

    .navbar-collapse{
      display: block!important;
      height: auto!important;
      padding-bottom: 0;
      overflow: visible!important;
      visibility: visible!important
    }

    .logo {
      cursor: pointer;
      width: rem(40);
      height: rem(26);
      margin: rem(15) rem(56) rem(15) rem(32);
    }

    ul {
      height: rem(56)!important;
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      float: left;
    
      &:before{
        display: table;
        content: " ";
      }

      &:after{
        display: table;
        content: " ";
        clear: both;
      }

      li {
        cursor: pointer;
        height: rem(56)!important;
        float: left;
        margin-right: rem(32);
        padding-bottom: rem(14);
        padding-top: rem(18);
        
        a {
          color: $gray;
          text-align: center;
          text-decoration: none;
          font-weight: 700;

          &.active{
            border-bottom: rem(4) solid $primary;
            padding-bottom: rem(14);
            color: $black !important;
          }
        }
      }
    }

    /** 헤더 검색 인풋 **/
    .search{
      margin-right: rem(180);
      margin-top: rem(8);
      margin-bottom: rem(8); 

      .input-icons { 
        .icon { 
          position: absolute;
          margin-left: rem(290);
          margin-top: rem(12);
          cursor: pointer;
        }

        input{
          height: rem(40);
          width: rem(323);
          background-color: $gray-100;
        }
      } 
    }

  }
</style>