# MyEdSpace — Growth Marketer Assessment

Welcome, and thanks for taking the time. This isn't a coding test — it's a thinking-and-shipping test. We want to see how you work with modern AI tooling to take a brief and turn it into a converting landing page.

## The role this tests for

Growth marketer. You don't need to be able to hand-write React. You **do** need to be able to:

- Read a brief critically and spot what's missing or wrong
- Translate growth psychology into concrete page decisions
- Drive an AI coding agent (Claude Code) to ship production output
- Sanity-check and iterate on what the agent gives you
- Hold the line on conversion thinking when the AI gets distracted

## What you'll build

A US-market landing page for MyEdSpace, an online live-class math tutoring platform. It needs to convert cold paid traffic into $7 trial signups without a sales call.

Everything you need is in this repo:

- **`BRIEF.md`** — the product brief, copy, brand tokens, must-haves
- **`docs/GROWTH_PRINCIPLES.md`** — ten growth psychology principles, each mapped to a specific implementation on the page
- **`docs/WIREFRAME.md`** — page structure and section order from the design team
- **`CLAUDE.md`** — project context that Claude Code will auto-load

## How to do this assessment

1. Clone this repo
2. Read everything in `BRIEF.md`, `docs/`, and `CLAUDE.md` before touching the code
3. Open Claude Code in the repo root: `claude`
4. Build the landing page in `app/page.tsx`
5. Push your work to a new branch and send us the link

There is no time limit. Ship it when you'd be comfortable showing it to a CMO.

## What we're evaluating

We are **not** evaluating whether you wrote the code yourself. Use Claude Code freely.

We **are** evaluating:

- **Prompting quality** — how you decompose the work, what context you give the agent, how you correct it
- **Critical reading of the brief** — does it have errors? Does it have gaps? Did you catch them?
- **Conversion thinking** — every decision should be defensible from a CRO standpoint
- **Growth psychology application** — the ten principles should be visible in the page, not just listed
- **Self-checkout completeness** — a parent should be able to convert without needing to talk to anyone
- **Polish & taste** — the page should feel professional, not AI-generated

## Deliverables

In your PR or a `NOTES.md` file at root, briefly cover:

1. Anything in the brief you'd push back on or change
2. Three or four prompts you sent to Claude Code that meaningfully shaped the output
3. The single biggest conversion lever you implemented and why
4. What you'd ship next if you had another day

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

Next.js 14 (app router), Tailwind CSS, TypeScript. The brand tokens are already wired into `tailwind.config.ts`. You shouldn't need to install anything else, though you're free to.

---

If anything is genuinely blocking you (not "I'd like more info" — actually blocking), email the hiring manager. Otherwise, make a call and document it in `NOTES.md`. Making good calls under ambiguity is part of what we're hiring for.

Good luck.
