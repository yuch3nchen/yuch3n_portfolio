import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ghPages } from "vite-plugin-gh-pages";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/yuch3n_portfolio/",
  plugins: [vue(), ghPages()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
