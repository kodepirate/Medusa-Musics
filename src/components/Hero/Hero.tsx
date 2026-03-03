"use client";

import Image from 'next/image';
import { useAudio } from '@/context/AudioContext';
import styles from './Hero.module.css';

export default function Hero() {
    const { isPlaying, togglePlay, progress, nextTrack, prevTrack } = useAudio();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>

                {/* Left Content */}
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.cyanText}>RETRO</span><br />
                        <span className={styles.purpleText}>BEATS</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Music adds color to life, filling it<br />
                        with rhythm, emotions and<br />
                        soul.
                    </p>

                    <div className={styles.buttonGroup}>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>
                            Explore Now
                        </button>
                        <button className={`${styles.btn} ${styles.btnOutline}`}>
                            Premium
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className={styles.imageWrapper}>
                    {/* Floating Background Albums */}
                    <div className={`${styles.bgAlbum} ${styles.album1}`}>
                        <Image 
                            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80" 
                            alt="Album Cover 1" 
                            width={300} 
                            height={300} 
                            style={{ objectFit: 'cover' }}
                            quality={80}
                        />
                    </div>
                    <div className={`${styles.bgAlbum} ${styles.album2}`}>
                        <Image 
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&q=80" 
                            alt="Album Cover 2" 
                            width={300} 
                            height={300} 
                            style={{ objectFit: 'cover' }}
                            quality={80}
                        />
                    </div>

                    <Image
                        src="/images/hero_girl_headphones_1772309848131.png"
                        alt="Girl with headphones"
                        width={700}
                        height={700}
                        className={styles.heroImage}
                        priority
                    />
                </div>

                {/* Player Widget overlaying entire section */}
                <div className={styles.playerWidget}>
                    <div className={styles.playerControls}>
                        <button className={styles.widgetIconBtn} onClick={prevTrack}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 5L4 12l7 7v-3h8v-8h-8V5z"></path></svg>
                        </button>
                        <button className={styles.widgetPlayBtn} onClick={togglePlay}>
                            {isPlaying ? (
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                            )}
                        </button>
                        <button className={styles.widgetIconBtn} onClick={nextTrack}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 5v3H5v8h8v3l7-7-7-7z"></path></svg>
                        </button>
                    </div>
                    <div className={styles.playerTimeline}>
                        <span className={styles.timeLabel}>00:00</span>
                        <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
                        </div>
                        <span className={styles.timeLabel}>03:45</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
