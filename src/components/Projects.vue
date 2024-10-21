<script setup>
import { ref } from "vue";
import projectsData from "../assets/data/projects.json";

const projects = ref(
  projectsData.projects.map((project) => {
    return {
      ...project,
      image: new URL(project.image, import.meta.url).href, // 確保圖片路徑正確
    };
  })
);
</script>

<template>
  <div class="container mx-auto md:px-16 xl:px-48 mt-20">
    <h2 class="text-5xl mb-12">Projects</h2>
    <div class="wall grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
      <div
        v-for="project in projects"
        :key="project.link"
        class="block rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white border"
      >
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img class="rounded-t-lg" :src="project.image" :alt="project.name" />
        </div>
        <div class="p-6">
          <h3 class="font-bold text-3xl">{{ project.name }}</h3>
          <p class="text-base">
            {{ project.info }}
          </p>
          <a :href="project.link">Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
