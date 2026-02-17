import { describe, it, expect } from 'vitest'
import { allQuizzes, getQuizById, colorPersonalityQuiz, stressAnimalQuiz } from './quizzes'

describe('allQuizzes', () => {
  it('퀴즈 목록이 비어있지 않다', () => {
    expect(allQuizzes.length).toBeGreaterThan(0)
  })

  it('모든 퀴즈가 고유한 ID를 가진다', () => {
    const ids = allQuizzes.map((q) => q.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('모든 퀴즈가 최소 5개 이상의 질문을 가진다', () => {
    for (const quiz of allQuizzes) {
      expect(quiz.questions.length).toBeGreaterThanOrEqual(5)
    }
  })

  it('모든 질문에 2개 이상의 선택지가 있다', () => {
    for (const quiz of allQuizzes) {
      for (const question of quiz.questions) {
        expect(question.options.length).toBeGreaterThanOrEqual(2)
      }
    }
  })

  it('모든 퀴즈가 최소 2개 이상의 결과 유형을 가진다', () => {
    for (const quiz of allQuizzes) {
      expect(quiz.results.length).toBeGreaterThanOrEqual(2)
    }
  })
})

describe('getQuizById', () => {
  it('존재하는 ID로 퀴즈를 찾을 수 있다', () => {
    const quiz = getQuizById('color-personality')
    expect(quiz).toBeDefined()
    expect(quiz!.id).toBe('color-personality')
  })

  it('존재하지 않는 ID에 대해 undefined를 반환한다', () => {
    expect(getQuizById('nonexistent')).toBeUndefined()
  })
})

describe('colorPersonalityQuiz.calculateResult', () => {
  it('외향적+감정적 점수에서 warm-coral을 반환한다', () => {
    const result = colorPersonalityQuiz.calculateResult({ E: 10, I: 2, F: 8, T: 3, J: 3, P: 3, N: 2 })
    expect(result).toBe('warm-coral')
  })

  it('내향적+직관적+감정적 점수에서 calm-lavender를 반환한다', () => {
    const result = colorPersonalityQuiz.calculateResult({ E: 2, I: 8, F: 6, T: 3, J: 3, P: 5, N: 10 })
    expect(result).toBe('calm-lavender')
  })

  it('내향적+사고적+판단적 점수에서 deep-navy를 반환한다', () => {
    const result = colorPersonalityQuiz.calculateResult({ E: 2, I: 8, F: 2, T: 8, J: 8, P: 2, N: 0 })
    expect(result).toBe('deep-navy')
  })

  it('외향적+사고적+인식적 점수에서 sunny-yellow를 반환한다', () => {
    const result = colorPersonalityQuiz.calculateResult({ E: 10, I: 2, F: 2, T: 8, J: 2, P: 8, N: 3 })
    expect(result).toBe('sunny-yellow')
  })

  it('내향적+감정적+판단적 점수에서 soft-peach를 반환한다', () => {
    const result = colorPersonalityQuiz.calculateResult({ E: 2, I: 8, F: 6, T: 3, J: 8, P: 2, N: 0 })
    expect(result).toBe('soft-peach')
  })

  it('어떤 분기에도 해당하지 않을 때 bright-mint를 반환한다', () => {
    const result = colorPersonalityQuiz.calculateResult({ E: 2, I: 8, F: 3, T: 4, J: 3, P: 5, N: 0 })
    expect(result).toBe('bright-mint')
  })
})

describe('stressAnimalQuiz.calculateResult', () => {
  it('fighter 점수가 가장 높으면 lion을 반환한다', () => {
    const result = stressAnimalQuiz.calculateResult({ fighter: 10, sleeper: 2, social: 3, practical: 1, planner: 1 })
    expect(result).toBe('lion')
  })

  it('sleeper 점수가 가장 높으면 cat을 반환한다', () => {
    const result = stressAnimalQuiz.calculateResult({ fighter: 1, sleeper: 10, social: 2, practical: 3, planner: 1 })
    expect(result).toBe('cat')
  })

  it('social 점수가 가장 높으면 dolphin을 반환한다', () => {
    const result = stressAnimalQuiz.calculateResult({ fighter: 1, sleeper: 2, social: 10, practical: 3, planner: 1 })
    expect(result).toBe('dolphin')
  })

  it('practical 점수가 가장 높으면 beaver를 반환한다', () => {
    const result = stressAnimalQuiz.calculateResult({ fighter: 1, sleeper: 2, social: 3, practical: 10, planner: 1 })
    expect(result).toBe('beaver')
  })

  it('planner 점수가 가장 높으면 owl을 반환한다', () => {
    const result = stressAnimalQuiz.calculateResult({ fighter: 1, sleeper: 2, social: 3, practical: 1, planner: 10 })
    expect(result).toBe('owl')
  })
})
