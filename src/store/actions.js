import * as types from './mutations-types';
import * as http from '../APICom/index';

export const getSightings = ({ commit }, payload) => {
  http.getPokemonList(payload)
    .then((response) => {
      const list = [];
      response.data.forEach((item) => {
        list.push(item);
      });
      commit(types.POKELIST, list);
    });
};

export const addSighting = ({commit}, payload) => {
  http.postSighting(payload);
};

export const setPosition = ({ commit }, payload) => {
  commit(types.POSITION, payload);
};

export const setBounds = ({ commit }, payload) => {
  const bounds = {
    north: payload.pa.h,
    east: payload.ka.h,
    south: payload.pa.g,
    west: payload.ka.g
  };
  if (bounds.north !== bounds.south && bounds.east !== bounds.west) {
    commit(types.BOUNDS, bounds);
    getSightings({commit}, bounds)
  }
};
export const postSightings = ({commit}, payload) => {
  // des is wurscht
};
