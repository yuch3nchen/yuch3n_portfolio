<script setup>
import { ref } from "vue";
import projectsData from "../assets/data/contents.json";

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
  <div class="container mx-auto md:px-16 px-4 xl:px-48 mt-20">
    <h2 class="text-3xl mb-12">Projects</h2>
    <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-3">
      <a
        v-for="project in projects"
        :key="project.link"
        :href="project.link"
        target="_blank"
        class="group block border p-2 rounded-md relative break-inside-avoid-column"
      >
        <img :src="project.image" :alt="project.name" class="w-full rounded" />
        <div
          class="absolute inset-0 m-2 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded"
        >
          <h3
            class="font-bold text-xl text-center px-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            {{ project.name }}
          </h3>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
