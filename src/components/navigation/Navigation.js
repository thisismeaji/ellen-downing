"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from "../navigation/navigation.module.css";

export default function Navigation() {
    const [isNavActive, setIsNavActive] = useState(false);

    // Fungsi untuk toggle menu
    const toggleNav = () => {
        setIsNavActive((prev) => !prev);
    };

    // Fungsi untuk close menu
    const handleClose = () => {
        setIsNavActive(false);
    };

    const smoothScroll = (targetPosition, duration) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
    
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    
            window.scrollTo(0, run);
    
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };
    
        // Easing function untuk animasi halus
        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };
    
        requestAnimationFrame(animation);
    };
    
    // Fungsi handle klik navigasi
    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsNavActive(false);
    
        const section = document.getElementById(targetId);
        if (section) {
            const targetPosition = section.offsetTop;
            smoothScroll(targetPosition, 1000); // Scroll selama 2 detik (2000 ms)
        } else if (targetId === 'home') {
            smoothScroll(0, 1000); // Scroll ke atas untuk Home
        }
    };

    return (
        <nav className={Styles.nav}>
            <Link href="/">
                <div className={Styles.logo}>
                    <Image
                        src="/assets/images/logo.png"
                        alt="Logo"
                        width="1000"
                        height="1000"
                    />
                </div>
            </Link>
            <div className={Styles.navList}>
                {/* Desktop Navigation */}
                <ul className={Styles.navDekstop}>
                    <li>
                        <a href="/" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={(e) => handleNavLinkClick(e, 'portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
                    </li>
                </ul>

                {/* Mobile Navigation */}
                <ul className={`${Styles.navMobile} ${isNavActive ? Styles.navActive : ""}`}>
                    <li>
                        <a href="/" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={(e) => handleNavLinkClick(e, 'portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
                    </li>
                    {/* Tombol Close */}
                    <li className={Styles.closeButton} onClick={handleClose}>×</li>
                </ul>

                {/* Overlay */}
                {isNavActive && <div className={Styles.overlay} onClick={handleClose}></div>}
            </div>

            {/* Menu Button */}
            <div className={Styles.menu} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
