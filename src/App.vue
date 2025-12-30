<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    document.documentElement.classList.add('dark')
  }
}
</script>
<style lang="css">
html.dark {
  background: #141414;
  transition: background-color 0.2s;
}
</style>