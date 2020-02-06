<template>
  <div>
    <gmap-map :center="center"
              :options="options"
              :zoom="15"
              @bounds_changed="setBoundsD"
              class="gmap-map"
              draggable="false"
              ref="mapRef"
    >
      <gmap-marker
        :icon="{ url: require('../assets/ash.png')}"
        :position="this.center"></gmap-marker>
      <gmap-marker
        :icon="{
          url: 'https://raw.githubusercontent.com/michaelmkr/sprites/master/sprites/pokemon/' + m['pokedex-id'] + '.png',
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
      doSomething
    </button>

<SuggestionComponent ref="test"></SuggestionComponent>

  </div>

</template>

<script>
  import debounce from 'lodash.debounce';
  import {mapActions, mapGetters} from 'vuex';
  import SuggestionComponent from "./SuggestionComponent";
  import {getAuthToken, getBounds, getPokeList} from '../store/getters';
  import {addSighting, getSightings, setBounds, setPosition} from '../store/actions';

  export default {
    name: 'NewPokemonMapComponent',
    components: {SuggestionComponent},
    data() {
      return {
        options: {
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#523735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#c9b2a6"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#dcd2be"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ae9e90"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#93817c"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#a5b076"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#447530"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fdfcf8"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f8c967"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#e9bc62"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e98d58"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#db8555"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#806b63"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8f7d77"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b9d3c2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#92998d"
                }
              ]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
          //draggable: false
        },
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
      this.getSightings(this.getBounds);
      this.retrieveUserDetails(this.getAuthToken);
    },
    beforeUpdate() {
      this.geolocate();
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
      geolocate() {
        navigator.geolocation.watchPosition(position => {
          let currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(currentPosition);
          this.center = currentPosition;
          this.setPosition(currentPosition)
        })
      },
      ...mapActions([
        'getSightings',
        'setPosition',
        'setBounds',
        'addSighting',
        'retrieveUserDetails',
      ]),

      doSomething() {
        console.log(this.getAuthToken);
      },
      // eslint-disable-next-line
      setBoundsD: debounce(function () {
        const bounds = this.$refs.mapRef.$mapObject.getBounds();
        let bound = bounds.toJSON();
        return this.setBounds(bound)
      }, 500),
      // eslint-disable-next-linex
      // setCenterD: debounce(function (cent) {
      //   const newCenter = {
      //     lat: cent.lat(),
      //     lng: cent.lng(),
      //   };
      //   return this.setPosition(newCenter);
      // }, 500),
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
