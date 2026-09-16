import { useState } from 'react';
import { MessageCircle, RotateCcw, Send, Sparkles, X } from 'lucide-react';
import './ebix-assistant.css';

const quickQuestions = [
  'What services do you offer?',
  'How can I create a monthly budget?',
  'What is the difference between UPI and a wallet?',
];

const knowledgeBase = [
  {
    keywords: ['service', 'services', 'offer', 'business'],
    answer: 'EbixCash brings together four main areas: Payments Solutions, Travel, Financial Technologies, and BPO and Startups. Its services include UPI and wallet payments, money transfer, forex, insurance, travel booking, prepaid cards, telecom, and business technology solutions.',
  },
  {
    keywords: ['payment', 'upi', 'wallet', 'bill', 'recharge'],
    answer: 'EbixCash supports UPI payments, wallet services, money transfers, bill payments, recharges, prepaid cards, and gift cards through its digital and assisted distribution network.',
  },
  {
    keywords: ['travel', 'flight', 'hotel', 'holiday', 'bus', 'cab'],
    answer: 'The consumer platform covers flights, hotels, holidays, cabs, buses, and travel bookings. EbixCash also provides travel technology and transport solutions for businesses.',
  },
  {
    keywords: ['forex', 'foreign exchange', 'remittance', 'money transfer'],
    answer: 'EbixCash has leadership in international remittance and foreign exchange, alongside domestic money remittance and other payment solutions. For a specific transaction, please contact the team directly.',
  },
  {
    keywords: ['insurance', 'health', 'healthcare'],
    answer: 'Insurance is part of the EbixCash consumer and business ecosystem. The platform connects customers with everyday financial and protection services through its digital and distribution channels.',
  },
  {
    keywords: ['investor', 'investors', 'result', 'financial data', 'leadership'],
    answer: 'The Investors area includes investor information, key financial data, quarterly results, announcements, corporate governance, leadership, and contact information.',
  },
  {
    keywords: ['app', 'download', 'android', 'ios', 'iphone', 'mobile'],
    answer: 'The EbixCash app brings together UPI, wallet and payments, money transfers, forex, gift cards, and travel bookings. It is available for Android and iOS devices through the app-store links on this page.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'address', 'office', 'reach'],
    answer: 'You can reach EbixCash at info@ebixcash.com. The Noida office is at Plot No. 122 & 123, NSEZ, Phase II, Noida - 201305, Uttar Pradesh. The listed phone numbers are +91-120-4688400 and +91-120-2460870.',
  },
  {
    keywords: ['outlet', 'network', 'city', 'village', 'country', 'office', 'employee'],
    answer: 'EbixCash has a phygital network of more than 650,000 physical distribution outlets across India, with operations spanning 196 countries and more than 10,000 employees.',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    answer: 'Hello. I am the EbixCash Guide. Ask me about payments, travel, forex, the app, investor information, business services, or how to contact the team.',
  },
];

function getLocalAnswer(question) {
  const normalizedQuestion = question.toLowerCase();
  const match = knowledgeBase.find(({ keywords }) =>
    keywords.some((keyword) => normalizedQuestion.includes(keyword)),
  );

  return match?.answer || 'I can help with general finance questions about budgeting, banking, payments, investing, credit, insurance, taxes, foreign exchange, and financial technology. For account or transaction support, please contact info@ebixcash.com.';
}

function formatInlineText(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) => (
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={`${part}-${partIndex}`}>{part.slice(2, -2)}</strong>
      : part
  ));
}

function formatAssistantMessage(text) {
  return text.split('\n').map((line, lineIndex) => {
    const trimmedLine = line.trim();
    const listMatch = trimmedLine.match(/^(?:[*-]|\d+\.)\s+(.+)/);

    if (!trimmedLine) {
      return <span className="ebix-assistant-message-break" key={`break-${lineIndex}`} />;
    }

    if (listMatch) {
      return <span className="ebix-assistant-message-line ebix-assistant-message-list" key={`line-${lineIndex}`}>
        <span className="ebix-assistant-message-bullet" aria-hidden="true">•</span>
        {formatInlineText(listMatch[1])}
      </span>;
    }

    return <span className="ebix-assistant-message-line" key={`line-${lineIndex}`}>{formatInlineText(line)}</span>;
  });
}

function EbixAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Welcome. I am EbixCash AI. Ask me anything about finance, payments, investing, budgeting, or EbixCash services.',
    },
  ]);

  const askQuestion = async (value = question) => {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion || isTyping) return;

    const userMessageId = Date.now();
    const conversationHistory = messages.slice(-10).map(({ role, text }) => ({ role, text }));
    setMessages((currentMessages) => [...currentMessages, { id: userMessageId, role: 'user', text: trimmedQuestion }]);
    setQuestion('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmedQuestion, history: conversationHistory }),
      });
      const data = await response.json();
      const answer = response.ok ? data.answer : data.error || getLocalAnswer(trimmedQuestion);
      setMessages((currentMessages) => [...currentMessages, { id: Date.now(), role: 'assistant', text: answer }]);
    } catch {
      setMessages((currentMessages) => [...currentMessages, { id: Date.now(), role: 'assistant', text: getLocalAnswer(trimmedQuestion) }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearConversation = () => {
    setMessages([{
      id: Date.now(),
      role: 'assistant',
      text: 'Welcome. I am EbixCash AI. Ask me anything about finance, payments, investing, budgeting, or EbixCash services.',
    }]);
  };

  return (
    <div className="ebix-assistant" aria-live="polite">
      {isOpen && (
        <section className="ebix-assistant-panel" aria-label="EbixCash AI">
          <header className="ebix-assistant-header">
            <div className="ebix-assistant-brand">
              <span className="ebix-assistant-mark"><Sparkles size={16} /></span>
              <div>
                <strong>EbixCash AI</strong>
                <span>Finance answers, made clear</span>
              </div>
            </div>
            <div className="ebix-assistant-actions">
              <button type="button" className="ebix-assistant-close" aria-label="Clear conversation" title="Clear conversation" onClick={clearConversation}>
                <RotateCcw size={16} />
              </button>
              <button type="button" className="ebix-assistant-close" aria-label="Close assistant" title="Close assistant" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>
          </header>

          <div className="ebix-assistant-messages">
            {messages.map((message) => (
              <div className={`ebix-assistant-message ${message.role}`} key={message.id}>
                {message.role === 'assistant' ? formatAssistantMessage(message.text) : message.text}
              </div>
            ))}
            {isTyping && <div className="ebix-assistant-message assistant ebix-assistant-typing">Thinking<span>.</span><span>.</span><span>.</span></div>}
          </div>

          <div className="ebix-assistant-prompts">
            {quickQuestions.map((prompt) => (
              <button type="button" key={prompt} onClick={() => askQuestion(prompt)}>{prompt}</button>
            ))}
          </div>

          <form className="ebix-assistant-form" onSubmit={(event) => { event.preventDefault(); askQuestion(); }}>
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about EbixCash..."
              aria-label="Ask EbixCash AI a finance question"
            />
            <button type="submit" aria-label="Send question"><Send size={17} /></button>
          </form>
        </section>
      )}

      <button type="button" className={`ebix-assistant-launcher ${isOpen ? 'open' : ''}`} aria-label={isOpen ? 'Close EbixCash AI' : 'Open EbixCash AI'} onClick={() => setIsOpen((current) => !current)}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        <span>{isOpen ? 'Close' : 'Ask EbixCash'}</span>
      </button>
    </div>
  );
}

export default EbixAssistant;
