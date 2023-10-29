import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "main",
    component: () =>
      import( /* webpackChunkName: "main" */ "../views/main/MainView.vue")
  },
  {
    path: "/posts/:userId/:id",
    name: "post",
    component: () =>
      import( /* webpackChunkName: "post" */ "../views/post/PostView.vue")
  },
  {
    path: "/lk/:userId",
    name: "lk",
    component: () =>
      import( /* webpackChunkName: "lk" */ "../views/lk/LKView.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router