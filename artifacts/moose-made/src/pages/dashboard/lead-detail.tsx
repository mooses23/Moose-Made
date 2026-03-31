import { useParams, useNavigate } from "react-router-dom";
import { useGetContacts } from "@workspace/api-client-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

function ActionButton({ icon, label, href, color }: ActionButtonProps) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        textDecoration: "none",
        flex: 1,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 16,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: `0 2px 8px ${color}66`,
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: 12, color: "#3C3C43", fontWeight: 400, letterSpacing: -0.1 }}>
        {label}
      </span>
    </a>
  );
}

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: contacts, isLoading } = useGetContacts();
  const contact = contacts?.find((c) => c.id === Number(id));

  return (
    <DashboardLayout
      title="Message"
      showBack
      onBack={() => navigate("/dashboard")}
    >
      {isLoading && (
        <div style={{ padding: "40px 16px", textAlign: "center", color: "#8E8E93", fontSize: 15 }}>
          Loading…
        </div>
      )}
      {!isLoading && !contact && (
        <div style={{ padding: "40px 16px", textAlign: "center" }}>
          <p style={{ color: "#FF3B30", fontSize: 15 }}>Message not found.</p>
        </div>
      )}
      {contact && (
        <div style={{ padding: "16px 16px 40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                background: "linear-gradient(135deg, #5E5CE6, #007AFF)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              {contact.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#000", letterSpacing: -0.5 }}>
                {contact.name}
              </h2>
              <p style={{ margin: "4px 0 0", fontSize: 15, color: "#8E8E93" }}>{contact.email}</p>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "16px",
              marginBottom: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ActionButton
              href={`mailto:${contact.email}`}
              label="Email"
              color="#007AFF"
              icon={<Mail size={22} />}
            />
            <ActionButton
              href={`tel:${contact.email}`}
              label="Call"
              color="#34C759"
              icon={<Phone size={22} />}
            />
            <ActionButton
              href={`https://wa.me/?text=Hi+${encodeURIComponent(contact.name)},`}
              label="WhatsApp"
              color="#25D366"
              icon={<MessageCircle size={22} />}
            />
          </div>

          {contact.subject && (
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "14px 16px",
                marginBottom: 12,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <p style={{ margin: "0 0 4px", fontSize: 12, color: "#8E8E93", textTransform: "uppercase", letterSpacing: 0.5 }}>
                Subject
              </p>
              <p style={{ margin: 0, fontSize: 17, color: "#000", fontWeight: 500 }}>
                {contact.subject}
              </p>
            </div>
          )}

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "14px 16px",
              marginBottom: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ margin: "0 0 8px", fontSize: 12, color: "#8E8E93", textTransform: "uppercase", letterSpacing: 0.5 }}>
              Message
            </p>
            <p style={{ margin: 0, fontSize: 17, color: "#1C1C1E", lineHeight: 1.5 }}>
              {contact.message}
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "14px 16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Clock size={16} style={{ color: "#8E8E93", flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: 15, color: "#8E8E93" }}>
              {formatDate(contact.submittedAt)}
            </p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
