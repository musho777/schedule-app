import { useState } from "react";
import s from "../ProjectsScreen.module.css";

export default function StatsBar({ stats }) {
  const [weeklyGoal, setWeeklyGoal] = useState(
    () => Number(localStorage.getItem("weekly_goal")) || 12
  );
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState(weeklyGoal);

  const { level } = stats;
  const levelPct =
    level.nextXP > level.prevXP
      ? Math.round(((level.xp - level.prevXP) / (level.nextXP - level.prevXP)) * 100)
      : 100;

  const saveGoal = () => {
    const v = Math.max(1, Number(goalInput) || 12);
    setWeeklyGoal(v);
    localStorage.setItem("weekly_goal", v);
    setEditingGoal(false);
  };

  return (
    <div className={s.statsBar}>
      <div className={s.statCard}>
        <div
          className={s.statIcon}
          style={{ background: "#a78bfa22", color: "#a78bfa" }}
        >
          ✓
        </div>
        <div className={s.statBody}>
          <span className={s.statValue}>{stats.totalCompleted}</span>
          <span className={s.statLabel}>Tasks completed</span>
          <span className={s.statHint}>
            {stats.totalCompleted === 0 ? "Keep going! 💪" : "Great work!"}
          </span>
        </div>
      </div>
      <div className={s.statCard}>
        <div
          className={s.statIcon}
          style={{ background: "#3b82f622", color: "#3b82f6" }}
        >
          📖
        </div>
        <div className={s.statBody}>
          <span className={s.statValue}>{stats.daysStudied}</span>
          <span className={s.statLabel}>Days studied</span>
          <span className={s.statHint}>
            {stats.daysStudied === 0 ? "Start your streak!" : "Keep it up!"}
          </span>
        </div>
      </div>
      <div className={s.statCard}>
        <div
          className={s.statIcon}
          style={{ background: "#f59e0b22", color: "#f59e0b" }}
        >
          🔥
        </div>
        <div className={s.statBody}>
          <span className={s.statValue}>{stats.streak}</span>
          <span className={s.statLabel}>Current streak</span>
          <span className={s.statHint}>
            {stats.streak >= 7
              ? "On fire! 🔥"
              : stats.streak > 0
                ? "Keep it up!"
                : "Start today!"}
          </span>
        </div>
      </div>
      <div className={s.statCard}>
        <div
          className={s.statIcon}
          style={{ background: "#10b98122", color: "#10b981" }}
        >
          ◎
        </div>
        <div className={s.statBody}>
          <span className={s.statValue}>
            {stats.weeklyCompleted}/{weeklyGoal}
          </span>
          <span className={s.statLabel}>This week</span>
          {editingGoal ? (
            <div className={s.goalEdit}>
              <input
                className={s.goalInput}
                type="number"
                min="1"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveGoal()}
                autoFocus
              />
              <button className={s.goalSave} onClick={saveGoal}>
                ✓
              </button>
            </div>
          ) : (
            <span
              className={s.statHint}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setGoalInput(weeklyGoal);
                setEditingGoal(true);
              }}
            >
              Goal: {weeklyGoal} tasks ✎
            </span>
          )}
        </div>
      </div>
      <div className={s.statCard}>
        <div
          className={s.statIcon}
          style={{
            background: "#22c55e22",
            color: "#22c55e",
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          Lv{level.level}
        </div>
        <div className={s.statBody}>
          <span className={s.statValue}>{level.title}</span>
          <span className={s.statLabel}>
            {level.xp} / {level.nextXP} XP
          </span>
          <div className={s.xpBar}>
            <div className={s.xpFill} style={{ width: `${levelPct}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
