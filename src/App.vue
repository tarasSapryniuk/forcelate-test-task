<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(48, 54, 73);
}
</style>

<script>
import Navbar from "@/router/layout/navbar/Navbar";

export default {
  name: "App",
  components: { Navbar },
};
</script>
