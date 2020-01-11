<template>
  <div>
    <gmap-map :center="center"
              :zoom="10"
              @bounds_changed="setBoundsD"
              @center_changed="setCenterD"
              class="gmap-map"
              ref="mapRef"
    >
      <gmap-marker
        :icon="{
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + + m['pokedex-id'] + '.png',
          anchor: {
            x: 48,
            y: 48
          }
        }"
        :key="index"
        :position="m.position"
        v-for="(m, index) in getPokeList"></gmap-marker>
    </gmap-map>
    <br> <br> <br>

    <!-- Colored raised button -->
    <button @click="doSomething"
            class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      <i class="material-icons"> my_location</i>
      Pan to Marker
    </button>
    <!--    <button @click="getPokeList"-->
    <!--            class="mdl-button mdl-js-button mdl-button&#45;&#45;raised mdl-button&#45;&#45;colored">-->
    <!--      <i class="material-icons"> my_location</i>-->
    <!--      GET LIST FROM STORE-->
    <!--    </button>-->

  </div>
</template>

<script>
  import debounce from 'lodash.debounce'
  import {mapActions, mapGetters} from "vuex";
  import {getPokeList} from "../store/getters";
  import {setBounds} from "../store/actions";

  export default {
    name: "NewPokemonMapComponent",
    data() {
      return {
        // center: {lat: 48.2139035, lng: 15.6297068}, // = FH
        center: {lat: 0, lng: 0},
        mapMarkers: [ // manually set to FH and Bhk
          {position: {lat: 48.2139035, lng: 15.6297068}},
          {position: {lat: 48.2438446, lng: 15.7998171}},
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
    mounted() {
      // this.geolocate();
      // getPokeList();
      // this.getSightings();
    },
    computed: {
      ...mapGetters([
        'getPokeList',
        'getPosition',
        'getPokeDex',
        'getBounds',
      ])
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
      ...mapActions([
        'getSightings',
        'setPosition',
        'setBounds',
      ]),

      doSomething() {
        console.log("MAP doSomething - bounds:");
        console.log(this.bounds);
        this.getSightings(this.bounds);
      },

      setBoundsD: debounce(function (bounds) {
        // console.log("MAP setBoundsD");
        // console.log(bounds);
        return this.setBounds(bounds);
      }, 500),

      setCenterD: debounce(function (cent) {
        // console.log("MAP setCenterD");
        let newCenter = {
          lat: cent.lat(),
          lng: cent.lng()
        };
        // console.log(newCenter);
        return this.setPosition(newCenter);
      }, 500),


    }
  }


</script>

<style scoped>
  .gmap-map {
    width: 80%;
    height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto
  }
</style>
