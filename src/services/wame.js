import React, { useState } from 'react';

const WhatsAppView = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o número do telefone"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <textarea
        placeholder="Digite a mensagem"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Enviar mensagem via WhatsApp</button>
    </div>
  );
};

export default WhatsAppView;
