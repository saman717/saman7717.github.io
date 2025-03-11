import { createRouter, createWebHistory } from 'vue-router';
import login from '../pages/login.vue';
import singnup from '../pages/singnup.vue';

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
  }
  // سایر روت‌ها را اینجا اضافه کنید
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;