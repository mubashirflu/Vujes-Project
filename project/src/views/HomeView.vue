<template>
  <div class="home">

    <!-- ======================== -->
    <!-- Header                   -->
    <!-- ======================== -->
    <header class="header">
      <h1>🎓 Grade Tracker</h1>
      <p>Total Students: {{ studentStore.students.length }}</p>
    </header>

    <!-- ======================== -->
    <!-- Student Form             -->
    <!-- ======================== -->
    <StudentForm @studentAdded="handleStudentAdded" />

    <!-- ======================== -->
    <!-- Students List            -->
    <!-- ======================== -->
    <div v-if="studentStore.students.length > 0" class="students-grid">
      <StudentCard
        v-for="student in studentStore.students"
        :key="student.id"
        :student="student"
        @delete="studentStore.deleteStudent"
      />
    </div>

    <!-- ======================== -->
    <!-- Empty State              -->
    <!-- ======================== -->
    <div v-else class="empty-state">
      <p>🎒 Koi student nahi — upar se add karo!</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useStudentStore } from '@/stores/student.store'
import StudentForm from '@/components/students/StudentForm.vue'
import StudentCard from '@/components/students/StudentCard.vue'
import type { subject } from '@/types/student.types'

// ========================
// Store
// ========================
const studentStore = useStudentStore()

// ========================
// Handle Student Added
// ========================
// const handleStudentAdded = (name: string, subjects: subject[]) => {
//   // Store mein student add karo
//   studentStore.addStudent(name)

//   // Naye student ka ID lo (last wala)
//   const newStudent = studentStore.students[studentStore.students.length - 1]

//   // Subjects add karo
//   subjects.forEach(subject => {
//     studentStore.addSubject(newStudent.id, {
//       name: subject.name,
//       grade: subject.grade
//     })
//   })
// }
const handleStudentAdded = (name: string, subjects: subject[]) => {
  // Store mein student add karo
  studentStore.addStudent(name)

  // Naye student ka ID lo — safely
  const newStudent = studentStore.students.at(-1)
  if (!newStudent) return  // ← Yeh fix hai

  // Subjects add karo
  subjects.forEach(subject => {
    studentStore.addSubject(newStudent.id, {
      name: subject.name,
      grade: subject.grade
    })
  })
}
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}

.header {
  text-align: center;
  margin-bottom: 32px;
}

.header h1 {
  font-size: 32px;
  color: #4f46e5;
  margin-bottom: 8px;
}

.header p {
  color: #888;
  font-size: 16px;
}

.students-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.empty-state {
  text-align: center;
  padding: 60px;
  background: white;
  border-radius: 12px;
  color: #aaa;
  font-size: 18px;
}
</style>