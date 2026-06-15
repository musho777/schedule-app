import s from "./ProjectsScreen.module.css";
import { getDailyQuote } from "./helpers";
import { getAllStats } from "./stats";
import StatsBar from "./components/StatsBar";
import TodaysFocus from "./components/TodaysFocus";
import QuoteCard from "./components/QuoteCard";
import WeeklyActivity from "./components/WeeklyActivity";
import Milestone from "./components/Milestone";
import RecentActivity from "./components/RecentActivity";
import InterviewReadiness from "./components/InterviewReadiness";
import Achievements from "./components/Achievements";
import ProjectsList from "./components/ProjectsList";
import RecommendedPath from "./components/RecommendedPath";
import { Header } from "./components/Header";

export default function ProjectsScreen({ projects }) {
  const stats = getAllStats(projects);
  const quote = getDailyQuote();

  return (
    <div className={s.screen}>
      <Header />
      <div className={s.dashboard}>
        <StatsBar stats={stats} />
        <div style={{ display: "flex", gap: 16 }}>
          <div className={s.leftCol}>
            <div className={s.colGrid}>
              <TodaysFocus
                lastProject={stats.lastProject}
                todaysTasks={stats.todaysTasks}
                projects={projects}
              />
              <div className={s.centerCol}>
                <QuoteCard quote={quote} />

                <div className={s.centerRow}>
                  <WeeklyActivity weekActivity={stats.weekActivity} />
                  <Milestone
                    nextMilestone={stats.nextMilestone}
                    milestoneProgress={stats.milestoneProgress}
                    milestoneTotal={stats.milestoneTotal}
                  />
                </div>
              </div>
            </div>
            <div>
              <ProjectsList projects={projects} />
            </div>
          </div>
          <div className={s.rightCol}>
            <RecentActivity recentTasks={stats.recentTasks} />
            <InterviewReadiness ivReadiness={stats.ivReadiness} />
            <Achievements achievements={stats.achievements} />
          </div>
        </div>

        <RecommendedPath recommended={stats.recommended} />
      </div>
    </div>
  );
}
