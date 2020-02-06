import * as types from './mutations-types';

export default {
  [types.POSITION](state, payload) {
    state.position = payload;
  },
  [types.BOUNDS](state, payload) {
    state.bounds = payload;
  },
  [types.POKELIST](state, payload) {
    state.pokeList = payload;
  },
  [types.AUTH_TOKEN](state, payload) {
    state.authToken = payload;
  },
  [types.SNACKBAR](state, payload) {
    state.snackBar = payload;
  },
  [types.POKEDEX](state, payload) {
    state.pokeDex = payload;
  },
  [types.POKEDISTANCELIST](state, payload) {
    state.pokeDistanceList = payload;
  },
  [types.EMAIL] (state, payload) {
    state.email = payload
  },
  [types.USERNAME] (state, payload) {
    state.username = payload
  },
  [types.ISNIGHT] (state, payload) {
    state.isNight = payload
  },
};
