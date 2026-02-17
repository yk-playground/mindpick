import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getQuizById } from '../data/quizzes'
import { accumulateScores, encodeResult } from '../utils/scoring'
import ProgressBar from '../components/ProgressBar'
import AdBanner from '../components/AdBanner'
import styles from './QuizPage.module.css'

export default function QuizPage() {
  const { quizId } = useParams<{ quizId: string }>()
  const navigate = useNavigate()
  const quiz = getQuizById(quizId || '')

  const [currentIndex, setCurrentIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [isAnimating, setIsAnimating] = useState(false)

  if (!quiz) {
    return (
      <div className={styles.notFound}>
        <p>테스트를 찾을 수 없어요 :(</p>
      </div>
    )
  }

  const question = quiz.questions[currentIndex]
  const isLastQuestion = currentIndex === quiz.questions.length - 1

  function handleOptionClick(optionIndex: number) {
    if (isAnimating) return

    const option = question.options[optionIndex]
    const newScores = accumulateScores(scores, option)

    setIsAnimating(true)

    if (isLastQuestion) {
      const resultId = quiz!.calculateResult(newScores)
      const encoded = encodeResult(quiz!.id, resultId)
      setTimeout(() => {
        navigate(`/result/${encoded}`)
      }, 400)
    } else {
      setTimeout(() => {
        setScores(newScores)
        setCurrentIndex((prev) => prev + 1)
        setIsAnimating(false)
      }, 400)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.quizTitle}>
        {quiz.emoji} {quiz.title}
      </h1>
      <ProgressBar current={currentIndex + 1} total={quiz.questions.length} />

      {currentIndex === Math.floor(quiz.questions.length / 2) && <AdBanner position="top" />}

      <div className={`${styles.questionCard} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
        <p className={styles.questionNumber}>Q{question.id}.</p>
        <p className={styles.questionText}>{question.question}</p>
        <div className={styles.options}>
          {question.options.map((option, idx) => (
            <button key={idx} className={styles.optionButton} onClick={() => handleOptionClick(idx)}>
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
