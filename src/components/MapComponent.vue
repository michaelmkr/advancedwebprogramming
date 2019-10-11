<template>
  <div>
    <div>
      <h2>Try Google Map</h2>
      <!--      https://alligator.io/vuejs/vue-google-maps/-->
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      class="gmap-map"
    >
      <gmap-marker
        :key="index"
        :position="m.position"
        @click="center=m.position"
        v-for="(m, index) in markers"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
    export default {
        name: "MapComponent",

        data() {
            return {
                center: {lat: 48.2139035, lng: 15.6297068},
                markers: [
                    {position: {lat: 48.2139035, lng: 15.6297068}},
                    {position: {lat: 48.2138446, lng: 15.6298171}}
                ],
                places: [],
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
            // this.geolocate();
        },

        methods: {
            // receives a place object via the autocomplete component
            setPlace(place) {
                this.currentPlace = place;
            },
            addMarker() {
                if (this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    };
                    this.markers.push({position: marker});
                    this.places.push(this.currentPlace);
                    this.center = marker;
                    this.currentPlace = null;
                }
            },
            geolocate: function () {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            }
        }
    };
</script>

<style scoped>
  .gmap-map {
    width: 100%;
    height: 1000px;
  }
</style>
