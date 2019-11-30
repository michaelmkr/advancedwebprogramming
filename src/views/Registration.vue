<template>
  <register></register>
</template>

<script>
import RegisterComponent from '../components/RegisterComponent';
import Register from '../components/Register';
import Login from '../components/Login';

export default {
  name: 'Registration',
  components: { Login, RegisterComponent, Register },
};
</script>

<style scoped>

</style>
