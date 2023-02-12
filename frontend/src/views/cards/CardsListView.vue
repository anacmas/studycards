<template>
  <v-app>
    <div class="container-home d-flex">
      <LateralMenu />
      <div class="content-area pt-1 pl-6">
        <CardsContainer />
      </div>
    </div>
  </v-app>
</template>
  
<script>
  import CardsContainer from '@/components/CardsContainer.vue'
  import LateralMenu from '@/components/LateralMenu.vue'
  
  export default {
    name: "CardsListView",
  
    components: {
      LateralMenu,
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
    width: 100%;
  }
</style>
  