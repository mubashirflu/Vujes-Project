import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { student, subject } from '@/types/student.types'

export const useStudentStore = defineStore('student', () => {

  // ========================
  // State
  // ========================
  const students = ref<student[]>([])

  // ========================
  // Add Student
  // ========================
  const addStudent = (name: string) => {
    students.value.push({
      id: Date.now(),
      name,
      subjects: []
    })
  }

  // ========================
  // Delete Student
  // ========================
  const deleteStudent = (id: number) => {
    students.value = students.value.filter(s => s.id !== id)
  }

  // ========================
  // Add Subject
  // ========================
  const addSubject = (studentId: number, subject: Omit<subject, 'id'>) => {
    const student = students.value.find(s => s.id === studentId)
    if (student) {
      student.subjects.push({
        id: Date.now(),
        ...subject
      })
    }
  }

  // ========================
  // Delete Subject
  // ========================
  const deleteSubject = (studentId: number, subjectId: number) => {
    const student = students.value.find(s => s.id === studentId)
    if (student) {
      student.subjects = student.subjects.filter(s => s.id !== subjectId)
    }
  }

  return {
    students,
    addStudent,
    deleteStudent,
    addSubject,
    deleteSubject
  }
})