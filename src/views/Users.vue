<template>
  <div>
    <h2>Users Page</h2>
    <p>This is the Users Page</p>
    <!-- Display the id from the URL, if no id is provided, it will be empty -->
    <p v-if="$route.query.id">User ID: {{ $route.query.id }}</p>
    <p v-else>No Query ID</p>
    <!-- Display the id from the URL, if no id is provided, it will be empty -->
    <p v-if="$route.params.id">User ID: {{ $route.params.id }}</p>
    <p v-else>No Param ID</p>
  </div>
</template>

<script></script>
