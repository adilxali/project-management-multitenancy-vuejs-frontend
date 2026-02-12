import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/app-layout/AuthLayout.vue'
import DefaultLayout from '@/app-layout/DefaultLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import authMiddleware from '@/middleware/auth.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth/login',
    },
    {
      path: '/:tenant_name/dashboard',
      name: 'Home',
      component: DefaultLayout,
      meta: { layout: 'default', requiresAuth: true },
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/app/DashboardView.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthLayout,
      children: [
        { path: '', redirect: '/auth/login' },
        {
          path: 'login',
          name: 'Login',
          component: LoginView,
        },
        {
          path: 'signup',
          name: 'Signup',
          component: () => import('@/views/auth/SignupView.vue'),
        },
      ],
    },
  ],
})
router.beforeEach((route) => {
  authMiddleware(route)
})
export default router
