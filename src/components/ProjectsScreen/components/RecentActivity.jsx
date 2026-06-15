import { formatRelDate } from "../helpers";
import s from "../ProjectsScreen.module.css";

export default function RecentActivity({ recentTasks }) {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardHeaderIcon}>⚡</span>
        <span className={s.cardHeaderTitle}>Recent Activity</span>
      </div>
      <div className={s.recentActivityContent}>
        {recentTasks.length === 0 ? (
          <div className={s.emptyHint}>No activity yet. Start a project!</div>
        ) : (
          recentTasks.slice(0, 4).map((t, i) => (
            <div key={i} className={s.recentItem}>
              <div
                className={s.recentCheck}
                style={{ borderColor: t.color, color: t.color }}
              >
                ✓
              </div>
              <div className={s.recentInfo}>
                <span className={s.recentTask}>
                  {t.title.replace(
                    /^(Study:|Build:|Practice:|Read:|LeetCode:)\s*/i,
                    ""
                  )}
                </span>
                <span className={s.recentMeta}>
                  {t.projectName} · {formatRelDate(t.dateStr)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
