<template>
  <div>
    <h1>This is the example of the TODO List</h1>
    <list-component></list-component>
  </div>
</template>

<script>
import ListComponent from '../components/ListComponent.vue';

export default {
  name: 'List',
  components: { ListComponent },
};
</script>

<style scoped>

</style>
