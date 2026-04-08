import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const ADMIN_PASSWORD = "wtrdrop2026";
const AUTH_KEY = "wtrdrop_admin_auth";

export function isAdminAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "true";
}

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a small delay for UX feel
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem(AUTH_KEY, "true");
        navigate("/wtr-dashboard-v88");
      } else {
        setError("Incorrect password");
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <img src="/clogo.png" alt="WtrDrop" style={{ width: 60, height: 60, objectFit: "contain" }} />
        </div>
        <h1 className="admin-login-title">Admin Panel</h1>
        <p className="admin-login-subtitle">Enter your password to continue</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Password"
              className={`admin-input ${error ? "admin-input-error" : ""}`}
              autoFocus
            />
          </div>

          {error && <div className="admin-error-msg">{error}</div>}

          <button
            type="submit"
            className={`admin-login-btn ${isLoading ? "admin-btn-loading" : ""}`}
            disabled={isLoading || !password}
          >
            {isLoading ? (
              <span className="admin-spinner"></span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <a href="/" className="admin-back-link">← Back to Website</a>
      </div>
    </div>
  );
}
