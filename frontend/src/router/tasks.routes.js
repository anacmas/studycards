// Composables
import DefaultLayout from "@/layouts/default/DefaultLayout.vue"
import CardsListView from "@/views/cards/CardsListView.vue"

export default [
  {
    path: "/cards",
    component: DefaultLayout,
    children: [
      {
        path: "list",
        name: "cards-list",
        component: CardsListView,
      },
    ],
  },
]
