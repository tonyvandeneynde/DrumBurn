<template>
  <div class="content">
    <div class="name">{{ name }}</div>
    <div class="rudiment">RUDIMENT: {{ rudiment }}</div>
    <div>TEMPO: {{ bpm }} BPM</div>
    <div v-if="phase === 'preRun'" class="pop">Get Ready!</div>
    <div v-else-if="phase === 'uptime'" class="work">WORK</div>
    <div v-else class="rest">REST</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  rudiment: string;
  bpm: number;
  phase: "uptime" | "downtime" | "preRun";
}>();
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
}
.rudiment {
  font-style: italic;
  color: #ffa500;
  margin-bottom: 1em;
}

.name {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.pop {
  color: #ff4500;
  font-weight: bold;
}

.work {
  color: green;
}

.rest {
  color: red;
}
</style>
