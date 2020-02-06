<template>
  <div>
    <new-pokemon-map-component></new-pokemon-map-component>
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
  },
};
</script>
