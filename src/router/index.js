import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  
  {
    path: "/planner_expense",
    name: "planner_expense",
    component: () => import("../views/PlannerExpenses.vue"),
  },
  {
    path: "/planner_guest_list",
    name: "/planner_guest_list",
    component: () => import("../views/PlannerGuestList.vue"),
  },
  {
    path: "/planner_guest",
    name: "planner_guest",
    component: () => import("../views/PlannerGuest.vue"),
  },
  {
    path: "/planner_add_event",
    name: "/planner_add_event",
    component: () => import("../views/addEvent"),
  },
  {
    path: "/planner_add_subevent",
    name: "/planner_add_subevent",
    props: true,
    component: () => import("../views/subEvent"),
  },
  {
    path: "/sub_dashboard",
    name: "/sub_dashboard",
    component: () => import("../views/subEventList"),
  },
  {
    path: "/rsvp_page",
    name: "/rsvp_page",
    component: () => import("../views/RsvpPage"),
  },
  {
    path: "/planner-add-event",
    name: "planner-add-event",
    component: () => import("../views/planner-add-event"),
  },
  {
    path: "/todo",
    name: "/todo",
    component: () => import("../views/ToDo.vue"),
  },
  {
    path: "/planner_budget",
    name: "/planner_budget",
    component: () => import("../views/PlannerBudget.vue"),
  },
  {
    path: "/setting",
    name: "/setting",
    component: () => import("../views/Setting.vue"),
  },

];
  
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
