import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async fetchCurrensy(ctx, currency = "USDC_BTC") {
        const result = await fetch("https://poloniex.com/public?command=returnTradeHistory&currencyPair=" + currency);
        const currencies = await result.json();
  
        const buy = currencies.find(element => element.type === "buy");
        const sell = currencies.find(element => element.type === "sell");

        ctx.commit("updateCurrencies", [
            {
                buy_exchange_pair: "HITBTC/IOTA-USD",
                sell_exchange: "BINANCE/IOTA-USDT",
                buy: (+buy.rate).toFixed(3),
                sell: (+buy.rate + +buy.amount).toFixed(3),
                trade_amount: (+buy.total).toFixed(4),
                arb: "1.01%[0.15%]",
                exp_profit: 1,
                exp_fees: 0.2
            },
            {
                buy_exchange_pair: "BITFINEX/ZEC-USD",
                sell_exchange: "KRAKEN/ZEC-USD",
                buy: (+sell.rate).toFixed(3),
                sell: (+sell.rate + +sell.amount).toFixed(3),
                trade_amount: (+sell.total).toFixed(4),
                arb: "0.27%[0.15%]",
                exp_profit: 0.2,
                exp_fees: 0.2
              }
        ]);
      }
  },
  mutations: {
    updateCurrencies(state, currencies) {
      state.currencies = currencies;
    }
  },
  getters: {
    selectedCurrencies(state) {
      return state.currencies;
    }
  },
  state: {
    currencies: []
  }
});
