import Vue from 'vue'
import App from "./App.vue"

Vue.config.procutionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
