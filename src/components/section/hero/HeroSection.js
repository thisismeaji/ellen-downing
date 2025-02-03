import React from 'react';
import Styles from "../hero/herosection.module.css";
import Image from 'next/image';
import Button from '@/components/button/Button';

export default function HeroSection() {
  return (
    <section className={Styles.section} id="home">
        <div className={Styles.hero}>
            <div className={Styles.heroImage}>
                <Image
                    src="/assets/images/hero-image-2.png"
                    alt="Hero Image two"
                    width={1000}
                    height={1000}
                    className={Styles.profile}
                />
            </div>
            <div className={Styles.heroText}>
                <div>
                    <h2>Visual Artist</h2>
                    <h1>Ellen Downing</h1>
                    <p>I've been painting for eight years. While being an artist is a difficult tug-of-war between my inner dreamer and critic, I've grown to love this process a lot. It hasn't just taught me much about the world, but also about myself.</p>
                    <Button text="My Work" link="/"/>
                </div>
            </div>
        </div>
    </section>
  )
}
