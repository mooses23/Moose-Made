import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { type ReactNode } from "react";

export function PrivateRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/dashboard/login" replace />;
  }
  return <>{children}</>;
}
