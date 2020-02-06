import axios from 'axios';
import {getAuthToken} from "../store/getters";

//const baseURL = String('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0');
const baseURL = String('https://lbartner-01.media.fhstp.ac.at:4430');

const apiCom = axios.create({
  baseURL,
});

export function userRegister({ name, email, password }) {
  return apiCom.post('/users/register', { "name":JSON.stringify(name), "email":JSON.stringify(email), "password":JSON.stringify(password )});
}

export function postLogin({ email, password }) {
  return apiCom.post('/users/login', { "email":email, "password":password });
}

export function getUserDetail(token) {
  return apiCom.get('/users/details', {headers: {'X-Auth-Token': token}});
}

export function patchUserDetail(payload, token) {
  return apiCom.patch('/users/details', payload, {headers: {'X-Auth-Token': token}});
}


// Pokemon:

export function getAllPokemon({ language }) {
  return apiCom.get(`/pokemon/${language}`);
}

export function getPokemonDetails({ language, pokedexId }) {
  return apiCom.get(`/pokemon/${language}/${pokedexId}`);
}

export function postSighting({ id, lat, lng, token }) {
  return apiCom.post('/sightings', {
    "pokedex-id": id,
    "position": { "lat": lat, "lng": lng },
  }, {headers: {'X-Auth-Token': token}}
  );
}

export function getSightingByID({ sightingID }) {
  return apiCom.get(`/sightings/${sightingID}`);
}

export function patchSightingByID({ sightingID, payload }) {
  return apiCom.patch(`/sightings/${sightingID}`, payload);
}

export function getPokemonList({
  north, east, south, west,
}) {
  return apiCom.get(`/sightings/map/${[north, east, south, west].join(',')}`);
}


// System:

export function getLanguage() {
  return apiCom.get('/system/languages');
}
