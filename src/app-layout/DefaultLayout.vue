<script setup lang="ts">
import SideBard from '@/app-layout/components/SideBard.vue'
import MainContainer from '@/app-layout/components/MainContainer.vue'
</script>
<template>
  <div class="flex h-screen bg-linear-to-br from-green-100 via-amber-100-50 to-blue-200">
    <div
      class="absolute w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/30 rounded-full blur-3xl -top-20 -left-20"
    ></div>
    <div
      class="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/30 rounded-full blur-3xl bottom-0 right-0"
    ></div>
    <SideBard />
    <MainContainer />
  </div>
</template>

<style scoped></style>
