import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import "material-design-icons-iconfont/dist/material-design-icons.css";

const queryClient = new QueryClient();
const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

app.use(router);

app.use(VueQueryPlugin, {
  queryClient,
});

app.mount("#app");
