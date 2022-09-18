import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {path: '/home', name: 'home', component: () => import('../views/Home.vue')},
    {path: '/about/:userId', name: 'about', component: () => import('../views/About.vue'), props: true}
]


const router = createRouter({
    routes, 
    history: createWebHistory(),

})

export default router;