import { useState, useEffect } from 'react';
import Anthropic from '@anthropic-ai/sdk';
import s from './LeetCodeModal.module.css';

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const DIFFICULTY_ORDER = ['Easy', 'Medium', 'Hard'];

export default function LeetCodeModal({ task, onClose }) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { fetch(); }, []); // eslint-disable-line

  async function fetch() {
    if (!API_KEY) { setError('API key required'); setLoading(false); return; }
    try {
      const client = new Anthropic({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
      const msg = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Recommend 5 real LeetCode problems for someone studying: "${task.title}"
The learner is going from mid-level to senior JavaScript developer.
Return ONLY a valid JSON array, no markdown, no extra text:
[{"number":1,"title":"Two Sum","slug":"two-sum","difficulty":"Easy","why":"short reason this fits the topic"}]
Use real existing LeetCode problems and their exact slugs (the URL path segment).`,
        }],
      });
      const text = msg.content[0].text.trim();
      const match = text.match(/\[[\s\S]*\]/);
      if (!match) throw new Error('Could not parse problems');
      const parsed = JSON.parse(match[0]);
      setProblems(parsed.sort((a, b) => DIFFICULTY_ORDER.indexOf(a.difficulty) - DIFFICULTY_ORDER.indexOf(b.difficulty)));
    } catch (err) {
      setError(err.message || 'Failed to load problems');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={s.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={s.modal}>
        <div className={s.header}>
          <div>
            <div className={s.headerTitle}>LeetCode Problems</div>
            <div className={s.headerSub}>{task.title}</div>
          </div>
          <button className={s.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={s.body}>
          {loading && (
            <div className={s.center}>
              <div className={s.spinner} />
              <p className={s.hint}>Finding problems…</p>
            </div>
          )}

          {!loading && error && (
            <div className={s.center}>
              <p className={s.errorText}>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className={s.list}>
              {problems.map((p, i) => (
                <a
                  key={i}
                  className={s.card}
                  href={`https://leetcode.com/problems/${p.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={s.cardLeft}>
                    <span className={s.num}>#{p.number}</span>
                    <div className={s.info}>
                      <div className={s.title}>{p.title}</div>
                      <div className={s.why}>{p.why}</div>
                    </div>
                  </div>
                  <div className={s.cardRight}>
                    <span className={s.diff} data-diff={p.difficulty}>{p.difficulty}</span>
                    <span className={s.arrow}>↗</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
