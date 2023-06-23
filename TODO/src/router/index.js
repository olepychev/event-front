import Vue from "vue";
import VueRouter from "vue-router";
import Activity from "../components/Activity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todo",
    name: "todo",
    component: Activity,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
