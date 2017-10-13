import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/auth'
import Header from '@/components/base_components/Header'
import Landing from '@/components/landing/Landing'
import Login from '@/components/landing/login'
import Signup from '@/components/landing/signup'
import UserSettings from '@/components/user/UserSettings'
import ShowPolls from '@/components/polls/MultiPollDisplay'
import PollCreate from '@/components/polls/PollCreate'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/',
      components: {
        default: Landing,
        header: Header
      },
      meta: { requiresAuth: true }
    },
    {
      path: '/poll',
      components: {
        default: Landing,
        header: Header
      },
      meta: { requiresAuth: true }
    },
    {
      path: '/poll/create',
      components: {
        default: PollCreate,
        header: Header
      },
      meta: { requiresAuth: true }
    },
    {
      //user/:userId
      path: '/user',
      components: {
        default: UserSettings,
        header: Header
      },
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    auth.checkAuth()
    if (!auth.user.authenticated) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
