export function buildShareUrl(quizId: string, resultId: string): string {
  const base = window.location.origin + import.meta.env.BASE_URL
  return `${base}share/${quizId}/${resultId}/`
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
