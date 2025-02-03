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
        </div>
    </section>
  )
}
