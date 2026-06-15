import s from "../ProjectsScreen.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>DevPath</h1>
      <div className={s.user}>
        <div className={s.avatar}>MP</div>
        <span className={s.userName}>Mush Poghosyan</span>
      </div>
    </header>
  );
};
