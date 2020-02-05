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
    north: 0,
    east: 0,
    south: 0,
    west: 0,
  },
  pokeDex: [],
  pokeList: [],
  authToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzd2FzdGVkQHBvdGVudGlhbC5hd3AiLCJpYXQiOjE1ODA5Mjc0NjIsInVzZXJJZCI6MTE1LCJuYW1lIjoiTWljaGFlbCJ9.5GFho-s-gfcYDFaMDiF-efyKaRyjadhbOC9bLwlDuwA',
  snackBar: {
    timestamp: undefined,
    message: undefined,
  },
  pokeDistanceList: [],
  email: '',
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
});
