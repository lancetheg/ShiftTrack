import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AttendanceHistory from "../pages/AttendanceHistory";
import AdminDashboard from "../pages/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/history"
        element={<AttendanceHistory />}
      />

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

    </Routes>
  );
}