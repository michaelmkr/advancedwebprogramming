<template>
  <div>
    <div :key="item['sighting-id']" style="margin-bottom: 20px;" v-for="item in getPokeList">
      <div class="demo-card-square mdl-card mdl-shadow--2dp" v-if="item['pokedex-id'] !== null">
        <img
          :src="'https://raw.githubusercontent.com/michaelmkr/sprites/master/sprites/pokemon/' + item['pokedex-id'] + '.png'"
          height="100" width="100">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">#{{item['pokedex-id']}} -
            {{getName(item['pokedex-id'])}}</h2><br>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <p>Größe: {{getHeight(item['pokedex-id'])}}
            <br>Gewicht: {{getWeight(item['pokedex-id'])}}
            <br><span v-for="(type, index) in getTypes(item['pokedex-id'])">Typ #{{index + 1}}: {{type}}<br></span>
            Lat: {{item.position.lat}}
            <br>Lng: {{item.position.lng}}</p>
        </div>
      </div>
    </div>
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
          let returnItem = this.getPokeDex.find(p => p['pokedex-id'] === id);
          if (returnItem !== null && returnItem !== undefined){
            return returnItem.name;
          }
        } else{
          return '';
        }
      },
      getHeight(id) {
        if (id !== null && id !== undefined && !isNaN(id)){
          let returnItem = this.getPokeDex.find(p => p['pokedex-id'] === id);
          if (returnItem !== null && returnItem !== undefined){
            return returnItem.height;
          }
        } else{
          return '';
        }
      },
      getWeight(id) {
        if (id !== null && id !== undefined && !isNaN(id)){
          let returnItem = this.getPokeDex.find(p => p['pokedex-id'] === id);
          if (returnItem !== null && returnItem !== undefined){
            return returnItem.weight;
          }
        } else{
          return '';
        }
      },
      getTypes(id) {
        if (id !== null && id !== undefined && !isNaN(id)){
          let returnItem = this.getPokeDex.find(p => p['pokedex-id'] === id);
          if (returnItem !== null && returnItem !== undefined){
            return returnItem.types;
          }
        } else{
          return '';
        }
      },
    }
  }

</script>
