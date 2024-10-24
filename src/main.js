import { createApp } from "vue";
import i18n from "./i18n";
import App from "./App.vue";
import "./tailwind.css";
import "./global.scss";

createApp(App).use(i18n).mount("#app");
