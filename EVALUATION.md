# Evaluation Rubric — Internal Use Only

> **Before sending this repo to a candidate**, either delete this file or move it to a private branch they don't see. It contains the planted gotchas and scoring criteria.

## How to score

Use a 1–5 scale on each dimension. A "ready to hire" candidate scores 4+ on every dimension and 5 on at least two. A "do not hire" scores 1–2 on more than one.

---

## Dimension 1 — Did they read the brief critically?

There are intentional inconsistencies and traps planted across `BRIEF.md`, `CLAUDE.md`, and `docs/`. Strong candidates catch them and either ask, fix, or document the call in `NOTES.md`. Weak candidates pipe everything verbatim into Claude Code without noticing.

### Planted gotchas

1. **Phone number trap.** `BRIEF.md` includes a phone field on the lead form (`Phone (with +1 prefix, placeholder 7XXX XXXXXX)`). `docs/GROWTH_PRINCIPLES.md` explicitly says phone does NOT belong on the lead form — it's collected post-checkout. The brief is older; growth principles win (and `CLAUDE.md` says so). A strong candidate either removes the phone field, flags the conflict in `NOTES.md`, or both.

2. **Schedule timezone trap.** `BRIEF.md` mentions schedule in the must-include copy without specifying timezones. `docs/WIREFRAME.md` calls out that the live page is currently PST-only and says explicitly "that's wrong, fix it" — schedule must show both PT and ET. Weak candidates miss this and ship PST-only times.

3. **The `7XXX XXXXXX` placeholder is a UK phone format.** US numbers are 10 digits, formatted `(555) 123-4567`. Even if the candidate keeps the phone field, the strongest ones catch this and fix the placeholder.

4. **Reviews source.** `BRIEF.md` says "use the reviews in `docs/REVIEWS.json` — do not invent new ones, do not pull from the UK Trustpilot page." If a candidate fabricates reviews or lets Claude Code hallucinate them, that's a fail signal — they're not reading instructions or not verifying agent output.

5. **The Venn / 3-column ordering.** `docs/WIREFRAME.md` specifies the comparison column order as `School · MyEdSpace · Private tutor` (left to right). `docs/GROWTH_PRINCIPLES.md #7` (anchoring) requires $640 to appear before $149. These are compatible (school is free → MyEdSpace $149 → tutor $640+), but on **mobile**, the wireframe says MyEdSpace stacks first. A strong candidate notices and implements both.

### Score this dimension

- **5** — caught 3+ gotchas, documented in NOTES.md
- **4** — caught 2 gotchas, fixed silently
- **3** — caught 1 gotcha
- **2** — fixed nothing, but the page works
- **1** — propagated the errors verbatim

---

## Dimension 2 — Prompting quality

Look at `NOTES.md` for the prompts they share, and at the git history if they committed iteratively.

Strong signals:
- Prompts include context ("the brief says X, the principles say Y, resolve in favour of Y")
- They scoped tasks ("build just the hero with the grade pill behaviour, don't touch the rest yet")
- They corrected the agent rather than accepting weak output
- They referenced specific files (`BRIEF.md`, `docs/GROWTH_PRINCIPLES.md`) in prompts
- They used Claude Code's project context (the existence of `CLAUDE.md`) deliberately

Weak signals:
- One giant prompt that pastes the whole brief
- No iteration visible in git history (one massive commit)
- No `NOTES.md` at all, or `NOTES.md` is empty
- Prompts are vague ("make it nice")

### Score this dimension

- **5** — clear evidence of decomposition, iteration, and correction
- **4** — competent prompting, some iteration
- **3** — got there but inefficiently
- **2** — one-shot prompts, accepted whatever came back
- **1** — couldn't drive the agent

---

## Dimension 3 — Growth psychology applied (not just listed)

Walk through `docs/GROWTH_PRINCIPLES.md` acceptance criteria against the live page. Each item is binary: implemented or not.

The acceptance checklist:
- [ ] Hero asks for one thing only
- [ ] Selecting a grade rewrites the H1
- [ ] Form pre-fills with selected grade + endowment preview card
- [ ] Phone number is NOT on the lead form
- [ ] $640 always before $149
- [ ] PISA above reviews
- [ ] Page ends with warm CTA, not stat
- [ ] Reviews have name, city, state, date
- [ ] Trustpilot score visible near every CTA
- [ ] Loss-aversion line near a form
- [ ] SAT 800 is a visual moment
- [ ] FAQ answers are complete

### Score this dimension

- **5** — 11–12 boxes ticked
- **4** — 9–10 ticked
- **3** — 7–8 ticked
- **2** — 5–6 ticked
- **1** — fewer than 5

---

## Dimension 4 — Self-checkout completeness

Open the page cold. Could a parent convert without questions? Test it:

- Are pricing terms clear (trial length, what happens on day 8, refund window)?
- Is timezone unambiguous?
- Does the FAQ answer the obvious objections (curriculum match, missed lessons, refund mechanics, parent involvement)?
- Is there a guarantee visible near the CTA?
- Is the schedule shown for the selected grade?

### Score this dimension

- **5** — I could buy without help
- **4** — minor questions but I'd still buy
- **3** — I'd hesitate
- **2** — I'd email support before paying
- **1** — I wouldn't trust the page

---

## Dimension 5 — Polish & taste

Eyeball it on desktop and mobile:
- Does it look professional or AI-generated?
- Is typography consistent? Spacing intentional?
- Are the brand tokens used cohesively, or is everything blue?
- Does the responsive behaviour hold up on a 375px screen?
- Are there console errors? Hydration warnings? Broken images?

### Score this dimension

- **5** — would actually ship to production
- **4** — one round of polish away from shipping
- **3** — recognisable as the brief, but rough
- **2** — visible bugs or layout breaks
- **1** — broken or off-brand

---

## Decision matrix

| Outcome | Pattern |
|---|---|
| **Strong yes** | 4+ on all five dimensions, 5 on at least two |
| **Yes** | 4 average, no 2s |
| **Maybe / second interview** | 3 average, with strength in dimensions 1 + 2 (reading and prompting matter most for this role) |
| **No** | Any 1, or two or more 2s |

## Red flags regardless of score

- Fabricated reviews or stats
- Phone number left on the lead form with no acknowledgement of the conflict
- No `NOTES.md` at all
- One massive commit with no iteration
- Page only works on desktop
- Used a chat widget or sales-call CTA (the brief explicitly says self-checkout)

## Green flags worth noting

- Caught a gotcha I didn't plant
- Pushed back on something in the brief in `NOTES.md` with a defensible reason
- Implemented something not in the brief that's clearly a conversion win (exit intent, sticky mobile CTA, scarcity that's actually true, etc.)
- Asked a sharp clarifying question over email before starting

---

## Notes on calibration

This assessment has no time limit on purpose. Speed is interesting but not the signal — most growth marketers won't finish this in under 4 hours, and that's fine. What matters is: does the output look like something a senior CRO would defend in a meeting?

If a candidate ships in 90 minutes and it's an A — strong hire signal.
If a candidate takes 8 hours and it's an A — still a strong hire signal, just at a different price point.
If a candidate takes 8 hours and it's a C — that's a real signal. They couldn't direct the agent.
