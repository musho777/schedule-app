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
            <span className={s.achieveIcon}>{a.icon}</span>
            <span className={s.achieveLabel}>{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
