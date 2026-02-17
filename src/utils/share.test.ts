import { describe, it, expect, vi } from 'vitest'
import { buildShareUrl, copyToClipboard } from './share'

describe('buildShareUrl', () => {
  it('올바른 형식의 공유 URL을 생성한다', () => {
    const url = buildShareUrl('color-personality', 'warm-coral')
    expect(url).toContain('#/result/')
    expect(url).toContain(btoa('color-personality:warm-coral'))
  })

  it('현재 origin과 pathname을 기반으로 URL을 생성한다', () => {
    const url = buildShareUrl('test-quiz', 'result-a')
    expect(url).toMatch(/^http/)
  })
})

describe('copyToClipboard', () => {
  it('클립보드에 텍스트를 복사하면 true를 반환한다', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    })
    const result = await copyToClipboard('hello')
    expect(result).toBe(true)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('hello')
  })

  it('클립보드 복사 실패 시 false를 반환한다', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockRejectedValue(new Error('denied')) },
    })
    const result = await copyToClipboard('hello')
    expect(result).toBe(false)
  })
})
