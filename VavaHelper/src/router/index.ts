import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TelaLogin from '@/views/TelaLogin.vue';
import { getToken } from '@/Service/authService';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component : () => import ('../views/Perfil.vue'),
    meta: {requiresAuth: true },

  },
  {
    path: '/login',
    name: 'Login',
    component: TelaLogin
  },
  {
    path: '/register',
    name: 'register',
    component: () => import ('../views/TelaCadastro.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken();
  if (to.meta.requiresAuth && !token) {
    next("/");
  } else {
    next();
  }
});

export default router
