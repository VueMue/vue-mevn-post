import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/index";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
