<template>
  <div id="Mapview">
    <h1>map view</h1>
    <google-map/>
  </div>

</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';

import {
  getAllPokemon, getPokemonDetails, postSighting, getSightingByID, patchSightingByID, getPokemonList,
} from '@/APICom/';

export default {
  name: 'Mapview',
  components: {
    GoogleMap,
  },
};


/* data() {
    return {
        position: {
            lat: 48.2138999,
            lng: 15.6297068
        },
        bounds: {
            north: 48.216888,
            east: 15.637702,
            south: 48.212105,
            west: 15.627389
        },
        sightings: [
            {
                'sighting-id': 1,
                timestamp: 1533569023147,
                'pokedex-id': 25,
                position: {
                    lat: 48.213185,
                    lng: 15.631745
                }
            },
            {
                'sighting-id': 2,
                timestamp: 1533569123147,
                'pokedex-id': 26,
                position: {
                    lat: 48.212635,
                    lng: 15.635971
                }
            },
        ],
        pokemon: [
            {
                name: 'Pikachu',
                'pokedex-id': 25
            },
            {
                name: 'Raichu',
                'pokedex-id': 26
            }
        ]
    }
  } */
</script>
