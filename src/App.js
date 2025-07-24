/*import React, { useState } from 'react';
import './App.css';
import VoiceInput from './components/VoiceInput';
import ChatBot from './components/ChatBot';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <h1>🛡️ Sarkari Sahayak</h1>
      <p>Speak your question about government schemes.</p>
      <VoiceInput onTranscript={setQuery} />
      {query && <ChatBot query={query} />}
    </div>
  );
}

export default App;*/



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import SchemesPage from './components/SchemesPage';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <header>
        <h1>Deutsche GovAssist</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/schemes">Schemes</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schemes" element={<SchemesPage />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
