import { createApp } from "vue";
import i18n from "./i18n";
import App from "./App.vue";
import AOS from "aos";
import "./tailwind.css";
import "./global.scss";

AOS.init();

createApp(App).use(i18n).mount("#app");
