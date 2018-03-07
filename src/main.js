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
