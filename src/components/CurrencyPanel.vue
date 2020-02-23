<template src="../templates/currency-panel.html"></template>
<style scoped src="../css/currency-panel.css"></style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchCurrensies", "fetchTrades"]),
    mountSelectDom() {
      document.querySelector(".dropdown-el").addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector(".dropdown-el").classList.toggle("expanded");

        document.querySelector(
          `#${e.target.getAttribute("for")}`
        ).checked = true;
      });
    },
    handleClick(currency) {
      this.fetchTrades(currency);
    }
  },
  async mounted() {
    this.mountSelectDom();
    this.fetchCurrensies();
  },
  computed: mapGetters(["allCurrencies"]),
  filters: {
    removePeriods: value => {
      return value.replace(/BTC\w|\w_BTC/g, "");
    }
  }
};
</script>