import Image from 'next/image';
import styles from './AppPromo.module.css';

export default function AppPromo() {
    return (
        <section className={styles.promoSection}>
            <div className={styles.container}>

                {/* Web App Card with 3D Laptop */}
                <div className={styles.card}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>Retro Web WebApp</h2>
                        <p className={styles.desc}>
                            Medusa is the premium and reliable<br />
                            platform for online streaming all media.<br />
                            Get a premium subscription starting<br />
                            your ad-free listening experience now.
                        </p>
                        <button className={styles.btnOutline}>Go Now</button>
                    </div>
                    
                    {/* 3D Laptop Device */}
                    <div className={styles.laptopWrapper}>
                        <div className={styles.laptop}>
                            <div className={styles.laptopScreen}>
                                <div className={styles.laptopBezel}>
                                    <div className={styles.laptopCamera}></div>
                                    <div className={styles.laptopDisplay}>
                                        <Image src="/images/webapp_ui.png" alt="Web App" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.laptopKeyboard}>
                                <div className={styles.laptopTrackpad}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile App Card with 3D Phone */}
                <div className={styles.card}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>Retro Web MobileApp</h2>
                        <p className={styles.desc}>
                            Medusa is the premium and reliable<br />
                            platform for online streaming all media.<br />
                            Get a premium subscription starting<br />
                            your ad-free listening experience now.
                        </p>
                        <button className={styles.btnOutline}>Download Now</button>
                    </div>

                    {/* Floating Mobile App Image */}
                    <div className={styles.mobileImageWrapper}>
                        <div className={styles.mobileImageContainer}>
                             <Image src="/images/mobileapp_ui.png" alt="Mobile App" fill style={{ objectFit: 'cover' }} className={styles.mobileImage} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
