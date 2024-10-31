import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";

export default createI18n({
  legacy: false, // Composition API
  locale: "en", // 默認語言
  fallbackLocale: "zh", // 備用語言
  messages: {
    zh,
    en,
  },
});
