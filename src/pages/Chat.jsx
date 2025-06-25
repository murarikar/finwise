import { useState } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = {
      sender: "bot",
      text: `🤖 I'm your AI financial coach. You asked: "${input}" — here's a helpful answer! 💡`,
    };

    setChat([...chat, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>AI Financial Coach 💬</h2>
      <div style={{ marginBottom: "1rem" }}>
        {chat.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: "0.5rem" }}>
            <strong>{msg.sender === "user" ? "You" : "FinWise"}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>
      <input
        style={{ padding: "0.5rem", width: "70%" }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a money or finance question..."
      />
      <button
        style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
