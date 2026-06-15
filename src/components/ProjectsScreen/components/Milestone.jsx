import s from "../ProjectsScreen.module.css";

export default function Milestone({ nextMilestone, milestoneProgress, milestoneTotal }) {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardHeaderIcon}>🏆</span>
        <span className={s.cardHeaderTitle}>Upcoming Milestone</span>
      </div>
      <div className={s.milestoneBody}>
        <div className={s.milestoneLeft}>
          <span className={s.milestoneName}>{nextMilestone.label}</span>
          <span className={s.milestoneReward}>
            Reward: {nextMilestone.reward}
          </span>
          <div className={s.milestoneBarBg}>
            <div
              className={s.milestoneBarFill}
              style={{
                width: `${Math.round((milestoneProgress / milestoneTotal) * 100)}%`,
              }}
            />
          </div>
          <span className={s.milestonePct}>
            {milestoneProgress} / {milestoneTotal} completed
          </span>
        </div>
        <div className={s.milestoneBadge}>★</div>
      </div>
    </div>
  );
}
