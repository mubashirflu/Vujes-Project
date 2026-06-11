<template>
  <div class="form-card">
    <h2>Student Add Karo</h2>

    <!-- ======================== -->
    <!-- Student Name Input       -->
    <!-- ======================== -->
    <div class="form-group">
      <AppInput
        v-model="studentName"
        label="Student Name"
        placeholder="Name likho..."
        type="text"
      />
    </div>

    <!-- ======================== -->
    <!-- Subject + Grade Input    -->
    <!-- ======================== -->
    <div class="form-group">
      <AppInput
        v-model="subjectName"
        label="Subject Name"
        placeholder="Subject likho..."
        type="text"
      />
      <AppInput
        v-model="subjectGrade"
        label="Grade (0-100)"
        placeholder="Grade likho..."
        type="number"
      />
    </div>

    <!-- ======================== -->
    <!-- Subjects List Preview    -->
    <!-- ======================== -->
    <ul v-if="subjects.length > 0" class="subjects-preview">
      <li v-for="subject in subjects" :key="subject.id">
        {{ subject.name }} — {{ subject.grade }}
        <button @click="removeSubject(subject.id)">❌</button>
      </li>
    </ul>
    <p v-else class="empty">Koi subject nahi — upar se add karo</p>

    <!-- ======================== -->
    <!-- Buttons                  -->
    <!-- ======================== -->
    <div class="buttons">
      <AppButton
        label="Subject Add Karo"
        variant="primary"
        @click="addSubject"
      />
      <AppButton
        label="Student Save Karo"
        variant="success"
        :disabled="!canSave"
        @click="saveStudent"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { subject } from '@/types/student.types'
import AppButton from '@/components/common/AppButton.vue'
import AppInput from '@/components/common/AppInput.vue'

// ========================
// Emits — HomeView ko bhejo
// ========================
const emit = defineEmits<{
  studentAdded: [name: string, subjects:subject[]]
}>()

// ========================
// Local State
// ========================
const studentName = ref('')
const subjectName = ref('')
const subjectGrade = ref<number>(0)
const subjects = ref<subject[]>([])

// ========================
// Computed
// ========================
const canSave = computed(() => {
  return studentName.value.trim() !== '' && subjects.value.length > 0
})

// ========================
// Functions
// ========================
const addSubject = () => {
  if (!subjectName.value.trim()) return
  if (subjectGrade.value < 0 || subjectGrade.value > 100) return

  subjects.value.push({
    id: Date.now(),
    name: subjectName.value,
    grade: subjectGrade.value
  })

  // Clear inputs
  subjectName.value = ''
  subjectGrade.value = 0
}

const removeSubject = (id: number) => {
  subjects.value = subjects.value.filter(s => s.id !== id)
}

const saveStudent = () => {
  if (!canSave.value) return

  // Parent ko bhejo
  emit('studentAdded', studentName.value, subjects.value)

  // Form clear karo
  studentName.value = ''
  subjects.value = []
}
</script>

<style scoped>
.form-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 24px;
}

h2 {
  margin-bottom: 16px;
  color: #4f46e5;
}

.form-group {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.subjects-preview {
  list-style: none;
  margin: 12px 0;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
}

.subjects-preview li {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid #eee;
}

.empty {
  color: #aaa;
  font-size: 13px;
  margin: 8px 0;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}
</style>