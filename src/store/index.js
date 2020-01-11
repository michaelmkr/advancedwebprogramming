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
  authToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNTc1OTA5ODM4LCJ1c2VySWQiOjEsIm5hbWUiOiJKb2huIERvZSJ9._DaKNGfJVqU6wob_IWyVSH7eLZO2NSyThSDxzmqnRTk',
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
