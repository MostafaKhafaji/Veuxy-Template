<template>
  <Sidebar />
  <!-- <Navbar /> -->

  <router-view />
</template>
<script>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";

export default {
  props: [],
  components: { Sidebar, Navbar },
  setup() {},
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
</style>
