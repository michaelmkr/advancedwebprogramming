import axios from 'axios';

const baseURL = String('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0');
// const baseURL = String('https://lbartner-01.media.fhstp.ac.at:4430');

const apiCom = axios.create({
  baseURL,
});

export function userRegister({ name, email, passwort }) {
  return apiCom.post('/users/register', { name, email, passwort });
}

export function postLogin({ password, email }) {
  return apiCom.post('/users/login', { password, email });
}

export function getUserDetail() {
  return apiCom.get('/users/details');
}

export function patchUserDetail(payload) {
  return apiCom.patch('/users/details', payload);
}


// Pokemon:

export function getAllPokemon({ language }) {
  return apiCom.get(`/pokemon/${language}`);
}

export function getPokemonDetails({ language, pokedexId }) {
  return apiCom.get(`/pokemon/${language}/${pokedexId}`);
}

export function postSighting({ pokedexId, lat, lng }) {
  return apiCom.post('/sightings', {
    pokedexId,
    position: { lat, lng },
  });
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
  console.log('HTTP - coordinates passed:');
  console.log(`${north} ${east} ${south} ${west}`);
  return apiCom.get(`/sightings/map/${[north, east, south, west].join(',')}`);
}


// System:

export function getLanguage() {
  return apiCom.get('/system/languages');
}
