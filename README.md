# MyEdSpace US Homepage — Growth Marketer Assessment

## Goal

Build a US-market landing page that converts cold paid traffic into $7 trial signups, without a sales call. This is a thinking-and-shipping test, not a coding test. We want to see how you drive an AI coding agent to take a brief and turn it into a converting page.

## Audience

A growth marketer who can:

- Read a brief critically and spot what's missing or wrong
- Translate growth psychology into concrete page decisions
- Drive Claude Code to ship production output
- Sanity-check and iterate on what the agent gives you
- Hold the line on conversion thinking when the AI gets distracted

You do not need to hand-write React.

## What you'll build

A US-market landing page for MyEdSpace, an online live-class math tutoring platform. It needs to convert cold paid traffic (Google Ads, Meta) from US parents into $7 trial signups.

## Must-read before you start

- **`BRIEF.md`** — product brief, copy, brand tokens, must-haves
- **`docs/GROWTH_PRINCIPLES.md`** — ten growth psychology principles mapped to specific page implementations
- **`docs/WIREFRAME.md`** — page structure and section order from the design team
- **`CLAUDE.md`** — project context auto-loaded by Claude Code

## How to ship

1. Clone the repo
2. Run `npm i` to install dependencies before doing anything else
3. Read everything in `BRIEF.md`, `docs/`, and `CLAUDE.md` before touching code
4. Open Claude Code in the repo root: `claude` — and use the **best LLM you have access to** (Claude Opus, GPT-5 Pro, etc.). This is a test of taste and judgment under the best tools available; don't handicap yourself with a smaller model.
5. Build the landing page in `app/page.tsx`
6. Push your work to a new branch and send us the link

No time limit. Ship it when you'd be comfortable showing it to a CMO.

## Setup

```bash
npm i
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 14 (app router)
- Tailwind CSS
- TypeScript
- Brand tokens already wired in `tailwind.config.ts`
- Inter font already wired in `app/layout.tsx`

You shouldn't need to install anything else, though you're free to.

## What we're evaluating

We are **not** evaluating whether you wrote the code yourself. Use Claude Code freely.

We **are** evaluating:

- **Prompting quality** — how you decompose the work, what context you give the agent, how you correct it
- **Critical reading of the brief** — does it have errors? Gaps? Did you catch them?
- **Conversion thinking** — every decision defensible from a CRO standpoint
- **Growth psychology application** — the ten principles visible on the page, not just listed
- **Self-checkout completeness** — a parent can convert without talking to anyone
- **Polish & taste** — feels professional, not AI-generated

## Deliverables

In your PR or a `NOTES.md` file at root, briefly cover:

1. Anything in the brief you'd push back on or change
2. Three or four prompts you sent to Claude Code that meaningfully shaped the output
3. The single biggest conversion lever you implemented and why
4. What you'd ship next if you had another day

## If you're blocked

Genuinely blocking — not "I'd like more info" — email the hiring manager. Otherwise, make a call and document it in `NOTES.md`. Making good calls under ambiguity is part of what we're hiring for.

Good luck.
