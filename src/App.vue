<template>
  <div id="app">
    <!-- header  -->
    <my-header></my-header>
    <router-view></router-view>
    <!-- footer -->
    <my-search></my-search>
    <my-list></my-list>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
}
</style>
