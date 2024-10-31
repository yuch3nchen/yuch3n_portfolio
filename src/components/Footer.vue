<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <div class="text-center py-12">
    <div class="flex justify-center items-center gap-3 text-gray-500 mb-2">
      <p>{{ t("footer.builtWith") }}</p>
      <!-- Vue.js Logo - Licensed under Creative Commons Attribution 4.0 International license -->
      <!-- Source: https://github.com/vuejs/art -->
      <svg
        class="w-5 h-5 transition-transform hover:scale-110"
        viewBox="0 0 128 128"
        fill="#42b883"
      >
        <path
          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
        ></path>
        <path
          fill="#35495e"
          d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
        ></path>
      </svg>
      <span class="hidden md:inline-block">Vue 3</span>
      <span>+</span>
      <!-- Tailwind CSS Logo - Licensed under MIT -->
      <!-- Source: https://github.com/tailwindlabs/tailwindcss.com -->
      <svg
        class="w-5 h-5 transition-transform hover:scale-110"
        viewBox="0 0 32 32"
        fill="#38bdf8"
      >
        <path
          d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zM0 23.2q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"
        />
      </svg>
      <span class="hidden md:inline-block">Tailwind</span>
      <span>+</span>
      <span>i18n</span>
      <span>+</span>
      <span>❤️</span>
    </div>
    <p class="text-gray-500">&copy;{{ currentYear }} Yuch3n</p>
  </div>
</template>
