"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsSearchOpen(false);
                setIsProfileOpen(false);
                setMenuOpen(false);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isProfileOpen && !target.closest(`.${styles.profileWrapper}`)) {
                setIsProfileOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isProfileOpen]);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsProfileOpen(false); // Close profile if open
        if (!isSearchOpen) setSearchQuery('');
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would trigger search logic
        console.log("Searching for:", searchQuery);
        setIsSearchOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        Medusa
                    </Link>
                </div>

                <ul className={styles.navLinks}>
                    <li style={{ animationDelay: '0.1s' }}><Link href="/">Home</Link></li>
                    <li style={{ animationDelay: '0.2s' }}><Link href="/store">Store</Link></li>
                    <li style={{ animationDelay: '0.3s' }}><Link href="/premium">Premium</Link></li>
                    <li style={{ animationDelay: '0.4s' }}><Link href="/download">Download</Link></li>
                    <li style={{ animationDelay: '0.5s' }}><Link href="/contact">Contact</Link></li>
                </ul>

                <div className={styles.actions}>
                    <button className={styles.iconBtn} aria-label="Search" onClick={toggleSearch}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>

                    {/* Profile Wrapper for absolute positioning of dropdown */}
                    <div className={styles.profileWrapper}>
                        <button className={styles.iconBtn} aria-label="User Profile" onClick={toggleProfile}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>

                        {/* Profile Dropdown Menu */}
                        {isProfileOpen && (
                            <div className={styles.profileDropdown}>
                                <div className={styles.profileHeader}>
                                    <div className={styles.profileAvatar}>
                                        <span>HT</span>
                                    </div>
                                    <div className={styles.profileInfo}>
                                        <p className={styles.profileName}>Harry Tom</p>
                                        <p className={styles.profilePlan}>Premium Member</p>
                                    </div>
                                </div>
                                <ul className={styles.profileMenu}>
                                    <li><Link href="/account" onClick={() => setIsProfileOpen(false)}>Account Settings</Link></li>
                                    <li><Link href="/library" onClick={() => setIsProfileOpen(false)}>My Library</Link></li>
                                    <li><Link href="/help" onClick={() => setIsProfileOpen(false)}>Help & Support</Link></li>
                                    <li className={styles.logoutBtn}><button onClick={() => setIsProfileOpen(false)}>Log Out</button></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Hamburger Button – mobile only */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            {menuOpen && (
                <div className={styles.mobileDrawer}>
                    <ul className={styles.mobileLinks}>
                        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/store" onClick={() => setMenuOpen(false)}>Store</Link></li>
                        <li><Link href="/premium" onClick={() => setMenuOpen(false)}>Premium</Link></li>
                        <li><Link href="/download" onClick={() => setMenuOpen(false)}>Download</Link></li>
                        <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className={styles.searchOverlay}>
                    <button className={styles.closeBtn} onClick={toggleSearch} aria-label="Close Search">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className={styles.searchContainer}>
                        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                            <svg className={styles.searchIconLarge} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search for songs, artists, or albums..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />
                        </form>

                        <div className={styles.searchSuggestions}>
                            <p className={styles.suggestionTitle}>Trending Searches</p>
                            <div className={styles.tags}>
                                <span className={styles.tag} onClick={() => setSearchQuery('Synthwave')}>Synthwave</span>
                                <span className={styles.tag} onClick={() => setSearchQuery('Midnight City')}>Midnight City</span>
                                <span className={styles.tag} onClick={() => setSearchQuery('Daft Punk')}>Daft Punk</span>
                                <span className={styles.tag} onClick={() => setSearchQuery('Cyberpunk Mix')}>Cyberpunk Mix</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
