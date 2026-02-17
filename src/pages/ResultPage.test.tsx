import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import ResultPage from './ResultPage'
import { encodeResult } from '../utils/scoring'

function renderResultPage(encoded: string) {
  return render(
    <MemoryRouter initialEntries={[`/result/${encoded}`]}>
      <Routes>
        <Route path="/result/:encoded" element={<ResultPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('ResultPage', () => {
  it('잘못된 인코딩으로 접근시 에러 메시지를 표시한다', () => {
    renderResultPage('invalid')
    expect(screen.getByText('결과를 찾을 수 없어요 :(')).toBeInTheDocument()
    expect(screen.getByText('홈으로 돌아가기')).toBeInTheDocument()
  })

  it('유효한 결과를 올바르게 렌더링한다', () => {
    const encoded = encodeResult('color-personality', 'warm-coral')
    renderResultPage(encoded)

    expect(screen.getByText('따뜻한 코럴')).toBeInTheDocument()
    expect(screen.getByText('🌸')).toBeInTheDocument()
    expect(screen.getByText(/#사교적/)).toBeInTheDocument()
    expect(screen.getByText(/#공감능력/)).toBeInTheDocument()
  })

  it('공유 버튼을 렌더링한다', () => {
    const encoded = encodeResult('color-personality', 'warm-coral')
    renderResultPage(encoded)

    expect(screen.getByText('결과 공유하기')).toBeInTheDocument()
  })

  it('다시 테스트하기 링크를 렌더링한다', () => {
    const encoded = encodeResult('color-personality', 'warm-coral')
    renderResultPage(encoded)

    const retryLink = screen.getByText('다시 테스트하기')
    expect(retryLink).toHaveAttribute('href', '/quiz/color-personality')
  })

  it('다른 테스트 보기 링크를 렌더링한다', () => {
    const encoded = encodeResult('color-personality', 'warm-coral')
    renderResultPage(encoded)

    const homeLink = screen.getByText('다른 테스트 보기')
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('공유 버튼 클릭 시 복사 완료 메시지를 표시한다', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    })
    const user = userEvent.setup()
    const encoded = encodeResult('color-personality', 'warm-coral')
    renderResultPage(encoded)

    await user.click(screen.getByText('결과 공유하기'))

    expect(await screen.findByText('복사 완료!')).toBeInTheDocument()
  })

  it('스트레스 동물 퀴즈 결과도 렌더링할 수 있다', () => {
    const encoded = encodeResult('stress-animal', 'lion')
    renderResultPage(encoded)

    expect(screen.getByText('불꽃 사자')).toBeInTheDocument()
    expect(screen.getByText('🦁')).toBeInTheDocument()
  })

  it('광고 배너 영역이 존재한다', () => {
    const encoded = encodeResult('color-personality', 'warm-coral')
    renderResultPage(encoded)

    expect(screen.getByTestId('ad-banner-top')).toBeInTheDocument()
    expect(screen.getByTestId('ad-banner-bottom')).toBeInTheDocument()
  })
})
