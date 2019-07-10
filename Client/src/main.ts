import './plugins/vuetify'
import App                                      from './application/App';
import ApplicationRouter                        from './router/ApplicationRouter';
import Vue                                      from 'vue';
import './plugins/vuetify'
import './styles/global-styles.styl'

Vue.config.productionTip = false;
const router = new ApplicationRouter();

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
