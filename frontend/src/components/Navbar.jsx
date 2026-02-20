import React from "react";

function Navbar() {
  return (
    <div
      style={{
        height: "64px",
        backgroundColor: "#282a0f",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: "1px solid #1e293b",
      }}
    >
      {/* LEFT: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "#2563eb",
            borderRadius: "6px",
          }}
        ></div>
        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
          Data Machine
        </h2>
      </div>

      {/* CENTER: Core Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {/* New Scrape */}
        <button
          style={{
            padding: "8px 14px",
            backgroundColor: "#2563eb",
            border: "none",
            borderRadius: "6px",
            color: "white",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          + New Scrape
        </button>

        {/* Pause Workers */}
        <button
          style={{
            padding: "8px 14px",
            backgroundColor: "#b91c1c",
            border: "none",
            borderRadius: "6px",
            color: "white",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          ⏸ Pause Workers
        </button>
      </div>

      {/* RIGHT: Status + Alerts + User */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Active Jobs */}
        <span style={{ fontSize: "14px", color: "#94a3b8" }}>
          3 Jobs Running
        </span>

        {/* System Status */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#22c55e",
              borderRadius: "50%",
            }}
          ></div>
          <span style={{ fontSize: "14px", color: "#94a3b8" }}>
            Healthy
          </span>
        </div>

        {/* Notifications */}
        <div style={{ cursor: "pointer", fontSize: "18px" }}>
          🔔
        </div>

        {/* User Avatar */}
        <div
          style={{
            width: "34px",
            height: "34px",
            backgroundColor: "#334155",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          A
        </div>
      </div>
    </div>
  );
}

export default Navbar;