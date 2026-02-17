import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('로고 텍스트 MindPick을 렌더링한다', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByText('MindPick')).toBeInTheDocument()
  })

  it('태그라인을 렌더링한다', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByText('나를 알아가는 재미있는 여정')).toBeInTheDocument()
  })

  it('로고가 홈으로 링크된다', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})
