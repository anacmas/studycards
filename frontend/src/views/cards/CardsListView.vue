<template>
  <v-app>
    <div class="container-home d-flex">
      <LateralMenu />
      <div class="content-area">
        <SearchBar />
        <CardsContainer />
      </div>
    </div>
  </v-app>
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
  
  .container-home {
    background-color: #001628;
    margin: 0;
  }

  .content-area {
    padding: 30px 0 0 60px;
    width: 100%;
  }
</style>
  