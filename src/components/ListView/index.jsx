import TaskCard from '../TaskCard';
import ProgressBar from '../ProgressBar';
import s from './ListView.module.css';

const LIST_KEY = 'list';

const MONTH_NAMES = ['Month 1', 'Month 2', 'Month 3'];

export default function ListView({ project, completedMap, toggleTask, setAiTask, setQuizTask, setLcTask }) {
  const completed = completedMap[LIST_KEY] || [];

  const allTaskIds = project.days.flatMap(d => d.tasks.map(t => t.id));
  const totalTasks = allTaskIds.length;
  const doneCount = allTaskIds.filter(id => completed.includes(id)).length;

  const months = [1, 2, 3].map(m => ({
    month: m,
    weeks: [...new Set(project.days.filter(d => d.month === m).map(d => d.week))].map(w => ({
      week: w,
      days: project.days.filter(d => d.month === m && d.week === w),
    })),
  }));

  return (
    <div className={s.container}>
      <div className={s.progressHeader}>
        <span className={s.progressText}>{doneCount} / {totalTasks} tasks completed</span>
        <span className={s.progressPct}>{totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0}%</span>
      </div>
      <ProgressBar done={doneCount} total={totalTasks} />

      {months.map(({ month, weeks }) => (
        <div key={month} className={s.monthBlock}>
          <div className={s.monthLabel}>{MONTH_NAMES[month - 1]}</div>

          {weeks.map(({ week, days }) => (
            <div key={week} className={s.weekBlock}>
              <div className={s.weekLabel}>Week {week}</div>

              {days.map(dayData => {
                const dayDone = dayData.tasks.filter(t => completed.includes(t.id)).length;
                const dayTotal = dayData.tasks.length;
                const allDone = dayDone === dayTotal;

                return (
                  <div key={dayData.day} className={`${s.dayBlock} ${allDone ? s.dayDone : ''}`}>
                    <div className={s.dayHeader}>
                      <span className={s.dayNum}>Day {dayData.day}</span>
                      <span className={s.dayProgress}>{dayDone}/{dayTotal}</span>
                    </div>
                    {dayData.tasks.map(task => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        done={completed.includes(task.id)}
                        disabled={false}
                        onToggle={id => toggleTask(id, LIST_KEY)}
                        onAsk={setAiTask}
                        onQuiz={setQuizTask}
                        onLeetCode={setLcTask}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}

      <div className={s.dailySection}>
        <div className={s.monthLabel}>Daily Habits</div>
        {project.dailyTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            done={completed.includes(task.id)}
            disabled={false}
            onToggle={id => toggleTask(id, LIST_KEY)}
            onAsk={setAiTask}
            onQuiz={setQuizTask}
            onLeetCode={setLcTask}
          />
        ))}
      </div>
    </div>
  );
}
