import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Registration = () => {
  const navigate = useNavigate();

  // 1. State to hold user input
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: ''
  });

  // State for showing Success or Error messages
  const [status, setStatus] = useState({ message: '', isError: false });

  // 2. Function to update state when typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. The API Call Logic
  const handleRegister = async (e) => {
    e.preventDefault(); // Stop page refresh
    setStatus({ message: 'Creating account...', isError: false });

    try {
      const response = await fetch('http://127.0.0.1:8000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ message: 'Success! Redirecting to login...', isError: false });
        // Wait 2 seconds so user can see the success message, then navigate
        setTimeout(() => navigate('/login'), 2000);
      } else {
        // Show error from FastAPI (like "Email already registered")
        setStatus({ message: data.detail || 'Registration failed', isError: true });
      }
    } catch (error) {
      setStatus({ message: 'Server is offline. Start your FastAPI server!', isError: true });
    }
  };

  const styles = {
    container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif' },
    card: { position: 'relative', zIndex: 10, width: '100%', maxWidth: '400px', padding: '40px', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(20px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' },
    input: { width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '14px', color: 'white', marginBottom: '16px', outline: 'none', boxSizing: 'border-box' },
    button: { width: '100%', padding: '14px', background: 'linear-gradient(to right, #7c3aed, #db2777)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }
  };

  return (
    <div style={styles.container}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', backgroundColor: 'rgba(124, 58, 237, 0.2)', borderRadius: '50%', filter: 'blur(100px)' }} />
      
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={styles.card}>
        <img src="/data_mania.png" alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
        <h2 style={{ color: 'white', marginBottom: '10px' }}>Join DataMANIA</h2>
        
        {/* Status Message */}
        {status.message && (
          <p style={{ color: status.isError ? '#ff4d4d' : '#4ade80', fontSize: '14px', marginBottom: '15px' }}>
            {status.message}
          </p>
        )}

        <form onSubmit={handleRegister}>
          <input 
            name="full_name"
            style={styles.input} 
            type="text" 
            placeholder="👤 Full Name" 
            onChange={handleChange}
            required 
          />
          <input 
            name="email"
            style={styles.input} 
            type="email" 
            placeholder="📧 Email Address" 
            onChange={handleChange}
            required 
          />
          <input 
            name="password"
            style={styles.input} 
            type="password" 
            placeholder="🔒 Password" 
            onChange={handleChange}
            required 
          />
          <button style={styles.button} type="submit">Create Account →</button>
        </form>

        <p style={{ color: '#94a3b8', marginTop: '20px', fontSize: '14px' }}>
          Already have an account? <span onClick={() => navigate('/login')} style={{ color: '#60a5fa', cursor: 'pointer' }}>Login here</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Registration;