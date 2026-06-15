import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSchedule, todayKey, dayForDate } from '../../hooks/useSchedule';
import TaskCard from '../TaskCard';
import ProgressBar from '../ProgressBar';
import SetupScreen from '../SetupScreen';
import CalendarSlider from '../CalendarSlider';
import AnalyticsModal from '../AnalyticsModal';
import AiModal from '../AiModal';
import QuizModal from '../QuizModal';
import LeetCodeModal from '../LeetCodeModal';
import ListView from '../ListView';
import ChecklistView from '../ChecklistView';
import s from './ProjectView.module.css';

const DAY_LABELS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTH_LABELS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function formatSelected(dateStr) {
  const d = new Date(dateStr);
  d.setHours(12);
  if (dateStr === todayKey()) return 'Today';
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (dateStr === todayKey().replace(/\d+$/, n => String(Number(n) - 1).padStart(2, '0'))) return 'Yesterday';
  return `${DAY_LABELS[d.getDay()]}, ${MONTH_LABELS[d.getMonth()]} ${d.getDate()}`;
}

export default function ProjectView({ project }) {
  const navigate = useNavigate();
  useEffect(() => { localStorage.setItem('last_project', project.id); }, [project.id]);
  const { startDate, currentDay, completedMap, setStartDate, resetStartDate, resetCompleted, toggleTask } =
    useSchedule(project.storageKey);

  const [selectedDate, setSelectedDate] = useState(todayKey);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [aiTask, setAiTask] = useState(null);
  const [quizTask, setQuizTask] = useState(null);
  const [lcTask, setLcTask] = useState(null);

  const dayNum = project.checklistMode ? null : dayForDate(startDate, selectedDate);
  const dayData = dayNum ? project.days[dayNum - 1] : null;
  const allTasks = dayData ? [...dayData.tasks, ...project.dailyTasks] : [];

  const completedForSelected = completedMap[selectedDate] || [];
  const doneCount = allTasks.filter(t => completedForSelected.includes(t.id)).length;
  const allDone = allTasks.length > 0 && doneCount === allTasks.length;

  const isToday = selectedDate === todayKey();
  const tasksDisabled = !isToday;

  return (
    <div className={s.app}>
      <header className={s.header}>
        <div className={s.headerLeft}>
          <button className={s.backBtn} onClick={() => navigate('/')}>← Projects</button>
          <h1 className={s.headerTitle} style={{ color: project.color }}>
            {project.name} Path
          </h1>
        </div>
        {!project.checklistMode && (
          <div className={s.headerRight}>
            <span className={s.weekBadge} style={{ color: project.color, borderColor: project.color + '44', background: project.color + '18' }}>
              {currentDay ? `Day ${currentDay} / ${project.duration}` : `Day — / ${project.duration}`}
            </span>
            {startDate && (
              <button className={s.analyticsBtn} onClick={() => setShowAnalytics(true)}>
                Analytics
              </button>
            )}
          </div>
        )}
      </header>

      {showAnalytics && (
        <AnalyticsModal
          completedMap={completedMap}
          startDate={startDate}
          onClose={() => setShowAnalytics(false)}
        />
      )}
      {aiTask && <AiModal task={aiTask} onClose={() => setAiTask(null)} />}
      {quizTask && <QuizModal task={quizTask} onClose={() => setQuizTask(null)} />}
      {lcTask && <LeetCodeModal task={lcTask} onClose={() => setLcTask(null)} />}

      {!project.listMode && !project.checklistMode && startDate && (
        <div className={s.calendarWrapper}>
          <CalendarSlider
            startDate={startDate}
            selectedDate={selectedDate}
            completedMap={completedMap}
            totalTasks={allTasks.length || 4}
            onSelectDate={setSelectedDate}
          />
        </div>
      )}

      <main className={project.checklistMode || project.listMode ? s.mainFull : s.main}>
        {project.checklistMode ? (
          <ChecklistView
            project={project}
            completedMap={completedMap}
            toggleTask={toggleTask}
            onReset={resetCompleted}
            setAiTask={setAiTask}
            setLcTask={setLcTask}
          />
        ) : project.listMode ? (
          <ListView
            project={project}
            completedMap={completedMap}
            toggleTask={toggleTask}
            setAiTask={setAiTask}
            setQuizTask={setQuizTask}
            setLcTask={setLcTask}
          />
        ) : !startDate ? (
          <SetupScreen onConfirm={setStartDate} />
        ) : (
          <>
            <div className={s.dateRow}>
              <div>
                <div className={s.dateLabel}>{formatSelected(selectedDate)}</div>
                {!isToday && (
                  <button className={s.todayBtn} onClick={() => setSelectedDate(todayKey())}>
                    Back to today
                  </button>
                )}
              </div>
              {dayData && (
                <div className={s.dateInfo}>
                  Day {dayNum} · Week {dayData.week} · Month {dayData.month}
                </div>
              )}
            </div>

            <ProgressBar done={doneCount} total={allTasks.length} />

            {dayData && (
              <div className={s.weekCard}>
                <h2 className={s.weekCardTitle}>Day {dayNum} — Week {dayData.week}</h2>
                <p className={s.weekCardDesc}>
                  Month {dayData.month} of 3 · {allTasks.length - project.dailyTasks.length} focused tasks today
                </p>
              </div>
            )}

            {allDone ? (
              <div className={s.allDone}>
                <div className={s.allDoneEmoji}>🎉</div>
                <h2 className={s.allDoneTitle}>
                  {isToday ? 'All done for today!' : 'All tasks completed!'}
                </h2>
                <p className={s.allDoneText}>
                  {isToday ? 'Come back tomorrow and keep the streak going.' : 'Great work on this day.'}
                </p>
              </div>
            ) : (
              <>
                {dayData && (
                  <section className={s.section}>
                    <div className={s.sectionTitle}>Today's focus</div>
                    {dayData.tasks.map(task => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        done={completedForSelected.includes(task.id)}
                        disabled={tasksDisabled}
                        onToggle={id => toggleTask(id, selectedDate)}
                        onAsk={setAiTask}
                        onQuiz={setQuizTask}
                        onLeetCode={setLcTask}
                      />
                    ))}
                  </section>
                )}

                <section className={s.section}>
                  <div className={s.sectionTitle}>Daily routine</div>
                  {project.dailyTasks.map(task => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      done={completedForSelected.includes(task.id)}
                      disabled={tasksDisabled}
                      onToggle={id => toggleTask(id, selectedDate)}
                      onAsk={setAiTask}
                      onQuiz={setQuizTask}
                      onLeetCode={setLcTask}
                    />
                  ))}
                </section>
              </>
            )}

            <div className={s.footer}>
              <button className={s.resetBtn} onClick={resetStartDate}>
                Change start date
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
