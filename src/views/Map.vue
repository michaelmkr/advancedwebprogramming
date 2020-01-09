<template>
  <div>
    <new-pokemon-map-component></new-pokemon-map-component>
<!--    <pokemon-map-component></pokemon-map-component>-->
  </div>
</template>

<script>
import PokemonMapComponent from '../components/PokemonMap';
import NewPokemonMapComponent from "../components/NewPokemonMapComponent";

export default {
  name: 'Map',
  components: {NewPokemonMapComponent, PokemonMapComponent },
};
</script>
