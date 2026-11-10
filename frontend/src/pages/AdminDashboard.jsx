import "../css/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-page">

      <nav className="admin-navbar">
        <h1>ShiftTrack Admin Portal</h1>
      </nav>

      <div className="admin-container">

        <h2 className="admin-title">
          Admin Dashboard
        </h2>

        <div className="stats-grid">

          <div className="stat-card workers">
            <h3>Total Workers</h3>
            <p>50</p>
          </div>

          <div className="stat-card present">
            <h3>Present Today</h3>
            <p>45</p>
          </div>

          <div className="stat-card late">
            <h3>Late Arrivals</h3>
            <p>3</p>
          </div>

          <div className="stat-card shifts">
            <h3>Open Shifts</h3>
            <p>2</p>
          </div>

        </div>

        <div className="activity-card">

          <h3>Recent Activity</h3>

          <ul>
            <li>✅ John Doe clocked in at 08:00 AM</li>
            <li>✅ Mary Wanjiku clocked in at 08:02 AM</li>
            <li>⚠ Peter Otieno reported late</li>
            <li>✅ Emily Njeri completed shift</li>
          </ul>

        </div>

      </div>

    </div>
  );
}