<script setup>
</script>

<template>
  <div class="main-container w-screen h-screen flex justify-center items-center">
    <!--    <ul>-->
    <!--      <li>-->
    <!--        <router-link to="login">Login</router-link>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <router-link to="registration">Registration</router-link>-->
    <!--      </li>-->
    <!--      <li>-->
    <!--        <router-link to="dashboard">Dashboard</router-link>-->
    <!--      </li>-->
    <!--    </ul>-->
    <router-view/>
  </div>
</template>

<style scoped>
.main-container {
  background-image: url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
