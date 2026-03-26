"use client";

import { useState } from "react";
import styles from "./page.module.css";

const metrics = [
  { label: "Total Users", value: "12,847", change: "+12.5%", up: true },
  { label: "Revenue", value: "$48,295", change: "+8.2%", up: true },
  { label: "Churn Rate", value: "3.1%", change: "+0.4%", up: false },
  { label: "Active Sessions", value: "1,429", change: "-2.1%", up: false },
];

const tableData = [
  { name: "Alice Johnson", email: "alice@example.com", plan: "Pro", status: "Active", spent: "$2,450" },
  { name: "Bob Smith", email: "bob@example.com", plan: "Starter", status: "Active", spent: "$680" },
  { name: "Carol Williams", email: "carol@example.com", plan: "Enterprise", status: "Pending", spent: "$12,800" },
  { name: "Dave Brown", email: "dave@example.com", plan: "Pro", status: "Inactive", spent: "$1,200" },
  { name: "Eve Davis", email: "eve@example.com", plan: "Starter", status: "Active", spent: "$340" },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* === HERO === */}
      <section className={styles.hero}>
        <h1>Build Faster with Acme</h1>
        <p className={styles.heroSubtitle}>The all-in-one platform for modern teams.</p>
        <button className={styles.ctaButton}>Get Started Free</button>
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

      {/* === DASHBOARD === */}
      <section className={styles.dashboard}>
        <h2>Dashboard</h2>

        {/* METRIC CARDS */}
        <div className={styles.metricsGrid}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.metricCard}>
              <h3>{metric.label}</h3>
              <div className={styles.metricValue}>{metric.value}</div>
              <div
                className={`${styles.metricChange} ${
                  metric.up ? styles.metricChangeUp : styles.metricChangeDown
                }`}
              >
                {metric.change} vs last month
              </div>
            </div>
          ))}
        </div>

        {/* DATA TABLE */}
        <div className={styles.tableWrapper}>
          <div className={styles.tableHeader}>
            <h3>Recent Users</h3>
            <button className={styles.exportButton}>Export CSV</button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Total Spent</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.email}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.plan}</td>
                  <td>
                    <span
                      className={`${styles.statusBadge} ${
                        row.status === "Active"
                          ? styles.statusActive
                          : row.status === "Pending"
                          ? styles.statusPending
                          : styles.statusInactive
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td>{row.spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
