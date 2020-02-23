<template src='../templates/instances-panel.html'></template>
<style scoped src='../css/instances-panel.css'></style>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async mounted() {
    this.fetchTrades();
  },
  computed: mapGetters(["currency", "allTrades"]),
  methods: mapActions(["fetchTrades"])
};
</script>