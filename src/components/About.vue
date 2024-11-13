<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const isMobile = ref(false);
const isClicked = ref(false);
const { t } = useI18n();

onMounted(() => {
  // 檢查是否為觸控裝置
  isMobile.value = "ontouchstart" in window || navigator.maxTouchPoints > 0;
});

const handleClick = (e) => {
  if (isMobile.value) {
    isClicked.value = !isClicked.value;
    // 如果是手機版，（點兩次）切換文字才開分頁
    if (isClicked.value) {
      window.open(e.currentTarget.href, "_blank");
    }
  } else {
    // 桌機點擊後直接開啟分頁
    window.open(e.currentTarget.href, "_blank");
  }
};
</script>
<template>
  <section
    class="container mx-auto md:px-16 xl:px-48 mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-4 place-content-between"
  >
    <!-- <img
      src="../assets/images/profile-astro.png"
      alt="Yuchen's profile photo"
      class="place-self-center md:col-span-2 lg:col-span-1 svg-shake"
    /> -->
    <article
      class="px-9 md:px-0 md:col-span-2 lg:col-span-3 flex flex-col justify-between gap-6"
    >
      <div class="text-pretty">
        <h2 class="font-bold text-2xl mb-2">
          {{ t("greetings.start")
          }}<span class="svg-shake">{{ t("name") }}</span
          >{{ t("greetings.end", { location: t("location") }) }}
        </h2>
        <p>
          {{ t("text-about") }}
        </p>
      </div>
      <div class="flex gap-2">
        <a
          href="mailto:yuch3nchen@gmail.com"
          class="group rounded-full p-2 border hover:bg-[#242424] dark:hover:bg-white"
        >
          <svg
            class="w-6 h-6 dark:fill-gray-300 group-hover:fill-white dark:group-hover:fill-[#242424]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/yuch3nchen"
          target="_blank"
          class="group rounded-full p-2 border hover:bg-[#242424] dark:hover:bg-white"
        >
          <svg
            class="w-6 h-6 dark:fill-gray-300 group-hover:fill-white dark:group-hover:fill-[#242424]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
        <a
          href="https://www.cake.me/s--1fxe5eYGpF0v6kRBk0Q8SA--/yuchenchen"
          class="group border rounded-full py-2 px-4 inline-flex items-center gap-2"
          @click.prevent="handleClick"
        >
          <div class="flex-shrink-0">
            <span
              class="light block w-3 h-3 rounded-full animate-pulse bg-green-400"
            ></span>
          </div>

          <div
            class="status-text relative overflow-hidden w-full flex-grow text-center"
          >
            <span
              class="block transition-transform duration-300"
              :class="{ 'mobile-up': isMobile && isClicked }"
              >{{ t("status-open") }}</span
            >
            <span
              class="absolute top-0 left-0 w-full transition-translate duration-300 translate-y-full"
              :class="{ 'mobile-down': isMobile && isClicked }"
              >{{ t("resume") }}</span
            >
          </div>
        </a>
      </div>
    </article>
  </section>
</template>
<style scoped>
/* 桌機版 */
@media (hover: hover) {
  .group:hover {
    .status-text {
      span {
        &:first-child {
          transform: translateY(-100%);
        }
        &:last-child {
          transform: translateY(0);
        }
      }
    }
  }
}

/* 行動裝置 */
.mobile-up {
  transform: translateY(-100%) !important;
}

.mobile-down {
  transform: translateY(0) !important;
}

.status-text {
  span {
    &:last-child {
      transform: translateY(100%);
    }
  }
}
</style>
