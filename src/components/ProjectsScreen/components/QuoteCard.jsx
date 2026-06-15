import s from "../ProjectsScreen.module.css";

export default function QuoteCard({ quote }) {
  return (
    <div className={s.quoteCard}>
      <span className={s.quoteIcon}>"</span>
      <p className={s.quoteText}>{quote.text}</p>
      <span className={s.quoteAuthor}>— {quote.author}</span>
    </div>
  );
}
