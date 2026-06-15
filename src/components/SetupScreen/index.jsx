import { useState } from 'react';
import s from './SetupScreen.module.css';

export default function SetupScreen({ onConfirm }) {
  const _d = new Date();
  const today = `${_d.getFullYear()}-${String(_d.getMonth()+1).padStart(2,'0')}-${String(_d.getDate()).padStart(2,'0')}`;
  const [date, setDate] = useState(today);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>When did you start?</h2>
      <p className={s.subtitle}>Set your start date so I can show the right week's tasks.</p>
      <input
        type="date"
        className={s.input}
        value={date}
        max={today}
        onChange={e => setDate(e.target.value)}
      />
      <button className={s.btn} onClick={() => onConfirm(date)}>
        Start my journey
      </button>
    </div>
  );
}
