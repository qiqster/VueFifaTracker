import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
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
