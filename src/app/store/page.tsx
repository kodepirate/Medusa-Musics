"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Store.module.css';

export default function Store() {
    return (
        <main className={styles.storePage}>
            {/* Hero Banner */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>Limited Edition</div>
                    <h1 className={styles.heroTitle}>Midnight <span className={styles.gradientText}>Syndicate</span></h1>
                    <p className={styles.heroSubtitle}>Exclusive Transparent Violet 2xLP Vinyl.</p>
                    <div className={styles.heroActions}>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>Pre-order $35</button>
                    </div>
                </div>
                <div className={styles.heroImageWrapper}>
                    <div className={styles.vinylGlow}></div>
                    <Image 
                        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&q=80" 
                        alt="Limited Edition Vinyl" 
                        width={400} 
                        height={400} 
                        className={styles.vinylRecord}
                    />
                </div>
            </section>

            {/* Featured Merchandise */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Featured <span className={styles.magentaText}>Merch</span></h2>
                    <Link href="#" className={styles.viewAll}>View All</Link>
                </div>
                <div className={styles.grid}>
                    {/* Merch Item 1 */}
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" alt="Hoodie" width={300} height={300} objectFit="cover" />
                        </div>
                        <div className={styles.productInfo}>
                            <h3>Neon Nights Hoodie</h3>
                            <p className={styles.artist}>Medusa Originals</p>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>$55.00</span>
                                <button className={styles.addToCart}>+</button>
                            </div>
                        </div>
                    </div>
                    {/* Merch Item 2 */}
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <Image src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" alt="T-Shirt" width={300} height={300} objectFit="cover" />
                        </div>
                        <div className={styles.productInfo}>
                            <h3>Synthwave T-Shirt</h3>
                            <p className={styles.artist}>The Midnight</p>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>$30.00</span>
                                <button className={styles.addToCart}>+</button>
                            </div>
                        </div>
                    </div>
                     {/* Merch Item 3 */}
                    <div className={styles.productCard}>
                        <div className={styles.productImage}>
                            <Image src="https://images.unsplash.com/photo-1588722135650-dd6bdceab446?w=400&q=80" alt="Cap" width={300} height={300} objectFit="cover" />
                        </div>
                        <div className={styles.productInfo}>
                            <h3>Retro Logo Cap</h3>
                            <p className={styles.artist}>Medusa Originals</p>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>$25.00</span>
                                <button className={styles.addToCart}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Live Concert Tickets */}
             <section className={`${styles.section} ${styles.concertSection}`}>
                <h2 className={styles.sectionTitle}>Live <span className={styles.cyanText}>Concerts</span></h2>
                <div className={styles.ticketList}>
                    {/* Ticket 1 */}
                    <div className={styles.ticketCard}>
                        <div className={styles.ticketDate}>
                            <span className={styles.month}>OCT</span>
                            <span className={styles.day}>14</span>
                        </div>
                        <div className={styles.ticketDetails}>
                            <h3>Neon Dreams World Tour</h3>
                            <p>Staples Center, Los Angeles CA</p>
                        </div>
                        <button className={styles.btnTicket}>Get Tickets</button>
                    </div>
                    {/* Ticket 2 */}
                    <div className={styles.ticketCard}>
                        <div className={styles.ticketDate}>
                            <span className={styles.month}>NOV</span>
                            <span className={styles.day}>02</span>
                        </div>
                        <div className={styles.ticketDetails}>
                            <h3>Synthwave Extravaganza</h3>
                            <p>Madison Square Garden, New York NY</p>
                        </div>
                        <button className={styles.btnTicket}>Get Tickets</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
