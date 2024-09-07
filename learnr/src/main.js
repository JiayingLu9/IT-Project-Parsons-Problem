import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Generator from './pages/Generator.vue'
import AdminLogin from './pages/AdminLogin.vue'
import AdminProfile from './pages/AdminProfile.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/icon/iconfont.css'

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: '/Generator'
        },
        {
            path: "/Generator",
            name: "Generator",
            component: Generator,
        },
        {
            path: "/AdminLogin",
            name: "AdminLogin",
            component: AdminLogin,
        },
        {
            path: "/AdminProfile",
            name: "AdminProfile",
            component: AdminProfile,
          },  
    ]
});

app.use(router);
app.mount("#app");

export default router;
