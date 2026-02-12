<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/useAuthStore.ts'
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const { login } = useAuthStore()

const handleLogin = async () => {
  try {
    await login(email.value, password.value)
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div>
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800 tracking-tight">Welcome Back</h1>
      <p class="text-gray-500 text-sm mt-2">Sign in to continue to your account</p>
    </div>
    <form @submit.prevent="handleLogin" class="space-y-5">
      <!-- Email -->
      <div class="relative">
        <input
          v-model="email"
          type="email"
          required
          placeholder=" "
          id="email"
          class="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white focus:border-b-2 border-b-blue-500 outline-none transition-all"
        />
        <label
          for="email"
          class="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Email Address
        </label>
      </div>

      <div class="relative">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          required
          placeholder=" "
          id="password"
          class="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white focus:border-b-2 border-b-blue-500 outline-none transition"
        />
        <label
          for="password"
          class="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Password
        </label>

        <button
          type="button"
          @click="
            () => {
              showPassword = !showPassword
            }
          "
          class="absolute right-3 top-4 text-gray-400 hover:text-gray-600 text-sm"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </button>
      </div>

      <div class="flex justify-between items-center text-sm">
        <label class="flex items-center gap-2">
          <input type="checkbox" class="rounded border-gray-300" />
          Remember me
        </label>

        <a href="#" class="text-blue-600 hover:underline"> Forgot password? </a>
      </div>

      <button
        type="submit"
        class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-md hover:shadow-lg"
      >
        Sign In
      </button>

      <router-link to="signup">
        <p class="text-center text-sm text-gray-500">
          Don’t have an account?
          <span class="text-blue-600 hover:underline cursor-pointer font-medium">
            Create account
          </span>
        </p>
      </router-link>
    </form>
  </div>
</template>

<style scoped></style>
