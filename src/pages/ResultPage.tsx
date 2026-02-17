import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { decodeResult } from '../utils/scoring'
import { buildShareUrl, copyToClipboard } from '../utils/share'
import { getQuizById } from '../data/quizzes'
import AdBanner from '../components/AdBanner'
import styles from './ResultPage.module.css'

export default function ResultPage() {
  const { encoded } = useParams<{ encoded: string }>()
  const [copied, setCopied] = useState(false)

  const decoded = decodeResult(encoded || '')
  const quiz = decoded ? getQuizById(decoded.quizId) : null
  const result = quiz?.results.find((r) => r.id === decoded?.resultId)

  if (!decoded || !quiz || !result) {
    return (
      <div className={styles.notFound}>
        <p>결과를 찾을 수 없어요 :(</p>
        <Link to="/" className={styles.homeLink}>
          홈으로 돌아가기
        </Link>
      </div>
    )
  }

  async function handleShare() {
    const url = buildShareUrl(decoded!.quizId, decoded!.resultId)
    const success = await copyToClipboard(url)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={styles.container}>
      <AdBanner position="top" />

      <div className={styles.resultCard} style={{ borderColor: result.color }}>
        <span className={styles.emoji}>{result.emoji}</span>
        <h1 className={styles.title} style={{ color: result.color }}>
          {result.title}
        </h1>
        <div className={styles.traits}>
          {result.traits.map((trait) => (
            <span key={trait} className={styles.trait} style={{ background: result.color + '20', color: result.color }}>
              #{trait}
            </span>
          ))}
        </div>
        <p className={styles.description}>{result.description}</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.shareButton} onClick={handleShare}>
          {copied ? '복사 완료!' : '결과 공유하기'}
        </button>
        <Link to={`/quiz/${quiz.id}`} className={styles.retryButton}>
          다시 테스트하기
        </Link>
        <Link to="/" className={styles.homeButton}>
          다른 테스트 보기
        </Link>
      </div>

      <AdBanner position="bottom" />
    </div>
  )
}
