import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import OnTheOrder from '@/components/OnTheOrder'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/OnTheOrder',
      name: 'OnTheOrder',
      component: OnTheOrder
    }
  ]
})
