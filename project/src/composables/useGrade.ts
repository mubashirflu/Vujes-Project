import { computed } from 'vue'
import type { subject, gradeResult } from '@/types/student.types'
import { getGradeResult } from '@/utils/gradeHelper'

// ========================
// Composable — Reusable Logic
// ========================
export const useGrade = (subjects: subject[]) => {

  // Auto calculate jab bhi subjects change ho
  const gradeResult = computed((): gradeResult => {
    return getGradeResult(subjects)
  })

  return {
    gradeResult
  }
}