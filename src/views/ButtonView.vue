<template>
  <div id="buttonview">
    <ButtonComponent  icon="add" color="colored" type="mini-fab" />
    <ButtonComponent  color="accent" type="raised">Knoopf</ButtonComponent>
    <ButtonComponent  color="primary" type="raised" disabled>Knoopf</ButtonComponent>
    <a>asdfasdfasdfasdf</a>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'buttonview',
  components: {
    ButtonComponent,
  },
};
</script>
