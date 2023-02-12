<template>
  <v-card class="card" :color="chosenColor">
    <v-row class="d-flex justify-space-between">
      <v-textarea
        color="primary"
        height="30px"
        light
        class="title-font-size"
        maxlength="38"
        label="Title"
        rows="1"
        row-height="10"
      />
      <v-btn
        v-if="editingCard"
        icon
        color="#33333390"
        title="Delete Card"
        @click="overlay = !overlay"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-overlay
        v-model="overlay"
        class="align-center justify-center overlay-message"
      >
        <div class="card-overlay pa-5">
          <p class="mb-3">Are you sure you want to delete this card and all of its contents?</p>
          <v-btn
            color="info"
            @click="overlay = false"
          >
            Delete
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn
            class="ml-3"
            color="secondary"
            @click="overlay = false"
          >
            Cancel
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-overlay>
    </v-row>
    <v-spacer />
    <v-textarea
      color="accent"
      auto-grow
      class="input-study customgrey--text"
      light
      label="Type here what you want to study"
    />
    <v-row class="d-flex justify-space-between">
      <div class="d-flex justify-end">
        <div v-for="(color, index) in colors" :key="index">
          <v-btn
            class="color-button"
            icon
            :color="color"
            @click="changeColor(index)"
          />
        </div>
      </div>
      <div>
        <v-btn
          v-if="editingCard"
          color="#33333390"
          @click="saveContent"
        >
          save
        </v-btn>
        <v-btn
          v-else
          icon
          color="black"
          title="Edit Card"
          @click="openEditingCard"
        >
          <v-icon>mdi-note-edit-outline</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-card>
</template>
  
<script>
export default {
  name: 'BasicCardTemplate',
  data: () => ({
    colors: ['#ebaee7', '#2dc391', '#ebe7ae', '#c5aeeb', '#aecbeb'],
    chosenColor: '#2dc391',
    editingCard: true,
    disabled: false,
    overlay: false
  }),
  methods: {
    changeColor (index) {
      this.chosenColor = this.colors[index]
    },
    saveContent () {
      this.editingCard = false
      this.disabled = true
    },
    openEditingCard () {
      this.editingCard = true
    }
  }
}
  
</script>
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400&display=swap");
.card {
  width: 500px;
  min-height: 300px;
  margin-right: 0;
  border-radius: 10px;
  color: rgb(51, 51, 51);
  padding: 25px;
}

.title-font-size {
  font-size: 20px;
  font-family: "Prompt", sans-serif;
}

.card-overlay {
  min-width: 200px;
  max-width: 300px;
  background-color: #1c3040;
  border-radius: 10px;
}

.overlay-message {
  text-align: center;
}
.input-study {
  min-height: 130px;
  margin: 20px 0;
}

.color-button {
  border: 2px rgba(0, 0, 0, 0.075) solid;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.422);
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 30px;
  margin-left: 10px;
}
</style>
