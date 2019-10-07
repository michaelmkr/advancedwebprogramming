<template>
  <div>
    <h1>List Page</h1>

    <list-component></list-component>

    <pokemon-list-component></pokemon-list-component>

  </div>
</template>

<script>
    import ListComponent from "../components/ListComponent.vue";
    import PokemonListComponent from "../components/PokemonListComponent.vue";
    export default {
        name: "List",
        components: {PokemonListComponent, ListComponent}
    }
</script>

<style scoped>

</style>
