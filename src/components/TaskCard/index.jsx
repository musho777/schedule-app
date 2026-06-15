import s from "./TaskCard.module.css";

export default function TaskCard({
  task,
  done,
  onToggle,
  disabled,
  onAsk,
  onQuiz,
  onLeetCode,
}) {
  return (
    <div
      className={s.card}
      data-done={done}
      data-disabled={disabled}
      onClick={() => !disabled && onToggle(task.id)}
    >
      <div className={s.checkbox} data-done={done} data-disabled={disabled}>
        {done && (
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
            <path
              d="M1.5 5L5 8.5L11.5 1.5"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div className={s.content}>
        <div className={s.title} data-done={done} data-disabled={disabled}>
          {task.title}
        </div>
        <div className={s.time}>{task.time}</div>
        <span className={s.tag} data-type={task.tag}>
          {task.tag}
        </span>
      </div>

      <div className={s.btnGroup}>
        {task.tag === "leetcode" ? (
          onLeetCode && (
            <button
              className={s.lcBtn}
              onClick={(e) => {
                e.stopPropagation();
                onLeetCode(task);
              }}
              title="Get LeetCode problems"
            >
              {"</>"} LC
            </button>
          )
        ) : (
          <>
            {onAsk && (
              <button
                className={s.aiBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  onAsk(task);
                }}
                title="Ask AI about this task"
              >
                ✦ AI
              </button>
            )}
            {onQuiz && (
              <button
                className={s.quizBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  onQuiz(task);
                }}
                title="Take a quiz on this task"
              >
                ✎ Quiz
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
