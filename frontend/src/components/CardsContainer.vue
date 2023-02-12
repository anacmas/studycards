<template>
    <v-container class="primary container-cards">
      <nav>
        <BasicCardTemplate />
      </nav>
    </v-container>
  </template>
  
  <script>
  import BasicCardTemplate from './BasicCardTemplate'
  
  export default {
    name: 'CardsContainer',
    components: {
      BasicCardTemplate
    }
  }
  </script>
  
<style scoped>
.container-cards {
  width: 100%;
  margin-left: 0;
}
</style>