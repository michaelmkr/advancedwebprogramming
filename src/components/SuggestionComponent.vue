<template>
  <div class="mdl-grid">
    <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
      <div class="mdl-card__title mdl-color--amber-700">
        <h2 class="mdl-card__title-text mdl-color-text--white">Sichtung hinzufügen:</h2>
      </div>
      <div class="mdl-card__supporting-text mdl-grid" style="height: 100px;">
        <vue-suggestion :itemTemplate="itemTemplate"
                        :items="suggestedItems"
                        :setLabel="setLabel"
                        @changed="inputChange"
                        @selected="itemSelected"
                        v-model="item">
        </vue-suggestion>
        <button @click="addSightingFromMap"
                class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import itemTemplate from './ItemTemplate';
  import * as http from '../APICom/index';
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'SuggestionComponent',
    data() {
      return {
        item: {},
        items: [],
        suggestedItems: [],
        itemTemplate,
      }
    },
    mounted() {
      this.getPokemon()
    },
    computed: {
      ...mapGetters([
        'getPosition',
        'getAuthToken',
        'getSnackBar'
      ]),
    },
    methods: {
      ...mapActions([
        'addSighting',
      ]),
      addSightingFromMap() {
        let sighting = {
          "id": this.item['pokedex-id'],
          "lat": this.getPosition.lat,
          "lng": this.getPosition.lng,
          "token": this.getAuthToken
        };
        this.addSighting(sighting).then(() => {setTimeout(() => {this.$vtNotify(this.getSnackBar)}, 2000)});
      },
      getPokemon() {
        http.getAllPokemon({"language": "de"}).then((response) => {
          this.items = response.data;
        });
      },
      itemSelected(item) {
        this.item = item;
      },
      setLabel(item) {
        return item['name'];
      },
      inputChange(text) {
        this.suggestedItems = this.items.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
      },
    },
  };
</script>
