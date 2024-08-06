// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    university: [
      {
        // your data here
      }
    ]
  },
  getters: {
    getUniversity: state => state.university
  },
  mutations: {
    setUniversity(state, payload) {
      state.university = payload;
    }
  },
  actions: {
    updateUniversity({ commit }, data) {
      commit('setUniversity', data);
    }
  }
});
