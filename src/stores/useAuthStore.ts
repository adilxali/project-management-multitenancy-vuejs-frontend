import { defineStore } from 'pinia'
import { ref } from 'vue'

const BASE_URL = 'http://localhost:3000'
export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref(null)
    const token = ref(null)
    const tenant_id = ref(null)

    async function login(username: string, password: string) {
      try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        })
        const data = await res.json()
        console.log(data)
        if (res.ok) {
          user.value = data.data
          token.value = data.authToken
          tenant_id.value = data.data.tenant_id
        } else {
          console.log(data.message)
        }
      } catch (e) {
        console.log(e)
      }
    }

    return { user, token, tenant_id, login }
  },
  {
    persist: true,
  },
)
