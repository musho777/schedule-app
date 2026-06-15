import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dayForDate } from '../../hooks/useSchedule';
import s from './ProjectsScreen.module.css';

// ── Quotes ────────────────────────────────────────────────────────────────
const QUOTES = [
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
  { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
  { text: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.', author: 'Patrick McKenzie' },
  { text: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.', author: 'Antoine de Saint-Exupéry' },
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
  { text: 'One of the best programming skills you can have is knowing when to walk away for a while.', author: 'Oscar Godson' },
  { text: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson' },
];

// ── Milestones ────────────────────────────────────────────────────────────
const MILESTONES = [
  { at: 5,   label: 'Complete 5 tasks',   reward: 'First Steps Badge' },
  { at: 10,  label: 'Complete 10 tasks',  reward: 'On a Roll Badge' },
  { at: 25,  label: 'Complete 25 tasks',  reward: 'Dedicated Learner Badge' },
  { at: 50,  label: 'Complete 50 tasks',  reward: '50 Lessons Badge' },
  { at: 100, label: 'Complete 100 tasks', reward: 'Century Mark Badge' },
  { at: 200, label: 'Complete 200 tasks', reward: 'Elite Developer Badge' },
];

// ── Levels ────────────────────────────────────────────────────────────────
const LEVEL_XP  = [0, 100, 300, 600, 1000, 1500, 2200, 3000];
const LEVEL_TITLES = ['Beginner', 'Learner', 'Developer', 'Senior Dev', 'Expert', 'Master', 'Legend'];
const XP_PER_TASK = 15;

function getLevel(xp) {
  let lvl = 1;
  for (let i = 1; i < LEVEL_XP.length; i++) {
    if (xp >= LEVEL_XP[i]) lvl = i + 1; else break;
  }
  return {
    level: lvl,
    title: LEVEL_TITLES[Math.min(lvl - 1, LEVEL_TITLES.length - 1)],
    xp,
    prevXP: LEVEL_XP[lvl - 1],
    nextXP: LEVEL_XP[Math.min(lvl, LEVEL_XP.length - 1)],
  };
}

// ── Date helpers ──────────────────────────────────────────────────────────
function localKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function todayKey() { return localKey(new Date()); }

function getWeekStart() {
  const now = new Date();
  const diff = now.getDay() === 0 ? -6 : 1 - now.getDay();
  const m = new Date(now);
  m.setDate(now.getDate() + diff);
  m.setHours(0,0,0,0);
  return m;
}

function getDayLabel(offset) {
  return ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][offset];
}

function getDailyQuote() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const day = Math.floor((new Date() - start) / 86400000);
  return QUOTES[day % QUOTES.length];
}

function formatRelDate(dateStr) {
  const today = todayKey();
  const yest  = localKey(new Date(Date.now() - 86400000));
  if (dateStr === today) return 'Just now';
  if (dateStr === yest)  return 'Yesterday';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ── Stats computation ─────────────────────────────────────────────────────
function getAllStats(projects) {
  let totalCompleted = 0;
  const daysStudied = new Set();
  let weeklyCompleted = 0;
  const recentActivity = [];
  const weekStart = getWeekStart();
  const today = todayKey();

  // streak
  const allActivityDates = new Set();

  projects.forEach(project => {
    try {
      const data = JSON.parse(localStorage.getItem(project.storageKey)) || {};
      if (project.checklistMode) {
        totalCompleted += (data.completed?.['checklist'] || []).length;
        return;
      }
      Object.entries(data.completed || {}).forEach(([dateStr, taskIds]) => {
        if (!taskIds.length) return;
        totalCompleted += taskIds.length;
        daysStudied.add(dateStr);
        allActivityDates.add(dateStr);
        const date = new Date(dateStr + 'T12:00:00');
        if (date >= weekStart) weeklyCompleted += taskIds.length;
        recentActivity.push({ dateStr, taskIds, project });
      });
    } catch {}
  });

  // streak calculation
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const k = localKey(d);
    if (allActivityDates.has(k)) { streak++; }
    else if (i === 0) { continue; } // allow missing today
    else break;
  }

  // recent tasks
  recentActivity.sort((a, b) => b.dateStr.localeCompare(a.dateStr));
  const recentTasks = [];
  outer: for (const { dateStr, taskIds, project } of recentActivity) {
    for (const taskId of [...taskIds].reverse()) {
      const dayData = project.days?.find(d => d.tasks.some(t => t.id === taskId));
      const task = dayData?.tasks.find(t => t.id === taskId)
                || project.dailyTasks?.find(t => t.id === taskId);
      if (task) {
        recentTasks.push({ title: task.title, projectName: project.name, color: project.color, dateStr });
        if (recentTasks.length >= 5) break outer;
      }
    }
  }

  // milestone
  const nextMilestone = MILESTONES.find(m => m.at > totalCompleted) || MILESTONES[MILESTONES.length - 1];
  const prevMilestone = MILESTONES.slice().reverse().find(m => m.at <= totalCompleted);
  const milestoneProgress = prevMilestone
    ? totalCompleted - prevMilestone.at
    : totalCompleted;
  const milestoneTotal = prevMilestone
    ? nextMilestone.at - prevMilestone.at
    : nextMilestone.at;

  // today's focus (last visited project)
  const lastId = localStorage.getItem('last_project');
  const lastProject = projects.find(p => p.id === lastId && !p.checklistMode) || null;
  let todaysTasks = [];
  if (lastProject) {
    try {
      const data = JSON.parse(localStorage.getItem(lastProject.storageKey)) || {};
      const dayNum = dayForDate(data.startDate, today);
      if (dayNum) {
        const dayData = lastProject.days[dayNum - 1];
        const completed = data.completed?.[today] || [];
        todaysTasks = [...dayData.tasks, ...lastProject.dailyTasks].map(t => ({
          ...t,
          done: completed.includes(t.id),
        }));
      }
    } catch {}
  }

  // interview readiness
  const ivProject = projects.find(p => p.checklistMode);
  const ivReadiness = [];
  if (ivProject) {
    try {
      const data = JSON.parse(localStorage.getItem(ivProject.storageKey)) || {};
      const done = data.completed?.['checklist'] || [];
      ivProject.categories.slice(0, 3).forEach(cat => {
        const total = cat.tasks.length;
        const catDone = cat.tasks.filter(t => done.includes(t.id)).length;
        ivReadiness.push({ label: cat.title, pct: Math.round((catDone / total) * 100), color: ivProject.color });
      });
    } catch {}
  }

  // achievements
  const achievements = [
    { id: 'first',   label: 'First Task',   icon: '✓', color: '#22c55e',  earned: totalCompleted >= 1 },
    { id: 'streak7', label: '7-Day Streak', icon: '🔥', color: '#f59e0b', earned: streak >= 7 },
    { id: 'fifty',   label: '50 Lessons',   icon: '📚', color: '#a78bfa', earned: totalCompleted >= 50 },
    { id: 'sql',     label: 'SQL Starter',  icon: '🗄', color: '#3b82f6',  earned: (() => {
      try {
        const d = JSON.parse(localStorage.getItem('project_sql_v1')) || {};
        return !!d.startDate;
      } catch { return false; }
    })() },
  ];

  // recommended next path
  let recommended = null;
  const notStarted = projects.filter(p => {
    if (p.checklistMode) return false;
    try {
      const d = JSON.parse(localStorage.getItem(p.storageKey)) || {};
      return !d.startDate;
    } catch { return false; }
  });
  if (notStarted.length > 0 && lastProject) {
    recommended = notStarted[0];
  }

  // weekly activity (Mon–Sun)
  const weekActivity = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    const k = localKey(d);
    const isPast = d <= new Date();
    return { label: getDayLabel(i), key: k, active: allActivityDates.has(k), isPast };
  });

  return {
    totalCompleted, daysStudied: daysStudied.size, weeklyCompleted, streak,
    nextMilestone, milestoneProgress, milestoneTotal,
    todaysTasks, lastProject,
    recentTasks, ivReadiness, achievements, recommended,
    weekActivity,
    level: getLevel(totalCompleted * XP_PER_TASK),
  };
}

function getProjectProgress(project) {
  try {
    const data = JSON.parse(localStorage.getItem(project.storageKey)) || {};
    if (project.checklistMode) {
      const allIds = project.categories.flatMap(c => c.tasks.map(t => t.id));
      const done = (data.completed?.['checklist'] || []).length;
      return { started: done > 0, percent: Math.min(100, Math.round((done / allIds.length) * 100)) };
    }
    if (!data.startDate) return { started: false, percent: 0 };
    const total = project.days.length * (2 + project.dailyTasks.length);
    let done = 0;
    Object.values(data.completed || {}).forEach(l => { done += l.length; });
    return { started: true, percent: Math.min(100, Math.round((done / total) * 100)) };
  } catch { return { started: false, percent: 0 }; }
}

// ── Ring SVG ──────────────────────────────────────────────────────────────
function Ring({ value, max, color, size = 52 }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const pct = max > 0 ? Math.min(value / max, 1) : 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#2d2d3d" strokeWidth="4" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="4"
        strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
        strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text x={size/2} y={size/2 + 5} textAnchor="middle" fontSize="11" fontWeight="700" fill="#e2e8f0">
        {value}/{max}
      </text>
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────
export default function ProjectsScreen({ projects }) {
  const navigate = useNavigate();
  const [weeklyGoal, setWeeklyGoal] = useState(() => Number(localStorage.getItem('weekly_goal')) || 12);
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState(weeklyGoal);

  const stats = getAllStats(projects);
  const quote = getDailyQuote();
  const { level } = stats;
  const levelPct = level.nextXP > level.prevXP
    ? Math.round(((level.xp - level.prevXP) / (level.nextXP - level.prevXP)) * 100)
    : 100;

  const saveGoal = () => {
    const v = Math.max(1, Number(goalInput) || 12);
    setWeeklyGoal(v);
    localStorage.setItem('weekly_goal', v);
    setEditingGoal(false);
  };

  return (
    <div className={s.screen}>
      {/* Header */}
      <header className={s.header}>
        <h1 className={s.logo}>DevPath</h1>
        <div className={s.user}>
          <div className={s.avatar}>MP</div>
          <span className={s.userName}>Mush Poghosyan</span>
        </div>
      </header>

      {/* Stats bar */}
      <div className={s.statsBar}>
        <div className={s.statCard}>
          <div className={s.statIcon} style={{ background: '#a78bfa22', color: '#a78bfa' }}>✓</div>
          <div className={s.statBody}>
            <span className={s.statValue}>{stats.totalCompleted}</span>
            <span className={s.statLabel}>Tasks completed</span>
            <span className={s.statHint}>{stats.totalCompleted === 0 ? 'Keep going! 💪' : 'Great work!'}</span>
          </div>
        </div>
        <div className={s.statCard}>
          <div className={s.statIcon} style={{ background: '#3b82f622', color: '#3b82f6' }}>📖</div>
          <div className={s.statBody}>
            <span className={s.statValue}>{stats.daysStudied}</span>
            <span className={s.statLabel}>Days studied</span>
            <span className={s.statHint}>{stats.daysStudied === 0 ? 'Start your streak!' : 'Keep it up!'}</span>
          </div>
        </div>
        <div className={s.statCard}>
          <div className={s.statIcon} style={{ background: '#f59e0b22', color: '#f59e0b' }}>🔥</div>
          <div className={s.statBody}>
            <span className={s.statValue}>{stats.streak}</span>
            <span className={s.statLabel}>Current streak</span>
            <span className={s.statHint}>{stats.streak >= 7 ? 'On fire! 🔥' : stats.streak > 0 ? 'Keep it up!' : 'Start today!'}</span>
          </div>
        </div>
        <div className={s.statCard}>
          <div className={s.statIcon} style={{ background: '#10b98122', color: '#10b981' }}>◎</div>
          <div className={s.statBody}>
            <span className={s.statValue}>{stats.weeklyCompleted}/{weeklyGoal}</span>
            <span className={s.statLabel}>This week</span>
            {editingGoal ? (
              <div className={s.goalEdit}>
                <input className={s.goalInput} type="number" min="1" value={goalInput}
                  onChange={e => setGoalInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && saveGoal()} autoFocus />
                <button className={s.goalSave} onClick={saveGoal}>✓</button>
              </div>
            ) : (
              <span className={s.statHint} style={{ cursor: 'pointer' }}
                onClick={() => { setGoalInput(weeklyGoal); setEditingGoal(true); }}>
                Goal: {weeklyGoal} tasks ✎
              </span>
            )}
          </div>
        </div>
        <div className={s.statCard}>
          <div className={s.statIcon} style={{ background: '#22c55e22', color: '#22c55e', fontSize: '1rem', fontWeight: 700 }}>
            Lv{level.level}
          </div>
          <div className={s.statBody}>
            <span className={s.statValue}>{level.title}</span>
            <span className={s.statLabel}>{level.xp} / {level.nextXP} XP</span>
            <div className={s.xpBar}>
              <div className={s.xpFill} style={{ width: `${levelPct}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className={s.dashboard}>

        {/* ── 3-column grid ── */}
        <div className={s.colGrid}>

          {/* Left: Today's Focus */}
          <div className={s.leftCol}>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <span className={s.focusHeroIcon}>★</span>
                <span className={s.cardHeaderTitle}>Today's Focus</span>
              </div>
              {stats.lastProject && stats.todaysTasks.length > 0 ? (
                <>
                  <div className={s.focusDay}>
                    Day {dayForDate(
                      (() => { try { return JSON.parse(localStorage.getItem(stats.lastProject.storageKey))?.startDate; } catch { return null; } })(),
                      todayKey()
                    )}: <span style={{ color: stats.lastProject.color }}>{stats.lastProject.name}</span>
                  </div>
                  <div className={s.focusTasks}>
                    {stats.todaysTasks.slice(0, 5).map(t => (
                      <div key={t.id} className={s.focusTask}>
                        <div className={`${s.focusCheck} ${t.done ? s.focusCheckDone : ''}`}>{t.done && '✓'}</div>
                        <span className={t.done ? s.focusTaskDone : ''}>{t.title.replace(/^(Study:|Build:|Practice:|Read:)\s*/i, '')}</span>
                      </div>
                    ))}
                  </div>
                  <div className={s.focusMeta}>⏱ {stats.todaysTasks.filter(t => !t.done).length} tasks remaining</div>
                  <button className={s.focusBtn} style={{ background: stats.lastProject.color }}
                    onClick={() => navigate(`/project/${stats.lastProject.id}`)}>
                    ▶ Continue Learning
                  </button>
                </>
              ) : (
                <>
                  <div className={s.focusEmpty}>
                    <p className={s.focusEmptyText}>No active project yet.</p>
                    <p className={s.focusEmptyHint}>Pick a learning path to get started.</p>
                  </div>
                  <button className={s.focusBtn} style={{ background: '#a78bfa' }}
                    onClick={() => navigate(`/project/${projects[0].id}`)}>
                    ▶ Start Learning
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Center: Quote + Weekly Activity + Milestone */}
          <div className={s.centerCol}>
            <div className={s.quoteCard}>
              <span className={s.quoteIcon}>"</span>
              <p className={s.quoteText}>{quote.text}</p>
              <span className={s.quoteAuthor}>— {quote.author}</span>
            </div>

            <div className={s.centerRow}>
              <div className={s.card}>
                <div className={s.cardHeader}>
                  <span className={s.cardHeaderIcon}>📅</span>
                  <span className={s.cardHeaderTitle}>Weekly Activity</span>
                </div>
                <div className={s.weekRow}>
                  {stats.weekActivity.map((day, i) => (
                    <div key={i} className={s.weekDay}>
                      <span className={s.weekDayLabel}>{day.label}</span>
                      <div className={`${s.weekDayBox} ${day.active ? s.weekDayActive : ''} ${!day.isPast ? s.weekDayFuture : ''}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className={s.card}>
                <div className={s.cardHeader}>
                  <span className={s.cardHeaderIcon}>🏆</span>
                  <span className={s.cardHeaderTitle}>Upcoming Milestone</span>
                </div>
                <div className={s.milestoneBody}>
                  <div className={s.milestoneLeft}>
                    <span className={s.milestoneName}>{stats.nextMilestone.label}</span>
                    <span className={s.milestoneReward}>Reward: {stats.nextMilestone.reward}</span>
                    <div className={s.milestoneBarBg}>
                      <div className={s.milestoneBarFill}
                        style={{ width: `${Math.round((stats.milestoneProgress / stats.milestoneTotal) * 100)}%` }} />
                    </div>
                    <span className={s.milestonePct}>{stats.milestoneProgress} / {stats.milestoneTotal} completed</span>
                  </div>
                  <div className={s.milestoneBadge}>★</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Recent Activity + Interview Readiness + Achievements */}
          <div className={s.rightCol}>
            <div className={s.card}>
              <div className={s.cardHeader}>
                <span className={s.cardHeaderIcon}>⚡</span>
                <span className={s.cardHeaderTitle}>Recent Activity</span>
              </div>
              {stats.recentTasks.length === 0 ? (
                <div className={s.emptyHint}>No activity yet. Start a project!</div>
              ) : stats.recentTasks.map((t, i) => (
                <div key={i} className={s.recentItem}>
                  <div className={s.recentCheck} style={{ borderColor: t.color, color: t.color }}>✓</div>
                  <div className={s.recentInfo}>
                    <span className={s.recentTask}>{t.title.replace(/^(Study:|Build:|Practice:|Read:|LeetCode:)\s*/i, '')}</span>
                    <span className={s.recentMeta}>{t.projectName} · {formatRelDate(t.dateStr)}</span>
                  </div>
                </div>
              ))}
            </div>

            {stats.ivReadiness.length > 0 && (
              <div className={s.card}>
                <div className={s.cardHeader}>
                  <span className={s.cardHeaderIcon}>📊</span>
                  <span className={s.cardHeaderTitle}>Interview Readiness</span>
                </div>
                <div className={s.readinessPct}>
                  {Math.round(stats.ivReadiness.reduce((a, r) => a + r.pct, 0) / stats.ivReadiness.length)}%
                </div>
                {stats.ivReadiness.map((r, i) => (
                  <div key={i} className={s.readinessRow}>
                    <span className={s.readinessLabel}>{r.label}</span>
                    <div className={s.readinessBarBg}>
                      <div className={s.readinessBarFill} style={{ width: `${r.pct}%`, background: r.color }} />
                    </div>
                    <span className={s.readinessPctSmall}>{r.pct}%</span>
                  </div>
                ))}
              </div>
            )}

            <div className={s.card}>
              <div className={s.cardHeader}>
                <span className={s.cardHeaderIcon}>🏅</span>
                <span className={s.cardHeaderTitle}>Achievements</span>
              </div>
              <div className={s.achieveGrid}>
                {stats.achievements.map(a => (
                  <div key={a.id} className={`${s.achieveBadge} ${!a.earned ? s.achieveLocked : ''}`}
                    style={a.earned ? { background: a.color + '22', borderColor: a.color + '66' } : {}}>
                    <span className={s.achieveIcon}>{a.icon}</span>
                    <span className={s.achieveLabel}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>{/* end colGrid */}

        {/* Full-width: Choose a learning path */}
        <div className={s.projectsCard}>
          <div className={s.sectionLabel}>Choose a learning path</div>
          <p className={s.sectionSub}>Each path is a structured curriculum. Your progress is saved independently.</p>
          <div className={s.projectList}>
            {projects.map(project => {
              const progress = getProjectProgress(project);
              return (
                <button key={project.id} className={s.projectRow}
                  onClick={() => navigate(`/project/${project.id}`)}
                  style={{ '--accent': project.color }}>
                  <div className={s.projectRowIcon} style={{ background: project.color + '22', color: project.color }}>
                    {project.icon}
                  </div>
                  <div className={s.projectRowBody}>
                    <div className={s.projectRowTop}>
                      <span className={s.projectRowName} style={{ color: project.color }}>{project.name}</span>
                      <span className={s.projectRowSub}>{project.subtitle}</span>
                    </div>
                    <div className={s.projectTopics}>
                      {project.topics.map((t, i) => (
                        <div key={i} className={s.topicItem}>
                          <div className={`${s.topicDot} ${progress.started && i === 0 ? s.topicDotActive : ''}`}
                            style={progress.started && i === 0 ? { background: project.color } : {}} />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                    <div className={s.projectRowBottom}>
                      <span className={s.projectDuration}>
                        {project.checklistMode ? 'One-day checklist' : `${project.duration} days`}
                      </span>
                      <span className={s.projectPercent} style={{ color: progress.started ? '#22c55e' : '#475569' }}>
                        {progress.started ? `${progress.percent}% complete` : 'Not started'}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-width: Recommended */}
        {stats.recommended && (
          <div className={s.recommendCard}>
            <div className={s.recommendIcon}>💡</div>
            <div className={s.recommendBody}>
              <span className={s.recommendLabel}>Recommended Next Path</span>
              <span className={s.recommendName} style={{ color: stats.recommended.color }}>
                {stats.recommended.name} → {stats.recommended.subtitle}
              </span>
              <span className={s.recommendHint}>Based on your current progress</span>
            </div>
            <button className={s.recommendBtn}
              onClick={() => navigate(`/project/${stats.recommended.id}`)}>
              Explore Path →
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
