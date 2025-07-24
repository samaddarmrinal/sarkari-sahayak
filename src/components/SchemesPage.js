// src/components/SchemesPage.js
import React, { useEffect, useState, useRef } from 'react';
import '../styles/schemes.css';

export default function SchemesPage() {
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [status, setStatus] = useState('');
  const schemeCards = useRef([]);
  const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0);
  const synth = window.speechSynthesis;

  const schemes = [
    { title: 'PM Kisan Samman Nidhi', description: '₹6000/year income support for farmers.' },
    { title: 'Jan Dhan Yojana', description: 'Zero balance account with insurance and DBT.' },
    { title: 'Ujjwala Yojana', description: 'Free LPG for BPL women.' },
    { title: 'Ayushman Bharat', description: 'Health coverage up to ₹5 lakh for poor families.' },
  ];

  const speak = (text) => {
    if (!voiceEnabled) return;
    if (synth.speaking) synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'hi-IN';
    synth.speak(utter);
  };

  const handleVoiceCommand = (cmd) => {
    cmd = cmd.toLowerCase();
    if (cmd.includes('profile')) {
      speak('Name: Sita Devi, Aadhaar: XXXX-1234, Mobile: 9876543210, Location: Bihar');
    } else if (cmd.includes('scheme')) {
      setCurrentSchemeIndex(0);
      speak(`${schemes[0].title}. ${schemes[0].description}`);
    } else if (cmd.includes('next')) {
      setCurrentSchemeIndex((prev) => {
        const next = Math.min(schemes.length - 1, prev + 1);
        speak(`${schemes[next].title}. ${schemes[next].description}`);
        return next;
      });
    } else {
      speak('Command not recognized. Try saying profile, schemes, or next.');
    }
  };

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    recognition.onstart = () => setStatus('Listening...');
    recognition.onerror = (e) => setStatus(`Error: ${e.error}`);
    recognition.onend = () => setStatus('Done');
    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      handleVoiceCommand(command);
    };
    recognition.start();
  };

  return (
    <div className="container">
      <div className="profile-card">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> Sita Devi</p>
        <p><strong>Aadhaar:</strong> XXXX-XXXX-1234</p>
        <p><strong>Mobile:</strong> +91-9876543210</p>
        <p><strong>Location:</strong> Bihar</p>
        <p><strong>Eligibility Status:</strong> Eligible for 5 schemes</p>
      </div>

      <div>
        <div className="voice-controls">
          <button onClick={() => {
            setVoiceEnabled((v) => {
              const newVal = !v;
              if (newVal) speak('Voice guidance enabled');
              return newVal;
            });
          }}>
            🔈 Voice Guidance
          </button>
          <button onClick={startListening}>🎤 Speak</button>
        </div>
        <div className="voice-status">{status}</div>
        <div className="schemes">
          <h2>Available Government Schemes</h2>
          {schemes.map((s, i) => (
            <div
              className="scheme-card"
              key={i}
              ref={(el) => schemeCards.current[i] = el}
              tabIndex={0}
              onClick={() => speak(`${s.title}. ${s.description}`)}
            >
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
