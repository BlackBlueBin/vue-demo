<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
  // 1. 引入组件
  import Search from './components/Search'
  import Main from './components/Main'

  export default {
    // 2. 映射组件标签
    components: {
      Search,
      UserMain : Main
    }
  }
</script>

<style>
</style>
