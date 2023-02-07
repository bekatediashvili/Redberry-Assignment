import {createRouter, createWebHistory,} from "vue-router";


// routes
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";

const routes = [

    {
        path: '/',
        redirect: '/home',
    },
    {path: '/home', component: Home},
    {path: '/:notFound(.*)', component: NotFound}


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router