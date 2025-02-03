import React from 'react';
import Styles from "../journey/journeysection.module.css";
import Image from 'next/image';

export default function JourneySection() {
  return (
    <section className={Styles.section}>
      <div className={Styles.journey}>
        <h1 className={Styles.journeyDekstop}>My Journey</h1>
        <div>
            <div className={Styles.journeyImage}>
                <Image
                    src="/assets/images/journey-image.png"
                    alt="Journey Image"
                    width={1000}
                    height={1000}
                />
            </div>
            <h1 className={Styles.journeyMobile}>My Journey</h1>
            <div className={Styles.journeyText}>
                <h2>Education and Artist Residencies</h2>
                <ul>
                    <li>Undergraduate Fine Arts Program at Trempleway Academy</li>
                    <li>Post-graduate Degree in Abstract Painting from Salguerro University</li>
                    <li>Artist-in-Residence at Salguerro Art Studios</li>
                    <li>Artist-in-Residence at Crystalshore Creative Retreats</li>
                </ul>
                <h2>Galleries and Exhibits</h2>
                <ul>
                    <li>Salguerro Sun Gallery (guest artist)</li>
                    <li>RKND Fine Arts Studio (group show)</li>
                    <li>Crystalshore Art Gallery (solo exhibit)</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}
