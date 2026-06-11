<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
// ========================
// Props
// ========================
defineProps<{
  modelValue: string | number
  label?: string
  placeholder?: string
  type?: 'text' | 'number'
}>()

// ========================
// Emits — v-model ke liye
// ========================
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  font-size: 13px;
  color: #555;
}

input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
}

input:focus {
  border-color: #4f46e5;
}
</style>