import { DAYS as JS_DAYS, DAILY_TASKS as JS_DAILY } from './schedules/js';
import { DAYS as SQL_DAYS, DAILY_TASKS as SQL_DAILY } from './schedules/sql';
import { CATEGORIES as IV_CATEGORIES } from './schedules/interview';

export const PROJECTS = [
  {
    id: 'js',
    name: 'JavaScript',
    icon: 'JS',
    subtitle: 'Mid to Senior JS Developer',
    duration: 84,
    storageKey: 'project_js_v1',
    color: '#f59e0b',
    topics: ['Event Loop & Closures', 'Prototypes & this', 'TypeScript', 'Design Patterns', 'Performance & Testing'],
    days: JS_DAYS,
    dailyTasks: JS_DAILY,
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'SQL',
    subtitle: 'Database Mastery',
    duration: 84,
    storageKey: 'project_sql_v1',
    color: '#3b82f6',
    topics: ['SQL Fundamentals', 'Joins & Relationships', 'Window Functions', 'Indexes & Optimization', 'Database Design'],
    days: SQL_DAYS,
    dailyTasks: SQL_DAILY,
  },
  {
    id: 'interview',
    name: 'Interview Prep',
    icon: '✦',
    subtitle: 'Senior Level — One-Day Checklist',
    storageKey: 'project_interview_v1',
    color: '#10b981',
    checklistMode: true,
    topics: ['DSA Patterns', 'System Design', 'JavaScript Deep Dive', 'Behavioral (STAR)', 'Mock Interview'],
    categories: IV_CATEGORIES,
  },
];
