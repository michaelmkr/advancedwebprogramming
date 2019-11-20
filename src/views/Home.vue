<template>
  <div class="home">
    <button-component type="fab"></button-component>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonComponent from '../components/ButtonComponent';

export default {
  name: 'home',
  components: {
    ButtonComponent,
  },
};
</script>
