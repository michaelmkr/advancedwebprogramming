import * as types from './mutations-types';
import * as http from '../APICom/index';
import router from "../router";
import * as getters from './getters'

export const getSightings = ({commit}, payload) => {
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
  http.postSighting(payload)
    .then((response) => {
      console.log(response.status);
    });
};

export const setPosition = ({commit}, payload) => {
  commit(types.POSITION, payload);
};

export const setBounds = ({commit}, payload) => {
  const bounds = {
    north: payload['north'],
    east: payload['east'],
    south: payload['south'],
    west: payload['west']
  };
  if (bounds.north !== bounds.south && bounds.east !== bounds.west) {
    commit(types.BOUNDS, bounds);
    getSightings({commit}, bounds)
  }
};

export const submitRegister = ({commit}, payload) => {
  http.userRegister({name: payload.name, email: payload.email, password: payload.password})
    .then(response => {
      console.log('registered successfully!');
      console.log("response data auth token: " + response.data['auth-token']);
      localStorage.setItem('x-auth', response.data['auth-token']);
      commit(types.AUTHTOKEN, response.data['auth-token']);
      localStorage.setItem('email', payload.email);
      commit(types.EMAIL, payload.email)
    })
    .catch(error => {
      console.log(error, error.response)
    })
};

export const submitLogin = ({commit}, payload) => {
  http.postLogin({email: payload.email, password: payload.password})
    .then(response => {
      console.log('logged in successfully!');
      console.log("response data auth token: " + response.data['auth-token']);
      localStorage.setItem('x-auth', response.data['auth-token']);
      commit(types.AUTH_TOKEN, response.data['auth-token'].toString());
      localStorage.setItem('email', payload.email);
      commit(types.EMAIL, payload.email.toString());
      router.push('/map')
    })
    .catch(error => {
      console.log(error, error.response)
    })
};
