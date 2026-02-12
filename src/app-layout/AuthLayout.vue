<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const transitionName = computed(() => {
  if (route.name === 'login') return 'slide-left'
  if (route.name === 'signup') return 'slide-right'
  return 'fade'
})
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 via-blue-50 to-blue-200 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  >
    <div
      class="absolute w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/30 rounded-full blur-3xl -top-20 -left-20"
    ></div>
    <div
      class="absolute w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/30 rounded-full blur-3xl bottom-0 right-0"
    ></div>
    <div
      class="relative w-full max-w-md sm:max-w-lg bg-white/20 backdrop-blur-xl shadow-xl rounded-2xl p-6 sm:p-8 border border-white/40 overflow-hidden"
    >
      <router-view v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
