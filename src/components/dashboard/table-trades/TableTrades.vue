<template src='./table-arbitrage.html'></template>
<style scoped src='./table-arbitrage.css'></style>

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
        "Arb %[Free%]",
        "Exp.profit <br> USD",
        "Exp.fees <br> USD",
        "Adj."
      ]
    //   items: [
    //     {
    //       buy_exchange_pair: "HITBTC/IOTA-USD",
    //       buy_price: this.allCurrencies()['USD'].buy,
    //       sell_exchange: "BINANCE/IOTA-USDT",
    //       sell_price: 0.334,
    //       trade_amount: 353.3,
    //       arb: "1.01%[0.15%]",
    //       exp_profit: 1,
    //       exp_fees: 0.2
    //     },
    //     {
    //       buy_exchange_pair: "BITFINEX/ZEC-USD",
    //       buy_price: 65.50671,
    //       sell_exchange: "KRAKEN/ZEC-USD",
    //       sell_price: 69.57002,
    //       trade_amount: 2.1449,
    //       arb: "0.27%[0.15%]",
    //       exp_profit: 0.2,
    //       exp_fees: 0.2
    //     }
    //   ]
    };
  },
  methods: mapActions(["fetchCurrensy"]),
  computed: mapGetters(["selectedCurrencies"]),
  async mounted() {
    this.fetchCurrensy();
  }
};
</script>