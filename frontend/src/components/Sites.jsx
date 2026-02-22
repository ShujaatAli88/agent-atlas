import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Sites = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users/sites")
      .then((res) => res.json())
      .then((data) => setSites(data))
      .catch((err) => console.error("Error fetching sites:", err));
  }, []);

  const styles = {
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginTop: "30px" },
    card: { background: "rgba(30, 41, 59, 0.4)", backdropFilter: "blur(15px)", padding: "30px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center", cursor: "pointer" },
    icon: { fontSize: "40px", marginBottom: "15px", display: "block" },
    siteTitle: { fontSize: "22px", fontWeight: "700", color: "white", marginBottom: "10px" },
    link: { color: "#60a5fa", textDecoration: "none", fontSize: "14px", fontWeight: "600" }
  };

  return (
    <div>
      <h1 style={{ fontSize: "32px" }}>Real Estate <span style={{ color: "#7c3aed" }}>Sources</span></h1>
      <p style={{ color: "#94a3b8" }}>Select a platform to begin your data extraction.</p>
      
      <div style={styles.grid}>
        {sites.map((site) => (
          <motion.div 
            key={site._id}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
            style={styles.card}
            onClick={() => window.open(site.url, "_blank")}
          >
            <span style={styles.icon}>{site.icon || "🌐"}</span>
            <div style={styles.siteTitle}>{site.name}</div>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>{site.description}</p>
            <span style={styles.link}>Visit Website →</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sites;