import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ChatBot({ query }) {
  const [resp, setResp] = useState('');
  useEffect(() => {
    if (!query) return;
    (async () => {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            { role: 'system', content: 'You help underprivileged users with government schemes.' },
            { role: 'user', content: `Respond in simple regional language: ${query}` }
          ],
        },
        { headers: { Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` } }
      );
      setResp(res.data.choices[0].message.content);
    })();
  }, [query]);
  return <div className="chat-answer">{resp}</div>;
}
