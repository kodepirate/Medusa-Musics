import Image from 'next/image';
import styles from './SectionPremium.module.css';

export default function SectionPremium() {
    return (
        <section className={styles.premiumSection}>
            <div className={styles.container}>
                <div className={styles.premiumCard}>

                    {/* Animated gradient border */}
                    <div className={styles.animatedBorder}></div>

                    <div className={styles.content}>
                        <div className={styles.badge}>NEW</div>
                        <h2 className={styles.title}>
                            Upgrade to <span className={styles.highlight}>Premium</span> Now
                        </h2>
                        <p className={styles.description}>
                            Upgrade to Premium and unlock a world of ad-free listening. High quality
                            audio and exclusive content. Download your favorites and listen outside
                            the box.
                        </p>

                        <ul className={styles.featureList}>
                            <li><span className={styles.checkIcon}>✓</span> Ad-free music listening</li>
                            <li><span className={styles.checkIcon}>✓</span> Download to listen offline</li>
                            <li><span className={styles.checkIcon}>✓</span> High audio quality</li>
                        </ul>

                        <button className={styles.btnPremium}>
                            <span>Get Premium</span>
                            <div className={styles.shine}></div>
                        </button>
                    </div>

                    <div className={styles.imageWrap}>
                        {/* Background glow for vinyl */}
                        <div className={styles.vinylGlow}></div>
                        <Image
                            src="/images/premium_vinyl_1772309860942.png"
                            alt="Premium Vinyl"
                            width={400}
                            height={400}
                            className={styles.vinyl}
                        />
                        {/* Smaller floating elements */}
                        <div className={`${styles.musicNote} ${styles.note1}`}>♪</div>
                        <div className={`${styles.musicNote} ${styles.note2}`}>♫</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
