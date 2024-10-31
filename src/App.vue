<script setup>
import { ref, onMounted, nextTick } from "vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import TechStack from "./components/TechStack.vue";
import Footer from "./components/Footer.vue";
import Turbulenece from "./components/Turbulenece.vue";
import AOS from "aos";

const isMenuOpen = ref(false);

const toggleMenu = (value) => {
  isMenuOpen.value = value;
};

onMounted(() => {
  // 等待所有組件掛載完成
  nextTick(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      once: true,
    });
    AOS.refresh();
  });
});
</script>

<template>
  <Header :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
  <div :class="{ 'blur-sm': isMenuOpen }" class="transition-all duration-300">
    <About id="section_about" class="scroll-mt-16" />
    <Projects id="section_projects" class="scroll-mt-16" />
    <TechStack />
    <Footer />
  </div>
  <Turbulenece></Turbulenece>
</template>

<style scoped></style>
