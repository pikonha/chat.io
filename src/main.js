import { Vue } from 'vue'
import { App } from "./components/App"

Vue.config.procutionTip = false;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
})