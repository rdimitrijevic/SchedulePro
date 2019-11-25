import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import Router from 'vue-router';
import Cookie from 'vue-cookie';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import routes from './router';
// import BootstrapVue from '../node_modules/bootstrap-vue/dist/bootstrap-vue.esm';

Vue.use(BootstrapVue);
Vue.use(Cookie);

let router = new Router({
  mode: 'history',
  routes: routes
});

Vue.use(Router);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.requires_auth){
    const token = Vue.cookie.get('user-token');
    if(!token) {
      router.push('/signin');
    } else {
      next();
    }
  } else {
    next();
  }
});

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.interceptors.request.use(config => {
  config.headers.common['X-jwt-token'] = Vue.cookie.get('user-token');
  return config;
});

window.axios = axios;
window.Vue = Vue; 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
