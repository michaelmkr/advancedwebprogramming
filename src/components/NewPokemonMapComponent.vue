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

        navigator.geolocation.watchPosition(position => {
          let currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.center = currentPosition;
          this.setPosition(currentPosition)
        })
      },
      ...mapActions([
        'getSightings',
        'setPosition',
        'setBounds',
        'addSighting',
      ]),

      doSomething() {
        console.log(this.getPokeList);
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
      addSightingFromMap() {

        var inputID = prompt("Please enter Pokemon ID:", "25");
        if (inputID !== null && inputID !== "") {
          if (isNaN(inputID)) {
            alert("must be a number!")
          } else {
            let sighting = {
              "id": inputID,
              "lat": this.getPosition.lat,
              "lng": this.getPosition.lng,
              "token": this.getAuthToken
            };
            this.addSighting(sighting);

          }
        } else {
          alert("cannot be null!")
        }
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
