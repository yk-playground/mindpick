import { Link } from 'react-router-dom'
import type { Quiz } from '../types'
import styles from './QuizCard.module.css'

interface QuizCardProps {
  quiz: Quiz
}

export default function QuizCard({ quiz }: QuizCardProps) {
  return (
    <Link to={`/quiz/${quiz.id}`} className={styles.card} style={{ borderColor: quiz.color }}>
      <span className={styles.emoji}>{quiz.emoji}</span>
      <h2 className={styles.title}>{quiz.title}</h2>
      <p className={styles.description}>{quiz.description}</p>
      <span className={styles.cta} style={{ background: quiz.color }}>
        테스트 시작하기
      </span>
    </Link>
  )
}
