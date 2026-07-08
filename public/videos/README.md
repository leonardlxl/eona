# Hero Video

Replace the homepage fullscreen video with your own premium lookbook footage.

## Quick setup

1. Export your video as **MP4** (H.264 recommended)
2. Save as `public/videos/hero.mp4`
3. Optional: add a poster frame at `public/images/hero-poster.jpg` (shown before video loads)

Recommended specs:

| Property | Suggestion |
|----------|------------|
| Resolution | 1920 × 1080 (1080p) or 4K |
| Aspect | 16:9 landscape |
| Duration | 15–60 seconds (loops on homepage) |
| File size | Under 20 MB for fast loading |

## Fallback

If `hero.mp4` is missing, the browser shows the poster image. A demo video from Coverr is used as remote fallback in `HeroVideo.tsx` until you add your own file.

## Tips

- Use muted autoplay-friendly footage (no dialogue required)
- Fashion lookbook, slow pans, and outfit close-ups work best
- Keep text overlays out of the video — the site adds titles on top
