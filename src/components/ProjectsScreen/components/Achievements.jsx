import s from "../ProjectsScreen.module.css";

export default function Achievements({ achievements }) {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardHeaderIcon}>🏅</span>
        <span className={s.cardHeaderTitle}>Achievements</span>
      </div>
      <div className={s.achieveGrid}>
        {achievements.map((a) => (
          <div
            key={a.id}
            className={`${s.achieveBadge} ${!a.earned ? s.achieveLocked : ""}`}
            style={
              a.earned
                ? { background: a.color + "22", borderColor: a.color + "66" }
                : {}
            }
          >
            <span className={s.achieveIcon}>
              {typeof a.icon === 'string' && (a.icon.endsWith('.svg') || a.icon.startsWith('data:image/') || a.icon.startsWith('http')) ? (
                <img
                  src={a.icon}
                  alt={a.label}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'block',
                    filter: a.earned ? 'none' : 'grayscale(100%) brightness(0.5)'
                  }}
                />
              ) : (
                a.icon
              )}
            </span>
            <span className={s.achieveLabel}>{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
