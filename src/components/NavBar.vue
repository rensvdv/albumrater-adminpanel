<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/websocket" class="nav-link">Websocket</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/albums" class="nav-link">Albums</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin" class="nav-link">AdminPanel</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>