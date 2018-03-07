// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import nav from './components/commons/nav1'

// 引入element开始
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入element结束

// 引入vant开始
// import Vant from 'vant';
// import 'vant/lib/vant-css/index.css';
// Vue.use(Vant);
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Swipe).use(SwipeItem);
import { Lazyload} from 'vant';
Vue.use(Lazyload);
// 引入vant结束

Vue.config.productionTip = false

/* eslint-disable no-new */
// 这里是通用的组件
Vue.component('nav1',nav);

// 这里是根实例
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
