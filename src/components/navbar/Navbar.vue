<template src="./navbar.html"></template>
<style scoped src="./navbar.css"></style>

<script>
export default {
  data() {
    return {
      nav_items: [
        { value: "Dashboard", address: "/dashboard" },
        { value: "Instances", address: "/instances" },
        { value: "Pairs", address: "/pairs" },
        { value: "About", address: "/about" },
        { value: "Help", address: "/help" },
        { value: "Contact", address: "/contact" }
      ]
    };
  }
};
</script>
