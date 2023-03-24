import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";
import RulesView from "../views/rules.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/rules",
            name: "rules",
            component: RulesView,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "default",
            component: HomeView
        }
    ],
});

export default router;
