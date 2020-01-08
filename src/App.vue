<template>
  <div id="app">
    <!-- header  -->
    <my-header v-if="$route.path !== '/login' && $route.path !== '/register'"></my-header>
    <router-view></router-view>
    <!-- footer -->
    <my-search v-if="$route.path !== '/login' && $route.path !== '/register'"></my-search>
    <my-list v-if="$route.path !== '/login' && $route.path !== '/register'"></my-list>
    <my-footer v-if="$route.path !== '/login' && $route.path !== '/register'"></my-footer>
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
