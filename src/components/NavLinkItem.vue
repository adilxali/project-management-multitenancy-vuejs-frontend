<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import type { MenuItem } from '@/menuItem'
const props = defineProps<{
  item: MenuItem
}>()
const route = useRoute()
const { item } = props

const isActive = computed(() => {
  return route.path === item.path
})

const expandChildren = ref<boolean>(false)
</script>

<template>
  <li class="text-base py-1 cursor-pointer ">
    <ul v-if="item.children && item.children.length">
      <li @click="expandChildren = !expandChildren" class="hover:text-blue-500" :class="{ active: isActive }">
        {{ item.name }}
      </li>
      <TransitionGroup name="fade" tag="ul" class="ml-4">
      <template v-if="expandChildren">
        <NavLinkItem v-for="child in item.children" :key="child.path" :item="child" />
      </template>
      </TransitionGroup>
    </ul>
    <router-link v-else :to="item.path" class="hover:text-blue-500">{{ item.name }}</router-link>
  </li>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
  height: auto;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}
</style>
