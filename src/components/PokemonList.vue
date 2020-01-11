<template>
<div>
  <div v-for="item of sightings" :key="item['sighting-id']">
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Pikachu</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                     to="/">{items.pokedex-id}
        </router-link>
      </div>
    </div>
    </div>
</div>

</template>

<script>
export default {
  name: "PokemonList",
  data () {
    return{
    sightings: [
          {
            'sighting-id': 1,
            timestamp: 1533569023147,
            'pokedex-id': 25,
            position: {
              lat: 48.213185,
              lng: 15.631745,
            },
          },
          {
            'sighting-id': 2,
            timestamp: 1533569123147,
            'pokedex-id': 26,
            position: {
              lat: 48.212635,
              lng: 15.635971,
            },
          }
    ]}
  }
}

</script>
