import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "../pages/HelloWorld"


const router = createRouter({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ],
  history: createWebHistory()
})

export default router
