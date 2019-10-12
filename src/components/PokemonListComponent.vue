<template>
  <div>
    <p>-----------------------------------------------------------------</p>
    <h5>Retrieved Data:</h5>
    <p>{{pokemon}}</p>
    <p>-----------------------------------------------------------------</p>
    <h5>Formatted</h5>
    <div v-for="item in testArray">
      <!--      TODO check why item.pokedex-id does not work-->
      <p> Name: {{ item.name }} <br>
      <span ref="pokeID">Pokedex-ID: coming soon..</span>
      </p>
      <button @click="getDetails">show details</button>
      <!--      TODO get details and show div with v-if -->
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
                pokemon: null,
                details: null,
                testArray: [
                    {"name": "Pikachu", "pokedex-id": 25},
                    {"name": "Raichu", "pokedex-id": 26}
                ]
            }
        },
        methods: {
            getDetails: function getPokemonDetails() {
                console.log("Details for Pokemon with ID 25:");
                const pokedexID = this.$refs.pokeID;
                console.log(pokedexID);
                axios
                    .get('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0/pokemon/en/25')
                    .then(response => (this.details = response.data));
                console.log("Details: " + this.details);
            }
        },
        mounted() {
            axios
                //.get('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0/pokemon/en')
                .get('https://lbartner-01.media.fhstp.ac.at:4430/pokemon/en')
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
