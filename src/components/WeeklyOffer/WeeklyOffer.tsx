import Image from 'next/image';
import styles from './WeeklyOffer.module.css';

export default function WeeklyOffer() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.offerCard}>
                    {/* Ambient Glow Effects */}
                    <div className={styles.glowOrb1}></div>
                    <div className={styles.glowOrb2}></div>

                    <div className={styles.mediaWrap}>
                        <div className={styles.albumSleeve}>
                            <div className={styles.visualizerMockup}>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                            </div>
                        </div>
                        <Image
                            src="/images/premium_vinyl_1772309860942.png"
                            alt="Vinyl Record"
                            width={200}
                            height={200}
                            className={styles.vinyl}
                            priority
                            fetchPriority="high"
                        />
                    </div>

                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Best <span className={styles.highlight}>OFFER</span> of this week
                        </h2>
                        <p className={styles.desc}>
                            Get a special discount on the<br />
                            latest album &quot;STAND-G455&quot;<br />
                            by UMSL available at<br />
                            Play store Retro Beats.
                        </p>
                        <button className={styles.btnOutline}>Shop Now</button>
                    </div>

                </div>
            </div>
        </section>
    );
}
