<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<template>
  <header class="fixed top-0 w-full z-10 pt-2">
    <div
      class="container mx-auto px-6 py-2 flex items-center justify-between backdrop-blur rounded-full border"
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
        <a href="#" class="text-gray-600 hover:text-gray-900">about</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">projects</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">contact</a>
      </nav>

      <!-- Burger button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
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
      <nav
        v-if="isMenuOpen"
        class="md:hidden bg-white py-2 px-4 absolute top-full w-full left-0 z-10"
      >
        <a href="#" class="block text-gray-600 hover:text-gray-900">about</a>
        <a href="#" class="block text-gray-600 hover:text-gray-900">projects</a>
        <a href="#" class="block text-gray-600 hover:text-gray-900">contact</a>
      </nav>
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
            scale="4"
          />
        </filter>
        <filter id="shake-3">
          <feTurbulence
            id="turbulence"
            baseFrequency="0.02 1"
            numOctaves="3"
            result="noise"
            seed="3"
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
