import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/auth'
import Header from '@/components/base_components/Header'
import Landing from '@/components/landing/Landing'
import Login from '@/components/landing/login'
import Signup from '@/components/landing/signup'
import UserSettings from '@/components/user/UserSettings'
import ShowPolls from '@/components/polls/MultiPollDisplay'
import PollView from '@/components/polls/PollDisplay'
import PollCreate from '@/components/polls/PollCreate'
import UserPolls from '@/components/user/UserPolls'

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
        header: Header,
        default: Landing
      },
      meta: { requiresAuth: true }
    },
    {
      path: '/poll',
      components: {
        header: Header,
        default: PollView
      },
      meta: { requiresAuth: true }
    },
    // Poll Create uses Optional Param to swap between Edit and Create modes
    {
      path: '/poll/create/:poll_id?',
      components: {
        header: Header,
        default: PollCreate
      },
      meta: { requiresAuth: true }
    },
    {
      //user/:userId
      path: '/user',
      components: {
        header: Header,
        default: UserSettings
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
