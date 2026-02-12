<script setup lang="ts">
import { type MenuItem } from '@/menuItem'
import NavLinkItem from '@/components/NavLinkItem.vue'
const menuItems: MenuItem[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    children: [],
  },
  {
    path: '/auth',
    name: 'Auth',
    icon: 'fas fa-cogs',
    children: [
      {
        path: '/auth/login',
        name: 'Profile',
        icon: 'fas fa-user',
      },
      {
        path: '/auth/signup',
        name: 'Security',
        icon: 'fas fa-shield-alt',
      },
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    icon: 'fas fa-cogs',
    children: [
      {
        path: '/auth/login',
        name: 'Profile',
        icon: 'fas fa-user',
      },
      {
        path: '/auth/signup',
        name: 'Security',
        icon: 'fas fa-shield-alt',
      },
    ],
  },
]
</script>

<template>
  <ul>
    <NavLinkItem v-for="item in menuItems" :key="item.path" :item="item" />
  </ul>
</template>

<style scoped></style>
