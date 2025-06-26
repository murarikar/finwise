import { useState } from 'react';

function FinanceChatbot() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

  const askAI = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-7b-instruct',
          messages: newMessages,
        }),
      });

      const data = await response.json();
      const aiMessage = data.choices?.[0]?.message?.content || '⚠️ Something went wrong.';
      setMessages([...newMessages, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages([...newMessages, { role: 'assistant', content: '⚠️ API error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">💬 FinWise AI Chatbot</h2>

      <div className="h-64 overflow-y-auto mb-4 border p-2 rounded bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span
              className={`inline-block px-3 py-2 rounded-xl ${
                msg.role === 'user' ? 'bg-blue-200 text-right' : 'bg-green-200'
              }`}
            >
              <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-gray-500 text-sm">AI is typing...</div>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask a financial question..."
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={askAI}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

export default FinanceChatbot;
