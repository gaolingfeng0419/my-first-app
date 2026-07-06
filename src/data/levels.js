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
    guide: [
      {
        type: "text",
        content:
          "这一关让你体验前端最神奇的一刻：改代码、保存，浏览器自己就变了——不用刷新、不用重启。这叫「热更新」（HMR）。一旦用过就回不去了。",
      },
      { type: "label", content: "① 打开源文件" },
      {
        type: "text",
        content:
          "在 Claude Code 里直接说「打开 src/App.jsx」，或用编辑器找到这个文件。它是整个页面的入口，你看到的闯关主页就长在它里面。",
      },
      { type: "label", content: "② 找到标题，改成你的名字" },
      {
        type: "code",
        content: '// 找到这一行（约第 95 行）\n<h1 className="header__title">PDE 闯关</h1>\n\n// 改成\n<h1 className="header__title">张三的闯关</h1>',
      },
      { type: "label", content: "③ 保存，看浏览器" },
      {
        type: "text",
        content:
          "按 Cmd+S（Mac）保存。切回浏览器——标题已经变了，整个过程不到 1 秒。这就是热更新在干活。",
      },
      {
        type: "tip",
        content:
          "为什么不用刷新？Vite 在后台盯着你的文件，一保存就把改动精确推给浏览器，只替换变的那一块。所以你改一个字，页面其它状态（比如已选中的关卡）都不会丢。",
      },
      {
        type: "warn",
        content:
          "如果保存后没反应：① 确认终端里 npm run dev 还在跑（没被关掉）；② 看终端有没有红色报错，有的话贴给 Claude Code 看。",
      },
    ],
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
    guide: [
      {
        type: "text",
        content:
          "React 的核心思想是「组件」——把一块 UI（比如一张名片）封装成一个可复用的零件。这一关你亲手造一个 NameCard 组件，理解什么叫组件化。",
      },
      {
        type: "tip",
        content:
          "为什么组件化？想象页面是个乐高积木拼出来的，每个组件是一块积木。想在哪用就在哪放，改一处所有地方都跟着变。复杂的页面就是这样一块块拼出来的。",
      },
      { type: "label", content: "① 建组件文件" },
      {
        type: "text",
        content: "在 src/ 下新建 components 文件夹，再在里面新建 NameCard.jsx。路径：src/components/NameCard.jsx",
      },
      { type: "label", content: "② 写组件代码" },
      {
        type: "code",
        content: '// src/components/NameCard.jsx\nexport default function NameCard() {\n  return (\n    <div>\n      <h2>张三</h2>\n      <p>产品经理</p>\n    </div>\n  );\n}',
      },
      {
        type: "tip",
        content:
          "一个组件就是一个返回 JSX（长得像 HTML 的 JS）的函数。函数名必须大写开头——这是 React 的规矩，小写它不认。export default 表示这个组件能被别处引入。",
      },
      { type: "label", content: "③ 在 App.jsx 里用它" },
      {
        type: "code",
        content: '// src/App.jsx 顶部加引入\nimport NameCard from "./components/NameCard";\n\n// 在 return 里某处放上\n<NameCard />',
      },
      {
        type: "tip",
        content:
          "用组件就像用 HTML 标签：<NameCard />。React 会把这里替换成你组件返回的那段 div。保存后浏览器立刻出现你的名片——这就是组件化的第一次握手。",
      },
      {
        type: "warn",
        content:
          "如果报错「Attempted import error」或页面白屏：八成是路径写错了。NameCard.jsx 在 src/components/ 下，从 App.jsx 引入就是 \"./components/NameCard\"（注意 ./ 不能少，.jsx 后缀可省）。",
      },
    ],
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
    guide: [
      {
        type: "text",
        content:
          "上一关你的 NameCard 是光秃秃的文字。前端另一大块就是 CSS——给元素上色、留白、加阴影。这一关给你的名片穿上衣服。",
      },
      {
        type: "tip",
        content:
          "CSS 三件套：背景色（background）、圆角（border-radius）、阴影（box-shadow）。记住这三个，任何东西都能做出卡片质感。",
      },
      { type: "label", content: "① 在 NameCard 里写 style" },
      {
        type: "code",
        content: '// src/components/NameCard.jsx\nexport default function NameCard() {\n  return (\n    <div style={{\n      background: "#fff",\n      padding: "20px",\n      borderRadius: "12px",\n      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",\n      display: "inline-block"\n    }}>\n      <h2 style={{ margin: 0 }}>张三</h2>\n      <p style={{ margin: "4px 0 0", color: "#888" }}>产品经理</p>\n    </div>\n  );\n}',
      },
      {
        type: "tip",
        content:
          "React 里写 style 要用两层花括号：外层是 JSX 语法，内层是 JS 对象。属性名用驼峰（borderRadius 不是 border-radius），值是字符串。",
      },
      { type: "label", content: "② 保存，看效果" },
      {
        type: "text",
        content:
          "保存后，名片变成白底、圆角、带阴影的卡片，有质感多了。改改颜色、圆角数值，多试几个值感受一下——CSS 就是这么调出来的。",
      },
      {
        type: "tip",
        content:
          "嫌内联 style 乱？正规做法是另建 NameCard.css 文件，用 className 写样式，就像项目里 LevelCard 那样。内联 style 适合练手和快速试验。",
      },
      {
        type: "warn",
        content:
          "如果样式没生效：检查属性名是不是驼峰（如 boxShadow 不是 box-shadow），值是不是字符串（如 \"12px\" 不是 12px）。这两个是最常见的坑。",
      },
    ],
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
    guide: [
      {
        type: "text",
        content:
          "前面你的页面数据都是写死在前端代码里的。真实世界的数据来自「后端接口」（API）——前端发请求，后端返数据，前端把数据画出来。这一关就是打通这一环。",
      },
      {
        type: "tip",
        content:
          "其实这个项目已经帮你接好了：页面上方的「📊 闯关排行榜」就是在调后端接口。这一关你重点是把它们读懂，再去 Network 面板亲眼看一次请求过程。",
      },
      { type: "label", content: "① 确认后端在跑" },
      {
        type: "code",
        content: "# 新开一个终端，启动后端\nnpm run server\n\n# 看到「✅ 后端服务启动: http://localhost:3001」就成了",
      },
      {
        type: "tip",
        content:
          "前端（npm run dev，5173）和后端（npm run server，3001）是两个独立服务，得各开一个终端同时跑。这是全栈开发的常态。",
      },
      { type: "label", content: "② 看懂 fetch 请求" },
      {
        type: "code",
        content: '// 排行榜组件里这段就是请求\nconst res = await fetch("http://localhost:3001/api/leaderboard");\nconst data = await res.json();\nsetBoard(data.board);  // 把数据存进 state，页面就更新',
      },
      {
        type: "tip",
        content:
          "fetch 就是浏览器自带的「发请求」函数。await res.json() 把响应体解析成 JS 对象。setBoard 一调用，React 自动重新渲染页面——数据就显示出来了。",
      },
      { type: "label", content: "③ 去 Network 面板亲眼看一次" },
      {
        type: "text",
        content:
          "浏览器按 F12 → Network 标签页 → 刷新页面。你会看到一条对 leaderboard 的请求，点开它：Headers 是请求信息、Response 是后端返回的 JSON 数据。这就是前后端联调的全部真相。",
      },
      { type: "label", content: "④ 触发一次 POST 请求" },
      {
        type: "text",
        content:
          "随便点开一关标记通关，回到 Network 面板，会看到一条对 /api/progress 的 POST 请求——这是把你的进度同步给后端。点开 Payload 标签，能看到你发送的数据。",
      },
      {
        type: "warn",
        content:
          "如果排行榜显示「请求失败」：后端没启动。回到终端确认 npm run server 在跑、能看到 3001 端口。前端报错会友好提示你这一点，别慌。",
      },
    ],
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
      "在 GitHub 上建一个空仓库 my-first-app",
      "git remote add origin 关联远端仓库",
      "git push -u origin main 推送到 GitHub",
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
      { type: "label", content: "③ 在 GitHub 建一个空仓库" },
      {
        type: "text",
        content:
          "打开 github.com → 右上角 + → New repository，名字填 my-first-app，其它都不用勾，直接 Create。注意：千万别勾「Add a README」，否则仓库就不是空的，后面 push 会冲突。",
      },
      { type: "tip", content: "建完 GitHub 会给你一段命令，但你只需要下面两步。" },

      { type: "label", content: "④ 关联远端仓库" },
      {
        type: "code",
        content:
          'git remote add origin https://github.com/你的用户名/my-first-app.git',
      },
      {
        type: "tip",
        content:
          "这句是把「本地仓库」和「GitHub 仓库」连起来，origin 是远端的别名（约定俗成叫 origin）。用 https 地址最简单；配过 SSH key 也可以换成 git@github.com:你的用户名/my-first-app.git。",
      },

      { type: "label", content: "⑤ 推送到 GitHub" },
      { type: "code", content: "git push -u origin main" },
      {
        type: "tip",
        content:
          "前三步只存在你本地。push 才是真正把代码传到 GitHub 云端。-u 是记住关联，以后直接 git push 不用再写全名。",
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
      "git checkout -b 新分支名 新建分支并切过去",
      "做一个小改动（比如改个标题）",
      "git add . && git commit -m '说明' 提交",
      "git push -u origin 新分支名 推到远端",
      "在 GitHub 上点 Compare & pull request",
      "填好标题和说明，点 Create pull request",
    ],
    acceptance: "GitHub 上出现一个你发起的 PR",
    xp: 300,
    guide: [
      {
        type: "text",
        content:
          "上一关你直接在 main 分支上提交——这对一个人练手没问题。但团队协作时，谁也不会直接改主分支，而是先开一个「分支」上去改，改完发一个「PR」让队友审过再合并。这就叫 Pull Request 工作流。",
      },
      {
        type: "tip",
        content:
          "为什么用分支？分支就像平行宇宙：你在分支里怎么折腾都不会影响 main，改坏了直接扔掉，改好了再合并回去。团队再多人同时开发也不会互相踩。",
      },
      { type: "label", content: "① 新建并切换到分支" },
      { type: "code", content: "git checkout -b feature/change-title" },
      {
        type: "tip",
        content:
          "checkout -b = 建分支 + 切过去，一步到位。分支名随便起，但要有意义，比如 feature/改了什么、fix/修了什么。现在你在 feature/change-title 分支上，main 保持原样。",
      },
      { type: "label", content: "② 做一个小改动" },
      {
        type: "text",
        content:
          "打开 src/App.jsx，找到 header__title 那一行，把「PDE 闯关」改成「我的 PDE 闯关」，保存。就是个练习，改什么都行。",
      },
      { type: "label", content: "③ 在分支上提交" },
      { type: "code", content: 'git add .\ngit commit -m "feat: 修改页面标题"' },
      {
        type: "tip",
        content:
          "和上一关一模一样的两步，只是这次提交落在你的分支上，main 还不知道有这个改动。",
      },
      { type: "label", content: "④ 把分支推到 GitHub" },
      { type: "code", content: "git push -u origin feature/change-title" },
      {
        type: "tip",
        content:
          "因为是新分支，远端还没有，push 时 GitHub 会自动帮你建。push 完终端会打印一个关键链接——「Create a pull request」那条，直接点它。",
      },
      { type: "label", content: "⑤ 在 GitHub 上发起 PR" },
      {
        type: "text",
        content:
          "如果你没留意那个链接也没关系：打开 GitHub 仓库页面，会自动弹出一个黄色的「Compare & pull request」按钮，点它。",
      },
      {
        type: "tip",
        content:
          "PR 页面会让你填标题和说明。标题写改了什么（如「修改页面标题」），说明写为什么改。写得清楚，队友才好审。填完点绿色的 Create pull request。",
      },
      {
        type: "text",
        content:
          "看到 PR 页面出现，状态是「Open」——恭喜，你的第一个 PR 发出去了！这就是团队协作的标准动作：在自己的分支改 → 发 PR → 别人 review → 合并进 main。",
      },
      {
        type: "warn",
        content:
          "如果 GitHub 没弹「Compare & pull request」按钮：去仓库的 Pull requests 标签页 → New pull request → 上方 base 选 main、compare 选你的分支 → Create。一样能发。",
      },
    ],
  },
  {
    id: 7,
    emoji: "🚢",
    title: "上线！",
    tag: "部署上线",
    desc: "把你的项目部署到 Vercel，拿到一个 https:// 开头的真实线上地址，发给任何人都能打开。",
    steps: [
      "用 GitHub 账号登录 vercel.com",
      "点 Add New → Project，Import 你的 my-first-app 仓库",
      "确认框架是 Vite（自动识别），点 Deploy",
      "等 1 分钟构建完成，拿到 https:// 地址",
      "把地址发到群里，让大家打开看看",
    ],
    acceptance: "能用 https:// 地址访问你的页面",
    xp: 400,
    guide: [
      {
        type: "text",
        content:
          "前面六关，你的页面只有自己电脑上能打开。这一关，把它部署到云端——拿到一个 https:// 开头的地址，发到微信群里，任何人点开都能看到。这就是「上线」。",
      },
      {
        type: "tip",
        content:
          "为什么用 Vercel？它是免费的、不用配服务器、和 GitHub 打通——代码一 push，自动重新上线。是前端项目最主流的部署方式。",
      },
      { type: "label", content: "① 用 GitHub 账号登录 Vercel" },
      {
        type: "text",
        content:
          "打开 vercel.com，点右上角 Sign Up / Log In，选 Continue with GitHub。授权一下，不用单独注册——你的 GitHub 账号就是 Vercel 账号。",
      },
      { type: "label", content: "② Import 你的仓库" },
      {
        type: "text",
        content:
          "登录后点右上角 Add New → Project，会列出你 GitHub 的所有仓库。找到 my-first-app，点旁边的 Import。",
      },
      {
        type: "tip",
        content:
          "如果列表里没有你的仓库：点下方「Adjust GitHub App Permissions」，给 Vercel 授权访问那个仓库，刷新就有了。",
      },
      { type: "label", content: "③ 确认配置，点 Deploy" },
      {
        type: "text",
        content:
          "Vercel 会自动认出这是 Vite 项目，框架预设、构建命令、输出目录都帮你填好了，什么都不用改。直接点大蓝色的 Deploy 按钮。",
      },
      {
        type: "tip",
        content:
          "页面会跳到一个带有进度条的部署页，等大约 1 分钟。看到满屏撒花（Confetti）和「Congratulations」就是成功了。",
      },
      { type: "label", content: "④ 拿到你的线上地址" },
      {
        type: "text",
        content:
          "部署成功后，页面上会有一个 Visit 按钮，点开就是你线上活生生的页面。地址长这样：my-first-app-xxx.vercel.app，复制下来。",
      },
      {
        type: "tip",
        content:
          "以后每次你 git push 到 GitHub main 分支，Vercel 会自动重新部署——不用你手动操作。这就是「持续部署」（CD）。",
      },
      { type: "label", content: "⑤ 发到群里，完成闯关" },
      {
        type: "text",
        content:
          "把你的 https:// 地址发到群里，让同学点开看看。从第一行代码到现在上线，你完整跑了一遍前端全栈开发的全链路 🎉",
      },
      {
        type: "warn",
        content:
          "线上版只有前端（闯关页面），本地后端（排行榜 / 进度接口）没上线。所以线上打开后，排行榜区域会显示「请求失败」——这是正常的，说明前端联调代码在认真工作、只是线上连不到你本机的后端。不影响你完成这关，先体验「前端上线」即可。",
      },
    ],
  },
];

export const TOTAL_XP = LEVELS.reduce((sum, l) => sum + l.xp, 0);
