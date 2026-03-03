import Image from 'next/image';
import styles from './PhysicalMedia.module.css';

export default function PhysicalMedia() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    {/* Decorative background blobs */}
                    <div className={styles.blobLeft}></div>
                    <div className={styles.blobRight}></div>

                    <div className={styles.content}>
                        <div className={styles.badge}>✦ Exclusive Collection</div>
                        <h2 className={styles.title}>
                            Get Your Hands on the<br />
                            Classical Boy Media in<br />
                            Physical Media with{' '}
                            <span className={styles.highlight}>Retro</span>
                        </h2>
                        <p className={styles.desc}>
                            Upgrade to Premium and unlock a world of ad-free listening. High
                            quality audio and exclusive content. Download your favorites and listen
                            outside the box.
                        </p>
                        <button className={styles.btnGradient}>Shop Now →</button>
                    </div>

                    <div className={styles.imageWrap}>
                        <div className={styles.imageGlow}></div>
                        <Image
                            src="/images/girl_cds_1772309875025.png"
                            alt="Girl holding CDs"
                            width={420}
                            height={450}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
