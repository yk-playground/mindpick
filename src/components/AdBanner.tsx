import styles from './AdBanner.module.css'

interface AdBannerProps {
  position: 'top' | 'bottom' | 'sidebar'
}

export default function AdBanner({ position }: AdBannerProps) {
  return (
    <div className={`${styles.adBanner} ${styles[position]}`} data-testid={`ad-banner-${position}`}>
      <span className={styles.label}>AD</span>
      {/* Google AdSense 코드가 여기에 들어갑니다 */}
      {/* <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXX" data-ad-slot="XXXXX"></ins> */}
    </div>
  )
}
