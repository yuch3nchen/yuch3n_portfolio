<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Turbulenece from "./components/Turbulenece.vue";

const isMenuOpen = ref(false);

const toggleMenu = (value) => {
  isMenuOpen.value = value;
};
</script>

<template>
  <Header :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
  <div :class="{ 'blur-sm': isMenuOpen }" class="transition-all duration-300">
    <About id="section_about" />
    <Projects id="section_projects" />
    <Contact id="section_contact" />
  </div>
  <Turbulenece></Turbulenece>
</template>

<style scoped></style>
