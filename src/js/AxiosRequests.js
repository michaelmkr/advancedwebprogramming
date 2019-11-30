import Axios from 'axios';

const serverURL = 'https://lbartner-01.media.fhstp.ac.at:4430';

const axios = {

  getPokemon() {
    return Axios
      .get(`${serverURL}/pokemon/en`)
      .then(response => response.data);
  },

  getPokemonDetails(PokemonID) {
    return Axios
      .get(`${serverURL}/pokemon/en/${PokemonID}`)
      .then(response => response.data);
  },

  getSightings(north, east, south, west) {
    return Axios
      .get(`${serverURL}/sightings/map/${north},${east},${south},${west}`)
      .then(response => response.data);
  },

};

export default axios;
