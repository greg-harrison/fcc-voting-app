import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Header from '@/components/base_components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Landing,
        header: Header
      }
    },
    {
      path: '/test',
      components: {
        default: Landing,
        header: Header
      }
    }
  ]
})
