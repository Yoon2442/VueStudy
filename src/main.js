import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import ko from "element-plus/es/locale/lang/ko";
// import axios from 'axios'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: ko })
  .mount("#app");

// const app = createApp(App);
// app.config.globalProperties.$axios = axios; 
// app.config.globalProperties.$serverUrl = '//localhost:8081' //api server
// app.use(store).use(router).use(ElementPlus, { locale: ko }).mount("#app");
