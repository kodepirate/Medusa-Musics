"use client";

import styles from './Premium.module.css';

export default function Premium() {
    return (
        <main className={styles.premiumPage}>
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>Elevate Your <span className={styles.gradientText}>Sound</span></h1>
                <p className={styles.subtitle}>Choose the Premium plan that fits your life. Listen without limits.</p>
            </header>

            {/* Pricing Cards */}
            <section className={styles.pricingSection}>
                <div className={styles.cardsContainer}>
                    {/* Individual Plan */}
                    <div className={styles.pricingCard}>
                        <div className={styles.cardHeader}>
                            <h2>Individual</h2>
                            <p>For you and your tunes</p>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.price}>9.99</span>
                            <span className={styles.period}>/mo</span>
                        </div>
                        <ul className={styles.featuresList}>
                            <li>Ad-free music listening</li>
                            <li>Play anywhere - even offline</li>
                            <li>On-demand playback</li>
                            <li>High-Fidelity Audio</li>
                        </ul>
                        <button className={`${styles.btn} ${styles.btnOutline}`}>Get Individual</button>
                    </div>

                    {/* Duo Plan (Highlighted) */}
                    <div className={`${styles.pricingCard} ${styles.highlightedCard}`}>
                        <div className={styles.popularBadge}>Most Popular</div>
                        <div className={styles.cardHeader}>
                            <h2>Duo</h2>
                            <p>2 Premium accounts</p>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.price}>12.99</span>
                            <span className={styles.period}>/mo</span>
                        </div>
                        <ul className={styles.featuresList}>
                            <li>2 Premium accounts for couples under one roof</li>
                            <li>Duo Mix: a playlist for two, regularly updated</li>
                            <li>Ad-free music listening, play offline, on-demand</li>
                        </ul>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>Get Duo</button>
                    </div>

                    {/* Family Plan */}
                    <div className={styles.pricingCard}>
                        <div className={styles.cardHeader}>
                            <h2>Family</h2>
                            <p>Up to 6 Premium accounts</p>
                        </div>
                        <div className={styles.priceContainer}>
                            <span className={styles.currency}>$</span>
                            <span className={styles.price}>15.99</span>
                            <span className={styles.period}>/mo</span>
                        </div>
                        <ul className={styles.featuresList}>
                            <li>6 Premium accounts for family members living under one roof</li>
                            <li>Family Mix: a playlist for your family, regularly updated</li>
                            <li>Block explicit music</li>
                            <li>Medusa Kids app access</li>
                        </ul>
                        <button className={`${styles.btn} ${styles.btnOutline}`}>Get Family</button>
                    </div>
                </div>
            </section>

            {/* Why Premium Section */}
            <section className={styles.benefitsSection}>
                <h2>Why go <span className={styles.magentaText}>Premium?</span></h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefitItem}>
                        <div className={styles.iconCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <h3>Hi-Fi Audio</h3>
                        <p>Hear every detail exactly as the artist intended.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <div className={styles.iconCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </div>
                        <h3>No Ad Interruptions</h3>
                        <p>Enjoy non-stop music without any breaks.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <div className={styles.iconCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg>
                        </div>
                        <h3>Offline Listening</h3>
                        <p>Download your favorites and listen anywhere.</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <div className={styles.iconCircle}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </div>
                        <h3>Unlimited Skips</h3>
                        <p>Just hit next if you're not feeling the vibe.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
