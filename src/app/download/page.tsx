"use client";

import Image from 'next/image';
import styles from './Download.module.css';

export default function Download() {
    return (
        <main className={styles.downloadPage}>
            {/* Ambient Background Glows */}
            <div className={`${styles.ambientGlow} ${styles.glowTopLeft}`}></div>
            <div className={`${styles.ambientGlow} ${styles.glowBottomRight}`}></div>

            {/* Hero Header */}
            <header className={styles.header}>
                <div className={styles.badge}>v2.0 Available Now</div>
                <h1 className={styles.title}>
                    Your Music, <span className={styles.gradientText}>Everywhere</span>
                </h1>
                <p className={styles.subtitle}>
                    Experience unparalleled audio fidelity. Download Medusa for Desktop and Mobile, 
                    and take your library wherever you go—online or offline.
                </p>
                <div className={styles.heroActions}>
                    <button className={`${styles.btn} ${styles.btnPrimary} ${styles.glowButton}`}>
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m0 0-3-3m3 3 3-3"></path></svg>
                        Download for Windows <span className={styles.badgeSmall}>64-bit</span>
                    </button>
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>
                        Other Platforms
                    </button>
                </div>
            </header>

            {/* Devices Section - Desktop Left, Mobile Right Layout */}
            <div className={styles.devicesContainer}>
                
                {/* Desktop App */}
                <div className={styles.deviceCard}>
                    <div className={styles.deviceImageContainer}>
                        <div className={`${styles.cardGlow} ${styles.cyanPulse}`}></div>
                        <Image 
                            src="/images/webapp_ui.png" 
                            alt="Medusa Desktop App" 
                            width={600} 
                            height={400} 
                            className={styles.deviceImgDesktop}
                            priority
                        />
                    </div>
                    <div className={styles.deviceContent}>
                        <div className={styles.iconWrapper}>
                            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <h2>Desktop Experience</h2>
                        <p>Immerse yourself in rich, high-resolution audio. Our desktop app offers powerful library management, equalizer settings, and seamless integration with your OS.</p>
                        
                        <ul className={styles.featureList}>
                            <li>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Studio-quality FLAC support
                            </li>
                            <li>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                10-band graphic equalizer
                            </li>
                            <li>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Mini-player & media keys
                            </li>
                        </ul>

                        <div className={styles.downloadsRow}>
                            <button className={`${styles.btn} ${styles.btnOutline}`}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m0 0-3-3m3 3 3-3"></path></svg>
                                Windows
                            </button>
                            <button className={`${styles.btn} ${styles.btnOutline}`}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m0 0-3-3m3 3 3-3"></path></svg>
                                macOS
                            </button>
                            <button className={`${styles.btn} ${styles.btnOutline}`}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m0 0-3-3m3 3 3-3"></path></svg>
                                Linux
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile App */}
                <div className={`${styles.deviceCard} ${styles.mobileReverse}`}>
                    <div className={styles.deviceContent}>
                        <div className={`${styles.iconWrapper} ${styles.magentaIcon}`}>
                            <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                        </div>
                        <h2>Mobile Listening</h2>
                        <p>Take your ultimate playlists anywhere you go. With our mobile app, offline listening means your music never stops, even when your connection drops.</p>
                        
                        <ul className={styles.featureList}>
                            <li>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Gapless playback
                            </li>
                            <li>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Smart auto-downloads
                            </li>
                            <li>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                CarPlay & Android Auto integration
                            </li>
                        </ul>

                        <div className={styles.appStoreRow}>
                            <button className={`${styles.btn} ${styles.btnStore}`}>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                <div className={styles.storeText}>
                                    <span>Download on the</span>
                                    <strong>App Store</strong>
                                </div>
                            </button>
                            <button className={`${styles.btn} ${styles.btnStore}`}>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                <div className={styles.storeText}>
                                    <span>Get it on</span>
                                    <strong>Google Play</strong>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.deviceImageContainer}>
                        <div className={`${styles.cardGlow} ${styles.magentaPulse}`}></div>
                        <Image 
                            src="/images/phone_mockup_1772310038638.png" 
                            alt="Medusa Mobile App" 
                            width={320} 
                            height={600} 
                            className={styles.deviceImgMobile}
                            priority
                        />
                    </div>
                </div>

            </div>

            {/* System Requirements Grid */}
            <section className={styles.sysReqSection}>
                <div className={styles.sysReqGlass}>
                    <h3>System Requirements</h3>
                    <div className={styles.reqGrid}>
                        <div className={styles.reqCol}>
                            <h4>Windows</h4>
                            <p>Windows 10 or higher (64-bit)</p>
                            <p>Intel Core i3 / AMD Ryzen 3</p>
                            <p>4GB RAM, 500MB space</p>
                        </div>
                        <div className={styles.reqCol}>
                            <h4>macOS</h4>
                            <p>macOS 11.0 (Big Sur) or higher</p>
                            <p>Intel or Apple M1</p>
                            <p>4GB RAM, 500MB space</p>
                        </div>
                        <div className={styles.reqCol}>
                            <h4>Mobile</h4>
                            <p>iOS 14.0 or later</p>
                            <p>Android 8.0 or later</p>
                            <p>Internet for streaming</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
