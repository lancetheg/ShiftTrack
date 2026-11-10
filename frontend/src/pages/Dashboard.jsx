import { useState } from "react";
import "../css/Dashboard.css";

export default function Dashboard() {
  const [clockedIn, setClockedIn] = useState(false);

  return (
    <div className="dashboard-page">

      <nav className="dashboard-navbar">
        <h1>ShiftTrack</h1>
        <span>Worker Portal</span>
      </nav>

      <div className="dashboard-container">

        <h2 className="dashboard-title">
          Welcome Raymond
        </h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>Today's Status</h3>

            <p
              className={
                clockedIn
                  ? "status-working"
                  : "status-offline"
              }
            >
              {clockedIn
                ? "Working"
                : "Not Clocked In"}
            </p>
          </div>

          <div className="dashboard-card">
            <h3>Shift Time</h3>
            <p>08:00 - 17:00</p>
          </div>

          <div className="dashboard-card">
            <h3>Hours Worked</h3>
            <p>4.5 Hours</p>
          </div>

        </div>

        <div className="attendance-actions">

          <h3>Attendance Actions</h3>

          {!clockedIn ? (
            <button
              className="clockin-btn"
              onClick={() =>
                setClockedIn(true)
              }
            >
              Clock In
            </button>
          ) : (
            <button
              className="clockout-btn"
              onClick={() =>
                setClockedIn(false)
              }
            >
              Clock Out
            </button>
          )}

        </div>

      </div>

    </div>
  );
}