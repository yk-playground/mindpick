import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import QuizCard from './QuizCard'
import type { Quiz } from '../types'

const mockQuiz: Quiz = {
  id: 'test-quiz',
  title: '테스트 퀴즈',
  description: '테스트 설명입니다',
  emoji: '🎯',
  color: '#FF0000',
  questions: [],
  results: [],
  calculateResult: () => 'result-a',
}

describe('QuizCard', () => {
  it('퀴즈 제목과 설명을 렌더링한다', () => {
    render(
      <MemoryRouter>
        <QuizCard quiz={mockQuiz} />
      </MemoryRouter>
    )
    expect(screen.getByText('테스트 퀴즈')).toBeInTheDocument()
    expect(screen.getByText('테스트 설명입니다')).toBeInTheDocument()
  })

  it('이모지를 렌더링한다', () => {
    render(
      <MemoryRouter>
        <QuizCard quiz={mockQuiz} />
      </MemoryRouter>
    )
    expect(screen.getByText('🎯')).toBeInTheDocument()
  })

  it('퀴즈 페이지로의 링크를 가진다', () => {
    render(
      <MemoryRouter>
        <QuizCard quiz={mockQuiz} />
      </MemoryRouter>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/quiz/test-quiz')
  })

  it('시작하기 CTA 버튼을 렌더링한다', () => {
    render(
      <MemoryRouter>
        <QuizCard quiz={mockQuiz} />
      </MemoryRouter>
    )
    expect(screen.getByText('테스트 시작하기')).toBeInTheDocument()
  })
})
