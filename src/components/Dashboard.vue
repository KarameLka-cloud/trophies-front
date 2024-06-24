<script setup>
import NavBar from '@/components/dashboard/NavBar.vue'
import Main from '@/components/dashboard/Main.vue'
</script>

<template>
  <div class="h-screen w-screen p-4">
    <div class="flex h-full shadow-md p-4 rounded-xl bg-white">
      <NavBar/>
      <Main/>
    </div>
  </div>
</template>

<style scoped>
</style>
