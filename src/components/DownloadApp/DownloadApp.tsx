import Image from 'next/image';
import styles from './DownloadApp.module.css';

export default function DownloadApp() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.imageWrap}>
                    <div className={styles.phoneGlow}></div>
                    <Image
                        src="/images/phone_mockup_1772310038638.png"
                        alt="Mobile App"
                        width={350}
                        height={550}
                        className={styles.phoneImage}
                    />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>Download Application</h2>
                    <p className={styles.desc}>
                        Download our mobile for iOS and<br />
                        Android and enjoy unlimited access to<br />
                        your favourite music anytime, anywhere.
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.downloadBtn}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Standard App
                        </button>
                        <button className={styles.downloadBtn}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78.76-.02 1.95-.82 3.39-.69 1.43.09 2.65.65 3.36 1.63-2.95 1.76-2.45 5.58.48 6.78-.71 1.77-1.66 3.44-2.31 4.47M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25"></path>
                            </svg>
                            Apple Store
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
