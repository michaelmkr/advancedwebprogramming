<template>
  <div>

    <h1>Suggestion Component</h1>
    <vue-suggestion :itemTemplate="itemTemplate"
                    :items="items"
                    :setLabel="setLabel"
                    @changed="inputChange"
                    @selected="itemSelected"
                    v-model="item">
    </vue-suggestion>
    <button @click="showItems">show items</button>
  </div>
</template>

<script>
  import itemTemplate from './ItemTemplate';
  import * as http from '../APICom/index';

  export default {
    name: 'SuggestionComponent',
    data() {
      return {
        item: {},
        items: [
          {id: 1, name: 'Golden Retriever'},
          {id: 2, name: 'Cat'},
          {id: 3, name: 'Squirrel'},
        ],
        suggestedItems: [],
        itemTemplate,
      }
    },
    mounted() {
      this.getPokemon()
    },
    methods: {
      showItems() {
        console.log(this.items);
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
        console.log("now selected");
        return item.name;
      },
      inputChange(text) {
        // your search method
        this.suggestedItems = this.items.filter(item => item.name.includes(text));
        //this.items = this.items.filter(item => item.name.includes(text));
        // now `items` will be showed in the suggestion list
      },
    },
  };
</script>
