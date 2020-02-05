<template>
  <div>
    <gmap-map :center="center"
              :zoom="12"
              @bounds_changed="setBoundsD"
              @center_changed="setCenterD"
              class="gmap-map"
              ref="mapRef"
    >
      <gmap-marker
        :icon="{ url: require('../assets/ash.png')}"
        :position="this.center"></gmap-marker>
      <gmap-marker
        :icon="{
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + m['pokedex-id'] + '.png',
          anchor: {
            x: 48,
            y: 48
          }
        }"
        :key="index"
        :position="m.position"
        v-for="(m, index) in getPokeList"></gmap-marker>
    </gmap-map>

    <button @click="addSightingFromMap"
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
      <i class="material-icons">add</i>
    </button>

    <br> <br> <br>

    <!-- Colored raised button -->
    <button @click="doSomething"
            class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      doSomething
    </button>
    <!--
      <button @click="getPokeList"
         class="mdl-button mdl-js-button mdl-button&#45;&#45;raised mdl-button&#45;&#45;colored"
       >
         <i class="material-icons"> my_location</i>
         GET LIST FROM STORE
       </button>
   -->

    <h1> Aktuelle Sichtungen</h1>

    <!-- Sichtung Design -->


    <div class="demo-card-square mdl-card mdl-shadow--2dp" v-for="m in getPokeList">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">{{m['pokedex-id']}}</h2>
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
  import debounce from 'lodash.debounce';
  import {mapActions, mapGetters} from 'vuex';
  import {getAuthToken, getBounds, getPokeList} from '../store/getters';
  import {addSighting, getSightings, setBounds, setPosition} from '../store/actions';

  export default {
    name: 'NewPokemonMapComponent',
    data() {
      return {
        // center: {lat: 48.2139035, lng: 15.6297068}, // = FH
        center: {lat: 0, lng: 0},
        places: [],
        pokemonSightings: null,
        currentPlace: null,
        bounds: null,
      };
    },
    mounted() {
      this.geolocate();
      this.getSightings(this.getBounds)
    },
    computed: {
      ...mapGetters([
        'getPokeList',
        'getPosition',
        'getPokeDex',
        'getBounds',
        'getAuthToken'
      ]),
    },
    methods: {
      geolocate() { // TODO watch -> bei Standortveränderung updaten
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        });
      },
      ...mapActions([
        'getSightings',
        'setPosition',
        'setBounds',
        'addSighting',
      ]),

      doSomething() {
        this.getSightings(this.getBounds);
        console.log(this.getAuthToken);
      },
      // eslint-disable-next-line
      setBoundsD: debounce(function (bounds) {
        return this.setBounds(bounds);
      }, 500),
      // eslint-disable-next-linex
      setCenterD: debounce(function (cent) {
        const newCenter = {
          lat: cent.lat(),
          lng: cent.lng(),
        };
        return this.setPosition(newCenter);
      }, 500),
      addSightingFromMap() {
        let sighting = {
          "id": 2,
          "lat": this.getPosition.lat,
          "lng": this.getPosition.lng,
        };
        this.addSighting(sighting);
      }


    },
  };


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
