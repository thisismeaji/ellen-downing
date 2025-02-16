import React from 'react';
import Link from 'next/link';
import Styles from "../button/button.module.css";

export default function Button({text, link}) {
  return (
    <Link href={link}>
        <button className={Styles.button}>
            {text}
        </button>
    </Link>
  );
}
