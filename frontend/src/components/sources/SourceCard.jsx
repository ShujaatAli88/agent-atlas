import React from "react";

function SourceCard({ source }) {
  const statusColor =
    source.status === "active"
      ? "#22c55e"
      : source.status === "maintenance"
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #334155",
        width: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top */}
      <div>
        <h3 style={{ margin: 0, fontSize: "18px", color: "white" }}>
          {source.name}
        </h3>

        <p style={{ margin: "6px 0", fontSize: "13px", color: "#94a3b8" }}>
          {source.domain}
        </p>

        {/* Status */}
        <div
          style={{
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            backgroundColor: statusColor,
            color: "white",
          }}
        >
          {source.status}
        </div>
      </div>

      {/* Bottom */}
      <button
        style={{
          marginTop: "20px",
          padding: "8px",
          backgroundColor: "#2563eb",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Start Scrape
      </button>
    </div>
  );
}

export default SourceCard;