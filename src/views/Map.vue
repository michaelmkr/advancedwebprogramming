<template>
  <div>
    <new-pokemon-map-component></new-pokemon-map-component>
<!--    <pokemon-map-component></pokemon-map-component>-->
  </div>
</template>

<script>
// import PokemonMapComponent from '../components/PokemonMap.vue';
import NewPokemonMapComponent from '../components/NewPokemonMapComponent.vue';

export default {
  name: 'Map',
  components: {
    NewPokemonMapComponent,
    // PokemonMapComponent
  },
};
</script>
