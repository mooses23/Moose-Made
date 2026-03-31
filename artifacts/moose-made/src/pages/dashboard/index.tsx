import { useNavigate } from "react-router-dom";
import { useGetContacts, useGetQuotes } from "@workspace/api-client-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import type { ContactResponse, QuoteResponse } from "@workspace/api-client-react";

const READ_KEY = "moose_read_leads";

type LeadItem =
  | { kind: "contact"; id: string; name: string; preview: string; submittedAt: string; data: ContactResponse }
  | { kind: "quote"; id: string; name: string; preview: string; submittedAt: string; data: QuoteResponse };

function getReadSet(): Set<string> {
  try {
    const raw = localStorage.getItem(READ_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
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
  lead,
  isNew,
  onClick,
}: {
  lead: LeadItem;
  isNew: boolean;
  onClick: () => void;
}) {
  const badgeColor = lead.kind === "quote" ? "#FF9500" : "#007AFF";
  const badgeLabel = lead.kind === "quote" ? "Quote" : "Message";

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
          background: lead.kind === "quote"
            ? "linear-gradient(135deg, #FF9500, #FF6B00)"
            : "linear-gradient(135deg, #5E5CE6, #007AFF)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        {lead.name.charAt(0).toUpperCase()}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 17, fontWeight: isNew ? 700 : 400, color: "#000", letterSpacing: -0.2 }}>
              {lead.name}
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: badgeColor,
                background: `${badgeColor}18`,
                borderRadius: 4,
                padding: "1px 5px",
                letterSpacing: 0.2,
              }}
            >
              {badgeLabel}
            </span>
          </div>
          <span style={{ fontSize: 13, color: "#8E8E93", flexShrink: 0, marginLeft: 8 }}>
            {formatTimeAgo(lead.submittedAt)}
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
                background: badgeColor,
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
            {lead.preview}
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

  const { data: contacts, isLoading: contactsLoading, isError: contactsError, refetch: refetchContacts } = useGetContacts();
  const { data: quotes, isLoading: quotesLoading, isError: quotesError, refetch: refetchQuotes } = useGetQuotes();

  const isLoading = contactsLoading || quotesLoading;
  const isError = contactsError || quotesError;

  const leads: LeadItem[] = [
    ...(contacts ?? []).map((c): LeadItem => ({
      kind: "contact",
      id: `c-${c.id}`,
      name: c.name,
      preview: c.subject || c.message,
      submittedAt: c.submittedAt,
      data: c,
    })),
    ...(quotes ?? []).map((q): LeadItem => ({
      kind: "quote",
      id: `q-${q.id}`,
      name: `${q.firstName} ${q.lastName}`,
      preview: `${q.productCategory} — ${q.packagingType}`,
      submittedAt: q.submittedAt,
      data: q,
    })),
  ].sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

  function handleCardClick(leadId: string) {
    const readSet = getReadSet();
    readSet.add(leadId);
    localStorage.setItem(READ_KEY, JSON.stringify([...readSet]));
    navigate(`/dashboard/${leadId}`);
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
            <p style={{ color: "#FF3B30", fontSize: 15 }}>Failed to load inbox</p>
            <button
              onClick={() => { void refetchContacts(); void refetchQuotes(); }}
              style={{ marginTop: 12, color: "#007AFF", background: "none", border: "none", fontSize: 15, cursor: "pointer" }}
            >
              Try again
            </button>
          </div>
        )}
        {!isLoading && !isError && leads.length === 0 && (
          <div style={{ padding: "80px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📭</div>
            <p style={{ fontSize: 17, fontWeight: 600, color: "#000", margin: "0 0 8px" }}>No messages yet</p>
            <p style={{ fontSize: 15, color: "#8E8E93" }}>When someone fills out the contact or quote form, it'll appear here.</p>
          </div>
        )}
        {!isLoading && !isError && leads.length > 0 && (
          <div
            style={{
              margin: "0 16px 24px",
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {leads.map((lead, idx) => (
              <div key={lead.id}>
                {idx > 0 && (
                  <div style={{ height: "0.5px", background: "#C6C6C8", marginLeft: 72 }} />
                )}
                <LeadCard
                  lead={lead}
                  isNew={!readSet.has(lead.id)}
                  onClick={() => handleCardClick(lead.id)}
                />
              </div>
            ))}
          </div>
        )}
        {!isLoading && !isError && (
          <p style={{ textAlign: "center", fontSize: 13, color: "#8E8E93", paddingBottom: 32 }}>
            {leads.length} {leads.length === 1 ? "message" : "messages"}
          </p>
        )}
      </div>
    </DashboardLayout>
  );
}
