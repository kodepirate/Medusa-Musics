import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Background ambient glow for footer */}
                <div className={styles.footerGlow}></div>


                <div className={styles.leftInfo}>
                    <div className={styles.profileSnippet}>
                        <div className={styles.avatarContainer}>
                            <Image 
                                src="/images/cyberpunk_avatar_1772523267575.png" 
                                alt="Martinez" 
                                width={55} 
                                height={55} 
                                className={styles.avatarImage} 
                            />
                        </div>
                        <div className={styles.authorInfo}>
                            <p className={styles.name}>Martinez</p>
                            <p className={styles.role}>Official Edgerunner</p>
                        </div>
                    </div>
                </div>

                <div className={styles.linksGrid}>
                    <div className={styles.col}>
                        <h3>About</h3>
                        <ul>
                            <li><Link href="/premium">Premium</Link></li>
                            <li><Link href="/store">Promo Total</Link></li>
                            <li><Link href="/library">Podcast</Link></li>
                            <li><Link href="#infinity">Infinity</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h3>Services</h3>
                        <ul>
                            <li><Link href="#offerings">Our Offerings</Link></li>
                            <li><Link href="#blogs">Blogs</Link></li>
                            <li><Link href="#career">Career</Link></li>
                            <li><Link href="#ai">AI</Link></li>
                            <li><Link href="#events">Events</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h3>Support</h3>
                        <ul>
                            <li><Link href="mailto:support@medusacom">support@medusa.com</Link></li>
                            <li><Link href="tel:+123456789">+12 345 6789</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightInfo}>
                    <h2 className={styles.logo}>Medusa</h2>
                    <div className={styles.buttons}>
                        <button className={styles.btnOutline}>Mobile</button>
                        <button className={styles.btnOutline}>Desktop</button>
                    </div>
                </div>
            </div>

            {/* Manufacturer Credit */}
            <div className={styles.manufacturerCredit}>
                <p>
                    Officially Manufactured by{' '}
                    <a 
                        href="https://github.com/kodepirate" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.manufacturerLink}
                    >
                        Aniket0fficial
                    </a>
                </p>
            </div>
        </footer>
    );
}
