<template>
  <div>
    <h1>This is the map page</h1>
    <pokemon-map-component></pokemon-map-component>
  </div>
</template>

<script>
    import PokemonMapComponent from "../components/PokemonMap";
    export default {
        name: "Map",
        components: {PokemonMapComponent}
    }
</script>

<style scoped>

</style>
