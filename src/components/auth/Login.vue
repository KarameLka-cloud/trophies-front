<script setup>
</script>

<template>
  <div class="container w-96 px-6 py-8 shadow-lg rounded-xl bg-white">
    <h2 class="text-4xl font-bold mb-4 text-center">Добро пожаловать!</h2>
    <p class="mb-8 text-center">Ещё нет аккаунта?
      <router-link to="registration" class="text-blue-600 underline">Зарегистрируй</router-link>
    </p>

    <div class="container flex-col">
      <input type="email"
             class="input-focus-hide-placeholder block w-full rounded-xl p-2 mb-4 text-black placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-300 bg-emerald-300 hover:shadow-md transition duration-300 ease-in-out"
             placeholder="Эл. почта"
      >
      <input type="password"
             class="input-focus-hide-placeholder block w-full rounded-xl p-2 mb-4 text-black placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-300 bg-emerald-300 hover:shadow-md transition duration-300 ease-in-out"
             placeholder="Пароль"
      >
      <button type="submit"
              class="block py-2 px-4 w-full rounded-xl bg-cyan-400 text-white font-bold hover:bg-cyan-300 transition duration-300 ease-in-out hover:shadow-md"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<style scoped>
.input-focus-hide-placeholder:focus::placeholder {
  color: transparent;
}
</style>
