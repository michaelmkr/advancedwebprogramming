<template>
  <div>
    <h1>I am the Pokemon List</h1>
    {{pokemon}}
    <button @click="getPokemon">get pokemon</button>
  </div>
</template>

<script>
    import {AxiosInstance as axios} from "axios";

    export default {
        name: "PokemonListComponent",
        data() {
            return {
                pokemon: String
            }
        },
        methods: {
            getPokemon: function getPokemon() {
                alert("Axios Test");
                axios
                    .get('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0/pokemon/en')
                    .then(response => (this.data.pokemon = response));
            }
        },
        // TODO understand why axios get is not working
    }
</script>

<style scoped>

</style>
