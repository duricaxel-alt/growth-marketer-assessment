# Claude Code Project Context

This file is auto-loaded by Claude Code at the start of every session in this repo. It describes the project so the agent has shared context without you having to paste it every time.

## Project

MyEdSpace US homepage — a single landing page targeting American parents whose kids need math help. Goal: convert cold paid traffic into $7 trial signups with no sales call required.

## Stack

- Next.js 14, app router, TypeScript
- Tailwind CSS — brand tokens wired in `tailwind.config.ts`
- Single-file build: everything goes in `app/page.tsx` for this assessment
- No external UI libraries unless absolutely necessary
- `lucide-react` is allowed for icons (already installed)

## Brand tokens (already in tailwind.config.ts)

- `brand-blue` — `#3333FF` — primary
- `brand-lime` — `#8BC400` — primary CTA
- `brand-amber` — `#E8A020` — accent
- `brand-dark` — `#1A1A2A` — text
- Font: Inter, already wired in `app/layout.tsx`

## Source of truth

When in doubt, the documents in this order win:

1. `docs/GROWTH_PRINCIPLES.md` — overrides anything else on UX/conversion mechanics
2. `BRIEF.md` — product copy, must-include details, brand
3. `docs/WIREFRAME.md` — section order and visual structure

If `BRIEF.md` and `GROWTH_PRINCIPLES.md` conflict, growth principles win. (The brief is older.)

## Conventions

- US English only. Not "revision guides" — "study guides". Not "+44" — "+1". Not "maths" — "math".
- Money is shown as `$149` not `$149.00`. Comparison anchors always show the higher number first.
- Don't use HTML `<form>` tags inside React components in this codebase — use button `onClick` handlers.
- Don't add any tracking scripts or analytics — that happens in a separate PR.
- Don't fabricate data. If reviews need names, use the ones in `docs/REVIEWS.json`. If a stat isn't in the brief, don't invent one.

## What "done" looks like

- `npm run dev` shows a polished, production-grade page at `/`
- All ten growth principles in `docs/GROWTH_PRINCIPLES.md` are visibly implemented
- A parent landing on this page from a Google ad can self-checkout without questions
- Page is responsive (mobile, tablet, desktop)
- No lint errors, no console errors, no broken images

## What is explicitly NOT in scope

- Backend / API routes (the form can `console.log` for now — wire-up happens in a separate PR)
- Internationalisation
- A/B testing variants
- Analytics or tracking
- The Arizona ESA / ClassWallet funnel (separate page, not this one)
