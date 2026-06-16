import { useState, useRef, useEffect } from 'react';
import Anthropic from '@anthropic-ai/sdk';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import s from './AiModal.module.css';

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

const SYSTEM = `You are a senior JavaScript developer and mentor.
The user is on a structured 3-month path to become a senior JS developer.
When they share a task title, explain the concept clearly with:
- A brief overview (1-2 paragraphs)
- A practical code example (use \`\`\`js blocks)
- 2-3 key things to remember
Keep answers focused and practical. For follow-up questions, be concise.`;

function MessageContent({ text }) {
  return (
    <div className={s.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </div>
  );
}

export default function AiModal({ task, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef(null);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const hasInit = useRef(false);

  useEffect(() => {
    if (hasInit.current) return;
    hasInit.current = true;
    send(`I'm working on this task today: "${task.title}". Please explain what I need to learn and give me a practical code example.`);
  }, []); // eslint-disable-line

  // Typewriter effect: advance typedText toward streamText in small steps
  useEffect(() => {
    if (!streaming) {
      setTypedText(streamText);
      return;
    }
    if (typedText.length >= streamText.length) return;
    const t = setTimeout(() => {
      setTypedText(streamText.slice(0, typedText.length + 6));
    }, 12);
    return () => clearTimeout(t);
  }, [streamText, typedText, streaming]);

  // Scroll down as typed text grows
  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [typedText]);

  // Smooth scroll when a complete message is added
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function send(text) {
    const userMsg = { role: 'user', content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setStreaming(true);
    setStreamText('');

    try {
      const client = new Anthropic({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true,
      });

      let full = '';
      const stream = client.messages.stream({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        system: SYSTEM,
        messages: history,
      });

      stream.on('text', (delta) => {
        full += delta;
        setStreamText(full);
      });

      await stream.finalMessage();
      setMessages(prev => [...prev, { role: 'assistant', content: full }]);
      setStreamText('');
    } catch (err) {
      const errMsg = err?.message || 'Something went wrong.';
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${errMsg}` }]);
      setStreamText('');
    } finally {
      setStreaming(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || streaming) return;
    send(text);
  }

  if (!API_KEY) {
    return (
      <div className={s.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
        <div className={s.modal} data-expanded={isExpanded}>
          <div className={s.header}>
            <div>
              <div className={s.headerTitle}>AI Assistant</div>
              <div className={s.headerSub}>{task.title}</div>
            </div>
            <div className={s.headerActions}>
              <button className={s.expandBtn} onClick={() => setIsExpanded(!isExpanded)} title={isExpanded ? 'Collapse' : 'Expand'}>
                {isExpanded ? '⊟' : '⊞'}
              </button>
              <button className={s.closeBtn} onClick={onClose}>✕</button>
            </div>
          </div>
          <div className={s.noKey}>
            <div className={s.noKeyTitle}>API key required</div>
            <p className={s.noKeyText}>
              Create a <code>.env.local</code> file in the project root and add your Anthropic API key:
            </p>
            <div className={s.noKeyCode}>VITE_ANTHROPIC_API_KEY=sk-ant-...</div>
            <p className={s.noKeyText}>Then restart the dev server.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={s.modal} data-expanded={isExpanded}>
        <div className={s.header}>
          <div>
            <div className={s.headerTitle}>AI Assistant</div>
            <div className={s.headerSub}>{task.title}</div>
          </div>
          <div className={s.headerActions}>
            <button className={s.expandBtn} onClick={() => setIsExpanded(!isExpanded)} title={isExpanded ? 'Collapse' : 'Expand'}>
              {isExpanded ? '⊟' : '⊞'}
            </button>
            <button className={s.closeBtn} onClick={onClose}>✕</button>
          </div>
        </div>

        <div className={s.messages} ref={messagesRef}>
          {messages.map((msg, i) => (
            <div key={i} className={s.message} data-role={msg.role}>
              <div className={s.bubble}>
                {msg.role === 'assistant'
                  ? <MessageContent text={msg.content} />
                  : msg.content
                }
              </div>
            </div>
          ))}

          {streaming && typedText && (
            <div className={s.message} data-role="assistant">
              <div className={s.bubble}>
                <MessageContent text={typedText} />
                <span className={s.cursor} />
              </div>
            </div>
          )}

          {streaming && !typedText && (
            <div className={s.message} data-role="assistant">
              <div className={s.bubble}>
                <div className={s.thinking}>
                  <span className={s.dot} />
                  <span className={s.dot} />
                  <span className={s.dot} />
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <form className={s.inputRow} onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className={s.input}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask a follow-up question..."
            disabled={streaming}
          />
          <button className={s.sendBtn} type="submit" disabled={!input.trim() || streaming}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
