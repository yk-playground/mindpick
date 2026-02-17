import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('헤더와 푸터를 렌더링한다', () => {
    render(<App />)
    expect(screen.getByText('MindPick')).toBeInTheDocument()
    expect(screen.getByText(/MindPick ©/)).toBeInTheDocument()
  })

  it('홈 페이지가 기본으로 렌더링된다', () => {
    render(<App />)
    expect(screen.getByText('어떤 테스트가 끌리나요?')).toBeInTheDocument()
  })
})
