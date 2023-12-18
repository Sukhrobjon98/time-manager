import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import withUUID from "vue-uuid";
import "./index.css";
const pinia = createPinia();
const app = createApp(App);
app.use(withUUID);

app.use(pinia);
app.mount("#app");
