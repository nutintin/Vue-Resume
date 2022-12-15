// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// // import * as Vue from 'vue'
// import App from "./App";
// import router from "./router";
// import { createApp } from "vue";

// // Vue.config.productionTip = false

// // /* eslint-disable no-new */
// // new Vue({
// //   el: '#app',
// //   router,
// //   components: { App },
// //   template: '<App/>'
// // })
// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
