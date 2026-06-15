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

export default function ProjectsScreen({ projects }) {
  const stats = getAllStats(projects);
  const quote = getDailyQuote();

  return (
    <div className={s.screen}>
      {/* Header */}
      <header className={s.header}>
        <h1 className={s.logo}>DevPath</h1>
        <div className={s.user}>
          <div className={s.avatar}>MP</div>
          <span className={s.userName}>Mush Poghosyan</span>
        </div>
      </header>

      {/* Stats bar */}
      <StatsBar stats={stats} />

      {/* Dashboard */}
      <div className={s.dashboard}>
        {/* ── 3-column grid ── */}
        <div className={s.colGrid}>
          {/* Left: Today's Focus */}
          <div className={s.leftCol}>
            <TodaysFocus
              lastProject={stats.lastProject}
              todaysTasks={stats.todaysTasks}
              projects={projects}
            />
          </div>

          {/* Center: Quote + Weekly Activity + Milestone */}
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

          {/* Right: Recent Activity + Interview Readiness + Achievements */}
          <div className={s.rightCol}>
            <RecentActivity recentTasks={stats.recentTasks} />
            <InterviewReadiness ivReadiness={stats.ivReadiness} />
            <Achievements achievements={stats.achievements} />
          </div>
        </div>

        {/* Full-width: Choose a learning path */}
        <ProjectsList projects={projects} />

        {/* Full-width: Recommended */}
        <RecommendedPath recommended={stats.recommended} />
      </div>
    </div>
  );
}
