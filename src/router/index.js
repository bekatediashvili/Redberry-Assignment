import {createRouter, createWebHistory,} from "vue-router";


// routes
import Home from "../components/Home.vue";
import PersonalInfo from "../components/PersonalInfo.vue";
import Experience from "../components/Experience.vue";
import Education from "../components/Education.vue";
import NotFound from "../components/NotFound.vue";
import Resume from "../components/Resume.vue";

const routes = [

    {
        path: '/',
        redirect: '/home',
    },

    {path: '/home', component: Home},
    {path: '/personalinfo', component: PersonalInfo},
    {path: '/experience', component: Experience},
    {path: '/education', component: Education},
    {
        path: '/resume',
        component: Resume
    },
    {path: '/:notFound(.*)', component: NotFound}



]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router