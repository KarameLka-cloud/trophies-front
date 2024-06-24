<script setup>

</script>

<template>
  <nav class="nav w-80 p-4 flex flex-col justify-between bg-fuchsia-400">
    <div>
      <img src="@/assets/medal.svg" alt="" class="block w-14 mx-auto pb-4">

      <div class="">
        <div class="user-menu mb-4">
          <a href="#" class="block font-bold bg-blue-300 mb-2 px-4 py-2 rounded-xl">Главная</a>
          <a href="#" class="block font-bold bg-blue-300 mb-2 px-4 py-2 rounded-xl">Прогресс</a>
          <a href="#" class="block font-bold bg-blue-300 mb-2 px-4 py-2 rounded-xl">Трофеи</a>
          <a href="#" class="block font-bold bg-blue-300 py-2 px-4 rounded-xl">Новости</a>
        </div>

        <div class="admin-menu bg-amber-700 p-2 rounded-xl">
          <span class="block font-bold mb-2 text-center">Админка</span>
          <ul class="admin-links">
            <a href="#" class="block font-bold bg-blue-300 mb-2 px-4 py-2 rounded-xl">Главная</a>
            <a href="#" class="block font-bold bg-blue-300 mb-2 px-4 py-2 rounded-xl">Пользователи</a>
            <a href="#" class="block font-bold bg-blue-300 mb-2 px-4 py-2 rounded-xl">Трофеи</a>
            <a href="#" class="block font-bold bg-blue-300 py-2 px-4 rounded-xl">Новости</a>
          </ul>
        </div>
      </div>
    </div>

    <div class="user">
      <img src="@/assets/medal.svg" alt="" class="block w-8">
      <span class="block">Mr. Karamelka</span>
    </div>
  </nav>
</template>

<style scoped>
</style>
