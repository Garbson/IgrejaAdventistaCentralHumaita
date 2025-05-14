<template>
  <v-footer color="background" class="text-center">
    <v-container>
      <p class="white--text">IASD Central de Curitiba - {{ currentYear }} - Todos os direitos reservados.</p>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>
