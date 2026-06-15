import { useMemo } from 'react';
import { DAYS, DAILY_TASKS } from '../../data/schedule';
import s from './AnalyticsModal.module.css';

function localKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseLocalDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatTime(mins) {
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

function computeAnalytics(completedMap, startDate) {
  const start = parseLocalDate(startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const elapsed = Math.min(
    Math.floor((today - start) / 86400000) + 1,
    84
  );

  // Per-day stats
  const dayStats = [];
  for (let i = 0; i < elapsed; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const key = localKey(d);
    const dayData = DAYS[i];
    const allTasks = [...dayData.tasks, ...DAILY_TASKS];
    const completed = completedMap[key] || [];
    const done = allTasks.filter(t => completed.includes(t.id)).length;
    dayStats.push({ i, key, dayData, total: allTasks.length, done, allDone: done === allTasks.length });
  }

  // Completed days
  const completedDays = dayStats.filter(d => d.allDone).length;

  // Current streak (backwards from today)
  let currentStreak = 0;
  for (let i = dayStats.length - 1; i >= 0; i--) {
    if (dayStats[i].allDone) currentStreak++;
    else break;
  }

  // Longest streak
  let longestStreak = 0, streak = 0;
  for (const d of dayStats) {
    streak = d.allDone ? streak + 1 : 0;
    longestStreak = Math.max(longestStreak, streak);
  }

  // By month
  const byMonth = [1, 2, 3].map(month => {
    const mDays = dayStats.filter(d => d.dayData.month === month);
    return { month, done: mDays.filter(d => d.allDone).length, total: mDays.length };
  });

  // By tag (tasks completed)
  const byTag = { study: 0, build: 0, practice: 0, read: 0 };
  for (const ds of dayStats) {
    const completed = completedMap[ds.key] || [];
    for (const task of [...ds.dayData.tasks, ...DAILY_TASKS]) {
      if (completed.includes(task.id)) byTag[task.tag] = (byTag[task.tag] || 0) + 1;
    }
  }
  const maxTag = Math.max(...Object.values(byTag), 1);

  // Total time invested (minutes)
  let totalMinutes = 0;
  for (const ds of dayStats) {
    const completed = completedMap[ds.key] || [];
    for (const task of [...ds.dayData.tasks, ...DAILY_TASKS]) {
      if (completed.includes(task.id)) {
        const mins = parseInt(task.time);
        if (!isNaN(mins)) totalMinutes += mins;
      }
    }
  }

  // Heatmap data for all 84 days
  const heatmap = DAYS.map((dayData, i) => {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const key = localKey(d);
    const isFuture = d > today;
    if (isFuture) return 'future';
    const completed = completedMap[key] || [];
    const allTasks = [...dayData.tasks, ...DAILY_TASKS];
    const done = allTasks.filter(t => completed.includes(t.id)).length;
    if (done === 0) return 'empty';
    if (done === allTasks.length) return 'done';
    return 'partial';
  });

  return {
    elapsed,
    completedDays,
    currentStreak,
    longestStreak,
    byMonth,
    byTag,
    maxTag,
    totalMinutes,
    heatmap,
    completionRate: elapsed > 0 ? Math.round((completedDays / elapsed) * 100) : 0,
  };
}

const MONTH_NAMES = ['Month 1', 'Month 2', 'Month 3'];
const TAG_LABELS = ['study', 'build', 'practice', 'read'];

export default function AnalyticsModal({ completedMap, startDate, onClose }) {
  const data = useMemo(
    () => startDate ? computeAnalytics(completedMap, startDate) : null,
    [completedMap, startDate]
  );

  return (
    <div className={s.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={s.modal}>
        <div className={s.header}>
          <span className={s.title}>Analytics</span>
          <button className={s.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={s.body}>
          {!data ? (
            <div className={s.empty}>Set a start date to see your analytics.</div>
          ) : (
            <>
              {/* Streak banner */}
              {data.currentStreak > 0 && (
                <div className={s.streakBanner}>
                  <span className={s.streakEmoji}>🔥</span>
                  <div className={s.streakText}>
                    <h3>{data.currentStreak}-day streak!</h3>
                    <p>Keep it up — your longest streak is {data.longestStreak} days.</p>
                  </div>
                </div>
              )}

              {/* Key stats */}
              <section className={s.section}>
                <div className={s.sectionTitle}>Overview</div>
                <div className={s.statGrid}>
                  <div className={s.statCard}>
                    <span className={s.statValue}>{data.completedDays}</span>
                    <span className={s.statLabel}>Days completed</span>
                    <span className={s.statSub}>out of {data.elapsed} elapsed</span>
                  </div>
                  <div className={s.statCard}>
                    <span className={s.statValue}>{data.completionRate}%</span>
                    <span className={s.statLabel}>Completion rate</span>
                    <span className={s.statSub}>fully done days</span>
                  </div>
                  <div className={s.statCard}>
                    <span className={s.statValue}>{data.currentStreak}</span>
                    <span className={s.statLabel}>Current streak</span>
                    <span className={s.statSub}>best: {data.longestStreak} days</span>
                  </div>
                  <div className={s.statCard}>
                    <span className={s.statValue}>{formatTime(data.totalMinutes)}</span>
                    <span className={s.statLabel}>Time invested</span>
                    <span className={s.statSub}>in completed tasks</span>
                  </div>
                </div>
              </section>

              {/* Heatmap */}
              <section className={s.section}>
                <div className={s.sectionTitle}>84-day heatmap</div>
                <div className={s.heatmap}>
                  {Array.from({ length: 12 }, (_, w) => (
                    <div key={w} className={s.heatWeek}>
                      {Array.from({ length: 7 }, (_, d) => {
                        const idx = w * 7 + d;
                        return (
                          <div
                            key={d}
                            className={s.heatCell}
                            data-state={data.heatmap[idx]}
                            title={`Day ${idx + 1}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className={s.heatLegend}>
                  <span>Less</span>
                  <div className={s.legendDot} style={{ background: '#1e1e2e' }} />
                  <div className={s.legendDot} style={{ background: '#a78bfa55' }} />
                  <div className={s.legendDot} style={{ background: '#22c55e' }} />
                  <span>More</span>
                </div>
              </section>

              {/* Monthly progress */}
              <section className={s.section}>
                <div className={s.sectionTitle}>Progress by month</div>
                {data.byMonth.map(({ month, done, total }) => (
                  <div key={month} className={s.monthRow}>
                    <span className={s.monthName}>{MONTH_NAMES[month - 1]}</span>
                    <div className={s.barTrack}>
                      <div
                        className={s.barFill}
                        data-month={month}
                        style={{ width: total > 0 ? `${Math.round((done / total) * 100)}%` : '0%' }}
                      />
                    </div>
                    <span className={s.monthCount}>{done}/{total}</span>
                  </div>
                ))}
              </section>

              {/* Tag breakdown */}
              <section className={s.section}>
                <div className={s.sectionTitle}>Tasks by type</div>
                {TAG_LABELS.map(tag => (
                  <div key={tag} className={s.tagRow}>
                    <span className={s.tagDot} data-type={tag} />
                    <span className={s.tagName}>{tag}</span>
                    <div className={s.tagBarTrack}>
                      <div
                        className={s.tagBarFill}
                        data-type={tag}
                        style={{ width: `${Math.round(((data.byTag[tag] || 0) / data.maxTag) * 100)}%` }}
                      />
                    </div>
                    <span className={s.tagCount}>{data.byTag[tag] || 0}</span>
                  </div>
                ))}
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
