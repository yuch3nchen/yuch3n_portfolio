<script setup>
import { ref, onMounted } from "vue";
import lightLogo from "../assets/images/logo-light.png";
import darkLogo from "../assets/images/logo-dark.png";

const currentLogo = ref(lightLogo);

const updateLogo = (e) => {
  currentLogo.value = e.matches ? darkLogo : lightLogo;
};

const props = defineProps({
  isMenuOpen: Boolean,
});

const menuItems = ref([
  {
    text: "about",
    href: "#section_about",
  },
  {
    text: "projects",
    href: "#section_projects",
  },
  {
    text: "contact",
    href: "#section_contact",
  },
]);

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
  <header class="fixed top-0 w-full z-10 mt-2">
    <div class="md:container md:mx-auto xl:px-32">
      <div
        class="px-6 py-2 flex items-center justify-between backdrop-blur md:rounded-full md:border dark:md:border-gray-500"
      >
        <!-- Logo -->
        <h1>
          <img
            :src="currentLogo"
            alt="Yuch3n Chen"
            class="w-6 h-6 md:w-8 md:h-8"
          />
        </h1>

        <!-- Desktop -->
        <nav class="hidden md:flex space-x-4">
          <a
            v-for="(item, index) in menuItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >{{ item.text }}</a
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
              v-for="(item, index) in menuItems"
              :key="item.href"
              :href="item.href"
              class="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >{{ item.text }}</a
            >
          </nav>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
nav {
  a:hover {
    animation: 1000ms shake ease-in-out infinite;
  }
}

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
