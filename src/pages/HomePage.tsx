import { allQuizzes } from '../data/quizzes'
import QuizCard from '../components/QuizCard'
import AdBanner from '../components/AdBanner'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>어떤 테스트가 끌리나요?</h1>
        <p className={styles.subtitle}>재미있는 심리테스트로 나를 알아보세요</p>
      </div>
      <AdBanner position="top" />
      <div className={styles.quizList}>
        {allQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
      <AdBanner position="bottom" />
    </div>
  )
}
