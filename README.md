# Teyvat Closet — International (EN)

Global English storefront for Genshin-inspired anime fashion.

## vs Chinese site

| | **teyvat-closet** (CN) | **teyvat-closet-intl** (Global) |
|---|---|---|
| Language | 中文 | English |
| Currency | ¥ CNY-style | $ USD |
| Port | 3000 | 3001 |
| Font | Noto Sans SC | Inter |

Both sites share the same visual style and product slugs.

## Run locally

```bash
cd teyvat-closet-intl
npm install
npm run dev
```

Open http://localhost:3001

## Customize

| What | File |
|------|------|
| Products | `src/data/products.ts` |
| Images | `public/images/` |
| Copy / footer | `src/components/Footer.tsx`, `src/app/about/page.tsx` |

## Deploy

- **Vercel** — recommended for Next.js
- **Netlify** — Next.js runtime plugin

### Language switcher (production)

Copy `.env.example` to `.env.local` and set your real domains:

```env
NEXT_PUBLIC_CN_SITE_URL=https://cn.yourdomain.com
NEXT_PUBLIC_INTL_SITE_URL=https://www.yourdomain.com
```

Deploy each project as a separate Vercel site with its own env vars.

Fan-made demo · Not affiliated with HoYoverse.
