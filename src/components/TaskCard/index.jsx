import { useState } from "react";
import s from "./TaskCard.module.css";

export default function TaskCard({
  task,
  done,
  onToggle,
  disabled,
  onAsk,
  onQuiz,
  onLeetCode,
  expandable,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (!disabled) {
      onToggle(task.id);
    }
  };

  const handleExpandClick = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // Check if task has details embedded
  const hasDetails = task.details && Object.keys(task.details).length > 0;

  return (
    <div className={s.cardWrapper} data-expanded={isExpanded}>
      <div
        className={s.card}
        data-done={done}
        data-disabled={disabled}
        onClick={handleCardClick}
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
          {expandable && (
            <button
              className={s.expandBtn}
              onClick={handleExpandClick}
              title={isExpanded ? "Collapse" : "Expand to add notes"}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={s.expandIcon}
                data-expanded={isExpanded}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
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

      {expandable && isExpanded && hasDetails && (
        <div className={s.expandedContent} onClick={(e) => e.stopPropagation()}>
          {task.details.keyConcepts && (
            <div className={s.docSection}>
              <div className={s.docLabel}>Key Concepts</div>
              <div className={s.docContent}>{task.details.keyConcepts}</div>
            </div>
          )}

          {task.details.questions && (
            <div className={s.docSection}>
              <div className={s.docLabel}>Common Interview Questions</div>
              <div className={s.docContent}>{task.details.questions}</div>
            </div>
          )}

          {task.details.codeExample && (
            <div className={s.docSection}>
              <div className={s.docLabel}>Code Examples</div>
              <pre className={s.codeBlock}>{task.details.codeExample}</pre>
            </div>
          )}

          {task.details.complexity && (
            <div className={s.docSection}>
              <div className={s.docLabel}>Complexity</div>
              <div className={s.complexityBadge}>{task.details.complexity}</div>
            </div>
          )}

          {task.details.resources && (
            <div className={s.docSection}>
              <div className={s.docLabel}>Resources</div>
              <div className={s.docContent}>{task.details.resources}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
