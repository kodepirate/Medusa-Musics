"use client";

import { useAudio } from '@/context/AudioContext';
import styles from './NewReleases.module.css';

const albums = [
    { id: 1, title: 'Neon Drift', subtitle: 'Synthwave', cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&q=80' },
    { id: 2, title: 'Midnight', subtitle: 'Electronic', cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80' },
    { id: 3, title: 'Cyber City', subtitle: 'Cyberpunk', cover: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?w=300&q=80' },
    { id: 4, title: 'Deep Space', subtitle: 'Ambient', cover: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=300&q=80' },
];

export default function NewReleases() {
    const { playTrack } = useAudio();

    const handlePlayMain = () => {
        playTrack({
            id: 5,
            title: 'STARBOY',
            subtitle: 'Pop/R&B',
            cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&q=80'
        });
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Listen To <span className={styles.highlight}>New Release Music</span> And<br />
                        Download It For Offline Listening<br />
                        Anytime, Anywhere
                    </h2>
                    <button className={styles.btnPremium}>
                        <span>Explore More</span>
                        <div className={styles.shine}></div>
                    </button>
                </div>

                <div className={styles.grid}>
                    {/* Main Album (Left side, larger) */}
                    <div className={`${styles.card} ${styles.mainCard}`} onClick={handlePlayMain}>
                        <img
                            src="https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&q=80"
                            alt="Starboy"
                            className={styles.albumCover}
                        />
                        <div className={styles.cardOverlay}>
                            <div className={styles.playBtn}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                            </div>
                        </div>
                        <div className={styles.cardInfo}>
                            <h3>STARBOY</h3>
                        </div>
                    </div>

                    {/* Right side Grid */}
                    <div className={styles.subGrid}>
                        {/* Top right single album */}
                        {/* Top right single album */}
                        <div className={`${styles.card} ${styles.topRightAlbum}`} style={{ animationDelay: '0.2s' }}>
                            <img
                                src="https://images.unsplash.com/photo-1614613535808-3196b27dcf6d?w=300&q=80"
                                alt="Music"
                                className={styles.albumCover}
                            />
                            <div className={styles.cardOverlay}>
                                <div className={styles.cardInfo}>
                                    <h4>Top Hit</h4>
                                </div>
                            </div>
                        </div>
                        {/* Bottom 4 albums */}
                        {/* Bottom 4 albums */}
                        <div className={styles.fourAlbumsGrid}>
                            {albums.map((album, index) => (
                                <div
                                    key={album.id}
                                    className={styles.card}
                                    onClick={() => playTrack(album)}
                                    style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                                >
                                    <img src={album.cover} alt={album.title} className={styles.albumCover} />
                                    <div className={styles.cardOverlay}>
                                        <div className={styles.playBtnSmall}>
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                                        </div>
                                    </div>
                                    <div className={styles.smallCardInfo}>
                                        <h4>{album.title}</h4>
                                        <p>{album.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
