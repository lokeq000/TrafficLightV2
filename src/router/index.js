import Vue from 'vue'
import VueRouter from 'vue-router'
import lightElem from '../components/light-elem/light-elem.vue'


Vue.use(VueRouter)
const routes = [
    {
      path: '/red',
      component: lightElem
    },
    {
      path: '/yellow',
      component: lightElem
    },
    {
      path: '/green',
      component: lightElem
    },
  ]
  
  const router = new VueRouter({

    // base: process.env.BASE_URL,
    routes
  })
  
  export default router

  
  
  
