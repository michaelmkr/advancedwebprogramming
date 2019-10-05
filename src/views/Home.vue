<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button-component></button-component>
  </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';
    import ButtonComponent from "../components/ButtonComponent";

    export default {
        name: 'home',
        components: {
            ButtonComponent,
            HelloWorld,
        },
    };
</script>
