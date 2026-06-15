import s from "../ProjectsScreen.module.css";

export default function WeeklyActivity({ weekActivity }) {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardHeaderIcon}>📅</span>
        <span className={s.cardHeaderTitle}>Weekly Activity</span>
      </div>
      <div className={s.weekRow}>
        {weekActivity.map((day, i) => (
          <div key={i} className={s.weekDay}>
            <span className={s.weekDayLabel}>{day.label}</span>
            <div
              className={`${s.weekDayBox} ${day.active ? s.weekDayActive : ""} ${!day.isPast ? s.weekDayFuture : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
