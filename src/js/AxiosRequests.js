import Axios from "axios";
const serverURL = 'https://lbartner-01.media.fhstp.ac.at:4430';

const axios = {

  getPokemon: function () {
    return Axios
      .get(serverURL + '/pokemon/en')
      .then(response => {
        return response.data
      })
  },

  getPokemonDetails: function (PokemonID) {
    return Axios
      .get(serverURL + '/pokemon/en/' + PokemonID)
      .then(response => {
        return response.data
      })
  },

  getSightings: function (north, east, south, west) {
    return Axios
      .get(serverURL + '/sightings/map/' + north + ',' + east + ',' + south + ',' + west)
      .then(response => {
        return response.data
      })
  },

};

export default axios;
