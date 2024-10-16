<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";

const isMenuOpen = ref(false);

const toggleMenu = (value) => {
  isMenuOpen.value = value;
};
</script>

<template>
  <Header :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
  <div :class="{ 'blur-sm': isMenuOpen }" class="transition-all duration-300">
    <About id="section_about" />
  </div>
</template>

<style scoped></style>
