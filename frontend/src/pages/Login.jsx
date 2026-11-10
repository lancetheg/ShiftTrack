import { useNavigate } from "react-router-dom";
import "../css/Login.css"

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>ShiftTrack</h1>

        <p>
          Employee Attendance System
        </p>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </div>
  );
}