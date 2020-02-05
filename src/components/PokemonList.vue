<template>
<div>
  <div v-for="item in getPokeList" :key="item['sighting-id']">
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
      <img :src="'https://raw.githubusercontent.com/michaelmkr/sprites/master/sprites/pokemon/' + item['pokedex-id'] + '.png'" height="100" width="100">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">#{{item['pokedex-id']}} - {{getDetails(item['pokedex-id']).name}}</h2><br>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <p>Größe: {{getDetails(item['pokedex-id']).height}}</p>
        <p>Gewicht: {{getDetails(item['pokedex-id']).weight}}</p>
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
  data () {
    return{
    }
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
    getDetails (id) {
      return this.getPokeDex.find(p => p['pokedex-id'] === id);
    },
  }
}

</script>
