import * as types from './mutations-types';
import * as http from '../APICom/index';
import store from '.';
import {router} from '../router';

export const getSightings = ({commit}, payload) => {
  console.log("ACTIONS");
  console.log(payload);
  http.getPokemonList(payload)
    .then((response) => {
      const list = [];
      response.data.forEach((item) => {
        list.push(item);
      });
      console.log("RETRIEVED LIST");
      console.log(list);
      commit(types.POKELIST, list);
    });
};

export const setPosition = ({commit}, payload) => {
  console.log("ACTION SET POSITION");
  console.log(payload);
};

export const setBounds = ({commit}, payload) => {
  console.log("Received in the action:");
  console.log(payload);
  const bounds = {
    north: payload.pa.h,
    east: payload.ka.h,
    south: payload.pa.g,
    west: payload.ka.g
  };
  console.log("ACTIONS: setBounds");
  console.log(bounds);
  if (bounds.north !== bounds.south && bounds.east !== bounds.west) {
    commit(types.BOUNDS, bounds);
    //TODO get Sightings for new Bounds
    // setPokeList({commit}, bounds)
  }
};

