import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import signupview from '../views/signupView'
import loginview from '../views/loginView'
import dashboard from '../views/dashboard'

import store from '../store/index'



Vue.use(VueRouter)

  const routes = [
 
  
  {
     path:'/signup',
     name:'signup',
     component:signupview
  },

  {
    path:'/login',
    name:'login',
    component:loginview

  },

  {
    path:'/dashboard',
    name:'dashboard',
    component:dashboard,
    beforeEnter(to,from,next){
       if(store.state.idToken){
         next();

       }else{
         next('/login')
       }


    }
  }
]

const router = new VueRouter({
  routes
})

export default router
