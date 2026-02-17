import { encodeResult } from './scoring'

export function buildShareUrl(quizId: string, resultId: string): string {
  const encoded = encodeResult(quizId, resultId)
  const base = window.location.origin + window.location.pathname
  return `${base}#/result/${encoded}`
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
