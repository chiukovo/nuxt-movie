import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from "jquery";
import md5 from "js-md5";
import Helpers from "./Helpers"; //引用

Vue.prototype.$ = jquery;
global.md5 = md5;
global.Vue = Vue;

Vue.config.productionTip = false;

if (typeof process.env.VUE_APP_PHOTO_DOMAIN == "undefined") {
    console.error('請設定env圖片庫網址');
}

if (typeof process.env.VUE_APP_WEB_TITLE == "undefined") {
    console.error('請設定env網站title名稱');
}

Vue.prototype.photoDomain = process.env.VUE_APP_PHOTO_DOMAIN;
Vue.prototype.webTitle = process.env.VUE_APP_WEB_TITLE;

Vue.use(Helpers); //將全域性函式當做外掛來進行註冊

new Vue({
  router,
  store,
  render: h => h(App),
  mount(){
  },
}).$mount("#app");
