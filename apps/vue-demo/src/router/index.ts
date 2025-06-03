import { type Router, createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: async () => await import("../views/AboutView.vue"),
        },
    ],
}) as Router;
