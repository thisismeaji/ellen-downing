import React from 'react';
import Image from 'next/image';
import Styles from "../Commissions/commissionssection.module.css";

export default function CommissionsSection() {
  return (
    <section className={Styles.section}>
        <div className={Styles.commissions}>
            <div className={Styles.commissionsImage}>
                <Image
                    src="/assets/images/commissions-images.png"
                    alt="commissions"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className={Styles.commissionsText}>
                <h1>Commissions</h1>
                <h2>Two slots per month</h2>
                <p>In order to ensure quality and to be able to give my clients as much attention as possible, I only open two slots for commissions every month.</p>
                <h2>Timeline</h2>
                <p>Pricing and timeline will also depend on the difficulty of the commissioned artowrk. Feel free to message me for inquiries.</p>
            </div>
        </div>
    </section>
  );
}
