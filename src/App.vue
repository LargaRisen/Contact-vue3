<template>
  <div id="app">
    <h1 class="text-2xl font-bold text-center">Vue Router</h1>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/customers">Customers</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script></script>

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
