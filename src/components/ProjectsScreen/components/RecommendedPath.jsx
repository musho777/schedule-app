import { useNavigate } from "react-router-dom";
import s from "../ProjectsScreen.module.css";

export default function RecommendedPath({ recommended }) {
  const navigate = useNavigate();

  if (!recommended) return null;

  return (
    <div className={s.recommendCard}>
      <div className={s.recommendIcon}>💡</div>
      <div className={s.recommendBody}>
        <span className={s.recommendLabel}>Recommended Next Path</span>
        <span
          className={s.recommendName}
          style={{ color: recommended.color }}
        >
          {recommended.name} → {recommended.subtitle}
        </span>
        <span className={s.recommendHint}>Based on your current progress</span>
      </div>
      <button
        className={s.recommendBtn}
        onClick={() => navigate(`/project/${recommended.id}`)}
      >
        Explore Path →
      </button>
    </div>
  );
}
