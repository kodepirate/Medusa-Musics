"use client";

import { useAudio } from '@/context/AudioContext';
import styles from './MusicPlayBar.module.css';

export default function MusicPlayBar() {
    const { isPlaying, currentTrack, togglePlay, progress, nextTrack, prevTrack } = useAudio();

    if (!currentTrack) return null;

    return (
        <div className={styles.playBar}>
            <div className={styles.trackInfo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={currentTrack.cover}
                    alt={currentTrack.title}
                    className={styles.trackCover}
                />
                <div className={styles.trackText}>
                    <span className={styles.trackTitle}>{currentTrack.title}</span>
                    <span className={styles.trackSubtitle}>{currentTrack.subtitle}</span>
                </div>
            </div>

            <div className={styles.playerCenter}>
                <div className={styles.playerControls}>
                    <button className={styles.iconBtn} onClick={prevTrack} aria-label="Previous Track">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                    </button>
                    <button className={styles.playBtn} onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? (
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        )}
                    </button>
                    <button className={styles.iconBtn} onClick={nextTrack} aria-label="Next Track">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                    </button>
                </div>
                <div className={styles.timeline}>
                    <span className={styles.timeLabel}>00:00</span>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ transform: `scaleX(${progress / 100})` }} />
                    </div>
                    <span className={styles.timeLabel}>03:45</span>
                </div>
            </div>

            <div className={styles.volumeSection}>
                <svg className={styles.volumeIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
                <div className={styles.volumeBar}>
                    <div className={styles.volumeFill} />
                </div>
            </div>
        </div>
    );
}
