import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index';
import router from '@/router/index';
import vuetify from '@/plugins/vuetify'
import common from '@/plugins/common';


Vue.config.productionTip = false

Vue.use(common);
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
