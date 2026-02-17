import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('메인 타이틀을 렌더링한다', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('어떤 테스트가 끌리나요?')).toBeInTheDocument()
  })

  it('서브타이틀을 렌더링한다', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('재미있는 심리테스트로 나를 알아보세요')).toBeInTheDocument()
  })

  it('모든 퀴즈 카드를 렌더링한다', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText('나의 색깔 성격 유형은?')).toBeInTheDocument()
    expect(screen.getByText('스트레스 받을 때 나는 어떤 동물?')).toBeInTheDocument()
  })

  it('광고 배너 영역이 존재한다', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByTestId('ad-banner-top')).toBeInTheDocument()
    expect(screen.getByTestId('ad-banner-bottom')).toBeInTheDocument()
  })
})
