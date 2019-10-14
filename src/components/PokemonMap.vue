<template>
  <div>
    <div>
      <h2>Try Google Map</h2>
    </div>
    <button @click="logSomething">Log Something</button>
    <br>
    <br>
    <button @click="panToMarker">Pan to Marker</button>
    <br> <br> <br>
    <gmap-map :center="center"
              :zoom="10"
              class="gmap-map"
              ref="mapRef"
    >
      <gmap-marker
        :key="index"
        :position="m.position"
        v-for="(m, index) in pokemonSightings"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
    import Button from "../views/ButtonView";
    import ButtonComponent from "./ButtonComponent";
    import axios from "../js/AxiosRequests";

    export default {
        name: "PokemonMapComponent",
        components: {ButtonComponent, Button},
        data() {
            return {
                // center: {lat: 48.2139035, lng: 15.6297068}, // = FH
                center: {lat: 48.2139035, lng: 15.6297068},
                markers: [ // manually set to FH and Hospital
                    {position: {lat: 48.2139035, lng: 15.6297068}},
                    {position: {lat: 48.2138446, lng: 15.6298171}}
                ],
                places: [],
                pokemonSightings: null,
                currentPlace: null,
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
        },

        mounted() {
            this.geolocate();
            this.getSightings();
        },

        methods: {
            geolocate: function () { //TODO watch -> bei Standortveränderung updaten
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            },
            getSightings: function () {
                axios.getSightings(this.bounds.north, this.bounds.east, this.bounds.south, this.bounds.west)
                    .then(data => {
                        this.pokemonSightings = data;
                    })
            },
            logSomething: function () {
                console.log(this.pokemonSightings);
                console.log(this.pokemonSightings[0].position.lat);
                console.log(this.pokemonSightings[0].position.lng);
            },
            panToMarker: function () { // TODO currently hardcoded FH coordinates
                this.$refs.mapRef.$mapPromise.then((map) => {
                    map.setZoom(12);
                    map.panTo({lat: 48.2139035, lng: 15.6297068});
                })
            },
        }
    };
</script>

<style scoped>
  .gmap-map {
    width: 100%;
    height: 500px;
  }
</style>
