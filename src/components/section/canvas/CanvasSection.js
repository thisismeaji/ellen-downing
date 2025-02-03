import React from 'react';
import Styles from "../canvas/canvassection.module.css";
import Image from 'next/image';

export default function CanvasSection() {
  return (
    <section className={Styles.section} id="about">
      <div className={Styles.canvas}>
            <div className={Styles.canvasText}>
                <div>
                    <h1>My Canvas</h1>
                </div>
                <div>
                    <h2>I specialize in oil on canvas and abstract concepts.</h2>
                    <p>While I've been trained in different mediums, I found a deep connection to traditional paintings. I love how it communicates so much of the creator to the audience. Ironically, the communication feels easier in the abstract.</p>
                </div>
            </div>
            <div className={Styles.canvasImage}>
                <Image
                    src="/assets/images/canvas-image.png"
                    width={1000}
                    height={1000}
                    alt='Canvas Image'
                />
            </div>
      </div>
    </section>
  )
}
