import { useState } from 'react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M16.02 3.2a12.72 12.72 0 0 0-10.9 19.3L3.3 28.8l6.48-1.8a12.72 12.72 0 1 0 6.24-23.8Zm0 23.3a10.55 10.55 0 0 1-5.38-1.48l-.39-.23-3.85 1.07 1.03-3.75-.25-.4A10.55 10.55 0 1 1 16.02 26.5Zm5.79-7.9c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.22-.36.24-.67.08-.32-.16-1.33-.49-2.54-1.56-.94-.84-1.57-1.87-1.75-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.36.47-.54.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.36-.25-.62-.51-.54-.71-.55h-.6c-.21 0-.55.08-.83.39-.29.32-1.09 1.07-1.09 2.61s1.12 3.03 1.28 3.24c.16.21 2.2 3.36 5.33 4.7.74.32 1.32.51 1.77.65.75.24 1.43.21 1.97.13.6-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.6-.37Z" />
  </svg>
);

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can Abbey help you today?', sender: 'agent' }
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), text, sender: 'visitor' },
      { id: Date.now() + 1, text: 'Thanks for your message. Abbey will get back to you shortly.', sender: 'agent' }
    ]);
    setMessage('');
  };

  return (
    <>
      {isOpen && (
        <section className="whatsapp-panel" aria-label="WhatsApp-style chat">
          <div className="whatsapp-panel__header">
            <div className="whatsapp-panel__identity">
              <WhatsAppIcon />
              <div><strong>Abbey Ssenkubuge</strong><span>Usually replies shortly</span></div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="whatsapp-panel__messages">
            {messages.map((item) => <div key={item.id} className={`whatsapp-message whatsapp-message--${item.sender}`}>{item.text}</div>)}
          </div>
          <form className="whatsapp-panel__form" onSubmit={handleSubmit}>
            <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type a message..." aria-label="Type a message" />
            <button type="submit" aria-label="Send message">➤</button>
          </form>
        </section>
      )}
      <button type="button" onClick={() => setIsOpen((open) => !open)} className="whatsapp-button" aria-label={isOpen ? 'Close chat' : 'Open chat'}>
        <span className="whatsapp-button__pulse" aria-hidden="true" />
        <WhatsAppIcon />
        <span className="whatsapp-button__label">Chat with me</span>
      </button>
    </>
  );
}
