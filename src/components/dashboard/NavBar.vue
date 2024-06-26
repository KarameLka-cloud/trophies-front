<script setup>
import {ref} from 'vue'

let isAdmin = ref(true)
</script>

<template>
  <nav class="nav w-80 p-4 flex flex-col justify-between border-2 border-dashed border-red-500 mr-4 rounded-xl">
    <div>
      <img src="@/assets/medal.svg" alt="" class="block w-14 mx-auto pb-4 cursor-pointer"
           @click="$router.push({name: 'userMain'})">

      <div class="text-white">
        <div class="user-links mb-4">
          <a @click="$router.push({name: 'mainUser'})"
             class="block font-bold bg-green-600 mb-2 px-4 py-2 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Главная</a>
          <a @click="$router.push({name: 'progressUser'})"
             class="block font-bold bg-green-600 mb-2 px-4 py-2 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Прогресс</a>
          <a @click="$router.push({name: 'trophiesUser'})"
             class="block font-bold bg-green-600 mb-2 px-4 py-2 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Трофеи</a>
          <a @click="$router.push({name: 'newsUser'})"
             class="block font-bold bg-green-600 px-4 py-2 rounded-xl hover:bg-green-500 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Новости</a>
        </div>

        <div class="admin-menu bg-zinc-800 p-2 rounded-xl" v-show="isAdmin">
          <span class="block font-bold mb-2 text-center">Админка</span>
          <div class="admin-links">
            <a @click="$router.push({name: 'adminMain'})"
               class="block font-bold bg-blue-600 mb-2 px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Главная</a>
            <a @click="$router.push({name: 'adminUsers'})"
               class="block font-bold bg-blue-600 mb-2 px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Пользователи</a>
            <a @click="$router.push({name: 'adminTrophies'})"
               class="block font-bold bg-blue-600 mb-2 px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Трофеи</a>
            <a @click="$router.push({name: 'adminNews'})"
               class="block font-bold bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300 ease-in-out hover:shadow-md cursor-pointer">Новости</a>
          </div>
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
