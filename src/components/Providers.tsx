"use client";

import { AudioProvider } from '@/context/AudioContext';
import MusicPlayBar from '@/components/MusicPlayBar/MusicPlayBar';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AudioProvider>
            {children}
            <MusicPlayBar />
        </AudioProvider>
    );
}
