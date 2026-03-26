"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* === HERO === */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Build Faster with Acme</h1>
        <p className={styles.heroSubtitle}>The all-in-one platform for modern teams.</p>
        <button className={styles.ctaButton}>Get Started Free</button>
      </section>

      {/* === FEATURES === */}
      <section className={styles.featuresSection}>
        <h2>Why Teams Love Acme</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Real-Time Analytics</h3>
            <p>Track your key metrics in real-time with customizable dashboards and instant alerts.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Automated Workflows</h3>
            <p>Set up complex automation pipelines with our drag-and-drop builder. No coding required.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Team Collaboration</h3>
            <p>Built-in messaging, file sharing, and task assignment. Keep your team aligned.</p>
          </div>
        </div>
      </section>

      {/* === CONTACT FORM === */}
      <section className={styles.formSection}>
        <h2>Get in Touch</h2>
        <form
          className={styles.contactForm}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formInput}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          {submitted && (
            <p className={styles.successMessage}>Thanks! We&apos;ll be in touch.</p>
          )}
        </form>
      </section>

      {/* === BOTTOM CTA === */}
      <section className={styles.ctaSection}>
        <h2>Ready to get started?</h2>
        <p>Join 10,000+ teams already using Acme.</p>
        <button className={styles.ctaButton}>Start Free Trial</button>
      </section>
    </>
  );
}
