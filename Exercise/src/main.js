/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
//import VueSweetalert2 from "vue-sweetalert2"; //alert box or modal
//Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

Vue.directive("custom-on", {
  bind(el, binding) {
    const eventName = binding.arg;
    const eventCallback = binding.value;
    el.addEventListener(eventName, e => {
      eventCallback(e);
    });
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>",
  render: h => h(App)
});
