"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Store.module.css';

/* ── Product data for the infinite carousel ── */
const products = [
    {
        name: 'Midnight Syndicate Vinyl',
        artist: 'Medusa Records',
        price: '$35.00',
        badge: 'new' as const,
        image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=400&q=80',
        rating: 5,
        reviews: 231,
        swatches: ['#4a0e4e', '#0a0a0a', '#1a3a5c'],
    },
    {
        name: 'Studio Monitor Headphones',
        artist: 'Medusa Audio',
        price: '$79.00',
        originalPrice: '$99.00',
        badge: 'sale' as const,
        badgeLabel: '-20%',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
        rating: 5,
        reviews: 184,
        swatches: ['#0a0a0a', '#f5f5dc'],
    },
    {
        name: 'Medusa World Tour Tee',
        artist: 'Official Merch',
        price: '$30.00',
        badge: 'hot' as const,
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80',
        rating: 4,
        reviews: 312,
        swatches: ['#0a0a0a', '#1a1a2e', '#f5f5dc'],
    },
    {
        name: 'Retro Bluetooth Turntable',
        artist: 'Medusa Audio',
        price: '$120.00',
        badge: 'new' as const,
        image: 'https://images.unsplash.com/photo-1593078166039-c9878df5c520?w=400&q=80',
        rating: 4,
        reviews: 67,
        swatches: ['#5c3a1e', '#0a0a0a'],
    },
    {
        name: 'Neon Beats Poster',
        artist: 'Medusa Art Studio',
        price: '$18.00',
        originalPrice: '$25.00',
        badge: 'sale' as const,
        badgeLabel: '-28%',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
        rating: 5,
        reviews: 96,
        swatches: ['#8a2be2', '#00f2fe', '#ff0844'],
    },
    {
        name: 'Portable Wireless Speaker',
        artist: 'Medusa Audio',
        price: '$49.00',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
        rating: 4,
        reviews: 158,
        swatches: ['#0a0a0a', '#1a3a5c', '#4a0e4e'],
    },
];

const badgeClass: Record<string, string> = {
    new: styles.badgeNew,
    sale: styles.badgeSale,
    hot: styles.badgeHot,
};

function ProductCard({ p }: { p: (typeof products)[0] }) {
    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                {p.badge && (
                    <span className={`${styles.productBadge} ${badgeClass[p.badge]}`}>
                        {p.badge === 'sale' ? (p.badgeLabel ?? 'Sale') : p.badge === 'new' ? 'New' : 'Hot'}
                    </span>
                )}
                <button className={styles.wishlistBtn} aria-label="Add to wishlist">♡</button>
                <div className={styles.imageOverlay}>
                    <button className={styles.quickViewBtn}>Quick View</button>
                </div>
                <Image
                    src={p.image}
                    alt={p.name}
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover' }}
                    sizes="300px"
                />
            </div>
            <div className={styles.productInfo}>
                <h3>{p.name}</h3>
                <p className={styles.artist}>{p.artist}</p>
                <div className={styles.colorSwatches}>
                    {p.swatches.map((c, j) => (
                        <span
                            key={j}
                            className={`${styles.swatch} ${j === 0 ? styles.swatchActive : ''}`}
                            style={{ background: c }}
                        />
                    ))}
                    <span className={styles.swatchLabel}>{p.swatches.length} colors</span>
                </div>
                <div className={styles.starRating}>
                    {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={`${styles.star} ${s <= p.rating ? styles.starFilled : styles.starEmpty}`}>★</span>
                    ))}
                    <span className={styles.ratingCount}>({p.reviews})</span>
                </div>
                <div className={styles.priceRow}>
                    {p.originalPrice ? (
                        <div className={styles.priceGroup}>
                            <span className={styles.price}>{p.price}</span>
                            <span className={styles.originalPrice}>{p.originalPrice}</span>
                        </div>
                    ) : (
                        <span className={styles.price}>{p.price}</span>
                    )}
                    <button className={styles.addToCart}>+</button>
                </div>
            </div>
        </div>
    );
}

export default function Store() {
    const revealRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        revealRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRevealRef = (el: HTMLDivElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <main className={styles.storePage}>
            {/* Hero Banner */}
            <section className={styles.heroSection}>
                <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
                <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>

                <div className={styles.heroContent}>
                    <div className={styles.badge}>Limited Edition</div>
                    <h1 className={styles.heroTitle}>Midnight <span className={styles.gradientText}>Syndicate</span></h1>
                    <p className={styles.heroSubtitle}>Exclusive Transparent Violet 2xLP Vinyl.</p>
                    <div className={styles.heroActions}>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>Pre-order $35</button>
                        <button className={`${styles.btn} ${styles.btnOutline}`}>Browse Store</button>
                    </div>
                </div>
                <div className={styles.heroImageWrapper}>
                    <div className={styles.vinylGlow}></div>
                    <div className={styles.glowRing}></div>
                    <Image 
                        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&q=80" 
                        alt="Limited Edition Vinyl" 
                        width={400} 
                        height={400} 
                        className={styles.vinylRecord}
                        priority
                        sizes="(max-width: 480px) 250px, 400px"
                    />
                </div>
            </section>

            {/* Featured Merchandise */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Featured <span className={styles.magentaText}>Merch</span></h2>
                    <Link href="#" className={styles.viewAll}>View All</Link>
                </div>

                <div className={styles.categoryTabs}>
                    <button className={`${styles.categoryTab} ${styles.categoryTabActive}`}>All</button>
                    <button className={styles.categoryTab}>Vinyl</button>
                    <button className={styles.categoryTab}>Audio Gear</button>
                    <button className={styles.categoryTab}>Merch</button>
                    <button className={styles.categoryTab}>Posters</button>
                </div>

                {/* Infinite horizontal scroll — cards duplicated for seamless loop */}
                <div className={styles.carouselWrapper}>
                    <div className={styles.carouselTrack}>
                        {/* Original set */}
                        {products.map((p, i) => (
                            <ProductCard key={`a-${i}`} p={p} />
                        ))}
                        {/* Duplicate set for seamless infinite loop */}
                        {products.map((p, i) => (
                            <ProductCard key={`b-${i}`} p={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            <div ref={addRevealRef} className={`${styles.sectionDivider} ${styles.scrollReveal}`}>
                <div className={styles.dividerLine}></div>
                <span className={styles.dividerIcon}>🎵</span>
                <div className={styles.dividerLine}></div>
            </div>

            {/* Live Concert Tickets */}
            <section className={`${styles.section} ${styles.concertSection}`}>
                <div className={styles.concertHeader}>
                    <div>
                        <h2 className={styles.sectionTitle}>Live <span className={styles.cyanText}>Concerts</span></h2>
                        <p className={styles.concertSubtitle}>Catch your favorite artists live on stage</p>
                    </div>
                    <Link href="#" className={styles.viewAll}>All Events</Link>
                </div>
                <div className={styles.ticketList}>
                    <div ref={addRevealRef} className={`${styles.ticketCard} ${styles.scrollReveal}`} style={{ transitionDelay: '0s' }}>
                        <div className={styles.ticketDate}>
                            <span className={styles.month}>OCT</span>
                            <span className={styles.day}>14</span>
                        </div>
                        <div className={styles.ticketDetails}>
                            <h3>Neon Dreams World Tour</h3>
                            <p className={styles.ticketVenue}><span className={styles.venueIcon}>📍</span> Staples Center, Los Angeles CA</p>
                        </div>
                        <span className={`${styles.ticketStatus} ${styles.statusSellingFast}`}>Selling Fast</span>
                        <span className={styles.ticketPrice}>From $65</span>
                        <button className={styles.btnTicket}>Get Tickets</button>
                    </div>
                    <div ref={addRevealRef} className={`${styles.ticketCard} ${styles.scrollReveal}`} style={{ transitionDelay: '0.15s' }}>
                        <div className={styles.ticketDate}>
                            <span className={styles.month}>NOV</span>
                            <span className={styles.day}>02</span>
                        </div>
                        <div className={styles.ticketDetails}>
                            <h3>Synthwave Extravaganza</h3>
                            <p className={styles.ticketVenue}><span className={styles.venueIcon}>📍</span> Madison Square Garden, New York NY</p>
                        </div>
                        <span className={`${styles.ticketStatus} ${styles.statusFewLeft}`}>Few Left</span>
                        <span className={styles.ticketPrice}>From $85</span>
                        <button className={styles.btnTicket}>Get Tickets</button>
                    </div>
                    <div ref={addRevealRef} className={`${styles.ticketCard} ${styles.scrollReveal}`} style={{ transitionDelay: '0.3s' }}>
                        <div className={styles.ticketDate}>
                            <span className={styles.month}>NOV</span>
                            <span className={styles.day}>18</span>
                        </div>
                        <div className={styles.ticketDetails}>
                            <h3>Retrowave Festival</h3>
                            <p className={styles.ticketVenue}><span className={styles.venueIcon}>📍</span> O2 Arena, London UK</p>
                        </div>
                        <span className={`${styles.ticketStatus} ${styles.statusAvailable}`}>Available</span>
                        <span className={styles.ticketPrice}>From $55</span>
                        <button className={styles.btnTicket}>Get Tickets</button>
                    </div>
                    <div ref={addRevealRef} className={`${styles.ticketCard} ${styles.scrollReveal}`} style={{ transitionDelay: '0.45s' }}>
                        <div className={styles.ticketDate}>
                            <span className={styles.month}>DEC</span>
                            <span className={styles.day}>31</span>
                        </div>
                        <div className={styles.ticketDetails}>
                            <h3>New Year&apos;s Eve Countdown</h3>
                            <p className={styles.ticketVenue}><span className={styles.venueIcon}>📍</span> Crypto.com Arena, Los Angeles CA</p>
                        </div>
                        <span className={`${styles.ticketStatus} ${styles.statusSellingFast}`}>Selling Fast</span>
                        <span className={styles.ticketPrice}>From $120</span>
                        <button className={styles.btnTicket}>Get Tickets</button>
                    </div>
                </div>
            </section>

            {/* Now Playing / Featured Track */}
            <section ref={addRevealRef} className={`${styles.nowPlayingSection} ${styles.scrollReveal}`}>
                <div className={styles.playerCard}>
                    <div className={styles.albumArt}>
                        <Image
                            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80"
                            alt="Echoes of Tomorrow album art"
                            width={200}
                            height={200}
                            style={{ objectFit: 'cover' }}
                            sizes="200px"
                        />
                    </div>
                    <div className={styles.playerInfo}>
                        <div className={styles.nowPlayingLabel}>
                            <span className={styles.liveIndicator}></span>
                            Now Playing
                        </div>
                        <h3 className={styles.trackTitle}>Echoes of Tomorrow</h3>
                        <p className={styles.trackArtist}>Midnight Syndicate · Neon Horizons EP</p>
                        <div className={styles.waveformContainer}>
                            {Array.from({ length: 30 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={styles.waveBar}
                                    style={{
                                        animationDelay: `${i * 0.08}s`,
                                        height: `${8 + Math.random() * 32}px`,
                                    }}
                                />
                            ))}
                        </div>
                        <div className={styles.progressRow}>
                            <span className={styles.progressTime}>2:34</span>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill}></div>
                            </div>
                            <span className={styles.progressTime}>3:52</span>
                        </div>
                        <div className={styles.playerControls}>
                            <button className={styles.controlBtn} aria-label="Previous">⏮</button>
                            <button className={styles.playBtn} aria-label="Play">▶</button>
                            <button className={styles.controlBtn} aria-label="Next">⏭</button>
                            <button className={styles.controlBtn} aria-label="Shuffle">🔀</button>
                            <button className={styles.controlBtn} aria-label="Repeat">🔁</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending Tracks Chart */}
            <section ref={addRevealRef} className={`${styles.trendingSection} ${styles.scrollReveal}`}>
                <div className={styles.trendingHeader}>
                    <div>
                        <h2 className={styles.sectionTitle}>Trending on <span className={styles.cyanText}>Medusa</span></h2>
                        <p className={styles.trendingSubtitle}>Most played tracks this week</p>
                    </div>
                    <Link href="#" className={styles.viewAll}>Full Chart</Link>
                </div>
                <div className={styles.chartList}>
                    {[
                        { rank: 1, title: 'Neon Pulse', artist: 'Synthwave Collective', plays: '2.4M', trend: '+12%', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&q=80' },
                        { rank: 2, title: 'Midnight Drive', artist: 'The Retrowave', plays: '1.8M', trend: '+8%', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&q=80' },
                        { rank: 3, title: 'Electric Dreams', artist: 'Neon Lights', plays: '1.5M', trend: '+22%', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&q=80' },
                        { rank: 4, title: 'After Hours', artist: 'Medusa Radio', plays: '1.2M', trend: '+5%', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&q=80' },
                        { rank: 5, title: 'Starlight Symphony', artist: 'Aurora Beats', plays: '980K', trend: '+15%', img: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=100&q=80' },
                    ].map((track) => (
                        <div key={track.rank} className={styles.chartRow}>
                            <span className={styles.chartRank}>{track.rank}</span>
                            <div className={styles.chartThumb}>
                                <Image src={track.img} alt={track.title} width={50} height={50} style={{ objectFit: 'cover' }} sizes="50px" />
                            </div>
                            <div className={styles.chartInfo}>
                                <h4>{track.title}</h4>
                                <p>{track.artist}</p>
                            </div>
                            <div className={styles.chartStats}>
                                <span className={styles.chartStat}>
                                    <span className={styles.chartStatIcon}>▶</span> {track.plays}
                                </span>
                                <span className={styles.chartTrend}>{track.trend}</span>
                            </div>
                            <button className={styles.chartPlayBtn} aria-label={`Play ${track.title}`}>▶</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Community CTA */}
            <section ref={addRevealRef} className={`${styles.communityCta} ${styles.scrollReveal}`}>
                <div className={styles.ctaCard}>
                    <span className={styles.ctaEmoji}>🎧</span>
                    <h2 className={styles.ctaTitle}>Join the Medusa <span className={styles.gradientText}>Family</span></h2>
                    <p className={styles.ctaSubtitle}>Get exclusive drops, presale codes, curated playlists, and early access to new releases. Straight to your inbox.</p>
                    <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="your@email.com" className={styles.ctaInput} />
                        <button type="submit" className={styles.ctaSubmit}>Subscribe</button>
                    </form>
                    <div className={styles.ctaPerks}>
                        <span className={styles.ctaPerk}><span className={styles.ctaPerkIcon}>✓</span> Free forever</span>
                        <span className={styles.ctaPerk}><span className={styles.ctaPerkIcon}>✓</span> Exclusive content</span>
                        <span className={styles.ctaPerk}><span className={styles.ctaPerkIcon}>✓</span> Unsubscribe anytime</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
