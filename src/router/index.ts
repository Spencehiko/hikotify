import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/search",
            name: "search",
            component: () => import("../pages/HomePage.vue"),
        },
        {
            path: "/collection",
            name: "library",
            component: () => import("../pages/HomePage.vue"),
        },
    ],
});

export default router;
