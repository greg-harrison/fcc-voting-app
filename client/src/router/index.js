import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/base_components/Header'
import Landing from '@/components/Landing'
import UserSettings from '@/components/UserSettings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Landing,
        header: Header
      }
    },
    {
      //user/:userId
      path: '/user',
      components: {
        default: UserSettings,
        header: Header
      }
    }
  ]
})
