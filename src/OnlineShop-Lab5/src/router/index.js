import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/contacts', component: Contacts }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router