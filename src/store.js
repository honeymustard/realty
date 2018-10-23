import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    datum: [],
  },

  getters: {
    getLoading(state) {
      return state.loading;
    },

    getDatum(state) {
      return state.datum;
    },
  },

  actions: {
    fetchDatum({ commit }) {
      commit('startLoading');

      api.fetchDatum()
        .then(datum => commit('setDatum', datum))
        .then(() => commit('stopLoading'));
    }
  },

  mutations: {
    startLoading(state) {
      state.loading = true;
    },

    stopLoading(state) {
      setTimeout(() => state.loading = false, 600);
    },

    setDatum(state, datum) {
      state.datum = datum;
    },
  },
});