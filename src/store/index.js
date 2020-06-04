import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import team from "@/store/team/teamStore.js";

export const store = new Vuex.Store({
  state: {
    loadingState: false,
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
  modules: {
    team,
  },
  mutations: {
    setActiveUser(state, val) {
      state.user = val;
    },
    setLoadingState(state, loading) {
      state.loadingState = loading;
    },
  },
});

export default store;
