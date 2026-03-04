"use client";

import styles from './Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.contactPage}>
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>We're here to <span className={styles.gradientText}>Help</span></h1>
                <p className={styles.subtitle}>Have questions about Medusa? Get in touch with our support team or browse our FAQs.</p>
            </header>

            <div className={styles.mainContainer}>
                {/* Left Side: Contact Form */}
                <section className={styles.formSection}>
                    <div className={styles.glassCard}>
                        <h2>Send us a Message</h2>
                        <form className={styles.contactForm}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" required>
                                    <option value="" disabled selected>Select a topic</option>
                                    <option value="billing">Billing & Subscriptions</option>
                                    <option value="tech">Technical Support</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="How can we assist you?" required></textarea>
                            </div>
                            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Submit Request</button>
                        </form>
                    </div>
                </section>

                {/* Right Side: Contact Info & FAQ */}
                <section className={styles.infoSection}>
                    
                    {/* Quick Contacts */}
                    <div className={styles.contactOptions}>
                        <div className={styles.contactOption}>
                            <div className={styles.iconCircle}>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <h3>Email Support</h3>
                                <p>support@medusamusics.com</p>
                            </div>
                        </div>
                        <div className={styles.contactOption}>
                            <div className={styles.iconCircle}>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <h3>Call Us</h3>
                                <p>1-800-MEDUSA</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className={styles.faqSection}>
                        <h3>Frequently Asked <span className={styles.magentaText}>Questions</span></h3>
                        
                        <div className={styles.faqItem}>
                            <h4>How do I cancel my Premium subscription?</h4>
                            <p>You can cancel your subscription at any time by going to your Account Settings &gt; Billing &gt; Cancel Plan.</p>
                        </div>
                        
                        <div className={styles.faqItem}>
                            <h4>Can I listen offline?</h4>
                            <p>Yes, all Premium users can download songs and playlists for offline listening on up to 5 devices.</p>
                        </div>
                        
                        <div className={styles.faqItem}>
                            <h4>What audio quality does Medusa stream?</h4>
                            <p>Free users stream at up to 160kbps. Premium users get up to 320kbps and access to Hi-Fi lossless audio where available.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
