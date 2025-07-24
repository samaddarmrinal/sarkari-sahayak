import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceInput({ onTranscript, lang='hi-IN' }) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const start = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: false, language: lang });
  };
  React.useEffect(() => {
    if (transcript) onTranscript(transcript);
  }, [transcript]);
  return (
    <div>
      <button onClick={start}>🎤 Start Speaking</button>
      <p>Heard: {transcript}</p>
    </div>
  );
}
