import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  it('현재 진행 상태를 표시한다', () => {
    render(<ProgressBar current={3} total={10} />)
    expect(screen.getByText('3 / 10')).toBeInTheDocument()
    expect(screen.getByText('30%')).toBeInTheDocument()
  })

  it('100% 진행 상태를 표시한다', () => {
    render(<ProgressBar current={10} total={10} />)
    expect(screen.getByText('10 / 10')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('progressbar 역할이 올바른 aria 속성을 가진다', () => {
    render(<ProgressBar current={5} total={12} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '5')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '12')
  })
})
