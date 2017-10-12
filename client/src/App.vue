<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/_global.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  background-color: $cream !important;
}

.auth-card {
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.p-0 {
  padding: 0;
}

.w-100 {
  width: 100;
}
</style>
