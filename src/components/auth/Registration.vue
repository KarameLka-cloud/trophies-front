<script setup>

</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="container w-96 px-6 py-8 shadow-lg rounded-xl bg-white">
      <h2 class="text-4xl font-bold mb-4 text-center">Регистрация!</h2>
      <p class="mb-8 text-center font-bold">Уже есть аккаунта?
        <router-link to="login" class="text-blue-600 underline">Войти</router-link>
      </p>

      <div class="container flex-col">
        <input type="text"
               class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
               placeholder="ФИО"
        >
        <input type="email"
               class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
               placeholder="Эл. почта"
        >
        <input type="password"
               class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
               placeholder="Пароль"
        >
        <input type="password"
               class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
               placeholder="Подтвердить пароль"
        >
        <button type="submit"
                class="block py-2 px-4 w-full rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-400 transition duration-300 ease-in-out hover:shadow-md"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.input-focus-hide-placeholder:focus::placeholder {
  color: transparent;
}
</style>
