import React, { useState } from 'react';
import VoiceInput from '../components/VoiceInput';
import ChatBot from '../components/ChatBot';

function Home() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <h2>Welcome to Sarkari Sahayak</h2>
      <VoiceInput onTranscript={setQuery} />
      {query && <ChatBot input={query} />}
    </div>
  );
}

export default Home;
