import './assets/main.css'

import { createApp } from 'vue'
import MyApp from './MyApp.vue'
import Generator from './pages/Generator.vue'
import AdminProfile from './pages/AdminProfile.vue'
import AdminLogin from './pages/AdminLogin.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/icon/iconfont.css'

const app = createApp(MyApp);


const router = createRouter({
    history: createWebHistory(),
    routes:[
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
            path: "/AdminProfile",
            name: "AdminProfile",
            component: AdminProfile,
          },
        {
            path: "/AdminLogin",
            name: "AdminLogin",
            component: AdminLogin,
          },  
        {
          path: "/problem.html",
          name: "problem",
        },
    ]
  });

app.use(router);
app.mount("#app");

export default router;
