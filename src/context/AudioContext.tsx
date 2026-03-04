"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Track = {
    id: number;
    title: string;
    subtitle: string;
    cover: string;
};

interface AudioContextType {
    isPlaying: boolean;
    currentTrack: Track | null;
    progress: number;
    togglePlay: () => void;
    playTrack: (track: Track) => void;
    nextTrack: () => void;
    prevTrack: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const defaultTracks: Track[] = [
    { id: 1, title: 'Alan Jackson', subtitle: 'Country', cover: 'https://images.unsplash.com/photo-1598387181032-a310322db117?w=300&q=80' },
    { id: 2, title: 'Trap Music', subtitle: 'Hip Hop', cover: 'https://images.unsplash.com/photo-1508215885820-4585e5610ea0?w=300&q=80' },
    { id: 3, title: 'Strange', subtitle: 'Electronic', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80' },
    { id: 4, title: 'Classic Rock', subtitle: 'Rock', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80' },
    { id: 5, title: 'WAY TURN', subtitle: 'Pop', cover: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f0a41e?w=500&q=80' }
];

export const AudioProvider = ({ children }: { children: ReactNode }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<Track | null>(defaultTracks[4]); // default to WAY TURN
    const [progress, setProgress] = useState(0);

    const nextTrack = React.useCallback(() => {
        if (!currentTrack) return;
        const currentIndex = defaultTracks.findIndex(t => t.id === currentTrack.id);
        const nextIndex = (currentIndex + 1) % defaultTracks.length;
        setCurrentTrack(defaultTracks[nextIndex]);
        setProgress(0);
    }, [currentTrack]);

    const prevTrack = React.useCallback(() => {
        if (!currentTrack) return;
        const currentIndex = defaultTracks.findIndex(t => t.id === currentTrack.id);
        const prevIndex = currentIndex === 0 ? defaultTracks.length - 1 : currentIndex - 1;
        setCurrentTrack(defaultTracks[prevIndex]);
        setProgress(0);
    }, [currentTrack]);

    // Simulate progress
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        nextTrack();
                        return 0;
                    }
                    return prev + 1; // Increase step size to reduce total re-renders over time
                });
            }, 2000); // Throttle interval to 2 seconds
        }
        return () => clearInterval(interval);
    }, [isPlaying, nextTrack]); // Add nextTrack to dependencies to fix exhaustive-deps warning

    const togglePlay = () => setIsPlaying(!isPlaying);

    const playTrack = (track: Track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
        setProgress(0);
    };

    return (
        <AudioContext.Provider value={{ isPlaying, currentTrack, progress, togglePlay, playTrack, nextTrack, prevTrack }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};
