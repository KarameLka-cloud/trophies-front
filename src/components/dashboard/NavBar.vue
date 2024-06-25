<script setup>
import {ref} from 'vue'

let isAdmin = ref(true)
</script>

<template>
  <nav class="nav w-80 p-4 flex flex-col justify-between border-2 border-dashed border-red-500 mr-4 rounded-xl">
    <div>
      <img src="@/assets/medal.svg" alt="" class="block w-14 mx-auto pb-4">

      <div class="text-white">
        <div class="user-menu mb-4">
          <a href="#"
             class="block font-bold bg-green-600 mb-2 px-4 py-2 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md">Главная</a>
          <a href="#"
             class="block font-bold bg-green-600 mb-2 px-4 py-2 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md">Прогресс</a>
          <a href="#"
             class="block font-bold bg-green-600 mb-2 px-4 py-2 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md">Трофеи</a>
          <a href="#"
             class="block font-bold bg-green-600 py-2 px-4 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md">Новости</a>
        </div>

        <div class="admin-menu bg-zinc-800 p-2 rounded-xl" v-show="isAdmin">
          <span class="block font-bold mb-2 text-center">Админка</span>
          <ul class="admin-links">
            <a href="#"
               class="block font-bold bg-blue-600 mb-2 px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md">Главная</a>
            <a href="#"
               class="block font-bold bg-blue-600 mb-2 px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md">Пользователи</a>
            <a href="#"
               class="block font-bold bg-blue-600 mb-2 px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md">Трофеи</a>
            <a href="#"
               class="block font-bold bg-blue-600 py-2 px-4 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md">Новости</a>
          </ul>
        </div>
      </div>
    </div>

    <div class="user bg-red-600 p-2 rounded-xl shadow-md">
      <div class="flex items-center justify-between mb-2">
        <img src="@/assets/medal.svg" alt="" class="inline-block w-8 bg-white rounded-3xl">
        <span class="inline-block text-white font-bold italic">Валентин Б.</span>
      </div>
      <a href="#"
         class="block bg-green-600 text-white text-center font-bold px-4 py-1 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md">Выйти</a>
    </div>
  </nav>
</template>

<style scoped>
</style>
