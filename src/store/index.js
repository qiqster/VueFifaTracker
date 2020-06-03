import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      name: "Mateusz",
      login: "QiQu",
    },
  },

  actions: {
    clearUserData({ commit }) {
      commit("setActiveUser", null);
    },
  },
  modules: {},
  mutations: {
    setActiveUser(state, val) {
      state.user = val;
    },
  },
});

export default store;
