import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex-grow bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Chat Actual</h2>
      <div className="bg-white p-4 rounded-lg shadow-inner mb-4 overflow-y-auto max-h-80">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="mb-2 text-gray-700">
              <span className="font-semibold">Usuario {index + 1}:</span> {message}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No hay mensajes aún.</p>
        )}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-grow p-2 border rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
