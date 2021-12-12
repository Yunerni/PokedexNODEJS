import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreeJS from '@/components/ThreeJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ThreeJS',
      name: 'ThreeJS',
      component: ThreeJS
    }
  ]
})
