import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
