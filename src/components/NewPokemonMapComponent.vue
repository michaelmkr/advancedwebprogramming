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
        :key="index"
        :position="m.position"
        v-for="(m, index) in mapMarkers"></gmap-marker>
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
  import {getSightings, setBounds, setPosition} from "../store/actions";

  export default {
    name: "NewPokemonMapComponent",
    data() {
      return {
        asdf: {north: 7.51945, east: 14.55087, south: 14.55087, west: 14.54927},
        // center: {lat: 48.2139035, lng: 15.6297068}, // = FH
        center: {lat: 48.2139035, lng: 15.6297068},
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
    computed: {
      ...mapGetters([
        'getPokeList',
        'getPosition',
        'getPokeDex',
      ])
    },
    methods: {
      ...mapActions([
        'getSightings',
        'setPosition',
        'setBounds',
      ]),
      doSomething() {
        console.log(this.position);
        console.log("MAP");
        console.log(this.asdf);
        getSightings(this.asdf);
      },
      setBoundsD: debounce(function (bounds) {
        console.log("MAP setBoundsD");
        console.log(bounds);
        return setBounds(bounds);
      }, 500),
      setCenterD: debounce(function (cent) {
        console.log("MAP setCenterD");
        let newCenter = {
          lat: cent.lat(),
          lng: cent.lng()
        };
        console.log(newCenter);
        return setPosition(newCenter);
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
