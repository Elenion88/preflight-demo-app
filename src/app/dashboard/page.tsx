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
  { name: "Frank Miller", email: "frank@example.com", plan: "Pro", status: "Active", spent: "$3,100" },
];

export default function DashboardPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <h1>Dashboard</h1>
        <div className={styles.headerActions}>
          <button className={styles.addButton}>Add User</button>
          <div className={styles.dropdownWrapper}>
            <button
              className={styles.exportButton}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Export ▾
            </button>
            {dropdownOpen && (
              <div className={styles.dropdown}>
                <button onClick={() => setDropdownOpen(false)}>Export CSV</button>
                <button onClick={() => setDropdownOpen(false)}>Export PDF</button>
                <button onClick={() => setDropdownOpen(false)}>Export Excel</button>
              </div>
            )}
          </div>
        </div>
      </div>

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
          <h2>Recent Users</h2>
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
    </div>
  );
}
