import Image from 'next/image';
import styles from './PhysicalMedia.module.css';

export default function PhysicalMedia() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Get Your Hands on the Classical Boy Media in Physical Media with <br />
                            <span className={styles.highlight}>Retro</span>
                        </h2>
                        <p className={styles.desc}>
                            Upgrade to Premium and unlock a world of ad-free listening. High<br />
                            quality audio and exclusive content. Download your favorites and listen<br />
                            outside the box.
                        </p>
                        <button className={styles.btnOutline}>Shop Now</button>
                    </div>
                    <div className={styles.imageWrap}>
                        <Image
                            src="/images/girl_cds_1772309875025.png"
                            alt="Girl holding CDs"
                            width={400}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
