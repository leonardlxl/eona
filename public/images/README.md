# Image Replacement Guide

Drop your product images into the paths below. **Keep filenames the same** — no code changes needed.

## Recommended sizes

| File path | Size | Purpose |
|-----------|------|---------|
| `hero.jpg` | 1920 × 800 | Homepage hero banner |
| `collections/collection-1.jpg` | 600 × 400 | Collection card |
| `products/product-1.jpg` | 800 × 1000 | Product 1 main photo |
| … | 800 × 1000 | Additional products |

## Current setup

The site uses **placehold.co** URLs by default. After adding local images, update `src/data/products.ts`:

```typescript
images: ["/images/products/product-1.jpg"]
```

## Style tips

- Genshin anime aesthetic: bright sky blues, soft gradients, clean backgrounds
- Use 3:4 portrait ratio for product shots
- Hero image: wide scene or group shot works well
