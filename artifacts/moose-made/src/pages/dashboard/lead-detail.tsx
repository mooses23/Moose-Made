import { useParams, useNavigate } from "react-router-dom";
import { useGetContacts, useGetQuotes } from "@workspace/api-client-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import type { ContactResponse, QuoteResponse } from "@workspace/api-client-react";

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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
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
        {label}
      </p>
      <p style={{ margin: 0, fontSize: 17, color: "#000", fontWeight: 500 }}>
        {value}
      </p>
    </div>
  );
}

function ContactDetail({ contact }: { contact: ContactResponse }) {
  return (
    <>
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
        <ActionButton href={`mailto:${contact.email}`} label="Email" color="#007AFF" icon={<Mail size={22} />} />
        <ActionButton href={`https://wa.me/?text=Hi+${encodeURIComponent(contact.name)},`} label="WhatsApp" color="#25D366" icon={<MessageCircle size={22} />} />
      </div>

      {contact.subject && <InfoRow label="Subject" value={contact.subject} />}

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
    </>
  );
}

function QuoteDetail({ quote }: { quote: QuoteResponse }) {
  const fullName = `${quote.firstName} ${quote.lastName}`;
  return (
    <>
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
        <ActionButton href={`mailto:${quote.email}`} label="Email" color="#007AFF" icon={<Mail size={22} />} />
        {quote.phone && (
          <ActionButton href={`tel:${quote.phone}`} label="Call" color="#34C759" icon={<Phone size={22} />} />
        )}
        <ActionButton href={`https://wa.me/${quote.phone ? quote.phone.replace(/\D/g, "") : ""}?text=Hi+${encodeURIComponent(fullName)},`} label="WhatsApp" color="#25D366" icon={<MessageCircle size={22} />} />
      </div>

      <InfoRow label="Product Category" value={quote.productCategory} />
      <InfoRow label="Packaging Type" value={quote.packagingType} />
      <InfoRow label="Quantity" value={quote.quantity} />
      {quote.company && <InfoRow label="Company" value={quote.company} />}
      {quote.budgetRange && <InfoRow label="Budget Range" value={quote.budgetRange} />}
      {quote.launchTimeline && <InfoRow label="Launch Timeline" value={quote.launchTimeline} />}
      {quote.dimensions && <InfoRow label="Dimensions" value={quote.dimensions} />}
      {quote.weight && <InfoRow label="Weight" value={quote.weight} />}
      {quote.materialPreferences && <InfoRow label="Material Preferences" value={quote.materialPreferences} />}
      {quote.structuralFeatures && <InfoRow label="Structural Features" value={quote.structuralFeatures} />}
      {quote.projectDescription && (
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
            Project Description
          </p>
          <p style={{ margin: 0, fontSize: 17, color: "#1C1C1E", lineHeight: 1.5 }}>
            {quote.projectDescription}
          </p>
        </div>
      )}
    </>
  );
}

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const isQuote = id?.startsWith("q-");
  const isContact = id?.startsWith("c-");
  const numericId = id ? Number(id.slice(2)) : NaN;

  const { data: contacts, isLoading: contactsLoading } = useGetContacts();
  const { data: quotes, isLoading: quotesLoading } = useGetQuotes();

  const isLoading = contactsLoading || quotesLoading;

  const contact = isContact ? contacts?.find((c) => c.id === numericId) : undefined;
  const quote = isQuote ? quotes?.find((q) => q.id === numericId) : undefined;

  const found = contact ?? quote;
  const name = contact ? contact.name : quote ? `${quote.firstName} ${quote.lastName}` : "";
  const email = found?.email ?? "";
  const kind = isQuote ? "Quote" : "Message";
  const kindColor = isQuote ? "#FF9500" : "#007AFF";
  const gradientStyle = isQuote
    ? "linear-gradient(135deg, #FF9500, #FF6B00)"
    : "linear-gradient(135deg, #5E5CE6, #007AFF)";

  return (
    <DashboardLayout
      title={kind}
      showBack
      onBack={() => navigate("/dashboard")}
    >
      {isLoading && (
        <div style={{ padding: "40px 16px", textAlign: "center", color: "#8E8E93", fontSize: 15 }}>
          Loading…
        </div>
      )}
      {!isLoading && !found && (
        <div style={{ padding: "40px 16px", textAlign: "center" }}>
          <p style={{ color: "#FF3B30", fontSize: 15 }}>Entry not found.</p>
        </div>
      )}
      {found && (
        <div style={{ padding: "16px 16px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                background: gradientStyle,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#000", letterSpacing: -0.5 }}>
                  {name}
                </h2>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: kindColor,
                    background: `${kindColor}18`,
                    borderRadius: 4,
                    padding: "2px 6px",
                  }}
                >
                  {kind}
                </span>
              </div>
              <p style={{ margin: "4px 0 0", fontSize: 15, color: "#8E8E93" }}>{email}</p>
            </div>
          </div>

          {contact && <ContactDetail contact={contact} />}
          {quote && <QuoteDetail quote={quote} />}

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
              {formatDate(found.submittedAt)}
            </p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
