import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HData from "../components/HData.vue"
import HConfig from "../components/HConfig.vue"




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
    beforeEnter:(to,from,next)=>{
      console.log('我进入了params模板');
      console.log(to);
      console.log(from);
      next();
    }
  },{
    path:"/hi",
    component: ()=> import('../components/Hi.vue'),
    children:[
      {path:"data",name:"data",component:HData,props:{
        id:"123"
      }},
      {path:"config",name:"config",component:HConfig},
    ]
  },{
    path:"/goBack",
    redirect:'/'

  },
  {
    path:"/user/:id",
    component:()=>import('../components/User.vue')

  },
  {
    path:"/count",
    component:()=>import('../components/Count.vue')
  },
  {
    path:"/shopCar",
    component:()=>import('../components/shopCar/ShopCarHome.vue'),
    children:[
      {path:"/",name:"data",component:()=>import('../components/shopCar/Pos.vue')},
      {path:"shop",name:"shop",component:()=>import('../components/shopCar/Shop.vue')},
      
    ]
  },
  {
    path:"*",
    component:()=>import('../components/Error.vue'),

  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
