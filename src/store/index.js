import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
  position: {
    lat: 0,
    lng: 0,
  },
  bounds: {
    east: 0,
    north: 0,
    south: 0,
    west: 0,
  },
  pokeDex: [],
  pokeList: [],
  authToken: undefined,
  snackBar: {
    timestamp: undefined,
    message: undefined,
  },
  pokeDistanceList: [],
};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
});
