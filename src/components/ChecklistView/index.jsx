import { useState } from 'react';
import TaskCard from '../TaskCard';
import s from './ChecklistView.module.css';

const LIST_KEY = 'checklist';

export default function ChecklistView({ project, completedMap, toggleTask, onReset, setAiTask, setLcTask }) {
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState({});
  const completed = completedMap[LIST_KEY] || [];

  const allTaskIds = project.categories.flatMap(c => c.tasks.map(t => t.id));
  const totalTasks = allTaskIds.length;
  const doneCount = allTaskIds.filter(id => completed.includes(id)).length;
  const percent = totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;

  const q = query.trim().toLowerCase();

  const filteredCategories = project.categories
    .map(cat => ({
      ...cat,
      tasks: q ? cat.tasks.filter(t => t.title.toLowerCase().includes(q)) : cat.tasks,
    }))
    .filter(cat => cat.tasks.length > 0);

  const toggleCollapse = (id) => {
    setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={s.container}>
      <div className={s.topBar}>
        <div className={s.progressInfo}>
          <span className={s.progressText}>{doneCount} / {totalTasks} checked</span>
          <div className={s.progressTrack}>
            <div className={s.progressFill} style={{ width: `${percent}%` }} />
          </div>
          <span className={s.progressPct}>{percent}%</span>
        </div>
        <button className={s.resetBtn} onClick={onReset}>Reset progress</button>
      </div>

      <div className={s.searchWrapper}>
        <span className={s.searchIcon}>⌕</span>
        <input
          className={s.searchInput}
          type="text"
          placeholder="Search tasks..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button className={s.clearBtn} onClick={() => setQuery('')}>✕</button>
        )}
      </div>

      {filteredCategories.length === 0 && (
        <div className={s.noResults}>No tasks match "{query}"</div>
      )}

      {filteredCategories.map(category => {
        const catDone = category.tasks.filter(t => completed.includes(t.id)).length;
        const catTotal = category.tasks.length;
        const allDone = catDone === catTotal && !q;
        const isCollapsed = !q && !!collapsed[category.id];

        return (
          <div key={category.id} className={s.category}>
            <button
              className={s.categoryHeader}
              onClick={() => toggleCollapse(category.id)}
            >
              <span className={s.categoryTitle}>{category.title}</span>
              <div className={s.categoryRight}>
                <span className={`${s.categoryCount} ${allDone ? s.allDone : ''}`}>
                  {catDone}/{catTotal}
                </span>
                <svg
                  className={`${s.chevron} ${isCollapsed ? s.chevronClosed : ''}`}
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            <div className={`${s.taskList} ${isCollapsed ? s.taskListCollapsed : ''}`}>
              <div className={s.taskListInner}>
                {category.tasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    done={completed.includes(task.id)}
                    disabled={false}
                    onToggle={id => toggleTask(id, LIST_KEY)}
                    onAsk={setAiTask}
                    onQuiz={null}
                    onLeetCode={setLcTask}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
