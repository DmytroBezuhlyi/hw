import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import i18n from "./i18n";
import "normalize.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

Vue.config.productionTip = false;

let app: any;

firebase.initializeApp({
  apiKey: "AIzaSyBCaGKb6xIAmkYMFj5P_y89XghegGp3su4",
  authDomain: "vue-crm-4012a.firebaseapp.com",
  projectId: "vue-crm-4012a",
  storageBucket: "vue-crm-4012a.appspot.com",
  messagingSenderId: "1011735178135",
  appId: "1:1011735178135:web:82e03243d331e4fef7f2d2",
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      i18n,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
