<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<template>
  <div class="relative">
    <header class="bg-white shadow-md">
      <div
        class="container mx-auto px-4 py-2 flex items-center justify-between"
      >
        <!-- Logo -->
        <div class="font-bold">Logo</div>

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
          class="md:hidden bg-white py-2 px-4 absolute top-full w-full left-0"
        >
          <a href="#" class="block text-gray-600 hover:text-gray-900">about</a>
          <a href="#" class="block text-gray-600 hover:text-gray-900"
            >projects</a
          >
          <a href="#" class="block text-gray-600 hover:text-gray-900"
            >contact</a
          >
        </nav>
      </div>
    </header>
  </div>
</template>

<style></style>
