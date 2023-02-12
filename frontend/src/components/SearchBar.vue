<template>
    <form class="search-group">
      <v-btn
        color="secondary"
        class="mr-3"
        dark
        fab
        small
        title="New Card"
        @click="addNewCard"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <input class="search-bar" type="text" placeholder="Search">
      <v-btn
        class="ml-1"
        icon
        color="lightgray"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </form>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    methods: {
      addNewCard () {
      }
    }
  }
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap");
  .search-group {
    display: flex;
    align-items: center;
    font-family: "Prompt", sans-serif;
    margin-bottom: 50px;
  }
  
  .search-bar {
    width: 600px;
    height: 40px;
    background-color: #ffffff20;
    padding: 0 25px;
    color: lightgray;
    border-radius: 5px;
  }
  
  .search-bar::placeholder {
    color: lightgray;
  }
  
  img {
    width: 30px;
    margin: 5px 0 0 10px;
  }
  </style>
  