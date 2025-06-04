<template>
  <header class="header">
    <div class="logo">HIIT App</div>
    <nav class="tabs">
      <router-link to="/workouts" class="tab" active-class="active">
        Workouts
      </router-link>
      <router-link to="/exercises" class="tab" active-class="active">
        Exercises
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: "Header",
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.tabs {
  display: flex;
  gap: 1rem;
}

.tab {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

.tab.active {
  border-bottom: 2px solid #fff;
}
</style>
