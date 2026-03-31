import { useNavigate } from "react-router-dom";
import { useGetContacts } from "@workspace/api-client-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import type { ContactResponse } from "@workspace/api-client-react";

const READ_KEY = "moose_read_leads";

function getReadSet(): Set<number> {
  try {
    const raw = localStorage.getItem(READ_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as number[]);
  } catch {
    return new Set();
  }
}

function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function LeadCard({
  contact,
  isNew,
  onClick,
}: {
  contact: ContactResponse;
  isNew: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        background: "none",
        border: "none",
        padding: "12px 16px",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "inherit",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          background: "linear-gradient(135deg, #5E5CE6, #007AFF)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        {contact.name.charAt(0).toUpperCase()}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
          <span style={{ fontSize: 17, fontWeight: isNew ? 700 : 400, color: "#000", letterSpacing: -0.2 }}>
            {contact.name}
          </span>
          <span style={{ fontSize: 13, color: "#8E8E93", flexShrink: 0, marginLeft: 8 }}>
            {formatTimeAgo(contact.submittedAt)}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {isNew && (
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: 4,
                background: "#007AFF",
                flexShrink: 0,
              }}
            />
          )}
          <p
            style={{
              fontSize: 15,
              color: "#8E8E93",
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            {contact.subject || contact.message}
          </p>
        </div>
      </div>
      <span style={{ color: "#C6C6C8", fontSize: 20, flexShrink: 0 }}>›</span>
    </button>
  );
}

export default function DashboardLeads() {
  const navigate = useNavigate();
  const readSet = getReadSet();

  const { data: contacts, isLoading, isError, refetch } = useGetContacts();

  function handleCardClick(id: number) {
    const readSet = getReadSet();
    readSet.add(id);
    localStorage.setItem(READ_KEY, JSON.stringify([...readSet]));
    navigate(`/dashboard/${id}`);
  }

  return (
    <DashboardLayout title="Inbox">
      <div style={{ paddingTop: 8 }}>
        {isLoading && (
          <div style={{ padding: "40px 16px", textAlign: "center", color: "#8E8E93", fontSize: 15 }}>
            Loading…
          </div>
        )}
        {isError && (
          <div style={{ padding: "40px 16px", textAlign: "center" }}>
            <p style={{ color: "#FF3B30", fontSize: 15 }}>Failed to load contacts</p>
            <button
              onClick={() => refetch()}
              style={{ marginTop: 12, color: "#007AFF", background: "none", border: "none", fontSize: 15, cursor: "pointer" }}
            >
              Try again
            </button>
          </div>
        )}
        {!isLoading && !isError && contacts && contacts.length === 0 && (
          <div style={{ padding: "80px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
            <p style={{ fontSize: 17, fontWeight: 600, color: "#000", margin: "0 0 8px" }}>No messages yet</p>
            <p style={{ fontSize: 15, color: "#8E8E93" }}>When someone fills out the contact form, it'll appear here.</p>
          </div>
        )}
        {!isLoading && !isError && contacts && contacts.length > 0 && (
          <div
            style={{
              margin: "0 16px 24px",
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {contacts.map((contact, idx) => (
              <div key={contact.id}>
                {idx > 0 && (
                  <div style={{ height: "0.5px", background: "#C6C6C8", marginLeft: 72 }} />
                )}
                <LeadCard
                  contact={contact}
                  isNew={!readSet.has(contact.id)}
                  onClick={() => handleCardClick(contact.id)}
                />
              </div>
            ))}
          </div>
        )}
        {!isLoading && !isError && contacts && (
          <p style={{ textAlign: "center", fontSize: 13, color: "#8E8E93", paddingBottom: 32 }}>
            {contacts.length} {contacts.length === 1 ? "message" : "messages"}
          </p>
        )}
      </div>
    </DashboardLayout>
  );
}
