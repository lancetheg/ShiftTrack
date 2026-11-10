import "../css/AttendanceHistory.css";

export default function AttendanceHistory() {
  const records = [
    {
      date: "03 Nov 2026",
      in: "08:00",
      out: "17:00",
      status: "Present",
    },
    {
      date: "02 Nov 2026",
      in: "08:12",
      out: "17:01",
      status: "Late",
    },
    {
      date: "01 Nov 2026",
      in: "08:03",
      out: "17:00",
      status: "Present",
    },
  ];

  return (
    <div className="history-page">

      <div className="history-container">

        <h2 className="history-title">
          Attendance History
        </h2>

        <div className="history-card">

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Clock In</th>
                <th>Clock Out</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.in}</td>
                  <td>{record.out}</td>

                  <td>
                    <span
                      className={
                        record.status === "Late"
                          ? "status-late"
                          : "status-present"
                      }
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}