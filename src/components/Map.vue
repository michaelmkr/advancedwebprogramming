<template>
  <gmap-map
    :center="getPosition"
    :options="options"
    :zoom="zoom"
    @bounds_changed="setBoundsD"
    ref="googleMap"
  >
    <gmap-marker
      :clickable="false"
      :draggable="false"
      :position="center"
      :z-index="999"
    ></gmap-marker>
    <gmap-marker
      :clickable="false"
      :draggable="false"
      :icon="{
          url: require('../assets/img/pokemon/' + getIdentifierFromId(pokemon.pokedex_id) + '.png')
        }"
      :key="pokemon.sighting_id"
      :position="pokemon.position"
      :z-index="pokemon.sighting_id"
      v-for="pokemon in getPokeList"
    ></gmap-marker>
  </gmap-map>
</template>


<script>
    import {loaded} from 'vue2-google-maps';

    import debounce from 'lodash.debounce'

    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'g-map',
        data() {
            return {
                center: {
                    lat: 0,
                    lng: 0
                },
                zoom: 17,
                options: {
                    draggable: false,
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                }
            }
        },
        computed: {
            ...mapGetters([
                'getPokeList',
                'getPosition',
                'getPokeDex',
                'getBounds'
            ])
        },
        methods: {
            ...mapActions([
                // 'setBounds',
                'setPosition',
                // 'setPokeDex',
                // 'setIsNight'
            ]),
            setBoundsD: debounce(function (bounds) {
                return this.setBounds(bounds)
            }, 500),
            centerPosition() {
                this.$refs.googleMap.resizePreserveCenter()
            },
            getNameFromId(id) {
                return this.getPokeDex.find(item => item.id === id).name
            },
            getIdentifierFromId(id) {
                return this.getPokeDex.find(item => item.id === id).identifier
            },
        },
        created() {
            this.setPokeDex();
            this.setPosition();
            loaded //TODO check for loaded function
                .then(() => {
                    this.options.zoomControlOptions = {
                        position: google.maps.ControlPosition.LEFT_TOP // eslint-disable-line no-undef
                    };
                    this.centerPosition();
                    window.addEventListener('resize', this.centerPosition);
                    window.addEventListener('orientationchange', this.centerPosition)
                });
        },
        activated() {
            this.centerPosition()
        }
    }
</script>

<style scoped style="scss">
  .vue-map-container {
    width: 100%;
    position: unset;
  }
</style>
