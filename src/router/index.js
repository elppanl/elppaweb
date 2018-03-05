import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homep from '@/components/pages/elpp1'
import elpp2 from '@/components/pages/elpp2'
import elpp3 from '@/components/pages/elpp3'
import elpp4 from '@/components/pages/elpp4'
import elpp5 from '@/components/pages/elpp5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: homep
    },
    {
      path: '/elpp2',
      name: 'WebTechnology',
      component: elpp2
    },
    {
      path: '/elpp3',
      name: 'taiji',
      component: elpp3
    },
    {
      path: '/elpp4',
      name: 'yuanfang',
      component: elpp4
    },{
      path: '/elpp5',
      name: 'friends',
      component: elpp5
    }

  ]
})
