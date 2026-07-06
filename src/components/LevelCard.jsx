import "./LevelCard.css";

// 单张关卡卡片
export default function LevelCard({ level, status, onClick }) {
  // status: 'done' | 'active' | 'locked'
  const statusLabel = { done: "已通关", active: "进行中", locked: "未解锁" };
  const statusClass = { done: "done", active: "active", locked: "locked" };

  return (
    <div
      className={`level-card ${statusClass[status]}`}
      onClick={() => status !== "locked" && onClick(level)}
    >
      <div className="level-card__left">
        <span className="level-card__num">#{level.id}</span>
        <span className="level-card__emoji">{level.emoji}</span>
      </div>
      <div className="level-card__body">
        <div className="level-card__header">
          <h3 className="level-card__title">{level.title}</h3>
          <span className="level-card__tag">{level.tag}</span>
        </div>
        <p className="level-card__desc">{level.desc}</p>
        <div className="level-card__footer">
          <span className="level-card__xp">+{level.xp} XP</span>
          <span className={`level-card__status status--${statusClass[status]}`}>
            {statusLabel[status]}
          </span>
        </div>
      </div>
    </div>
  );
}
