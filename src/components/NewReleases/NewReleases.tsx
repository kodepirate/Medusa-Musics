"use client";

import Image from 'next/image';
import { useAudio } from '@/context/AudioContext';
import styles from './NewReleases.module.css';

const albums = [
    { id: 1, title: 'Neon Drift', subtitle: 'Synthwave', cover: '/images/albums/neon_drift.png' },
    { id: 2, title: 'Midnight', subtitle: 'Electronic', cover: '/images/albums/midnight.png' },
    { id: 3, title: 'Cyber City', subtitle: 'Cyberpunk', cover: '/images/albums/cyber_city.png' },
    { id: 4, title: 'Deep Space', subtitle: 'Ambient', cover: '/images/albums/deep_space.png' },
];

export default function NewReleases() {
    const { playTrack } = useAudio();

    const handlePlayMain = () => {
        playTrack({
            id: 5,
            title: 'STARBOY',
            subtitle: 'Pop/R&B',
            cover: '/images/albums/starboy.png'
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
                        <Image
                            src="/images/albums/starboy.png"
                            alt="Starboy"
                            width={400}
                            height={400}
                            className={styles.albumCover}
                            sizes="(max-width: 768px) 100vw, 400px"
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
                            <Image
                                src="/images/albums/top_hit.png"
                                alt="Top Hit"
                                width={300}
                                height={300}
                                className={styles.albumCover}
                                sizes="(max-width: 768px) 50vw, 300px"
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
                                    <Image 
                                        src={album.cover} 
                                        alt={album.title} 
                                        width={202}
                                        height={202}
                                        className={styles.albumCover} 
                                        sizes="(max-width: 768px) 50vw, 202px"
                                    />
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
