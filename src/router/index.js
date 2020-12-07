import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from "../components/HomeComponent.vue";
import CreateComponent from "../components/CreateComponent.vue";
import IndexComponent from "../components/IndexComponent.vue";
import EditComponent from "../components/EditComponent.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent
  },
  {
    name: "edit",
    path: "/edit",
    component: EditComponent
  },
  {
    name: "notFound",
    path: "/not-found",
    component: NotFound
  },
  {
    path: "*",
    redirect: "not-found"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
