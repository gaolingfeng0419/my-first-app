import "./ProgressBar.css";

export default function ProgressBar({ current, total, doneCount, levelCount }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span className="progress-label">
          总进度 · {doneCount}/{levelCount} 关
        </span>
        <span className="progress-xp">
          {current} / {total} XP
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-pct">{pct}%</div>
    </div>
  );
}
