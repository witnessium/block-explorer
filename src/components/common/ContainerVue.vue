<template> 
  <div class="container" :id="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ContainerVue',
    props: ['name']
  }
</script>