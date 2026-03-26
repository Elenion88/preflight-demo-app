import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* === HERO === */}
      <section className={styles.hero}>
        <h1>Build Faster with Acme</h1>
        <p>The all-in-one platform for modern teams.</p>
        {/* BUG: Missing alt text on hero image */}
        {/* Using a div as a placeholder image — in a real app this would be an <img> */}
        <div className={styles.heroImage} role="img">
          {/* BUG: role="img" without aria-label, and no alt text */}
        </div>
        <button className={styles.ctaButton}>Get Started Free</button>
      </section>

      {/* === FEATURES GRID === */}
      <section className={styles.featuresSection}>
        <h2>Features</h2>
        {/* BUG: Grid breaks at tablet widths — cards overlap */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Real-Time Analytics Dashboard</h3>
            <p>
              Track your key metrics in real-time with customizable dashboards
              and instant alerts when thresholds are crossed.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Automated Workflow Engine</h3>
            <p>
              Set up complex automation pipelines with our drag-and-drop builder.
              No coding required for most workflows.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Team Collaboration Suite</h3>
            <p>
              Built-in messaging, file sharing, and task assignment. Keep your
              team aligned without switching apps.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Enterprise Security Controls</h3>
            <p>
              SOC2 compliant with role-based access, audit logs, SSO, and
              end-to-end encryption for all data.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>API-First Integration Layer</h3>
            <p>
              Connect with 200+ tools through our REST and GraphQL APIs.
              Webhooks for real-time event streaming.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Smart Notification Center</h3>
            <p>
              AI-powered notification routing. Get the right alerts at the right
              time through email, Slack, or SMS.
            </p>
          </div>
        </div>
      </section>

      {/* === BOTTOM CTA === */}
      <section className={styles.ctaSection}>
        <h2>Ready to get started?</h2>
        <p>Join 10,000+ teams already using Acme.</p>
        <button>Start Free Trial</button>
      </section>
    </>
  );
}
