<template>
  <div>
    <new-pokemon-map-component></new-pokemon-map-component>
<!--    <pokemon-list></pokemon-list>-->
<!--    <pokemon-map-component></pokemon-map-component>-->
  </div>
</template>

<script>
// import PokemonMapComponent from '../components/PokemonMap.vue';
import NewPokemonMapComponent from '../components/NewPokemonMapComponent.vue';
import PokemonList from '../components/PokemonList';

export default {
  name: 'Map',
  components: {
    NewPokemonMapComponent,
    PokemonList,
    // PokemonMapComponent
  },
};
</script>
