import axios from 'axios';
import * as types from './mutations-types';
import * as http from '../APICom/index';
import store from '.';
import { router } from '../router';


export const setBounds = ({ commit }, payload) => {
  const bounds = {
    north: payload.north,
    east: payload.b.f,
    south: payload.f.b,
    west: payload.b.b,
  };
  if (bounds.north !== bounds.south && bounds.east !== bounds.west) {
    commit(types.BOUNDS, bounds);
    setPokeList({ commit }, bounds);
  }
};


export const getSightings = ({commit}, payload) => {
  http.getPokemonList(payload)
    .then(response => response.data)
    .then((data) => {
      this.pokemonSightings = data;
    });
};

