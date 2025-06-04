<template>
  <div :class="['hiit-timer', isFlashing ? 'flash' : '']">
    <slot />
    <div :class="['time-left', isWork ? 'uptime' : 'downtime']">
      {{ timeLabel }}
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    isFlashing?: boolean;
    isWork?: boolean;
    timeLabel: string;
  }>(),
  {
    isWork: true,
    isFlashing: false,
  }
);
</script>

<style scoped>
.hiit-timer {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  color: white;
  max-width: 300px;
  margin: auto;
  border: 2px solid #444;
  font-size: 1.2em;
}

.hiit-timer .time-left {
  font-size: 3em;
  font-weight: bold;
  margin-top: 0.2em;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.hiit-timer .uptime {
  color: #00ff7f;
}

.hiit-timer .downtime {
  color: #ff4d4d;
}

.flash {
  background-color: white;
  color: black;
  animation: flash 0.2s ease;
}

@keyframes flash {
  0% {
    background-color: white;
    color: black;
  }
  100% {
    background-color: transparent;
    color: inherit;
  }
}

.hiit-timer div {
  margin: 0.5em 0;
  text-align: center;
}

.hiit-timer .tempo {
  color: #00ff7f;
  font-weight: bold;
}
</style>
