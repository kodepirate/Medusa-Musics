import styles from './AppPromo.module.css';

export default function AppPromo() {
    return (
        <section className={styles.promoSection}>
            <div className={styles.container}>

                <div className={styles.card}>
                    <h3 className={styles.title}>Retro Web WebApp</h3>
                    <p className={styles.desc}>
                        Medusa is the premium and reliable<br />
                        platform for online streaming all media.<br />
                        Get a premium subscription starting<br />
                        your ad-free listening experience now.
                    </p>
                    <button className={styles.btnOutline}>Go Now</button>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.title}>Retro Web MobileApp</h3>
                    <p className={styles.desc}>
                        Medusa is the premium and reliable<br />
                        platform for online streaming all media.<br />
                        Get a premium subscription starting<br />
                        your ad-free listening experience now.
                    </p>
                    <button className={styles.btnOutline}>Download Now</button>
                </div>

            </div>
        </section>
    );
}
