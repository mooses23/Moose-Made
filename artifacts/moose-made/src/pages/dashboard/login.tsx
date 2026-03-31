import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function DashboardLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${BASE}/api/dashboard/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        setError("Invalid username or password.");
        return;
      }
      const data = await res.json() as { token: string };
      login(data.token);
      navigate("/dashboard", { replace: true });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F2F2F7",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 360 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #1C1C1E 0%, #3A3A3C 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            }}
          >
            <span style={{ fontSize: 32 }}>🫎</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "#000", margin: 0, letterSpacing: -0.5 }}>
            Moose Made
          </h1>
          <p style={{ fontSize: 15, color: "#8E8E93", marginTop: 6 }}>Owner Dashboard</p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ padding: "0 16px" }}>
            <div style={{ borderBottom: "0.5px solid #C6C6C8" }}>
              <input
                type="text"
                autoComplete="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: 17,
                  padding: "14px 0",
                  background: "transparent",
                  color: "#000",
                }}
              />
            </div>
            <div>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: 17,
                  padding: "14px 0",
                  background: "transparent",
                  color: "#000",
                }}
              />
            </div>
          </div>

          {error && (
            <div
              style={{
                padding: "10px 16px",
                background: "#FFE5E5",
                borderTop: "0.5px solid #C6C6C8",
                color: "#FF3B30",
                fontSize: 14,
              }}
            >
              {error}
            </div>
          )}

          <div style={{ padding: "12px 16px 16px" }}>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background: loading ? "#C7C7CC" : "#007AFF",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "14px",
                fontSize: 17,
                fontWeight: 600,
                cursor: loading ? "not-allowed" : "pointer",
                letterSpacing: -0.2,
                fontFamily: "inherit",
                transition: "background 0.15s",
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
