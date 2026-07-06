import "./LevelDetail.css";

// 关卡详情弹窗
export default function LevelDetail({ level, status, onClose, onComplete }) {
  if (!level) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* 顶部 */}
        <div className="modal__top">
          <button className="modal__close" onClick={onClose}>✕</button>
          <div className="modal__hero">
            <span className="modal__emoji">{level.emoji}</span>
            <div>
              <p className="modal__num">第 {level.id} 关 · {level.tag}</p>
              <h2 className="modal__title">{level.title}</h2>
            </div>
          </div>
        </div>

        {/* 任务说明 */}
        <div className="modal__body">
          <p className="modal__desc">{level.desc}</p>

          <h4 className="modal__section-title">📋 操作步骤</h4>
          <ol className="modal__steps">
            {level.steps.map((s, i) => (
              <li key={i} className="modal__step">
                <span className="modal__step-dot">{i + 1}</span>
                <code className="modal__step-text">{s}</code>
              </li>
            ))}
          </ol>

          {/* 详细引导（可选） */}
          {level.guide && (
            <div className="modal__guide">
              <h4 className="modal__section-title">📖 详细引导</h4>
              <div className="modal__guide-body">
                {level.guide.map((block, i) => {
                  if (block.type === "text")
                    return (
                      <p key={i} className="modal__guide-text">
                        {block.content}
                      </p>
                    );
                  if (block.type === "label")
                    return (
                      <p key={i} className="modal__guide-label">
                        {block.content}
                      </p>
                    );
                  if (block.type === "code")
                    return (
                      <pre key={i} className="modal__guide-code">
                        <code>{block.content}</code>
                      </pre>
                    );
                  if (block.type === "tip")
                    return (
                      <div key={i} className="modal__callout modal__callout--tip">
                        <span className="modal__callout-icon">💡</span>
                        <span>{block.content}</span>
                      </div>
                    );
                  if (block.type === "warn")
                    return (
                      <div key={i} className="modal__callout modal__callout--warn">
                        <span className="modal__callout-icon">⚠️</span>
                        <span>{block.content}</span>
                      </div>
                    );
                  return null;
                })}
              </div>
            </div>
          )}

          <div className="modal__acceptance">
            <span className="modal__acceptance-icon">✅</span>
            <div>
              <p className="modal__acceptance-label">通关条件</p>
              <p className="modal__acceptance-text">{level.acceptance}</p>
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="modal__footer">
          <span className="modal__xp-badge">+{level.xp} XP</span>
          {status === "done" ? (
            <button className="modal__btn modal__btn--done" disabled>
              ✓ 已通关
            </button>
          ) : (
            <button className="modal__btn modal__btn--primary" onClick={() => onComplete(level.id)}>
              ✔ 标记通关
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
