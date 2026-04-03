import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_API_URL = 'https://xnnteydwzgeoiwhytgcp.supabase.co/functions/v1/chat';
const SESSION_KEY = 'dan-chat-session';

function loadSession(): Message[] {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveSession(messages: Message[]) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages));
  } catch {}
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(loadSession);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    saveSession(messages);
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages([...newMessages, { role: 'assistant', content: data.message }]);
    } catch (error: any) {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: error.message || 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    sessionStorage.removeItem(SESSION_KEY);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-accent/20 cursor-pointer"
        style={{ backgroundColor: '#5BA4CF' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with AI assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col"
            style={{
              backgroundColor: '#0F1923',
              border: '1px solid #1E2D3D',
              height: 'min(520px, calc(100vh - 8rem))',
            }}
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: '1px solid #1E2D3D' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-accent/30">
                  <img src="/profile_image.png" alt="Dan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Ask about Danendra</p>
                  <p className="text-xs text-text-muted">AI-powered assistant</p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-text-muted hover:text-text-secondary transition-colors text-xs cursor-pointer"
                title="Clear chat"
              >
                Clear
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: 'thin' }}>
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-text-muted text-sm mb-4">
                    Hi! Ask me anything about Danendra — his experience, projects, skills, or achievements.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['What does Dan do?', 'Tell me about his projects', 'What are his skills?'].map((q) => (
                      <button
                        key={q}
                        onClick={() => { setInput(q); }}
                        className="text-xs px-3 py-1.5 rounded-full border cursor-pointer transition-colors"
                        style={{ borderColor: '#1E2D3D', color: '#A0A0A0' }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#5BA4CF'; e.currentTarget.style.color = '#5BA4CF'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1E2D3D'; e.currentTarget.style.color = '#A0A0A0'; }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed"
                    style={{
                      backgroundColor: msg.role === 'user' ? '#5BA4CF' : '#1A2332',
                      color: msg.role === 'user' ? 'white' : '#F5F5F5',
                      borderBottomRightRadius: msg.role === 'user' ? '4px' : undefined,
                      borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : undefined,
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl" style={{ backgroundColor: '#1A2332', borderBottomLeftRadius: '4px' }}>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3" style={{ borderTop: '1px solid #1E2D3D' }}>
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about Danendra..."
                  className="flex-1 text-sm px-4 py-2.5 rounded-xl border bg-transparent text-text-primary outline-none focus:border-accent transition-colors"
                  style={{ borderColor: '#1E2D3D' }}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-opacity cursor-pointer disabled:opacity-30"
                  style={{ backgroundColor: '#5BA4CF' }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
