<template>
    <v-container class="primary">
      <nav class="search-bar">
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
  