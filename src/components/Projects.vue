<script setup>
import { nextTick, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import projectsData from "../assets/data/contents.json";
import AOS from "aos";

const { t } = useI18n();
const projects = ref(
  projectsData.projects.map((project) => {
    const transformed = {
      ...project,
      image: new URL(`../assets/images/${project.image}`, import.meta.url).href, // 確保圖片路徑正確
    };
    return transformed;
  })
);

watch(projects, () => {
  nextTick(() => {
    AOS.refresh();
  });
});
// console.log(projects);
</script>

<template>
  <div class="container px-9 mx-auto md:px-16 px-4 xl:px-48 mt-20">
    <h2 class="text-3xl mb-12">{{ t("project") }}</h2>
    <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-3 mb-12">
      <div
        class="group block border p-2 rounded-md relative break-inside-avoid-column"
        v-for="(project, index) in projects"
        :key="project.link"
        data-aos="flip-up"
        :data-aos-delay="index * 100"
        data-aos-duration="400"
      >
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full rounded"
          loading="lazy"
        />
        <div class="flex justify-end items-center gap-4 md:hidden p-4">
          <h3 class="text-xl mr-auto">
            {{ project.name }}
          </h3>

          <a v-if="project.github" :href="project.github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#181717"
              viewBox="0 0 24 24"
              class="w-6 h-6 dark:fill-current"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a :href="project.link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="w-6 h-6 dark:fill-current"
            >
              <path
                d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z"
              />
            </svg>
          </a>
        </div>
        <div
          class="absolute inset-0 m-2 bg-white/70 backdrop-blur-sm hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex flex-col items-center justify-center rounded gap-3"
        >
          <h3
            class="font-bold text-xl text-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 dark:text-[#213547]"
          >
            {{ project.name }}
          </h3>
          <div class="flex gap-4">
            <a v-if="project.github" :href="project.github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#181717"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
            <a :href="project.link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="w-6 h-6"
              >
                <path
                  d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
