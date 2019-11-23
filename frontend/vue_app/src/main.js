import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from '../node_modules/bootstrap-vue/dist/bootstrap-vue.esm';

import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
