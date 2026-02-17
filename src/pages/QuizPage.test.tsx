import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import QuizPage from './QuizPage'

function renderQuizPage(quizId: string) {
  return render(
    <MemoryRouter initialEntries={[`/quiz/${quizId}`]}>
      <Routes>
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/result/:encoded" element={<div data-testid="result-page">결과 페이지</div>} />
      </Routes>
    </MemoryRouter>
  )
}

describe('QuizPage', () => {
  it('존재하지 않는 퀴즈 ID로 접근시 에러 메시지를 표시한다', () => {
    renderQuizPage('nonexistent')
    expect(screen.getByText('테스트를 찾을 수 없어요 :(')).toBeInTheDocument()
  })

  it('첫 번째 질문을 렌더링한다', () => {
    renderQuizPage('color-personality')
    expect(screen.getByText('Q1.')).toBeInTheDocument()
    expect(screen.getByText('주말 아침, 눈을 떴을 때 가장 먼저 하고 싶은 것은?')).toBeInTheDocument()
  })

  it('진행률 바를 표시한다', () => {
    renderQuizPage('color-personality')
    expect(screen.getByText('1 / 12')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('퀴즈 제목을 표시한다', () => {
    renderQuizPage('color-personality')
    expect(screen.getByText(/나의 색깔 성격 유형은/)).toBeInTheDocument()
  })

  it('4개의 선택지를 표시한다', () => {
    renderQuizPage('color-personality')
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4)
  })

  it('선택지를 클릭하면 다음 질문으로 이동한다', async () => {
    const user = userEvent.setup()
    renderQuizPage('stress-animal')

    expect(screen.getByText('Q1.')).toBeInTheDocument()
    await user.click(screen.getByText('밤새워서라도 끝낸다'))

    await waitFor(() => {
      expect(screen.getByText('Q2.')).toBeInTheDocument()
    })
  })

  it('마지막 질문 답변 후 결과 페이지로 이동한다', async () => {
    const user = userEvent.setup()
    renderQuizPage('stress-animal')

    // stress-animal 퀴즈는 8문항 — 전부 첫 번째 선택지를 클릭
    for (let i = 0; i < 8; i++) {
      const buttons = screen.getAllByRole('button')
      await user.click(buttons[0])

      if (i < 7) {
        await waitFor(() => {
          expect(screen.getByText(`Q${i + 2}.`)).toBeInTheDocument()
        })
      }
    }

    await waitFor(() => {
      expect(screen.getByTestId('result-page')).toBeInTheDocument()
    })
  }, 15000)

  it('애니메이션 중에는 중복 클릭을 무시한다', async () => {
    const user = userEvent.setup()
    renderQuizPage('stress-animal')

    expect(screen.getByText('Q1.')).toBeInTheDocument()

    // 빠르게 두 번 클릭 (두 번째는 무시되어야 함)
    await user.click(screen.getByText('밤새워서라도 끝낸다'))
    const buttonsWhileAnimating = screen.getAllByRole('button')
    await user.click(buttonsWhileAnimating[1])

    await waitFor(() => {
      expect(screen.getByText('Q2.')).toBeInTheDocument()
    })

    // Q3이 아닌 Q2에 있어야 함 (두 번째 클릭이 무시됨)
    expect(screen.queryByText('Q3.')).not.toBeInTheDocument()
  })
})
