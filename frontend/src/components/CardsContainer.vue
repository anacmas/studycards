<template>
    <v-container class="primary container-cards">
      <div class="d-flex align-center mb-8">
        <v-btn
          color="secondary"
          class="mr-3"
          dark
          small
          title="New Card"
          @click="addNewCard"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <SearchBar />
      </div>
      <nav>
        <BasicCardTemplate />
      </nav>
    </v-container>
  </template>
  
  <script>
  import BasicCardTemplate from './BasicCardTemplate'
import SearchBar from './SearchBar.vue';
  
  export default {
    name: 'CardsContainer',
    components: {
    BasicCardTemplate,
    SearchBar
}
  }
  </script>
  
<style scoped>
.container-cards {
  width: 100%;
  margin-left: 0;
}
</style>