import { useAuthStore } from '@/stores/useAuthStore.ts'
import { type RouteLocationNormalized, useRoute } from 'vue-router'
import router from '@/router'

export default function authMiddleware(route: RouteLocationNormalized) {
  const meta = route.meta as any
  const authStore = useAuthStore()
  const isAuthenticated = authStore.token !== null
  const user = authStore.user
  console.log(isAuthenticated)
  console.log(meta)
  console.log(route)
  let normalizedUserNames
  if (user && user.tenant) {
    normalizedUserNames = user.tenant.name.split(' ').join('-').toLowerCase()
    const tenant_name = route.params.tenant_name
    tenant_name !== normalizedUserNames &&
      router.replace({ name: 'Dashboard', params: { tenant_name: normalizedUserNames } })
  }

  if (meta.requiresAuth && !isAuthenticated) {
    return router.replace({ name: 'Login' })
  }
  if (route.name === 'Login' && isAuthenticated)
    return router.replace({
      name: 'Dashboard',
      params: { tenant_name: authStore.user?.name.split(' ')[0] ?? 'Tenant' },
    })
}
