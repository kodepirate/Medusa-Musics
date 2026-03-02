import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.leftInfo}>
                    <div className={styles.profileSnippet}>
                        <div className={styles.avatarPlaceholder}></div>
                        <div>
                            <p className={styles.name}>Harry Tom</p>
                        </div>
                    </div>
                </div>

                <div className={styles.linksGrid}>
                    <div className={styles.col}>
                        <h4>About</h4>
                        <ul>
                            <li><Link href="#">Premium</Link></li>
                            <li><Link href="#">Promo Total</Link></li>
                            <li><Link href="#">Podcast</Link></li>
                            <li><Link href="#">Infinity</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="#">Our Offerings</Link></li>
                            <li><Link href="#">Blogs</Link></li>
                            <li><Link href="#">Career</Link></li>
                            <li><Link href="#">AI</Link></li>
                            <li><Link href="#">Events</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="#">support@medusa.com</Link></li>
                            <li><Link href="#">+12 345 6789</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightInfo}>
                    <h2 className={styles.logo}>Medusa</h2>
                    <div className={styles.buttons}>
                        <button className={styles.btnOutline}>Download</button>
                        <button className={styles.btnOutline}>Download</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
