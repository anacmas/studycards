<template>
    <v-row class="container-home background-color">
      <LateralMenu />
      <v-col class="content-area">
        <SearchBar />
        <CardsContainer />
      </v-col>
    </v-row>
</template>
  
<script>
  import CardsContainer from '@/components/CardsContainer.vue'
  import SearchBar from '@/components/SearchBar.vue'
  import LateralMenu from '@/components/LateralMenu.vue'
  
  export default {
    name: "CardsListView",
  
    components: {
      LateralMenu,
      SearchBar,
      CardsContainer
    },
  }
</script>
  
<style scoped>
  
  .container {
    margin: 0;
  }
  
  .background-color {
    background-color: #001628;
  }
  .content-area {
    padding: 30px 0 0 60px;
  }
</style>
  