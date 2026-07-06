import { useState, useEffect } from "react";
import { LEVELS, TOTAL_XP } from "./data/levels";
import LevelCard from "./components/LevelCard";
import LevelDetail from "./components/LevelDetail";
import ProgressBar from "./components/ProgressBar";
import Leaderboard from "./components/Leaderboard";
import "./App.css";

// 从 localStorage 读取已通关的关卡 id 列表
function loadDone() {
  try {
    return JSON.parse(localStorage.getItem("pde_done") || "[]");
  } catch {
    return [];
  }
}

export default function App() {
  const [done, setDone] = useState(loadDone);          // 已通关 id 数组
  const [selected, setSelected] = useState(null);      // 当前弹窗关卡
  const [userName, setUserName] = useState(
    localStorage.getItem("pde_name") || ""
  );
  const [editingName, setEditingName] = useState(!localStorage.getItem("pde_name"));

  // 排行榜刷新的触发器（通关后通知排行榜重新拉数据）
  const [syncTick, setSyncTick] = useState(0);

  // 同步到 localStorage
  useEffect(() => {
    localStorage.setItem("pde_done", JSON.stringify(done));
  }, [done]);

  // ⭐ 第 4 关联调：把本地进度 POST 到后端
  async function syncToServer(doneIds) {
    if (!userName) return;
    try {
      await fetch("http://localhost:3001/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, done: doneIds }),
      });
      // 同步成功后，通知排行榜刷新
      setSyncTick((t) => t + 1);
    } catch (err) {
      // 后端没启动时静默失败，不影响本地体验
      console.warn("进度同步失败（后端可能未启动）:", err.message);
    }
  }

  // 标记通关
  function handleComplete(id) {
    if (!done.includes(id)) {
      const next = [...done, id];
      setDone(next);
      // ⭐ 通关后把进度同步到后端
      syncToServer(next);
    }
    setSelected(null);
  }

  // 保存名字
  function saveName(e) {
    e.preventDefault();
    if (!userName.trim()) return;
    localStorage.setItem("pde_name", userName.trim());
    setEditingName(false);
  }

  // 计算进度
  const earnedXP = LEVELS.filter((l) => done.includes(l.id)).reduce(
    (s, l) => s + l.xp,
    0
  );

  // 判断关卡状态
  function getStatus(level) {
    if (done.includes(level.id)) return "done";
    // 第 1 关始终 active；后续关卡需要前一关通关
    if (level.id === 1 || done.includes(level.id - 1)) return "active";
    return "locked";
  }

  const selectedStatus = selected ? getStatus(selected) : null;

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="header">
        <div className="header__inner">
          <div className="header__brand">
            <span className="header__logo">⚔️</span>
            <div>
              <h1 className="header__title">PDE 闯关</h1>
              <p className="header__sub">用一次真实动手，建立对 AI 开发的信心</p>
            </div>
          </div>

          {/* 用户名 */}
          {editingName ? (
            <form className="name-form" onSubmit={saveName}>
              <input
                className="name-input"
                placeholder="输入你的名字开始闯关"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
              />
              <button className="name-submit" type="submit">开始 →</button>
            </form>
          ) : (
            <div className="user-badge" onClick={() => setEditingName(true)}>
              <span className="user-badge__avatar">
                {userName.slice(0, 1).toUpperCase()}
              </span>
              <span className="user-badge__name">{userName}</span>
              <span className="user-badge__xp">{earnedXP} XP</span>
            </div>
          )}
        </div>
      </header>

      {/* ── Main ── */}
      <main className="main">
        {/* 进度条 */}
        <ProgressBar
          current={earnedXP}
          total={TOTAL_XP}
          doneCount={done.length}
          levelCount={LEVELS.length}
        />

        {/* ⭐ 第 4 关联调：排行榜（GET /api/leaderboard） */}
        <Leaderboard
          key={syncTick}
          myName={userName}
          myDoneCount={done.length}
        />

        {/* 关卡列表 */}
        <section className="levels">
          <h2 className="levels__heading">全部关卡</h2>
          <div className="levels__list">
            {LEVELS.map((level) => (
              <LevelCard
                key={level.id}
                level={level}
                status={getStatus(level)}
                onClick={setSelected}
              />
            ))}
          </div>
        </section>

        {/* 全部通关庆祝 */}
        {done.length === LEVELS.length && (
          <div className="congrats">
            <span className="congrats__trophy">🏆</span>
            <h2>全部通关！</h2>
            <p>
              恭喜 {userName}，你已经完整跑了一遍前端全栈开发链路。
              <br />你现在知道 AI 开发工具能干什么了。
            </p>
            <p className="congrats__xp">共获得 {earnedXP} XP</p>
          </div>
        )}
      </main>

      {/* ── 关卡详情弹窗 ── */}
      <LevelDetail
        level={selected}
        status={selectedStatus}
        onClose={() => setSelected(null)}
        onComplete={handleComplete}
      />
    </div>
  );
}
