import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";

export default createI18n({
  legacy: false, // Composition API
  locale: "zh", // 默認語言
  fallbackLocale: "en", // 備用語言
  messages: {
    zh,
    en,
  },
});
