<template src='../templates/table-trades.html'></template>
<style scoped src='../css/table-trades.css'></style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      headers: [
        "Buy exchange pair",
        "Buy price",
        "Sell exchange",
        "Sell price",
        "Trade amount",
        "Arb%[Free%]",
        "Exp.profit <br>",
        "Exp.fees <br>",
        "Adj."
      ],
      items: [
        {
          buy_exchange_pair: "HITBTC/IOTA-",
          sell_exchange: "BINANCE/IOTA-",
          arb: "1.01%[0.15%]",
          exp_profit: 1,
          exp_fees: 0.2
        },
        {
          buy_exchange_pair: "BITFINEX/ZEC-",
          sell_exchange: "KRAKEN/ZEC-",
          arb: "0.27%[0.15%]",
          exp_profit: 0.2,
          exp_fees: 0.2
        }
      ]
    };
  },
  methods: mapActions(["fetchTrades"]),
  computed: mapGetters(["allTrades", "currency"]),
  async mounted() {
    this.fetchTrades();
  },
  filters: {
    removePeriods: value => {
      return value.replace(/BTC\w|\w_BTC/g, "");
    }
  }
};
</script>