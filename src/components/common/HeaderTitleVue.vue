<template>
  <row-vue class="mt-38">
    <div cols="12" class="text-navi">
      <h4 class="text">{{ title }}</h4>
      <h2 class="text">{{ subTitle }}</h2>
    </div>
  </row-vue>
</template>

<script>
  export default {
    name: 'headerTitleVue',
    props: ['title', 'subTitle'] 
  }
</script>

