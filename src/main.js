import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import loader from "vue-spinner/src/PulseLoader.vue";

import AOS from "aos";
import "aos/dist/aos.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueAxios, axios);

Vue.component("pulse-loader", loader);

import "./styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
