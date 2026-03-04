"use client";

import Image from 'next/image';
import styles from './Library.module.css';

export default function Library() {
    return (
        <main className={styles.libraryPage}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.profileInfo}>
                    <div className={styles.avatar}>HT</div>
                    <div>
                        <p className={styles.greeting}>Good Evening,</p>
                        <h1 className={styles.userName}>Harry Tom</h1>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>142</span>
                        <span className={styles.statLabel}>Playlists</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>1.2k</span>
                        <span className={styles.statLabel}>Followers</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>48</span>
                        <span className={styles.statLabel}>Following</span>
                    </div>
                </div>
            </header>

            {/* Quick Actions */}
            <div className={styles.quickActions}>
                <button className={`${styles.btnAction} ${styles.active}`}>Playlists</button>
                <button className={styles.btnAction}>Podcasts</button>
                <button className={styles.btnAction}>Artists</button>
                <button className={styles.btnAction}>Albums</button>
            </div>

            {/* Recently Played grid (Top 4) */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Recently <span className={styles.cyanText}>Played</span></h2>
                <div className={styles.recentGrid}>
                    <div className={styles.recentItem}>
                        <Image src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=150&q=80" alt="Album Art" width={80} height={80} className={styles.recentImg} />
                        <h4 className={styles.recentTitle}>Neon Nights Vol. 1</h4>
                        <button className={styles.playBtn}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                        </button>
                    </div>
                    <div className={styles.recentItem}>
                        <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&q=80" alt="Album Art" width={80} height={80} className={styles.recentImg} />
                        <h4 className={styles.recentTitle}>Daily Mix 1</h4>
                        <button className={styles.playBtn}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                        </button>
                    </div>
                    <div className={styles.recentItem}>
                        <div className={`${styles.recentImg} ${styles.likedImg}`}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                        </div>
                        <h4 className={styles.recentTitle}>Liked Songs</h4>
                        <button className={styles.playBtn}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                        </button>
                    </div>
                    <div className={styles.recentItem}>
                        <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&q=80" alt="Album Art" width={80} height={80} className={styles.recentImg} />
                        <h4 className={styles.recentTitle}>Cyberpunk Vibes</h4>
                        <button className={styles.playBtn}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Your Playlists */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Your <span className={styles.magentaText}>Playlists</span></h2>
                    <button className={styles.createBtn}>+ New Playlist</button>
                </div>
                
                <div className={styles.playlistGrid}>
                    {/* Item 1 */}
                    <div className={styles.playlistCard}>
                        <div className={styles.playlistImageWrap}>
                            <Image src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80" alt="Playlist Cover" width={200} height={200} objectFit="cover" />
                            <div className={styles.overlay}>
                                <button className={styles.playCardBtn}>
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <h3>Deep Focus</h3>
                        <p>By Medusa</p>
                    </div>

                    {/* Item 2 */}
                    <div className={styles.playlistCard}>
                        <div className={styles.playlistImageWrap}>
                            <Image src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?w=300&q=80" alt="Playlist Cover" width={200} height={200} objectFit="cover" />
                            <div className={styles.overlay}>
                                <button className={styles.playCardBtn}>
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <h3>Acoustic Morning</h3>
                        <p>By Medusa</p>
                    </div>

                    {/* Item 3 */}
                    <div className={styles.playlistCard}>
                        <div className={styles.playlistImageWrap}>
                            <Image src="https://images.unsplash.com/photo-1516280440502-65f536af50dc?w=300&q=80" alt="Playlist Cover" width={200} height={200} objectFit="cover" />
                            <div className={styles.overlay}>
                                <button className={styles.playCardBtn}>
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <h3>Synthwave Outrun</h3>
                        <p>By Harry Tom</p>
                    </div>

                    {/* Item 4 */}
                    <div className={styles.playlistCard}>
                        <div className={styles.playlistImageWrap}>
                            <Image src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80" alt="Playlist Cover" width={200} height={200} objectFit="cover" />
                            <div className={styles.overlay}>
                                <button className={styles.playCardBtn}>
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <h3>Workout Mix</h3>
                        <p>By Medusa</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
