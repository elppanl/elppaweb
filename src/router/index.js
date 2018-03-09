import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homep from '@/components/pages/elpp1'
import elpp2 from '@/components/pages/elpp2'
import elpp3 from '@/components/pages/elpp3'
import elpp4 from '@/components/pages/elpp4'
import elpp5 from '@/components/pages/elpp5'
import elpp2p1 from '@/components/pages/elpp2p1'

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
    },
    {
      path: '/elpp5',
      name: 'friends',
      component: elpp5
    },
    {
      path: '/elpp2p1',
      name: 'WebTechnologyp1',
      component: elpp2p1
    }
  ],
  // 对于所有路由导航，简单地让页面滚动到顶部
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
  // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
