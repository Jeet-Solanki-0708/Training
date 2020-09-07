import axios from "../../component/axios/axios";
import VueJwtDecode from "vue-jwt-decode";
import VueRouter from "vue-router";
import router from "../../main";

const state = {
  funds: 10000,
  stocks: [],
  token: null,
  role: null
};

const mutations = {
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  authUser(state, userToken) {
    state.token = userToken;
  },
  role(state, role) {
    state.role = role;
  },
  clearData(state) {
    
    state.stocks = [];
    state.token = null;
    state.role = null;
    state.funds=10000;
    localStorage.clear();
  }
};

const actions = {
  logoutTime({ commit }, expireTime) {
    setTimeout(() => {
      commit("clearData");
    }, expireTime);
  },
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  },
  signup({ commit, dispatch }, formData) {
    axios
      .post("/signup", formData)
      .then(res => {
        const decode = VueJwtDecode.decode(res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("expiresIn", decode.expiresIn);
        localStorage.setItem("email", decode.email);
        localStorage.setItem("role", decode.role);
        commit("authUser", res.data.token);
        commit("role", decode.role);
        dispatch("logoutTime", decode.expiresIn);
      })
      .catch(err => console.log("err " + err));
  },
  signin({ commit, dispatch }, formData) {
    let self = this;
    axios
      .post("/signin", formData)
      .then(res => {
        if (res.data.error === null) {
          const decode = VueJwtDecode.decode(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("expiresIn", decode.expiresIn);
          localStorage.setItem("email", decode.email);
          localStorage.setItem("role", decode.role);
          commit("authUser", res.data.token);
          commit("role", decode.role);
          dispatch("logoutTime", decode.expiresIn);
        } else {
          this.$router.push("/signin");
        }
      })
      .catch(err => console.log("err " + err));
  },
  logout({ commit ,dispatch }) {
    console.log("From logout")
    dispatch("initStocks");
    commit("clearData");
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  },
  isAuthenticated(state) {
    return state.token !== null;
  },
  isRole(state) {
    return state.role;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
