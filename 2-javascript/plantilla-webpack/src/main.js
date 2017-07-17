import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
require("./style.scss");

import App from './App.vue';
Vue.use(VueRouter);
const routes = [
  { path: '/index', alias: '/', component: Index},
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
