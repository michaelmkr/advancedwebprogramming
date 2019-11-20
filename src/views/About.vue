<template>
  <div>
    <h1>This is an about page</h1>
    <button-component id="AboutStyle" type="fab"></button-component>
    <button-component type="fab" disabled></button-component>

  </div>

</template>

<script>
// @ is an alias to /src
import ButtonComponent from '../components/ButtonComponent';

export default {
  name: 'about',
  components: {
    ButtonComponent,
  },
};
</script>


<style scoped>
#AboutStyle{
    border: 1px;
  }
</style>
