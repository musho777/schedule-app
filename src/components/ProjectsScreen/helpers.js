import { LEVEL_XP, LEVEL_TITLES, QUOTES } from "./constants";

// ── Level computation ─────────────────────────────────────────────────────
export function getLevel(xp) {
  let lvl = 1;
  for (let i = 1; i < LEVEL_XP.length; i++) {
    if (xp >= LEVEL_XP[i]) lvl = i + 1;
    else break;
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
export function localKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function todayKey() {
  return localKey(new Date());
}

export function getWeekStart() {
  const now = new Date();
  const diff = now.getDay() === 0 ? -6 : 1 - now.getDay();
  const m = new Date(now);
  m.setDate(now.getDate() + diff);
  m.setHours(0, 0, 0, 0);
  return m;
}

export function getDayLabel(offset) {
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][offset];
}

export function getDailyQuote() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const day = Math.floor((new Date() - start) / 86400000);
  return QUOTES[day % QUOTES.length];
}

export function formatRelDate(dateStr) {
  const today = todayKey();
  const yest = localKey(new Date(Date.now() - 86400000));
  if (dateStr === today) return "Just now";
  if (dateStr === yest) return "Yesterday";
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
