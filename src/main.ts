import { createApp } from "vue";
import App from "./App.vue";
// CSS 重置
import "normalize.css";
// pinia引入
import pinia from "./stores";
// router引入
import router from "./router";
import "./assets/css/index.sass";
import "@/services";

createApp(App).use(pinia).use(router).mount("#app");
