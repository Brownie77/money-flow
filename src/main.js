import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from "vuejs-paginate";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loader from "./components/app/Loader";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import tooltipDirective from "@/directives/tooltip.directive";
import titlePlugin from "@/utils/title.plugin.js";
import messagePlugin from "@/utils/message.plugin.js";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(VueMeta);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);
Vue.component("Paginate", Paginate);
Vue.directive("tooltip", tooltipDirective);

firebase.initializeApp({
  apiKey: "AIzaSyCyupOVmKUARI22CJuoXNlESpp8ghUC7c8",
  authDomain: "money-monkey-757b3.firebaseapp.com",
  databaseURL: "https://money-monkey-757b3.firebaseio.com",
  projectId: "money-monkey-757b3",
  storageBucket: "money-monkey-757b3.appspot.com",
  messagingSenderId: "57837915278",
  appId: "1:57837915278:web:34cb60319c4e8fc262cddf"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
