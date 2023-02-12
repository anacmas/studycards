<template>
  <v-app>
    <v-col class="container-column background-color">
      <v-card height="100vh" width="256px">
        <v-navigation-drawer absolute permanent left class="primary pt-6">
          <template v-slot:prepend>
            <v-list-item two-line class="d-flex justify-center" >
              <v-menu>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-avatar size="36px">
                      <img src="https://graph.facebook.com/4/picture?width=300&height=300">
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card class="no-padding">
                  <v-list two-line>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-avatar>
                          <img src="https://graph.facebook.com/4/picture?width=300&height=300">
                        </v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{logged_user.first_name}} {{logged_user.last_name}}</v-list-item-title>
                        <v-list-item-subtitle>{{logged_user.email}}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                  <v-divider />
                  <v-list>
                    <v-list-item @click="logout()">
                      <v-list-item-content>
                        <v-list-item-title>Log out</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-list-item>
          </template>

          <v-divider class="lightteal" />

          <v-list dense class="ml-3">
            <div class="d-flex justify-center">
              <h1 class="menu-title lightteal--text font-weight-bold">
                Card List
              </h1>
              <v-btn
                color="secondary"
                class="mr-3 add-subject-btn"
                dark
                rounded
                icon
                title="New Subject"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            <v-list-item @click="iconRight = !iconRight" v-for="item in items" :key="item.title">
              <v-list-item-icon>
                <v-icon v-if="iconRight">
                  mdi-arrow-right-drop-circle
                </v-icon>
                <v-icon v-else>
                  mdi-arrow-down-drop-circle
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-col>
  </v-app>
</template>

<script>
export default {
  name: 'LateralMenu',
  iconRight: true,
  props: ['state'],
  data: () => ({
    items: [
      { title: 'Profile', icon: 'mdi-arrow-right-drop-circle' }
    ]
  }),
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap");

.container-column {
  padding: 0;
}

.background-color {
  background-color: #001628;
}
.menu-expander {
  height: 100vh;
  width: 50px;
}
.name {
  font-size: 18px;
  font-family: "Prompt", sans-serif;
}

.menu-title {
  font-family: "Prompt", sans-serif;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  font-size: 15px;
  margin: 10px 0;
}

.add-subject-btn{
    width: 30px;
    height: 30px;
}
</style>
