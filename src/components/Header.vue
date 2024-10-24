<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import lightLogo from "../assets/images/logo-light.png";
import darkLogo from "../assets/images/logo-dark.png";
import navbarData from "../assets/data/contents.json";

const currentLogo = ref(lightLogo);

const updateLogo = (e) => {
  currentLogo.value = e.matches ? darkLogo : lightLogo;
};

const props = defineProps({
  isMenuOpen: Boolean,
});

const { t, locale } = useI18n();
const menuItems = ref(navbarData.navbar);
const emit = defineEmits(["toggle-menu"]);

const toggleMenu = () => {
  emit("toggle-menu", !props.isMenuOpen);
};

onMounted(() => {
  const darkModeActive = window.matchMedia("(prefers-color-scheme: dark)");
  currentLogo.value = darkModeActive.matches ? darkLogo : lightLogo;
  darkModeActive.addEventListener("change", updateLogo);
});
</script>

<template>
  <header
    class="fixed top-0 w-full z-10 bg-transparent py-2 md:px-0.5 lg:px-1 xl:px-52"
  >
    <div
      class="md:container md:mx-auto px-2 md:px-6 py-2 flex items-center justify-between md:backdrop-blur md:rounded-full md:border dark:md:border-gray-500 relative"
    >
      <!-- Logo -->
      <div class="flex gap-4">
        <h1>
          <img
            :src="currentLogo"
            alt="Yuch3n Chen"
            class="w-6 h-6 md:w-8 md:h-8"
          />
        </h1>
        <select v-model="locale" class="bg-transparent">
          <option value="zh">繁中</option>
          <option value="en">EN</option>
        </select>
      </div>

      <!-- Desktop -->
      <nav class="hidden md:flex space-x-4">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
          class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 svg-shake"
          >{{ t(item.textKey) }}</a
        >
      </nav>

      <!-- Burger button -->
      <button @click="toggleMenu" class="md:hidden bg-transparent">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- Mobile -->
      <Transition name="slide-fade">
        <nav
          v-show="isMenuOpen"
          class="md:hidden bg-white dark:bg-[#242424] py-4 px-4 absolute top-full w-full left-0 z-10 space-y-2"
        >
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            class="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 svg-shake"
            >{{ t(item.textKey) }}</a
          >
        </nav>
      </Transition>
    </div>
  </header>
</template>

<style lang="scss">
// nav {
//   a:hover {
//     animation: 1000ms shake ease-in-out infinite;
//   }
// }

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
