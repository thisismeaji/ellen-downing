import React from 'react';
import WorkData from './WorkData';
import Image from 'next/image';
import Styles from "../work/work.module.css";

export default function Work() {
  return (
    <div className={Styles.work}>
      {WorkData.map((work) => (
        <div key={work.id} className={Styles.cardWork}>
          <Image
            src={work.image}
            alt={work.tittle}
            width={1000}
            height={1080}
          />
          <div>
            <h2>{work.tittle}</h2>
            <p>{work.size}</p>
            <p>{work.concept}</p>
            <p>{work.year}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
