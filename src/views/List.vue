<template>
  <div>
    <h1>List Page</h1>

    <list-component></list-component>

  </div>
</template>

<script>
    import ListComponent from "../components/ListComponent.vue";
    export default {
        name: "List",
        components: {ListComponent}
    }
</script>

<style scoped>

</style>
