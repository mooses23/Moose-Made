import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export default function DashboardLayout({
  children,
  title = "Inbox",
  showBack = false,
  onBack,
}: DashboardLayoutProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/dashboard/login");
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#F2F2F7", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif" }}
    >
      <header
        style={{
          background: "rgba(242,242,247,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "0.5px solid rgba(60,60,67,0.18)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="flex items-center justify-between px-4" style={{ height: 52 }}>
          <div style={{ width: 56 }}>
            {showBack && (
              <button
                onClick={onBack}
                style={{ color: "#007AFF", fontSize: 17, background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                ‹ Back
              </button>
            )}
          </div>
          <h1 style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.4, color: "#000" }}>
            {title}
          </h1>
          <div style={{ width: 56, display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={handleLogout}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#8E8E93", padding: 4 }}
              title="Log out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
