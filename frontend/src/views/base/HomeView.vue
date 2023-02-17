<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="d-flex">
        <div class="left-side">
          <img
            src="@/assets/login-photo.jpg"
            alt="A girl studying"
            class="login-photo"
          />
          <!-- Foto de Vlada Karpovich: https://www.pexels.com/pt-br/foto/livro-livros-navegando-procurando-4050315/ -->
        </div>
        <v-col class="right-side">
          <h1 class="title">Study Cards</h1>
          <div class="buttons-login">
            <v-btn
                v-if="!loggedUser"
                color="#263238"
                min-width="228"
                rel="noopener noreferrer"
                size="x-large"
                variant="flat"
                :to="{ name: 'accounts-login' }"
                class="my-4">
                <v-icon icon="mdi-account-arrow-right-outline" size="large" start />
                Login
              </v-btn>
              <v-btn
                v-else
                color="#263238"
                min-width="228"
                rel="noopener noreferrer"
                size="x-large"
                variant="flat"
                :to="{ name: 'accounts-logout' }">
                <v-icon icon="mdi-account-arrow-right-outline" size="large" start />
                Logout
              </v-btn>
              <v-btn
                v-if="loggedUser"
                color="#263238"
                min-width="228"
                rel="noopener noreferrer"
                size="x-large"
                variant="flat"
                :to="{ name: 'cards-list' }"
                class="my-4">
                <v-icon icon="mdi-folder-star-multiple" size="large" start />
                Cards
              </v-btn>
          </div>
          <p class="text">Create your own study cards and test your knowledge!</p>
        </v-col>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapState } from "pinia"
import { useAccountsStore } from "@/stores/accountsStore"

export default {
  computed: {
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login {
  width: 100%;
}

.login-photo {
  height: 100vh;
}

.right-side {
  margin: auto;
}

.title {
  font-size: 80px;
  text-transform: uppercase;
  color: #67758c;
  font-family: "Inter", sans-serif;
  line-height: 85px;
  margin: 0 !important;
}

.buttons-login {
  height: 90px;
  margin: 40px 0;
}

.text {
  font-size: 18px;
  max-width: 250px;
  text-align: center;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
}
</style>