import s from "../ProjectsScreen.module.css";

export default function InterviewReadiness({ ivReadiness }) {
  if (ivReadiness.length === 0) return null;

  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardHeaderIcon}>📊</span>
        <span className={s.cardHeaderTitle}>Interview Readiness</span>
      </div>
      <div className={s.readinessPct}>
        {Math.round(
          ivReadiness.reduce((a, r) => a + r.pct, 0) / ivReadiness.length
        )}
        %
      </div>
      {ivReadiness.map((r, i) => (
        <div key={i} className={s.readinessRow}>
          <span className={s.readinessLabel}>{r.label}</span>
          <div className={s.readinessBarBg}>
            <div
              className={s.readinessBarFill}
              style={{ width: `${r.pct}%`, background: r.color }}
            />
          </div>
          <span className={s.readinessPctSmall}>{r.pct}%</span>
        </div>
      ))}
    </div>
  );
}
