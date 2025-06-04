<template>
  <div class="view-wrapper">
    <h1 class="view-title">
      <slot name="title" />
    </h1>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.view-wrapper {
  padding: 16px;
}
.view-wrapper > * {
  margin-bottom: 16px;
}
</style>
