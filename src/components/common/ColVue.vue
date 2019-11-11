<template>
  <div :class="getClass()">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ColVue',
    props: ['cols'],
    methods: {
      getClass(){
        return this.cols? `col-md-${this.cols} col-${this.cols}`: ''
      }
    }
  }
</script>