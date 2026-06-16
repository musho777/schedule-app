import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjectProgress } from "../stats";
import s from "../ProjectsScreen.module.css";
import Button from "../../Button";

export default function ProjectsList({ projects }) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const INITIAL_DISPLAY_COUNT = 6;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreProjects = projects.length > INITIAL_DISPLAY_COUNT;

  return (
    <div className={s.projectsCard}>
      <div className={s.ProjectHeader}>
        <div className={s.sectionLabel}>Choose a learning path</div>
        {hasMoreProjects && (
          <Button
            variant="ghost"
            size="small"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
      <p className={s.sectionSub}>
        Each path is a structured curriculum. Your progress is saved
        independently.
      </p>
      <div className={s.projectList}>
        {displayedProjects.map((project) => {
          const progress = getProjectProgress(project);
          return (
            <button
              key={project.id}
              className={s.projectRow}
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ "--accent": project.color }}
            >
              <div
                className={s.projectRowIcon}
                style={{
                  background: project.color + "22",
                  color: project.color,
                }}
              >
                {project.icon}
              </div>
              <div className={s.projectRowBody}>
                <div className={s.projectRowTop}>
                  <span
                    className={s.projectRowName}
                    style={{ color: project.color }}
                  >
                    {project.name}
                  </span>
                  <span className={s.projectRowSub}>{project.subtitle}</span>
                </div>
                <div className={s.projectTopics}>
                  {project.topics.map((t, i) => (
                    <div key={i} className={s.topicItem}>
                      <div
                        className={`${s.topicDot} ${progress.started && i === 0 ? s.topicDotActive : ""}`}
                        style={
                          progress.started && i === 0
                            ? { background: project.color }
                            : {}
                        }
                      />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <div className={s.projectRowBottom}>
                  <span className={s.projectDuration}>
                    {project.checklistMode
                      ? "One-day checklist"
                      : `${project.duration} days`}
                  </span>
                  <span
                    className={s.projectPercent}
                    style={{
                      color: progress.started ? "#22c55e" : "#475569",
                    }}
                  >
                    {progress.started
                      ? `${progress.percent}% complete`
                      : "Not started"}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
