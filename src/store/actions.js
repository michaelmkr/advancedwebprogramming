import axios from 'axios';
import * as types from './mutations-types';
import * as http from '../APICom/index';
import store from '.';
import { router } from '../router';

export const getSightings = ({ commit }, payload) => {
  http.getPokemonList(payload)
    .then((response) => {
      const list = [];
      response.data.forEach((item) => {
        list.push(item);
      });
      console.log(list);
      commit(types.POKELIST, list);
    });
};
