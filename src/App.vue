<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Turbulenece from "./components/Turbulenece.vue";

const isMenuOpen = ref(false);

const toggleMenu = (value) => {
  isMenuOpen.value = value;
};
</script>

<template>
  <Header :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
  <div :class="{ 'blur-sm': isMenuOpen }" class="transition-all duration-300">
    <About id="section_about" class="scroll-mt-16" />
    <Projects id="section_projects" class="scroll-mt-16" />
  </div>
  <Turbulenece></Turbulenece>
</template>

<style scoped></style>
