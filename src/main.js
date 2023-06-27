import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import * as VueGoogleMaps from "vue2-google-maps";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale });

window.toastr = require("toastr");

Vue.use(VueToastr2);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDGQ93SShkmSS8sUN71cVO433709GjC1BI",
    libraries: "places", // necessary for places input
  },
});

import VueTabs from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
Vue.use(VueTabs);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
