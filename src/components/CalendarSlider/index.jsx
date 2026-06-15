import { useRef, useEffect } from "react";
import s from "./CalendarSlider.module.css";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function toKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function parseLocalDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function buildDays(startDate) {
  const start = parseLocalDate(startDate);
  const end = new Date(start);
  end.setDate(end.getDate() + 83);
  const days = [];
  const cur = new Date(start);
  while (cur <= end) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return days;
}

function getDayState(isToday, isPast, isFuture, pct) {
  if (isToday) return "today";
  if (isFuture) return "future";
  return pct === 1 ? "done" : "missed";
}

export default function CalendarSlider({
  startDate,
  selectedDate,
  completedMap,
  totalTasks,
  onSelectDate,
}) {
  const scrollRef = useRef(null);
  const days = buildDays(startDate);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = toKey(today);

  useEffect(() => {
    if (!scrollRef.current) return;
    const idx = days.findIndex((d) => toKey(d) === selectedDate);
    if (idx === -1) return;
    const CELL = 64;
    const containerW = scrollRef.current.clientWidth;
    const target = idx * CELL - containerW / 2 + CELL / 2;
    scrollRef.current.scrollTo({
      left: Math.max(0, target),
      behavior: "smooth",
    });
  }, [selectedDate]); // eslint-disable-line

  return (
    <div className={s.wrapper}>
      <div className={s.strip} ref={scrollRef}>
        {days.map((day) => {
          const key = toKey(day);
          const isToday = key === todayKey;
          const isSelected = key === selectedDate;
          const isPast = day < today;
          const isFuture = day > today;
          const completedCount = (completedMap[key] || []).length;
          const pct = totalTasks > 0 ? completedCount / totalTasks : 0;
          const state = getDayState(isToday, isPast, isFuture, pct);

          const monthLabel =
            day.getDate() === 1 || day === days[0]
              ? MONTH_NAMES[day.getMonth()]
              : null;

          return (
            <div key={key} className={s.dayCol}>
              <div className={s.monthLabel}>{monthLabel}</div>
              <button
                className={s.dayBtn}
                data-state={state}
                data-selected={isSelected}
                onClick={() => onSelectDate(key)}
              >
                <span className={s.dayName}>{DAY_NAMES[day.getDay()]}</span>
                <span className={s.dayNumber}>{day.getDate()}</span>
                <span className={s.dot} data-state={state} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
