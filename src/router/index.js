import { createWebHistory, createRouter } from "vue-router";
import HelloComponent from "@/components/Hello";
import ProfileComponent from "@/components/Profile";

const routes = [
  {
    path: "/",
    name: "HelloComponent",
    component: HelloComponent,
  },
  {
    path: "/Profile",
    name: "ProfileComponent",
    component: ProfileComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
