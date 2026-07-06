import { useState, useEffect } from "react";
import "./Leaderboard.css";

// 排行榜组件 —— 第 4 关联调示例
// 调用后端 GET /api/leaderboard 拉取所有人进度
export default function Leaderboard({ myName, myDoneCount }) {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⭐ 关键：用 fetch 调用后端接口
  async function fetchBoard() {
    setLoading(true);
    setError(null);
    try {
      // 发起 GET 请求
      const res = await fetch("http://localhost:3001/api/leaderboard");

      // 检查 HTTP 状态码
      if (!res.ok) {
        throw new Error(`接口返回 ${res.status}`);
      }

      // 解析 JSON
      const data = await res.json();

      // 把数据存进 state
      setBoard(data.board);
    } catch (err) {
      // 网络错误、后端没启动都会走到这里
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // 组件挂载时自动请求一次
  useEffect(() => {
    fetchBoard();
  }, []);

  // 计算自己的排名
  const myRank = myName
    ? [...board].sort((a, b) => b.doneCount - a.doneCount)
        .findIndex((u) => u.name === myName)
    : -1;

  return (
    <section className="lb">
      <div className="lb__header">
        <h2 className="lb__title">📊 闯关排行榜</h2>
        <button className="lb__refresh" onClick={fetchBoard} disabled={loading}>
          {loading ? "刷新中…" : "↻ 刷新"}
        </button>
      </div>

      <p className="lb__hint">
        数据来自 <code>GET /api/leaderboard</code>（后端 3001 端口）
      </p>

      {/* loading 态 */}
      {loading && <div className="lb__state">加载中…</div>}

      {/* error 态 */}
      {error && (
        <div className="lb__state lb__state--error">
          <p>❌ 请求失败：{error}</p>
          <p className="lb__fix">
            确认后端已启动：<code>npm run server</code>
          </p>
        </div>
      )}

      {/* 成功：渲染列表 */}
      {!loading && !error && (
        <ul className="lb__list">
          {board.length === 0 && (
            <li className="lb__empty">还没有人提交进度，快来当第一名 🏁</li>
          )}
          {board.map((user, i) => {
            const isMe = user.name === myName;
            return (
              <li
                key={user.name}
                className={`lb__row ${isMe ? "lb__row--me" : ""}`}
              >
                <span className={`lb__rank ${i < 3 ? "lb__rank--top" : ""}`}>
                  {i < 3 ? ["🥇", "🥈", "🥉"][i] : `#${i + 1}`}
                </span>
                <span className="lb__name">
                  {user.name}
                  {isMe && <span className="lb__me-tag">（你）</span>}
                </span>
                <span className="lb__count">{user.doneCount} 关</span>
              </li>
            );
          })}
        </ul>
      )}

      {/* 自己的排名 */}
      {myName && myRank >= 0 && (
        <div className="lb__me">
          你的排名：第 <strong>{myRank + 1}</strong> 名 · 共 {myDoneCount} 关
        </div>
      )}
    </section>
  );
}
