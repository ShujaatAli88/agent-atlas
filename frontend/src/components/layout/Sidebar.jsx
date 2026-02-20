function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        backgroundColor: "#0b1220",
        color: "white",
        padding: "20px",
        borderRight: "1px solid #1f2937",
        height: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Data Machine</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <span style={{ color: "#94a3b8", cursor: "pointer" }}>Dashboard</span>
        <span style={{ color: "#ffffff", fontWeight: "600" }}>
          Data Sources
        </span>
        <span style={{ color: "#94a3b8", cursor: "pointer" }}>Jobs</span>
        <span style={{ color: "#94a3b8", cursor: "pointer" }}>Agents</span>
        <span style={{ color: "#94a3b8", cursor: "pointer" }}>Analytics</span>
      </div>
    </div>
  );
}

export default Sidebar;