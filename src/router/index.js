import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: ["/home", "/index"],
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/users/:id?",
    name: "Users",
    component: () => import("@/views/Users.vue"),
  },
  {
    path: "/vip",
    name: "VIP",
    component: () => import("@/views/VIP.vue"),
    children: [
      {
        path: "",
        name: "VIPHome",
        component: () => import("@/views/vip/Home.vue"),
      },
      {
        path: "profile",
        name: "VIPProfile",
        component: () => import("@/views/vip/Profile.vue"),
      },
      {
        path: "orders",
        name: "VIPOrders",
        component: () => import("@/views//vip/Orders.vue"),
      },
    ],
  },
  {
    path: "/svip",
    redirect: "/",
  },
  {
    path: "/customers",
    component: () => import("@/views/Customers.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
