import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datum: [],
  },
  mutations: {
    setDatum(state, datum) {
      state.datum = datum;
    },
  },
  actions: {

  },
  getters: {
    datum(state) {
      return state.datum;
    },
  },
});