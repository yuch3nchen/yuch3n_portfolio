<script setup>
import { computed } from "vue";

const props = defineProps({
  isMenuOpen: Boolean,
});

const menuItems = computed(() => [
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
</script>

<template>
  <header class="fixed top-0 w-full z-10 pt-2">
    <div class="container mx-auto md:px-32">
      <div
        class="px-6 py-2 flex items-center justify-between backdrop-blur md:rounded-full md:border"
      >
        <!-- Logo -->
        <h1>
          <img
            src="../assets/images/logo.png"
            alt="Yuch3n Chen"
            class="w-6 h-6 md:w-8 md:h-8"
          />
        </h1>

        <!-- Desktop -->
        <nav class="hidden md:flex space-x-4">
          <!-- <a href="#section_about" class="text-gray-600 hover:text-gray-900"
            >about</a
          >
          <a href="#" class="text-gray-600 hover:text-gray-900">projects</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">contact</a> -->
          <a
            v-for="(item, index) in menuItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-600 hover:text-gray-900"
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
            class="md:hidden bg-white py-2 px-4 absolute top-full w-full left-0 z-10 space-y-2"
          >
            <a
              v-for="(item, index) in menuItems"
              :key="item.href"
              :href="item.href"
              class="block text-gray-600 hover:text-gray-900"
              >{{ item.text }}</a
            >
          </nav>
        </Transition>
      </div>
    </div>

    <!-- Turbulence -->
    <svg>
      <defs>
        <filter id="shake-1">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.02 1"
            numOctaves="3"
            result="noise"
            seed="0"
          />
          <feDisplacementMap
            id="displacement"
            in="SourceGraphic"
            in2="noise"
            scale="2"
          />
        </filter>
        <filter id="shake-2">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.02 1"
            numOctaves="3"
            result="noise"
            seed="1"
          />
          <feDisplacementMap
            id="displacement"
            in="SourceGraphic"
            in2="noise"
            scale="3"
          />
        </filter>
        <filter id="shake-3">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.02 1"
            numOctaves="3"
            result="noise"
            seed="2"
          />
          <feDisplacementMap
            id="displacement"
            in="SourceGraphic"
            in2="noise"
            scale="6"
          />
        </filter>
        <filter id="shake-4">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.02 1"
            numOctaves="3"
            result="noise"
            seed="4"
          />
          <feDisplacementMap
            id="displacement"
            in="SourceGraphic"
            in2="noise"
            scale="4"
          />
        </filter>
        <filter id="shake-5">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.02 1"
            numOctaves="3"
            result="noise"
            seed="5"
          />
          <feDisplacementMap
            id="displacement"
            in="SourceGraphic"
            in2="noise"
            scale="2"
          />
        </filter>
      </defs>
    </svg>
  </header>
</template>

<style lang="scss">
nav {
  a:hover {
    animation: 800ms shake ease-in-out infinite;
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

@keyframes shake {
  0% {
    filter: url(#shake-1);
  }
  25% {
    filter: url(#shake-2);
  }
  50% {
    filter: url(#shake-3);
  }
  75% {
    filter: url(#shake-4);
  }
  100% {
    filter: url(#shake-5);
  }
}
</style>
