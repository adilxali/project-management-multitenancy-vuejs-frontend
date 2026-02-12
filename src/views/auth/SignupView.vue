<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)

function handleSignup() {
  console.log('Signup:', name.value, email.value, password.value)
}

function goToLogin() {
  router.push({ name: 'login' })
}
</script>

<template>
  <div>
    <div class="text-center mb-8">
      <h1 class="text-xl sm:text-3xl font-bold text-gray-800 tracking-tight">Welcome</h1>
      <p class="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
        Sign up to continue to your account
      </p>
    </div>
    <form @submit.prevent="handleSignup" class="space-y-5">
      <!-- Full Name -->
      <div class="relative">
        <input
          v-model="name"
          type="text"
          id="name"
          required
          placeholder=" "
          class="peer w-full px-4 pt-5 pb-2 bg-white outline-none transition"
        />
        <label
          for="name"
          class="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Full Name
        </label>
      </div>

      <!-- Email -->
      <div class="relative">
        <input
          v-model="email"
          type="email"
          id="email"
          required
          placeholder=" "
          class="peer w-full px-4 pt-5 pb-2 bg-white outline-none transition"
        />
        <label
          for="email"
          class="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Email Address
        </label>
      </div>

      <!-- Password -->
      <div class="relative">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          id="password"
          required
          placeholder=" "
          class="peer w-full px-4 pt-5 bg-white pb-2 outline-none transition"
        />
        <label
          for="password"
          class="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Password
        </label>

        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute right-3 top-4 text-gray-400 hover:text-gray-600 text-sm"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </button>
      </div>

      <!-- Button -->
      <button
        type="submit"
        class="w-full py-2 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-md hover:shadow-lg"
      >
        Create Account
      </button>

      <router-link to="login">
        <p class="text-center text-xs sm:text-sm text-gray-500">
          Already have an account?
          <span class="text-blue-600 hover:underline cursor-pointer font-medium"> Sign in </span>
        </p>
      </router-link>
    </form>
  </div>
</template>
