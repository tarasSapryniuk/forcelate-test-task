import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async fetchTrades(ctx, currency = "USDC_BTC") {
      const result = await fetch(
        "https://poloniex.com/public?command=returnTradeHistory&currencyPair=" +
          currency
      );
      const trades = await result.json();

      ctx.commit("updateTrades", trades.slice(0, 10));
      ctx.commit("updateCurrency", currency);
    },

    async fetchCurrensies(ctx) {
      const result = await fetch(
        "https://poloniex.com/public?command=returnTicker"
      );
      const currencies = await result.json();

      ctx.commit("updateCurrencie", Object.keys(currencies));
    }
  },
  mutations: {
    updateTrades(state, trades) {
      const new_trades = [];
      trades.forEach(element => {
        new_trades.push({
          buy: (+element.rate).toFixed(3),
          sell: (+element.rate + +element.amount).toFixed(3),
          trade_amount: (+element.total).toFixed(4),
          arb: (+element.amount).toFixed(5)
        });
      });
      state.trades = new_trades;
    },

    updateCurrencie(state, currencies) {
      state.currencies = currencies
        .filter(cur => cur.includes("BTC"))
        .slice(1, 11);
    },

    updateCurrency(state, currency) {
      state._currency = currency;
    }
  },
  getters: {
    allTrades(state) {
      return state.trades;
    },
    allCurrencies(state) {
      return state.currencies;
    },
    currency(state) {
      return state._currency;
    }
  },
  state: {
    trades: [],
    currencies: [],
    _currency: ""
  }
});
