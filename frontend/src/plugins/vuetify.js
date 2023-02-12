/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

// Composables
import { createVuetify } from "vuetify"

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: "#001628",
          secondary: "#5CBBF6",
          accent: "#7ea8e6",
          info: "#fffcb4",
          warning: "#e13a68",
          error: "#be2c1d",
          success: "#9fee81",
          customteal: "#2dc391",
          customyellow: "#ebe7ae",
          custompink: "#ebaee7",
          custompurple: "#c5aeeb",
          customblue: "#aecbeb",
          customgrey: "#333333"
        },
      },
    },
  },
})
