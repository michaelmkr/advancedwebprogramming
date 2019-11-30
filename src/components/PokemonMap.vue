<template>
  <div>
    <div>
    </div>

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
    <br> <br> <br>

    <!-- Colored FAB button -->
    <button @click="logSomething"
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i class="material-icons">add</i>
    </button>
    <br>

    <!-- Colored raised button -->
    <button @click="panToMarker"
            class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      <i class="material-icons"> my_location</i>
      Pan to Marker
    </button>


    <h1> Aktuelle Sichtungen</h1>

    <!-- Sichtung Design -->


    <div class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Pikachu</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                     to="/">Details

        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import Vuex, {mapGetters, mapActions} from 'vuex';
  import ButtonComponent from './ButtonComponent';
  import axios from '../js/AxiosRequests';
  import {getSightings} from "../store/actions";

  export default {

    name: 'PokemonMapComponent',
    components: {ButtonComponent},

    data() {
      return {
        // center: {lat: 48.2139035, lng: 15.6297068}, // = FH
        center: {lat: 48.2139035, lng: 15.6297068},
        markers: [ // manually set to FH and Hospital
          {position: {lat: 48.2139035, lng: 15.6297068}},
          {position: {lat: 48.2138446, lng: 15.6298171}},
        ],
        places: [],
        pokemonSightings: null,
        currentPlace: null,
        position: {
          lat: 48.2138999,
          lng: 15.6297068,
        },
        bounds: {
          north: 48.216888,
          east: 15.637702,
          south: 48.212105,
          west: 15.627389,
        },
        sightings: [
          {
            'sighting-id': 1,
            timestamp: 1533569023147,
            'pokedex-id': 25,
            position: {
              lat: 48.213185,
              lng: 15.631745,
            },
          },
          {
            'sighting-id': 2,
            timestamp: 1533569123147,
            'pokedex-id': 26,
            position: {
              lat: 48.212635,
              lng: 15.635971,
            },
          },
        ],
        pokemon: [
          {
            name: 'Pikachu',
            'pokedex-id': 25,
          },
          {
            name: 'Raichu',
            'pokedex-id': 26,
          },
        ],
      };
    },
    // VUEX
    created() {
      this.geolocate();
    },

    mounted() {
      this.geolocate();
      this.getSightings();
    },

    methods: {
      /* geolocate: function () { //TODO watch -> bei Standortveränderung updaten
                  navigator.geolocation.getCurrentPosition(position => {
                      this.center = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                      };
                  });
              }, */
      ...mapActions([
        'geolocate',
        'getSigthings',
      ]),


      /* getSightings() {
        axios.getSightings(this.bounds.north, this.bounds.east, this.bounds.south, this.bounds.west)
          .then((data) => {
            this.pokemonSightings = data;
          });
    },*/
      logSomething() {
        console.log(this.pokemonSightings);
        console.log(this.pokemonSightings[0].position.lat);
        console.log(this.pokemonSightings[0].position.lng);
      },
      panToMarker() { // TODO currently hardcoded FH coordinates
        // this.$refs.mapRef.$mapPromise.then((map) => {
        //   map.setZoom(12);
        //   map.panTo({ lat: 48.2139035, lng: 15.6297068 });
        // });
        let payload = {"north": 7.51945, "east": 14.55087, "south": 14.55087, "west": 14.54927};
        getSightings(payload);
      }
    }
  }
</script>

<style scoped>
  .gmap-map {
    width: 100%;
    height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto
  }

  .mdl-button--fab {
    margin: 40px;
    margin-top: -100px;
    float: center;
  }

  .mdl-button--raised {
    float: left;
    margin-top: -80px;
  }

  .demo-card-square.mdl-card {
    width: 320px;
    height: 320px;
    margin: 50px;
  }

  .demo-card-square > .mdl-card__title {
    color: #fff;
    background: url('../assets/Pikachu.jpg') center / cover;
  }

  .mdl-card__title-text {
    font-weight: bold;
  }


</style>
