// src/components/HomePage.js
import React from 'react';
import '../styles/home.css';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <h1>सरकार से घर तक</h1>
          <p>Empowering every citizen with the knowledge and access they deserve.</p>
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
        <div className="login-box">
          <h3>Secure Login</h3>
          <input type="text" placeholder="Mobile Number / User ID" />
          <input type="password" placeholder="PIN" />
          <button>Login</button>
          <a href="#">Forgot PIN?</a>
          <a href="#">Sign Up</a>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h4>📱 Micro Loans in Minutes</h4>
          <p>Apply with just your Aadhaar</p>
        </div>
        <div className="feature">
          <h4>📴 No Smartphone? No Problem</h4>
          <p>USSD-based Banking for All</p>
        </div>
        <div className="feature">
          <h4>🏪 Village ATM Agents</h4>
          <p>Withdraw cash from your kirana store</p>
        </div>
      </section>
    </>
  );
}
