<template>
  <div id="app">
    <topnav></topnav>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import topnav from "@/components/Nav";

export default {
  components: {
    topnav
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .view {
    padding-top: 40px;
  }
}
</style>
