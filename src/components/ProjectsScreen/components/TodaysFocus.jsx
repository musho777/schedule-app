import { useNavigate } from "react-router-dom";
import { dayForDate } from "../../../hooks/useSchedule";
import { todayKey } from "../helpers";
import s from "../ProjectsScreen.module.css";

export default function TodaysFocus({ lastProject, todaysTasks, projects }) {
  const navigate = useNavigate();

  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.focusHeroIcon}>★</span>
        <span className={s.cardHeaderTitle}>Today's Focus</span>
      </div>
      {lastProject && todaysTasks.length > 0 ? (
        <>
          <div className={s.focusDay}>
            Day{" "}
            {dayForDate(
              (() => {
                try {
                  return JSON.parse(
                    localStorage.getItem(lastProject.storageKey),
                  )?.startDate;
                } catch {
                  return null;
                }
              })(),
              todayKey(),
            )}
            :{" "}
            <span style={{ color: lastProject.color }}>{lastProject.name}</span>
          </div>
          <div className={s.focusTasks}>
            {todaysTasks.slice(0, 5).map((t) => (
              <div key={t.id} className={s.focusTask}>
                <div
                  className={`${s.focusCheck} ${t.done ? s.focusCheckDone : ""}`}
                >
                  {t.done && "✓"}
                </div>
                <span className={t.done ? s.focusTaskDone : s.focusTask}>
                  {t.title.replace(/^(Study:|Build:|Practice:|Read:)\s*/i, "")}
                </span>
              </div>
            ))}
          </div>
          <div className={s.focusMeta}>
            ⏱ {todaysTasks.filter((t) => !t.done).length} tasks remaining
          </div>
          <button
            className={s.focusBtn}
            style={{ background: lastProject.color }}
            onClick={() => navigate(`/project/${lastProject.id}`)}
          >
            ▶ Continue Learning
          </button>
        </>
      ) : (
        <>
          <div className={s.focusEmpty}>
            <p className={s.focusEmptyText}>No active project yet.</p>
            <p className={s.focusEmptyHint}>
              Pick a learning path to get started.
            </p>
          </div>
          <button
            className={s.focusBtn}
            style={{ background: "#a78bfa" }}
            onClick={() => navigate(`/project/${projects[0].id}`)}
          >
            ▶ Start Learning
          </button>
        </>
      )}
    </div>
  );
}
