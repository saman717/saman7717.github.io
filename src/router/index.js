import { createRouter, createWebHistory } from 'vue-router';
import login from '../pages/login.vue';
import singnup from '../pages/singnup.vue';
import dashbord from '../pages/dashbord.vue';
import Home from '../pages/Home.vue';
import VerifyEmail from '../pages/VerifyEmail.vue';
import profile from '../pages/profile.vue';
import card from '../pages/card.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { showHeader: false },
  },

  {
    path:'/card',
    name:'card',
    component: card,
    meta:{showHeader:true}
  },
  {
    path: '/signup',
    name : 'signup',
    component : singnup,
    meta: { showHeader: false },
  },
  {
    path:"/dashbord",
    name:'dashbord',
    component: dashbord,
    meta: { showHeader: false },
  },
  {
    path:"/",
    name: "Home",
    component: Home,
    meta: { showHeader: true },
  },
  {
    path:"/verify-email",
    name:'VerifyEmail',
    component : VerifyEmail,
    meta: { showHeader: false },
  },
  {
    path:"/profile",
    name :'profile',
    component :profile,
    meta: { showHeader: false },
  
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;