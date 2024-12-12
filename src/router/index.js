import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/home-screen/home-screen.vue'
import SignIn from '../pages/sign-in/sign-in.vue'
import ForgotPassword from '../pages/forgot-password/forgot-password.vue'
import ProfileScreen from '../pages/profile-screen/profile-screen.vue'
import SignUp from '../pages/sign-up/sign-up.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/forgot-password',
      name: 'forgot password',
      component: ForgotPassword,
    },
    {
      path: '/profile-screen',
      name: 'profile screen',
      component: ProfileScreen,
    },
  ],
})

export default router
