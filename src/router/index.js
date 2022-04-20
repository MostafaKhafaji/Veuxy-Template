import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Ecommerce from "../views/Ecommerce.vue";
import Analytics from "../views/Analytics.vue";
import SingleProduct from "../views/SingleProduct.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ecommerce",
    name: "Ecommerce",
    component: Ecommerce,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: Analytics,
  },
  {
    path: "/ecommerce/:id",
    name: "SingleProduct",
    component: SingleProduct,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
