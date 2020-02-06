<template>
  <div>
    <div :key="item['sighting-id']" style="margin-bottom: 20px;" v-for="item in getPokeList" v-if="item['pokedex-id'] !== null && item['pokedex-id'] !== undefined && !isNaN(item['pokedex-id'])">
      <div class="demo-card-square mdl-card mdl-shadow--2dp">
        <img
          :src="'https://raw.githubusercontent.com/michaelmkr/sprites/master/sprites/pokemon/' + item['pokedex-id'] + '.png'"
          height="100" width="100">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">#{{item['pokedex-id']}} -
            {{getName(item['pokedex-id'])}}</h2><br>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <p>Größe: {{getDetails(item['pokedex-id']).height}}
            <br>Gewicht: {{getDetails(item['pokedex-id']).weight}}
            <br><span v-for="(type, index) in getDetails(item['pokedex-id']).types">Typ #{{index + 1}}: {{type}}<br></span>
            Lat: {{item.position.lat}}
            <br>Lng: {{item.position.lng}}</p>
        </div>
      </div>
    </div>
    <button @click="getFilteredList">filter</button>
  </div>

</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  import {getPokeDex, getPokeList} from "../store/getters";

  export default {
    name: "PokemonList",
    data() {
      return {}
    },
    mounted() {
      this.retrievePokedex('de');
    },
    computed: {
      ...mapGetters([
        'getPokeList',
        'getPokeDex'
      ]),
    },
    methods: {
      ...mapActions([
        'retrievePokedex'
      ]),
      getDetails(id) {
        return this.getPokeDex.find(p => p['pokedex-id'] === id);
      },
      getName(id) {
        if (id !== null && id !== undefined && !isNaN(id)){
          return this.getPokeDex.find(p => p['pokedex-id'] === id).name;
        }
      },
      getFilteredList(){
        console.log(this.getPokeList);
        this.getPokeDex.find(p => p['pokedex-id'] === null);
      }
    }
  }

</script>
