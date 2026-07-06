// PDE 闯关 — 后端服务（Express）
// 运行: node server/index.js

import express from "express";
import cors from "cors";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_FILE = join(__dirname, "db.json");
const PORT = 3001;

// ── 简易 JSON 数据库 ──────────────────────────────────────────
function readDB() {
  if (!existsSync(DB_FILE)) return { users: {} };
  try { return JSON.parse(readFileSync(DB_FILE, "utf-8")); }
  catch { return { users: {} }; }
}

function writeDB(data) {
  writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// ── Express 应用 ───────────────────────────────────────────────
const app = express();
app.use(cors());
app.use(express.json());

// GET /api/progress?name=xxx  — 获取某用户进度
app.get("/api/progress", (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: "缺少 name 参数" });

  const db = readDB();
  const user = db.users[name] || { name, done: [], earnedXP: 0 };
  res.json({ ok: true, user });
});

// POST /api/progress  — 更新进度 { name, done: [1,2,3] }
app.post("/api/progress", (req, res) => {
  const { name, done } = req.body;
  if (!name || !Array.isArray(done)) {
    return res.status(400).json({ error: "参数错误" });
  }

  const db = readDB();
  db.users[name] = { name, done, updatedAt: new Date().toISOString() };
  writeDB(db);
  res.json({ ok: true });
});

// GET /api/leaderboard  — 排行榜（按通关数降序）
app.get("/api/leaderboard", (req, res) => {
  const db = readDB();
  const board = Object.values(db.users)
    .map((u) => ({ name: u.name, doneCount: u.done.length }))
    .sort((a, b) => b.doneCount - a.doneCount)
    .slice(0, 20);
  res.json({ ok: true, board });
});

// GET /api/ping  — 健康检查
app.get("/api/ping", (_req, res) => {
  res.json({ ok: true, message: "PDE 闯关后端运行中 🚀" });
});

app.listen(PORT, () => {
  console.log(`\n✅ 后端服务启动: http://localhost:${PORT}`);
  console.log("   GET  /api/ping");
  console.log("   GET  /api/progress?name=xxx");
  console.log("   POST /api/progress");
  console.log("   GET  /api/leaderboard\n");
});
