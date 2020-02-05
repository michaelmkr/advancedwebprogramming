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
  authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.fZmu9opeHzhOxNcDVieYp4Ge-utqNwtq1vNGjEIlWzA',
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
