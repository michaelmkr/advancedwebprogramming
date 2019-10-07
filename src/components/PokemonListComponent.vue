<template>
  <div>
    <p>-----------------------------------------------------------------</p>
    <h5>Retrieved Data:</h5>
    <p>{{pokemon}}</p>
    <p>-----------------------------------------------------------------</p>
    <h5>Formatted</h5>
    <div v-for="item in pokemon">
<!--      TODO check why item.pokedex-id does not work-->
      <p> Name: {{ item.name }} <br> Pokedex-ID: coming soon.. </p>
    </div>
    <p>-----------------------------------------------------------------</p>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "PokemonListComponent",
        data() {
            return {
                pokemon: null
            }
        },
        mounted() {
            axios
                .get('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0/pokemon/en')
                .then(response => (this.pokemon = response.data));
            console.log(this.pokemon);
        }
    }
    // NOTES
    // to-do-done understand why axios get is not working
    // answer from David:
    // axios muss man so importieren-> import axios from "axios";
    // und dann in der promise wolltest auf die pokemons mit this.data.pokemon zugreifen. da wärs nur mehr "this.pokemon". Die data funktion wird am anfang ausgefühlt und das this, was der methode injected wird, ist ein anderes als das instanzobjekt, was du schreibst. Deswegen gehen zb auch arrow functions bei methoden ned, weil da kein this injected wird
    // und noch zuguterletzt .. die response von axios beinhaltet auch metainfos wie http status usw, deswegen greift man aufn tatsächlichen inhalt mit response.data zu
</script>

<style scoped>

</style>
