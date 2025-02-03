import React from 'react';
import Image from 'next/image';
import Styles from "../work/worksection.module.css";
import Work from '@/data/work/Work';

export default function WorkSection() {
  return (
    <section className={Styles.section}>
        <div className={Styles.work}>
            <div>
                <h1>Sample Work</h1>
            </div>
            <Work/>
            <div className={Styles.blooming}>
              <div>
                <Image
                  src="/assets/images/blooming-one.png"
                  alt="Blooming"
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <Image
                  src="/assets/images/blooming-two.png"
                  alt="Blooming"
                  width={1000}
                  height={1000}
                />
                <h2>Blooming</h2>
                <p>Dimensions: 20 x 20</p>
                <p>Concept: Secret Corners</p>
                <p>Year: 2023</p>
              </div>
            </div>
        </div>
    </section>
  )
}
