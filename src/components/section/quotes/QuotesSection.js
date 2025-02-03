import React from 'react';
import Image from 'next/image';
import Styles from "../quotes/quotessection.module.css";

export default function QuotesSection() {
  return (
    <section className={Styles.section}>
        <div className={Styles.quotes}>
            <div className={Styles.quotesText}>
                <h1>Everything is emotion, to have someone else feel the same as I do is a tiny miracle.</h1>
            </div>
            <div className={Styles.quotesImage}>
                <Image
                    src="/assets/images/quotes-image.png"
                    alt="Quotes"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </section>
  );
}
