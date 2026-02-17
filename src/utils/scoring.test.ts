import { describe, it, expect } from 'vitest'
import { accumulateScores, getHighestScoreKey, encodeResult, decodeResult } from './scoring'

describe('accumulateScores', () => {
  it('빈 점수에 새 점수를 누적한다', () => {
    const result = accumulateScores({}, { text: '테스트', scores: { E: 2, F: 1 } })
    expect(result).toEqual({ E: 2, F: 1 })
  })

  it('기존 점수에 누적한다', () => {
    const result = accumulateScores({ E: 3, T: 1 }, { text: '테스트', scores: { E: 2, F: 1 } })
    expect(result).toEqual({ E: 5, T: 1, F: 1 })
  })

  it('원본 객체를 변경하지 않는다', () => {
    const original = { E: 1 }
    accumulateScores(original, { text: '테스트', scores: { E: 2 } })
    expect(original).toEqual({ E: 1 })
  })
})

describe('getHighestScoreKey', () => {
  it('가장 높은 점수의 키를 반환한다', () => {
    expect(getHighestScoreKey({ E: 5, I: 3, T: 7, F: 2 })).toBe('T')
  })

  it('하나의 항목만 있을 때 해당 키를 반환한다', () => {
    expect(getHighestScoreKey({ solo: 10 })).toBe('solo')
  })

  it('동점일 경우 먼저 나오는 키를 반환한다', () => {
    const result = getHighestScoreKey({ A: 5, B: 5 })
    expect(['A', 'B']).toContain(result)
  })
})

describe('encodeResult / decodeResult', () => {
  it('결과를 인코딩하고 디코딩할 수 있다', () => {
    const encoded = encodeResult('color-personality', 'warm-coral')
    const decoded = decodeResult(encoded)
    expect(decoded).toEqual({ quizId: 'color-personality', resultId: 'warm-coral' })
  })

  it('잘못된 인코딩에 대해 null을 반환한다', () => {
    expect(decodeResult('invalid!!!')).toBeNull()
  })

  it('콜론이 없는 유효한 base64에 대해 null을 반환한다', () => {
    const encoded = btoa('nodelimiter')
    expect(decodeResult(encoded)).toBeNull()
  })
})
