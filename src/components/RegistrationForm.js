// src/components/RegistrationForm.js
import React from 'react';
import '../styles/registration.css';

export default function RegistrationForm() {
  const fields = [
    { id: 'name', prompt: 'Please say your full name' },
    { id: 'aadhaar', prompt: 'Please say your twelve digit Aadhaar number' },
    { id: 'mobile', prompt: 'Say your ten digit mobile number' },
    { id: 'occupation', prompt: 'What is your occupation?' },
    { id: 'income', prompt: 'Say your family’s monthly income in rupees' },
    { id: 'disability', prompt: 'Do you have any disability? Say yes or no' },
    { id: 'gender', prompt: 'Are you male, female or other?' },
    { id: 'marital', prompt: 'Say your marital status' },
    { id: 'kids', prompt: 'How many children do you have?' },
    { id: 'kidsGender', prompt: 'Say the gender of your children' },
  ];

  const startVoiceForm = async () => {
    const synth = window.speechSynthesis;
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;

    const speak = (text) => {
      return new Promise((resolve) => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-IN';
        utter.onend = resolve;
        synth.speak(utter);
      });
    };

    const listen = () => {
      return new Promise((resolve, reject) => {
        recognition.start();
        recognition.onresult = (e) => {
          recognition.stop();
          resolve(e.results[0][0].transcript);
        };
        recognition.onerror = (e) => {
          recognition.stop();
          reject(e.error);
        };
      });
    };

    for (let field of fields) {
      await speak(field.prompt);
      try {
        const result = await listen();
        document.getElementById(field.id).value = result;
      } catch (err) {
        console.error('Voice input failed:', err);
      }
    }
    alert('✅ Form completed!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧾 Voice Guided Registration</h2>
      <form id="voiceForm">
        {fields.map((f) => (
          <div key={f.id}>
            <label>{f.prompt}</label>
            <input type="text" id={f.id} />
          </div>
        ))}
        <button type="button" onClick={startVoiceForm}>🎤 Start Voice Input</button>
      </form>
    </div>
  );
}
