import React from "react";
import styles from './HeroSection.module.css';


export default function HeroSection() {
    return(

    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>Willow & Wild</h1>
      <p className={styles.heroDescription}>Artisan Goods from the Heart of Southern Ireland</p>
      <button className={styles.heroButton}>Explore Our Collection</button>
    </section>
  );
}
