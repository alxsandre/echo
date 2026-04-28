@AGENTS.md

# Echo — Project Guide

## Project

Sound-sharing platform where users publish recorded sounds, create sonic albums, and browse a social feed. Emphasis on minimalism, nostalgia, and emotional resonance.

## Tech stack

- **Next.js 16** (App Router) — read `node_modules/next/dist/docs/` before writing code
- **React 19** with Server Components by default; add `'use client'` only for interactivity
- **TypeScript** strict mode
- **Tailwind CSS v4** (CSS-first, no config file — `@import "tailwindcss"` + `@theme` in `globals.css`)
- **next/font/google** for Cormorant Garamond (display) and DM Sans (UI)

## Project structure

```
src/
  app/                        # Next.js App Router routes
    globals.css               # Design tokens, @theme bridge, keyframes
    layout.tsx                # Root layout with fonts and metadata
    page.tsx                  # / → Mon espace
    feed/
      page.tsx                # /feed → Fil d'actualité
  components/
    atoms/                    # Stateless or minimal-state UI primitives
    molecules/                # Combinations of atoms with local logic
    organisms/                # Complex sections with significant state/behavior
  data/                       # Static mock data (typed, importable)
  types/                      # Shared TypeScript interfaces
  hooks/                      # Shared React hooks (e.g. useAudioProgress)
```

**Rule:** store project files in top-level folders inside `src/` (not colocated with app routes unless private `_folder`).

## Component conventions

Follow **Atomic Design**:

| Level     | Description                                           | Examples                            |
| --------- | ----------------------------------------------------- | ----------------------------------- |
| atoms     | No or trivial state, no child components              | `Waveform`, `PlayButton`            |
| molecules | Combine atoms, manage local UI state                  | `SoundRow`, `AlbumCard`, `FeedItem` |
| organisms | Complex, manage significant state or routing concerns | `Nav`, `NewAlbumModal`              |

- Client components: add `'use client'` at the top when using hooks or event handlers
- Server components: default (no directive) — use for static layout wrapping
- Before writing inline SVG, check `atoms/Icon.tsx` — add the icon there if missing
- Before duplicating avatar markup, use `atoms/Avatar.tsx` (sizes: `sm` 30px, `md` 32px, `lg` 64px)
- Before duplicating stateful logic across components, extract a hook in `src/hooks/`

## Styling — Tailwind first

**Always prefer Tailwind utility classes over inline styles.**

Tailwind CSS v4 design tokens are bridged via `@theme inline` in `globals.css`:

| Tailwind class              | CSS variable     | Value                                        |
| --------------------------- | ---------------- | -------------------------------------------- |
| `bg-bg` / `text-bg`         | `--bg`           | `oklch(10% 0.015 55)` dark background        |
| `bg-bg2`                    | `--bg2`          | `oklch(14% 0.015 55)` card background        |
| `bg-bg3`                    | `--bg3`          | `oklch(18% 0.016 55)` input/inner background |
| `border-border`             | `--border`       | `oklch(22% 0.012 55)`                        |
| `text-text`                 | `--text`         | `oklch(90% 0.01 70)` cream text              |
| `text-muted`                | `--text-muted`   | `oklch(55% 0.01 70)`                         |
| `text-accent` / `bg-accent` | `--accent`       | `oklch(72% 0.14 72)` amber/gold              |
| `font-display`              | `--font-display` | Cormorant Garamond, italic                   |
| `font-ui`                   | `--font-ui`      | DM Sans                                      |
| `rounded-card`              | `--radius-card`  | 12px                                         |
| `animate-fade-up`           | —                | `fadeUp 0.5s ease both`                      |
| `animate-fade-in`           | —                | `fadeIn 0.2s ease both`                      |
| `animate-pulse-bar`         | —                | `pulse 0.7s ease-in-out infinite`            |
| `animate-pulse-bar-delayed` | —                | `pulse 0.7s ease-in-out infinite 0.2s`       |
| `bg-bg-nav`                 | `--bg-nav`       | `oklch(10% 0.015 55 / 0.92)` translucent nav |

**Hover/focus via Tailwind variants** — never use `onMouseEnter`/`onMouseLeave` or `onFocus`/`onBlur` to toggle styles:

```tsx
// ✅ correct
<button className="text-muted hover:text-accent transition-colors duration-150" />
<input className="border-border focus:border-accent outline-none" />

// ❌ avoid
onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
```

**Tailwind first, always.** Use Tailwind utility classes for everything — including arbitrary values (`[animation-delay:0.32s]`, `w-[2.5px]`) and conditional classes (`${cond ? 'max-h-[120px]' : 'max-h-0'}`).

**Inline styles are a last resort**, only when the value is truly dynamic runtime data that cannot be known at build time:

- `style={{ background: album.color }}` — color from data/state
- `style={{ animationDelay: \`${index \* 0.08}s\` }}` — computed from a variable

Never use inline styles for static values, CSS variables, or binary conditional states.

Light theme is set via `[data-theme="light"]` on the root element; all CSS variables update automatically.

## Coding conventions

- No comments unless the WHY is non-obvious
- No test files unless explicitly requested
- No error boundaries or loading states unless explicitly requested
