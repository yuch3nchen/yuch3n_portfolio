<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import projectsData from "../assets/data/contents.json";

const darkMode = ref(false);

const updateMode = (e) => {
  darkMode.value = e.matches;
};

const transformIcons = (icons) => {
  return icons.map((icon) => ({
    ...icon,
    iconUrl: new URL(`../assets/icons/${icon.iconUrl}`, import.meta.url).href,
  }));
};

const currentIcons = computed(() => {
  return darkMode.value
    ? transformIcons(projectsData.techStack.dark)
    : transformIcons(projectsData.techStack.light);
});

onMounted(() => {
  const darkModeActive = window.matchMedia("(prefers-color-scheme: dark)");
  darkMode.value = darkModeActive.matches;
  darkModeActive.addEventListener("change", updateMode);
});

onUnmounted(() => {
  const darkModeActive = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeActive.removeEventListener("change", updateMode);
});

// console.log(lightIcons);
</script>
<template>
  <div class="container px-9 py-12 mx-auto md:px-16 px-4 xl:px-48">
    <div class="overflow-clip fadeout-horizontal">
      <div
        class="flex gap-12 pl-12 md:gap-16 md:pl-16 w-max animate-marquee-move"
      >
        <img
          v-for="(img, index) in currentIcons"
          :key="index"
          :src="img.iconUrl"
          :alt="img.name"
          class="h-12"
        />
        <!-- Repetition -->
        <img
          v-for="(img, index) in currentIcons"
          :key="'clone-' + index"
          :src="img.iconUrl"
          :alt="img.name"
          class="h-12"
        />
        <img
          v-for="(img, index) in currentIcons"
          :key="'clone2-' + index"
          :src="img.iconUrl"
          :alt="img.name"
          class="h-12"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.fadeout-horizontal {
  mask-image: linear-gradient(
    to right,
    transparent,
    white 5rem,
    white calc(100% - 5rem),
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    white 5rem,
    white calc(100% - 5rem),
    transparent
  );
}
</style>
