<template>
  <!-- TODO check for short ternary expression -->
  <button
    :class="
    ['mdl-button mdl-js-button mdl-button--raised mdl-button--colored',
     round ? 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored' : '',
     flat ? 'mdl-button mdl-js-button mdl-js-ripple-effect' : '']"
    onclick="alert('Yaaay you clicked my Button! You are awesome!')">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: "ButtonComponent",
        props: {
            round: Boolean,
            flat: Boolean
        }
    }
    // TODO componentHandler.upgradeElement(button);
</script>

<style scoped>

</style>
