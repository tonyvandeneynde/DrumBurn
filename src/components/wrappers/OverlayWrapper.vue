<template>
  <div v-if="visible" class="overlay">
    <button class="close-button" @click="hideOverlay">
      {{ closeButtonText }}
    </button>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  closeButtonText: {
    type: String,
    default: "Close",
  },
  visible: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function,
    default: () => {},
  },
});

const emit = defineEmits(["close"]);

const hideOverlay = () => {
  emit("close");
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
