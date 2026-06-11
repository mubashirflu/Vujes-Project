<template>
  <div class="card" :class="{ pass: gradeResult.status === 'Pass', fail: gradeResult.status === 'Fail' }">

    <!-- ======================== -->
    <!-- Student Info             -->
    <!-- ======================== -->
    <div class="card-header">
      <h3>{{ student.name }}</h3>
      <span class="badge" :class="gradeResult.status.toLowerCase()">
        {{ gradeResult.status }}
      </span>
    </div>

    <!-- ======================== -->
    <!-- Grade Info               -->
    <!-- ======================== -->
    <div class="grade-info">
      <div class="grade-box">
        <span class="grade-letter">{{ gradeResult.letter }}</span>
        <span class="grade-avg">{{ gradeResult.average }}%</span>
      </div>
    </div>

    <!-- ======================== -->
    <!-- Subjects List            -->
    <!-- ======================== -->
    <ul class="subjects-list">
      <li v-for="subject in student.subjects" :key="subject.id">
        <span>{{ subject.name }}</span>
        <span :class="getSubjectClass(subject.grade)">
          {{ subject.grade }}%
        </span>
      </li>
    </ul>

    <!-- ======================== -->
    <!-- Delete Button            -->
    <!-- ======================== -->
    <div class="card-footer">
      <AppButton
        label="Delete Student"
        variant="danger"
        @click="emit('delete', student.id)"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { student } from '@/types/student.types'
import { getGradeResult } from '@/utils/gradeHelper'
import AppButton from '@/components/common/AppButton.vue'

// ========================
// Props
// ========================
const props = defineProps<{
  student: student
}>()

// ========================
// Emits
// ========================
const emit = defineEmits<{
  delete: [id: number]
}>()

// ========================
// Computed — Auto calculate
// ========================
const gradeResult = computed(() => {
  return getGradeResult(props.student.subjects)
})

// ========================
// Helper — Subject color
// ========================
const getSubjectClass = (grade: number): string => {
  if (grade >= 80) return 'grade-high'
  if (grade >= 50) return 'grade-mid'
  return 'grade-low'
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 4px solid #ddd;
}

.card.pass {
  border-left-color: #22c55e;
}

.card.fail {
  border-left-color: #ef4444;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

h3 {
  font-size: 18px;
  color: #333;
}

.badge {
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.badge.pass {
  background: #dcfce7;
  color: #16a34a;
}

.badge.fail {
  background: #fee2e2;
  color: #dc2626;
}

.grade-info {
  margin-bottom: 12px;
}

.grade-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.grade-letter {
  font-size: 40px;
  font-weight: bold;
  color: #4f46e5;
}

.grade-avg {
  font-size: 20px;
  color: #888;
}

.subjects-list {
  list-style: none;
  margin-bottom: 16px;
}

.subjects-list li {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

.grade-high { color: #16a34a; font-weight: bold; }
.grade-mid  { color: #d97706; font-weight: bold; }
.grade-low  { color: #dc2626; font-weight: bold; }

.card-footer {
  margin-top: 12px;
}
</style>