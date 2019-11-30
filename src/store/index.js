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
  toDo: [
    { text: 'Test Test Create Button Component', done: true, id: '1' },
    { text: 'Finish all tasks for Excercise 1 and Preparation Phase', done: false, id: '2' },
    { text: 'Create List View', done: true, id: '3' },
    { text: 'Create Map View', done: true, id: '4' },
    { text: 'Create List Component', done: true, id: '5' },
    { text: 'Get List Component to work', done: true, id: '6' },
    { text: 'Create Map Component', done: true, id: '7' },
    { text: 'Get Map Component to work', done: true, id: '8' },
    { text: 'Debounce % Throttle', done: false, id: '9' },
    { text: 'API Specs', done: true, id: '10' },
    { text: 'Dev Diary', done: true, id: '11' },
  ],
};


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
});
