<template>
  <div>
    <h1>I am the Pokemon List</h1>
    <pokemon-list-component></pokemon-list-component>
  </div>
</template>

<script>
import ListComponent from '../components/ListComponent.vue';
import PokemonListComponent from '../components/PokemonListComponent.vue';

export default {
  name: 'List',
  components: { PokemonListComponent, ListComponent },
};
</script>

<style scoped>

</style>
