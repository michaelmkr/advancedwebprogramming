import axios from 'axios';
import * as types from './mutations-types';
import * as http from '../APICom/index';
import store from '.';
import { router } from '../router';


export const getSightings = ({ commit }, payload) => {
  http.getPokemonList(payload)
    .then(response => response.data)
    .then((data) => {
      this.pokemonSightings = data;
    });
};
