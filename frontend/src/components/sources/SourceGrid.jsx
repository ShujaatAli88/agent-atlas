import SourceCard from "./SourceCard";

function SourceGrid() {
  // Mock data (later comes from backend)
  const sources = [
    { id: 1, name: "Zillow", domain: "zillow.com", status: "active" },
    { id: 2, name: "Realtor", domain: "realtor.com", status: "active" },
    { id: 3, name: "KW", domain: "kw.com", status: "maintenance" },
  ];

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        Data Sources
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {sources.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>
    </div>
  );
}

export default SourceGrid;