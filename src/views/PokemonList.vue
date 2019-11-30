<template>
  <div>
    <h1>I am the Pokemon List</h1>
    <pokemon-list-component></pokemon-list-component>
  </div>
</template>

<script>
import PokemonListComponent from '../components/PokemonListComponent.vue';

export default {
  name: 'List',
  components: { PokemonListComponent },
};
</script>

<style scoped>

</style>
