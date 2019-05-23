import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LifeInSG from '@/components/LifeInSG'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HomePage',
    //   component: HomePage
    // },
    {
      path: '/',
      name: 'LifeInSG',
      component: LifeInSG
    }
  ]
});
