// PDE 闯关 — 关卡数据
export const LEVELS = [
  {
    id: 1,
    emoji: "🚀",
    title: "点亮你的名字",
    tag: "热更新体验",
    desc: "打开 src/App.jsx，把页面上的文字改成你的名字，按下保存——浏览器不需要刷新，它自己变了。",
    steps: [
      "用 Claude Code 打开 src/App.jsx",
      "找到 <h1> 标签，把内容改成你的名字",
      "保存文件（Cmd+S）",
      "回到浏览器，看到变化了吗？",
    ],
    acceptance: "浏览器页面显示你的名字",
    xp: 100,
  },
  {
    id: 2,
    emoji: "🧱",
    title: "造你的第一个组件",
    tag: "组件化思维",
    desc: "React 的核心是组件。在 src/components/ 下新建一个 NameCard.jsx，展示你的名字和职位。",
    steps: [
      "在 src/ 下新建文件夹 components/",
      "创建 NameCard.jsx，包含名字和职位",
      "在 App.jsx 里引入并使用这个组件",
      "看到效果",
    ],
    acceptance: "页面上出现你自己写的 NameCard 组件",
    xp: 200,
  },
  {
    id: 3,
    emoji: "🎨",
    title: "让它好看起来",
    tag: "CSS 样式",
    desc: "给你的 NameCard 加上背景色、圆角、阴影。前端的视觉魔法，就是一行一行 CSS 堆出来的。",
    steps: [
      "创建 NameCard.css 或直接在 JSX 里写 style",
      "加背景色和 padding",
      "加圆角（border-radius）和阴影（box-shadow）",
      "调整字体大小",
    ],
    acceptance: "NameCard 有明显的视觉样式，不是光秃秃的文字",
    xp: 200,
  },
  {
    id: 4,
    emoji: "📡",
    title: "接入真实数据",
    tag: "前后端联调",
    desc: "用 fetch 调用本地后端的 /api/progress 接口，把进度数据显示在页面上。这就是前后端联调。",
    steps: [
      "确认后端服务运行在 3001 端口",
      "在组件里用 useEffect + fetch 调用接口",
      "把返回的数据渲染到页面",
      "打开 Network 面板，看到请求和响应",
    ],
    acceptance: "页面显示来自后端 API 的数据",
    xp: 300,
  },
  {
    id: 5,
    emoji: "🔀",
    title: "提交你的代码",
    tag: "Git 基础",
    desc: "把你写的代码提交到 Git。这是协作开发的基础——每一行改动都有记录，每一次提交都是一个节点。",
    steps: [
      "git config 配置你的名字和邮箱（第一次才需要）",
      "git add . 选定要提交的改动",
      "git commit -m '说明' 存一个存档点",
      "git push origin main 推送到 GitHub",
      "在 GitHub 上确认提交出现了",
    ],
    acceptance: "GitHub 仓库里能看到你的提交记录",
    xp: 200,
    guide: [
      {
        type: "text",
        content:
          "你刚才写的所有代码，目前只存在于你这台电脑上。电脑一坏、或者想给别人看，就全没了。Git 就是给代码拍快照——每提交一次就存一个存档点，随时能回到任何状态。这就是为什么团队协作离不开它。",
      },
      {
        type: "text",
        content: "第一次用 Git，要先告诉它你是谁（每次提交都会带上你的名字）：",
      },
      {
        type: "code",
        content:
          'git config --global user.name "你的名字"\ngit config --global user.email "你的邮箱"',
      },
      { type: "tip", content: "这条配置一辈子执行一次就行，以后所有项目都认这个身份。" },
      {
        type: "text",
        content: "配置好之后，提交代码就三步，记住这个节奏：选改动 → 存档 → 推送。",
      },
      { type: "label", content: "① 选定要提交的改动" },
      { type: "code", content: "git add ." },
      {
        type: "tip",
        content: "那个点表示「全部改动」。也可以写具体文件名，如 git add src/App.jsx。",
      },
      { type: "label", content: "② 存一个存档点" },
      { type: "code", content: 'git commit -m "feat: 完成闯关页面"' },
      {
        type: "tip",
        content:
          "-m 后面是这次改动的说明，写清楚改了什么，方便以后翻看。feat: 表示新增功能，是团队约定俗成的写法；改 bug 一般用 fix:。",
      },
      { type: "label", content: "③ 推送到 GitHub" },
      { type: "code", content: "git push origin main" },
      {
        type: "tip",
        content: "前两步只存在你本地。push 才是真正把代码传到 GitHub 云端，别人才能看到。",
      },
      {
        type: "text",
        content:
          "打开你的 GitHub 仓库页面刷新一下，应该能看到刚才那条提交记录，附带你的说明文字。看到了就成功了！",
      },
      {
        type: "warn",
        content:
          "如果 push 时弹窗要密码：GitHub 早就不接受密码登录了，需要用 Personal Access Token 或 SSH key。这是第一次最容易卡住的地方，直接把报错贴给 Claude Code 或问导师都能解决。",
      },
    ],
  },
  {
    id: 6,
    emoji: "🔃",
    title: "发起 PR",
    tag: "协作流程",
    desc: "新建一个分支，做一个小改动，然后在 GitHub 上发起 Pull Request。PR 是团队协作的标准动作。",
    steps: [
      "git checkout -b feature/my-pr",
      "做一个小改动（比如改个标题）",
      "push 到远端",
      "在 GitHub 上点 Compare & pull request",
    ],
    acceptance: "GitHub 上出现一个你发起的 PR",
    xp: 300,
  },
  {
    id: 7,
    emoji: "🚢",
    title: "上线！",
    tag: "部署上线",
    desc: "把你的项目部署到 Vercel，拿到一个 https:// 开头的真实线上地址，发给任何人都能打开。",
    steps: [
      "注册 / 登录 Vercel（用 GitHub 账号）",
      "Import 你的仓库",
      "点 Deploy，等待构建完成",
      "拿到线上地址，发到群里",
    ],
    acceptance: "能用 https:// 地址访问你的页面",
    xp: 400,
  },
];

export const TOTAL_XP = LEVELS.reduce((sum, l) => sum + l.xp, 0);
