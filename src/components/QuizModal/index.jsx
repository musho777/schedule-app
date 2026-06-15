import { useState, useEffect } from 'react';
import Anthropic from '@anthropic-ai/sdk';
import s from './QuizModal.module.css';

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizModal({ task, onClose }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => { generate(); }, []); // eslint-disable-line

  async function generate() {
    if (!API_KEY) { setError('API key required'); setLoading(false); return; }
    try {
      const client = new Anthropic({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
      const msg = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: `Generate 5 multiple choice questions to test understanding of: "${task.title}"
The learner is going from mid-level to senior JavaScript developer.
Return ONLY a valid JSON array with no markdown fences or extra text:
[{"question":"...","options":["A text","B text","C text","D text"],"correct":0,"explanation":"why this answer is correct"}]`,
        }],
      });
      const text = msg.content[0].text.trim();
      const match = text.match(/\[[\s\S]*\]/);
      if (!match) throw new Error('Could not parse questions');
      setQuestions(JSON.parse(match[0]));
    } catch (err) {
      setError(err.message || 'Failed to generate quiz');
    } finally {
      setLoading(false);
    }
  }

  function restart() {
    setCurrent(0); setSelected(null); setRevealed(false); setResults([]); setDone(false);
  }

  function pick(i) {
    if (!revealed) setSelected(i);
  }

  function reveal() {
    if (selected === null) return;
    setRevealed(true);
  }

  function next() {
    const correct = selected === q.correct;
    const newResults = [...results, correct];
    setResults(newResults);
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  const q = questions[current];
  const score = results.filter(Boolean).length;
  const pct = questions.length ? (current / questions.length) * 100 : 0;

  return (
    <div className={s.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={s.modal}>
        <div className={s.header}>
          <div>
            <div className={s.headerTitle}>Quiz</div>
            <div className={s.headerSub}>{task.title}</div>
          </div>
          <button className={s.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={s.body}>
          {loading && (
            <div className={s.center}>
              <div className={s.spinner} />
              <p className={s.hint}>Generating quiz…</p>
            </div>
          )}

          {!loading && error && (
            <div className={s.center}>
              <p className={s.errorText}>{error}</p>
            </div>
          )}

          {!loading && !error && done && (
            <div className={s.scoreScreen}>
              <div className={s.scoreEmoji}>
                {score === questions.length ? '🏆' : score >= Math.ceil(questions.length * 0.6) ? '👍' : '📚'}
              </div>
              <div className={s.scoreNum}>{score} / {questions.length}</div>
              <div className={s.scoreLabel}>
                {score === questions.length ? 'Perfect score!' : score >= Math.ceil(questions.length * 0.6) ? 'Good job!' : 'Keep studying!'}
              </div>
              <div className={s.scoreDots}>
                {results.map((r, i) => <span key={i} className={s.scoreDot} data-ok={r} />)}
              </div>
              <div className={s.scoreActions}>
                <button className={s.retryBtn} onClick={restart}>Try again</button>
                <button className={s.doneBtn} onClick={onClose}>Done</button>
              </div>
            </div>
          )}

          {!loading && !error && !done && q && (
            <>
              <div className={s.progressTrack}>
                <div className={s.progressFill} style={{ '--w': `${pct}%` }} />
              </div>
              <div className={s.qMeta}>Question {current + 1} of {questions.length}</div>
              <div className={s.question}>{q.question}</div>

              <div className={s.options}>
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={s.option}
                    data-selected={!revealed && selected === i ? 'true' : undefined}
                    data-correct={revealed && i === q.correct ? 'true' : undefined}
                    data-wrong={revealed && selected === i && i !== q.correct ? 'true' : undefined}
                    onClick={() => pick(i)}
                  >
                    <span className={s.letter}>{LETTERS[i]}</span>
                    <span className={s.optText}>{opt}</span>
                  </button>
                ))}
              </div>

              {revealed && (
                <div className={s.explanation} data-correct={selected === q.correct}>
                  <span className={s.expIcon}>{selected === q.correct ? '✓' : '✗'}</span>
                  {q.explanation}
                </div>
              )}

              <div className={s.actions}>
                {!revealed
                  ? <button className={s.checkBtn} disabled={selected === null} onClick={reveal}>Check answer</button>
                  : <button className={s.nextBtn} onClick={next}>{current + 1 >= questions.length ? 'See results' : 'Next question'}</button>
                }
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
