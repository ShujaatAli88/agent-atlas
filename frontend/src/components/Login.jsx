import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState("");

  const styles = {
    container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', position: 'relative', overflow: 'hidden' },
    card: { position: 'relative', zIndex: 10, width: '100%', maxWidth: '400px', padding: '40px', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' },
    input: { width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '14px', color: 'white', marginBottom: '16px', outline: 'none' },
    button: { width: '100%', padding: '14px', background: 'linear-gradient(to right, #2563eb, #7c3aed)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch('http://127.0.0.1:8000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Set the flag that ProtectedRoute looks for
        localStorage.setItem("isAuthenticated", "true");
        navigate('/dashboard'); 
      } else {
        setError(data.detail || "Login failed");
      }
    } catch (err) {
      setError("Server is offline. Start your FastAPI server!");
    }
  };

  return (
    <div style={styles.container}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={styles.card}>
        <img src="/data_mania.png" alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Nice To See You</h2>
        {error && <p style={{ color: '#ff4d4d', fontSize: '14px', marginBottom: '15px' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input name="email" style={styles.input} type="email" placeholder="📧 Email Address" onChange={handleChange} required />
          <input name="password" style={styles.input} type="password" placeholder="🔒 Password" onChange={handleChange} required />
          <button style={styles.button} type="submit">Sign In →</button>
        </form>
        <p style={{ color: '#94a3b8', marginTop: '20px', fontSize: '14px' }}>
          New here? <span onClick={() => navigate('/register')} style={{ color: '#60a5fa', cursor: 'pointer' }}>Create an account</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;