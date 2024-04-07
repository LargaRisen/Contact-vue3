<template>
  <div id="app">
    <h1 class="text-2xl font-bold text-center">Vue Router</h1>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{ path: '/users', query: { id: 1 } }"
        >Users</router-link
      >
      <router-link :to="{ name: 'Users', params: { id: 1 } }"
        >Users-Params</router-link
      >
      <router-link :to="{ path: '/vip' }">VIP</router-link>
      <router-link to="/customers">Customers</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
      <a class="cursor-pointer" @click="goTo('/contact')">Contact</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goTo = (path) => router.push(path);
</script>

<style scoped>
.nav {
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/** nav links */
.nav a {
  padding: 0 10px;
  border-right: 1px solid #ccc;
}
.nav a:last-child {
  border-right: none;
}
</style>
