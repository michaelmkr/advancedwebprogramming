<template>
  <div>
    <b>#{{ item['pokedex-id'] }} </b>
    <span>{{ item.name }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      item: { required: true },
    }
  }
</script>
