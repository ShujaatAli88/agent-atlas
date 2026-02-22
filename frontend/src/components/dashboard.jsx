import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./dashboard.css"; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users/sites")
      .then((res) => res.json())
      .then((data) => setSites(data))
      .catch((err) => console.error("Error fetching sites:", err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="dashboard-root">
      {/* TOP NAVIGATION BAR */}
      <nav className="top-nav">
        <div className="nav-logo">
          <img src="/data_mania.png" alt="Logo" style={{ width: "55px",borderRadius:"12px" }} />
          <h2 style={{ fontSize: '20px', fontWeight: '800' }}>
            {/* Data<span className="accent-text">MANIA</span> */}
          </h2>
        </div>
        
        <div className="nav-actions">
          <button className="action-btn" onClick={() => console.log('Settings')}>
            <span>⚙️</span>
            <span>Settings</span>
          </button>
          <button className="action-btn logout-btn" onClick={handleLogout}>
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </nav>

      {/* CENTERED CONTENT AREA */}
      <main className="dashboard-container">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-section">
            <h1>Real Estate <span className="accent-text">Databases</span></h1>
            <p style={{ color: "var(--text-dim)", fontSize: "16px" }}>
              Explore {sites.length} verified premium data sources.
            </p>
          </div>

          <div className="site-grid">
            {sites.map((site, index) => (
              <motion.div 
                key={site._id} 
                className="site-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => window.open(site.url, "_blank")}
              >
                <div className="site-logo-container">
                  {site.icon && site.icon.startsWith("data:image") ? (
                    <img src={site.icon} alt={site.name} className="site-logo-img" />
                  ) : (
                    <span style={{ fontSize: "32px" }}>{site.icon || "🌐"}</span>
                  )}
                </div>
                <h3>{site.name}</h3>
                <p>{site.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;