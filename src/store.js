import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datum: [],
  },

  getters: {
    getDatum(state) {
      return state.datum;
    },
  },

  actions: {
    fetchDatum({ commit }) {
      api.fetchDatum().then(datum => commit('setDatum', datum));
    }
  },

  mutations: {
    setDatum(state, datum) {
      state.datum = datum;
    },
  },
});