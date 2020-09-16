//llamamos a vue y a vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
//usamos a vur router
Vue.use(VueRouter)
export const routes = [
//rutas
  {
    path:'/',
    component: () => import('./../views/index/Index'),
    children:[
      {
        path:'/',
        name:'login_in',
        component: () => import('./../components/layouts/auth/Login_in')
      },
      {
        path:'email-recovery',
        name:'email-recovery',
        component: () => import('./../components/layouts/auth/Email-Recovery')
      },
      {
        path:'code-recovery',
        name:'code-recovery',
        component: () => import('./../components/layouts/auth/Code-Recovery')
      },
      {
        path:'update-password',
        name:'updatePassword',
        component: () => import('./../components/layouts/auth/UpdatePassword')
      },
      {
        path:'/register',
        name:'register',
        component: () => import('./../components/layouts/auth/Register')
      },
    ]// fin del children del index
  },
  {
    path:'/home/',
    component: () => import('./../views/admin/Home'),
    children:[
      {
        path:'/',
        name:'users',
        component: () => import('./../views/admin/Users')
      },
      {
        path:'profile',
        name:'profile',
        component: () => import('./../views/admin/Profile')
      },
    ],
    meta: {
      requiresAuth: true
    },
  },

]// fin array de rutas
