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

    <SuggestionComponent ref="test"></SuggestionComponent>

  </div>

</template>

<script>
import debounce from 'lodash.debounce';
import { mapActions, mapGetters } from 'vuex';
import SuggestionComponent from './SuggestionComponent';

export default {
  name: 'NewPokemonMapComponent',
  components: { SuggestionComponent },
  data() {
    return {
      options: {
        styles: [],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
        // draggable: false
      },
      // center: {lat: 48.2139035, lng: 15.6297068}, // = FH
      center: {},
      places: [],
      pokemonSightings: null,
      currentPlace: null,
      bounds: null,
    };
  },
  mounted() {
    this.geolocate();
    if (this.getIsNight) {
      this.options.styles = this.getMapStyleNight;
    } else {
      this.options.styles = this.getMapStyleDay;
    }
    this.getSightings(this.getBounds);
    if (this.getAuthToken !== '') {
      this.retrieveUserDetails(this.getAuthToken);
    }
    this.center = this.getPosition;
  },
  beforeUpdate() {
  },
  computed: {
    ...mapGetters([
      'getPokeList',
      'getPosition',
      'getPokeDex',
      'getBounds',
      'getSnackBar',
      'getAuthToken',
      'getMapStyleDay',
      'getMapStyleNight',
      'getIsNight',
    ]),
  },
  methods: {
    geolocate() {
      navigator.geolocation.watchPosition((position) => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.center = currentPosition;
        this.setPosition(currentPosition);
      });
    },
    ...mapActions([
      'getSightings',
      'setPosition',
      'setBounds',
      'addSighting',
      'retrieveUserDetails',
      'checkIfItsNight',
    ]),
    setBoundsD: debounce(function () {
      const bounds = this.$refs.mapRef.$mapObject.getBounds();
      const bound = bounds.toJSON();
      return this.setBounds(bound);
    }, 500),
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
