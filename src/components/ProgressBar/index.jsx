import s from './ProgressBar.module.css';

export default function ProgressBar({ done, total }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <span className={s.label}>Today's progress</span>
        <span className={s.count}>{done} / {total} done</span>
      </div>
      <div className={s.track}>
        <div className={s.fill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
