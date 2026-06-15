import { useNavigate } from "react-router-dom";
import s from "../ProjectsScreen.module.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={s.header}>
      <h1 className={s.logo}>DevPath</h1>
      <button className={s.playgroundBtn} onClick={() => navigate("/playground")}>
        ⚡ Playground
      </button>
      <div className={s.user}>
        <div className={s.avatar}>MP</div>
        <span className={s.userName}>Mush Poghosyan</span>
      </div>
    </header>
  );
};
