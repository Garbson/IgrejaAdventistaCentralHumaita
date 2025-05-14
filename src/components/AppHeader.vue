<template>
  <v-container class="d-flex flex-column align-center bg-red">
    <v-img
      src="../assets/logoIgreja.png"
      alt="Logo Igreja Adventista"
      width="700"
      height="500"
      class="mb-2"
    ></v-img>
    <h1 class="text-h5 font-weight-bold white--text">
      Igreja Adventista do Sétimo Dia
    </h1>
    <h2 class="text-h6 white--text">CENTRAL DE CURITIBA</h2>
  </v-container>
</template>

<script>
import logoIgreja from "../assets/logoIgreja.png";

export default {
  name: "AppHeader",
  computed: {
    logoUrl() {
      return logoIgreja;
    },
  },
};
</script>
