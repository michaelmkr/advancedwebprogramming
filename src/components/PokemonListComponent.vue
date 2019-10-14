<!-- @Hochi hier kannst du dich austoben, das ist jetzt mal mein erster Ansatzpunkt für die Pokemon Liste (aller Pokemon) -->
<!-- Ich weiß wir haben gesagt fürs erste nur eine Liste in der PokemonMapComponent aber ich möchte hier alle Pokemon mit Details anzeigen können -->
<!-- Die Logik wie es dann in der Map View funktionieren wird bleibt die selbe -->
<!-- Bei Fragen meld dich einfach -->
<template>
  <div>
    <p>-----------------------------------------------------------------</p>
    <h5>Retrieved Data:</h5>
    <p>{{pokemon}}</p>
    <p>-----------------------------------------------------------------</p>
    <h5>Formatted</h5>
    <div v-for="item in testArray">
      <!--      TODO @Hochi -> testArray mit dem richtigen Array tauschen (sollte details aus data() sein)-->
      <!--      TODO @Hochi -> aktuell wird bei item.pokedex-id zurückgegeben: NaN also not a number-->
      <!--      TODO @Hochi -> rausfinden wieso NaN und das bitte fixen-->
      <!--      TODO @Hochi -> Fehlermeldung: Property or method "id" is not defined-->
      <p> Name: {{ item.name }} <br>
        <span ref="pokeID">Pokedex-ID: {{ item.pokedex-id }} coming soon..</span>
      </p>
      <button @click="getDetails">show details</button>
      <!--      TODO @Hochi die Details mit v-if und als div oder so anzeigen-->
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
                // TODO @Hochi die GET requests gehören mit denen aus dem eigenen Axios File getauscht
                // TODO @Hochi getDetails funktioniert noch nicht richtig, das musst du bitte selber machen oder fixen
                // .get('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0/pokemon/en/25')
                    .get('https://lbartner-01.media.fhstp.ac.at:4430/pokemon/en/25')
                    .then(response => (this.details = response.data));
                console.log("Details: " + this.details);
            }
        },
        mounted() {
            axios
            // TODO @Hochi die GET requests gehören mit denen aus dem eigenen Axios File getauscht
            // die Funktion läuft aktuell gut, ersetz hier am besten den GET Request mit der Funktion aus dem Axios File
            // .get('https://virtserver.swaggerhub.com/pgmon/ws18/1.0.0/pokemon/en')
                .get('https://lbartner-01.media.fhstp.ac.at:4430/pokemon/en')
                .then(response => (this.pokemon = response.data));
            console.log(this.pokemon);
        }
    }
</script>

<style scoped>

</style>
