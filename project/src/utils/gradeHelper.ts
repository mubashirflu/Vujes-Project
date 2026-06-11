import type {subject, gradeResult } from '@/types/student.types'

// ========================
// Average calculate karo
// ========================
export const calculateAverage = (subjects: subject[]): number => {
  if (subjects.length === 0) return 0

  const total = subjects.reduce((sum, subject) => sum + subject.grade, 0)
  return Math.round(total / subjects.length)
}

// ========================
// Letter grade nikalo
// ========================
export const getLetterGrade = (average: number): string => {
  if (average >= 90) return 'A'
  if (average >= 80) return 'B'
  if (average >= 70) return 'C'
  if (average >= 60) return 'D'
  return 'F'
}

// ========================
// Pass ya Fail
// ========================
export const getStatus = (average: number): 'Pass' | 'Fail' => {
  return average >= 50 ? 'Pass' : 'Fail'
}

// ========================
// Sab ek saath
// ========================
export const getGradeResult = (subjects: subject[]): gradeResult => {
  const average = calculateAverage(subjects)
  return {
    average,
    letter: getLetterGrade(average),
    status: getStatus(average)
  }
}