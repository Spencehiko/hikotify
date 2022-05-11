import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LikedSongs from "../pages/LikedSongs.vue";

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
            component: HomePage,
        },
        {
            path: "/collection",
            name: "library",
            component: HomePage,
        },
        {
            path: "/liked-songs",
            name: "liked songs",
            component: LikedSongs,
        },
    ],
});

export default router;
