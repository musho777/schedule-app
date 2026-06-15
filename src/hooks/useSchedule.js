import { useState, useCallback } from 'react';

function localKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function todayKey() {
  return localKey(new Date());
}

function parseLocalDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function dayForDate(startDate, dateStr) {
  if (!startDate) return null;
  const start = parseLocalDate(startDate);
  const target = parseLocalDate(dateStr);
  const diffDays = Math.floor((target - start) / (1000 * 60 * 60 * 24));
  if (diffDays < 0 || diffDays >= 84) return null;
  return diffDays + 1; // 1–84
}

export function useSchedule(storageKey) {
  const [state, setState] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; }
    catch { return {}; }
  });

  const persist = useCallback((next) => {
    setState(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  }, [storageKey]);

  const setStartDate = useCallback((date) => {
    persist({ ...state, startDate: date });
  }, [state, persist]);

  const resetStartDate = useCallback(() => {
    persist({ ...state, startDate: null });
  }, [state, persist]);

  const toggleTask = useCallback((id, dateStr = todayKey()) => {
    const completed = { ...(state.completed || {}) };
    const dayList = [...(completed[dateStr] || [])];
    const idx = dayList.indexOf(id);
    if (idx === -1) dayList.push(id);
    else dayList.splice(idx, 1);
    completed[dateStr] = dayList;
    persist({ ...state, completed });
  }, [state, persist]);

  const currentDay = dayForDate(state.startDate, todayKey());

  const resetCompleted = useCallback(() => {
    persist({ ...state, completed: {} });
  }, [state, persist]);

  return {
    startDate: state.startDate,
    currentDay,
    completedMap: state.completed || {},
    setStartDate,
    resetStartDate,
    resetCompleted,
    toggleTask,
  };
}
