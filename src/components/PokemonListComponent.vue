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
        <span ref="pokeID">Pokedex-ID: {{ item["pokedex-id"] }}</span>
      </p>
      <button>show details</button>
      <!--      TODO @Hochi die Details mit v-if und als div oder so anzeigen
                allerdings nur wenn darauf geklickt wird
                also mit @click="getDetails(PokemonID)"
                Die PokemonID musst du dir dann aus dem richtigen Array nehmen
                ID ist im Array immer pokedex-id und in meinen Axios Funktionen als PokemonID jfyi
      -->
    </div>
    <p>-----------------------------------------------------------------</p>
  </div>
</template>

<script>
import axios from '../js/AxiosRequests';
import { mapActions } from 'vuex';

export default {
  name: 'PokemonListComponent',
  data() {
    return {
      pokemon: null,
      details: null,
      testArray: [
        { name: 'Pikachu', 'pokedex-id': 25 },
        { name: 'Raichu', 'pokedex-id': 26 },
        { name: 'Julia', 'pokedex-id': 23 },
      ],
    };
  },
  methods: {

    ...mapActions([
      'getDetails',
    ]),
/*
    getDetails(PokemonID) {
      // TODO @Hochi bitte irgendwie mit der Funktion axios.getPokemonDetail(PokemonID) lösen
      // Beispiel Code um getPokemonDetails zu verwenden
      // @Hochi speichere dir halt data irgendwo im data() object als zB details, also zB mit this.details
      // -> aktuell loggts dirs nur in der Konsole
      axios.getPokemonDetails(PokemonID)
        .then((data) => {
          console.log(data);
        });
    },*/
  },
  mounted() {
    axios.getPokemon()
      .then((data) => {
        this.pokemon = data;
      });
  },
};
</script>

<style scoped>

</style>
