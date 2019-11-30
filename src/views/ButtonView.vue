<template>
  <div>
    <h1>This is the new Button View</h1>

    <button-component>Test out Slots</button-component>

  </div>

</template>


<script>
import ButtonComponent from '../components/ButtonComponent';

export default {
  name: 'button',
  components: { ButtonComponent },
};
</script>

<style scoped>

</style>
