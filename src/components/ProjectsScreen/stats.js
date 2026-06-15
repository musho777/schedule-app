import { dayForDate } from "../../hooks/useSchedule";
import { MILESTONES, XP_PER_TASK } from "./constants";
import {
  getLevel,
  localKey,
  todayKey,
  getWeekStart,
  getDayLabel,
  formatRelDate,
} from "./helpers";

// ── Stats computation ─────────────────────────────────────────────────────
export function getAllStats(projects) {
  let totalCompleted = 0;
  const daysStudied = new Set();
  let weeklyCompleted = 0;
  const recentActivity = [];
  const weekStart = getWeekStart();
  const today = todayKey();

  // streak
  const allActivityDates = new Set();

  projects.forEach((project) => {
    try {
      const data = JSON.parse(localStorage.getItem(project.storageKey)) || {};
      if (project.checklistMode) {
        totalCompleted += (data.completed?.["checklist"] || []).length;
        return;
      }
      Object.entries(data.completed || {}).forEach(([dateStr, taskIds]) => {
        if (!taskIds.length) return;
        totalCompleted += taskIds.length;
        daysStudied.add(dateStr);
        allActivityDates.add(dateStr);
        const date = new Date(dateStr + "T12:00:00");
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
    if (allActivityDates.has(k)) {
      streak++;
    } else if (i === 0) {
      continue;
    } // allow missing today
    else break;
  }

  // recent tasks
  recentActivity.sort((a, b) => b.dateStr.localeCompare(a.dateStr));
  const recentTasks = [];
  outer: for (const { dateStr, taskIds, project } of recentActivity) {
    for (const taskId of [...taskIds].reverse()) {
      const dayData = project.days?.find((d) =>
        d.tasks.some((t) => t.id === taskId),
      );
      const task =
        dayData?.tasks.find((t) => t.id === taskId) ||
        project.dailyTasks?.find((t) => t.id === taskId);
      if (task) {
        recentTasks.push({
          title: task.title,
          projectName: project.name,
          color: project.color,
          dateStr,
        });
        if (recentTasks.length >= 5) break outer;
      }
    }
  }

  // milestone
  const nextMilestone =
    MILESTONES.find((m) => m.at > totalCompleted) ||
    MILESTONES[MILESTONES.length - 1];
  const prevMilestone = MILESTONES.slice()
    .reverse()
    .find((m) => m.at <= totalCompleted);
  const milestoneProgress = prevMilestone
    ? totalCompleted - prevMilestone.at
    : totalCompleted;
  const milestoneTotal = prevMilestone
    ? nextMilestone.at - prevMilestone.at
    : nextMilestone.at;

  // today's focus (last visited project)
  const lastId = localStorage.getItem("last_project");
  const lastProject =
    projects.find((p) => p.id === lastId && !p.checklistMode) || null;
  let todaysTasks = [];
  if (lastProject) {
    try {
      const data =
        JSON.parse(localStorage.getItem(lastProject.storageKey)) || {};
      const dayNum = dayForDate(data.startDate, today);
      if (dayNum) {
        const dayData = lastProject.days[dayNum - 1];
        const completed = data.completed?.[today] || [];
        todaysTasks = [...dayData.tasks, ...lastProject.dailyTasks].map(
          (t) => ({
            ...t,
            done: completed.includes(t.id),
          }),
        );
      }
    } catch {}
  }

  // interview readiness
  const ivProject = projects.find((p) => p.checklistMode);
  const ivReadiness = [];
  if (ivProject) {
    try {
      const data = JSON.parse(localStorage.getItem(ivProject.storageKey)) || {};
      const done = data.completed?.["checklist"] || [];
      ivProject.categories.slice(0, 3).forEach((cat) => {
        const total = cat.tasks.length;
        const catDone = cat.tasks.filter((t) => done.includes(t.id)).length;
        ivReadiness.push({
          label: cat.title,
          pct: Math.round((catDone / total) * 100),
          color: ivProject.color,
        });
      });
    } catch {}
  }

  // achievements
  const achievements = [
    {
      id: "first",
      label: "First Task",
      icon: "✓",
      color: "#22c55e",
      earned: totalCompleted >= 1,
    },
    {
      id: "streak7",
      label: "7-Day Streak",
      icon: "🔥",
      color: "#f59e0b",
      earned: streak >= 7,
    },
    {
      id: "fifty",
      label: "50 Lessons",
      icon: "📚",
      color: "#a78bfa",
      earned: totalCompleted >= 50,
    },
    {
      id: "sql",
      label: "SQL Starter",
      icon: "🗄",
      color: "#3b82f6",
      earned: (() => {
        try {
          const d = JSON.parse(localStorage.getItem("project_sql_v1")) || {};
          return !!d.startDate;
        } catch {
          return false;
        }
      })(),
    },
  ];

  // recommended next path
  let recommended = null;
  const notStarted = projects.filter((p) => {
    if (p.checklistMode) return false;
    try {
      const d = JSON.parse(localStorage.getItem(p.storageKey)) || {};
      return !d.startDate;
    } catch {
      return false;
    }
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
    return {
      label: getDayLabel(i),
      key: k,
      active: allActivityDates.has(k),
      isPast,
    };
  });

  return {
    totalCompleted,
    daysStudied: daysStudied.size,
    weeklyCompleted,
    streak,
    nextMilestone,
    milestoneProgress,
    milestoneTotal,
    todaysTasks,
    lastProject,
    recentTasks,
    ivReadiness,
    achievements,
    recommended,
    weekActivity,
    level: getLevel(totalCompleted * XP_PER_TASK),
  };
}

export function getProjectProgress(project) {
  try {
    const data = JSON.parse(localStorage.getItem(project.storageKey)) || {};
    if (project.checklistMode) {
      const allIds = project.categories.flatMap((c) =>
        c.tasks.map((t) => t.id),
      );
      const done = (data.completed?.["checklist"] || []).length;
      return {
        started: done > 0,
        percent: Math.min(100, Math.round((done / allIds.length) * 100)),
      };
    }
    if (!data.startDate) return { started: false, percent: 0 };
    const total = project.days.length * (2 + project.dailyTasks.length);
    let done = 0;
    Object.values(data.completed || {}).forEach((l) => {
      done += l.length;
    });
    return {
      started: true,
      percent: Math.min(100, Math.round((done / total) * 100)),
    };
  } catch {
    return { started: false, percent: 0 };
  }
}
