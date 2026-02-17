import type { QuizOption } from '../types'

export function accumulateScores(
  currentScores: Record<string, number>,
  option: QuizOption
): Record<string, number> {
  const newScores = { ...currentScores }
  for (const [key, value] of Object.entries(option.scores)) {
    newScores[key] = (newScores[key] || 0) + value
  }
  return newScores
}

export function getHighestScoreKey(scores: Record<string, number>): string {
  let maxKey = ''
  let maxValue = -Infinity
  for (const [key, value] of Object.entries(scores)) {
    if (value > maxValue) {
      maxValue = value
      maxKey = key
    }
  }
  return maxKey
}

export function encodeResult(quizId: string, resultId: string): string {
  return btoa(`${quizId}:${resultId}`)
}

export function decodeResult(encoded: string): { quizId: string; resultId: string } | null {
  try {
    const decoded = atob(encoded)
    const [quizId, resultId] = decoded.split(':')
    if (!quizId || !resultId) return null
    return { quizId, resultId }
  } catch {
    return null
  }
}
