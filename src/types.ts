export interface QuizOption {
  text: string
  scores: Record<string, number>
}

export interface QuizQuestion {
  id: number
  question: string
  options: QuizOption[]
}

export interface QuizResultType {
  id: string
  title: string
  emoji: string
  description: string
  traits: string[]
  color: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  emoji: string
  color: string
  questions: QuizQuestion[]
  results: QuizResultType[]
  calculateResult: (scores: Record<string, number>) => string
}
