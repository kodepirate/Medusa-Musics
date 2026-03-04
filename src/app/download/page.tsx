"use client";

import Image from 'next/image';
import styles from './Download.module.css';

export default function Download() {
    return (
        <main className={styles.downloadPage}>
            {/* Header Content */}
            <header className={styles.header}>
                <h1 className={styles.title}>Your Music, <span className={styles.gradientText}>Everywhere</span></h1>
                <p className={styles.subtitle}>Download Medusa for your desktop and mobile devices. Listen seamlessly across all your platforms.</p>
            </header>

            {/* Split Section: Desktop & Mobile */}
            <div className={styles.devicesContainer}>
                
                {/* Desktop App */}
                <div className={styles.deviceSection}>
                    <div className={styles.deviceImageWrapper}>
                        {/* Glow effect */}
                        <div className={`${styles.glow} ${styles.cyanGlow}`}></div>
                        <Image 
                            src="/images/laptop_mockup_1772309852230.png" 
                            alt="Medusa Desktop App" 
                            width={500} 
                            height={350} 
                            className={styles.deviceImg}
                            priority
                        />
                    </div>
                    <div className={styles.deviceContent}>
                        <h2>Medusa for Desktop</h2>
                        <p>Experience high-fidelity audio and manage your library with the powerful desktop app.</p>
                        <div className={styles.buttonGroup}>
                            <button className={`${styles.btn} ${styles.btnPrimary}`}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m0 0-3-3m3 3 3-3"></path></svg>
                                Download for Windows
                            </button>
                            <button className={`${styles.btn} ${styles.btnOutline}`}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m0 0-3-3m3 3 3-3"></path></svg>
                                Download for macOS
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile App */}
                <div className={`${styles.deviceSection} ${styles.mobileDeviceSection}`}>
                    <div className={styles.deviceImageWrapper}>
                        {/* Glow effect */}
                        <div className={`${styles.glow} ${styles.magentaGlow}`}></div>
                        <Image 
                            src="/images/phone_mockup_1772309856517.png" 
                            alt="Medusa Mobile App" 
                            width={300} 
                            height={500} 
                            className={styles.deviceImgMobile}
                            priority
                        />
                    </div>
                    <div className={styles.deviceContent}>
                        <h2>Medusa for Mobile</h2>
                        <p>Take your playlists anywhere. Download for seamless offline listening on the go.</p>
                        <div className={styles.buttonGroup}>
                            <button className={`${styles.btn} ${styles.btnPrimary}`}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                Download on App Store
                            </button>
                            <button className={`${styles.btn} ${styles.btnOutline}`}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                                Get it on Google Play
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
