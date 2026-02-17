import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AdBanner from './AdBanner'

describe('AdBanner', () => {
  it('top 위치의 광고 배너를 렌더링한다', () => {
    render(<AdBanner position="top" />)
    expect(screen.getByTestId('ad-banner-top')).toBeInTheDocument()
  })

  it('bottom 위치의 광고 배너를 렌더링한다', () => {
    render(<AdBanner position="bottom" />)
    expect(screen.getByTestId('ad-banner-bottom')).toBeInTheDocument()
  })

  it('AD 라벨을 표시한다', () => {
    render(<AdBanner position="top" />)
    expect(screen.getByText('AD')).toBeInTheDocument()
  })
})
