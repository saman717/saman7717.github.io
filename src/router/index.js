import { createRouter, createWebHistory } from 'vue-router';
import login from '../pages/login.vue';
import singnup from '../pages/singnup.vue';
import dashbord from '../pages/dashbord.vue';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/signup',
    name : 'signup',
    component : singnup,
  },
  {
    path:"/dashbord",
    name:dashbord,
    component: dashbord
  },
  {
    path:"/",
    name: "Home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;