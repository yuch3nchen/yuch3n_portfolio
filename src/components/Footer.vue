<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <div class="text-center py-12">
    <p class="text-gray-500">&copy;{{ currentYear }} Yuch3n</p>
  </div>
</template>
