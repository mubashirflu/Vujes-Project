<template>
  <button
    :class="['btn', `btn-${variant}`]"
    :disabled="disabled"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
// ========================
// Props — Parent se data
// ========================
defineProps<{
  label: string
  variant?: 'primary' | 'danger' | 'success'
  disabled?: boolean
}>()

// ========================
// Emits — Parent ko event
// ========================
const emit = defineEmits<{
  click: []
}>()
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.btn-primary {
  background: #4f46e5;
  color: white;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-success {
  background: #22c55e;
  color: white;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>