# 海外版上线指南（GitHub: leonardlxl）

费用：**免费**（GitHub + Vercel Hobby 计划）

---

## 第一步：登录 GitHub（只需做一次）

打开终端，运行：

```powershell
cd C:\Users\xinglong.li\Projects\teyvat-closet-intl
gh auth login
```

按提示选择：

1. `GitHub.com`
2. `HTTPS`
3. `Login with a web browser`
4. 浏览器里用账号 **leonardlxl** 授权

---

## 第二步：推送代码到 GitHub

```powershell
cd C:\Users\xinglong.li\Projects\teyvat-closet-intl
gh repo create teyvat-closet-intl --public --source=. --remote=origin --push
```

成功后仓库地址：

**https://github.com/leonardlxl/teyvat-closet-intl**

（若仓库名已存在，可改成 `teyvat-closet-global`）

---

## 第三步：Vercel 免费部署

1. 打开 https://vercel.com ，用 **GitHub（leonardlxl）** 登录  
2. 点击 **Add New → Project**  
3. 选择仓库 `teyvat-closet-intl`  
4. Framework 会自动识别为 **Next.js**，直接点 **Deploy**  
5. 等待 1–3 分钟，得到公网地址，例如：

   `https://eonalab.vercel.app`（在 Vercel 把项目名改为 `eonalab` 或添加该域名）

把这个链接发给别人即可访问。

**重要：** Settings → Deployment Protection → 关闭，否则访客会看到「Login to Vercel」。

---

## 第四步（可选）：环境变量

在 Vercel → Project → Settings → Environment Variables 添加：

| 变量名 | 值 |
|--------|-----|
| `NEXT_PUBLIC_PRIMARY_URL` | `https://eonalab.vercel.app` |
| `NEXT_PUBLIC_MIRROR_URL` | `https://leonardlxl.github.io/eona/` |
| `NEXT_PUBLIC_CN_SITE_URL` | 中文版地址（若以后有） |

添加后 **Redeploy** 一次。

---

## 替换首页视频（上线后）

把 MP4 放进仓库 `public/videos/hero.mp4`，然后：

```powershell
git add public/videos/hero.mp4
git commit -m "Add hero video"
git push
```

Vercel 会自动重新部署。

---

## 当前本地状态

- 代码已 `git commit` 完成  
- 还差：**gh 登录 → 推送到 GitHub → Vercel Deploy**

有问题可在 Cursor Agent 模式说「帮我执行 gh push」。
