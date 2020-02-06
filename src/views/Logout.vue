<template>
  <h2>Logging out..</h2>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  import {getSnackBar} from "../store/getters";

  export default {
    name: 'Logout',
    data() {
      return {}
    },
    mounted() {
      setTimeout(this.logout, 1500)
    },


    computed: {
      ...mapGetters([
        'getPosition',
        'getAuthToken',
        'getSnackBar'
      ]),
    },
    methods: {
      ...mapActions([
        'addSighting',
        'logUserOut',
      ]),
      logout(){

        this.logUserOut().then(this.$vtNotify(this.getSnackBar));
      }
    },
  };
</script>
