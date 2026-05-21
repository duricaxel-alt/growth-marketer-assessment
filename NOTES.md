Notes — MyEdSpace US Landing

1. Brief findings & decisions
I audited the brief critically before building. 15 findings, tiered by impact.

Tier 1 — Hard errors I resolved before building

1.1 The H1 is a placeholder, not copy. The brief states the H1 as "Create something that will capture attention." I wrote the actual H1 — "You tried a tutor. It didn't stick. Here's why." — which validates the audience's stated wound and opens the page's narrative arc.
1.2 Grade range doesn't cover the audience. Brief defines 11–17 but lists grades to Algebra II (~11–16). I added Pre-Calculus. Eddie's Perfect SAT credential is wasted without SAT-prep-adjacent grades. AP Calculus deferred (would require unverifiable certification claims).
1.3 Money-back guarantee inconsistency. Brief omits any refund policy; REVIEWS.json contains a testimonial naming "the 30-day refund" as primary conversion driver. I verified US competitors (Outschool 14-day, Varsity/Mathnasium nothing, Wyzant first-hour only) — the category is structurally weak on risk reversal. Added 30-day guarantee to the page. Product should confirm internally; if not present, it should be built.
1.4 Pricing anchor underestimates US market. Brief says "$640+/month" for private tutors. Verified 2025 data: $35–100/hr, $480–800/month twice-weekly, $100–200/hr for SAT prep. Replaced fixed number with verified range, sourced on pricing card.
1.5 CTA color fails WCAG AA. Brand-green on white text fails contrast (~1.5:1). Implemented CTAs as brand-green background with brand-dark text (~11.5:1 AAA).

Tier 2 — Gaps I filled with judgment calls

2.1 No "what happens after the $7 trial" copy. Added explicit microcopy under all CTAs: billing transparency + cancellation ease + proactive reminder.
2.2 No class schedule. Committed to "Tuesday and Thursday evenings" — concrete enough for parents to mentally fit it against schedules.
2.3 Phone required despite "no sales call" promise. Kept required (per brief) with inline microcopy: "For trial reminders only. We never call."
2.4 Missing "cameras off / anonymous chat" angle. This is the strongest converter against the "why group, not 1:1?" objection. Verified on UK product, absent from US brief. Built Section 4 col 03 around it as feature, not limitation.
2.5 AI coach under-leveraged. Brief lists it as a comparison bullet; reviews show it solves parent emotional pain (Priya R.: "I genuinely don't remember Algebra II"). Gave it its own block in Section 6, reframed as "between-classes continuity" not rescue.

Tier 3 — Flagged for product team

3.1 "21,000+ students" and "1,700+ reviews" likely global/UK; contextualized as "families worldwide."
3.2 Eddie shown as sole instructor (single-teacher implausible for Pre-Algebra → Pre-Calc range); positioned as "lead instructor."
3.3 Comparison table overridden from School-vs-MyEdSpace to Tutor-vs-MyEdSpace (the real mental competitor).
3.4 Curriculum PDFs in repo unmentioned in brief; integrated as inline FAQ links, not as a competing section.
3.5 Repo ships with Next 14.2.5 CVE. Not upgraded to preserve reproducibility; first post-acceptance commit should be the patch.


2. Prompting approach
I structured the build as four sequential prompts, not one. Pattern: supervised execution with explicit stop points.

Prompt 1 — Plan before code. Forced the agent to load repo files, propose a 7-dimension implementation plan, and STOP without writing code. The agent flagged 8 ambiguities between my spec and the actual repo state. Resolving upfront prevented silent failure.
Prompt 2 — Full spec, single message. ~7,000 words covering all 13 sections with copy verbatim, behavior, constraints, and explicit "what you will NOT do without approval." The agent caught a path mismatch (my spec said /docs/[grade].pdf, real path was /assets/curriculum/) and flagged before writing broken links.
Prompt 3 — Audit, do NOT fix. Asked for QA across 6 dimensions with severity tags, with explicit instruction not to act in the same turn. Returned 14 findings; I triaged to 4. Keeping discovery separate from action prevented unauthorized scope creep.
Prompt 4 — Targeted fix pass. Listed only the 4 fixes to apply, with explicit "do not touch X" list. Agent applied cleanly, verified compile, and reported its own limitations (what required human browser testing vs. what it could verify via HTML inspection).

What human review caught that the agent missed
Three categories surfaced only via human visual review, not agent self-audit:

Tone drift — agent's first-pass copy contained "kills" and "your tutor had a wedding" (broken warm-voice register).
Internal contradictions — initial AI Coach copy implied live classes might fail ("when your kid hits a wall"), contradicting Section 4's "real progress" promise. Reframed as continuity, not rescue.
Register breaks — "Continue to Checkout" reverted form into commerce language at the moment of highest emotional investment. Replaced with "Start My $7 Trial →" (preserving anchor and switching to first-person possessive at psychological commitment).

The agent doesn't catch these because it reviews its output as a peer engineer, not as a target audience arriving from a paid ad.

3. The single biggest conversion lever

The "anti-1:1 tutoring" angle, sustained as the narrative spine of the entire page.
Thesis: "Private tutoring doesn't fail because of bad tutors. It fails because of the format."
This reframe drives every section, from Hero's "Here's why" promise through Section 2's bold-claim thesis, Sections 3–4's agitate-relief mirror, and the Closing's narrative loop closure.
Why this is the #1 lever: the target is parents who already tried tutors and got burned. Their dominant state isn't "looking for a better tutor" — it's "I already paid for this and it failed, I don't trust myself to pick again." A page selling "we're the good tutors" walks straight into that distrust. A page reframing the failure as systemic (not personal) absolves selection guilt and recategorizes MyEdSpace as a different solution entirely.
Without this angle, the page competes on price and features against Outschool, Varsity, and the local tutor — all of which have more US trust capital. With it, MyEdSpace becomes the informed alternative, which is the only winnable position.

4. What I'd ship next with another day

4.1 Validate AI Coach emotional-support capability. Detected during writing that the AI coach has a high-potential emotional angle (math anxiety, confidence erosion) that would significantly lift conversion. Didn't claim it because I have no verifiable evidence the AI has those capabilities. Highest-impact unverified opportunity.
4.2 A/B test the hero H1. Ship the current variant against "The tutor was fine. The format was broken." (more punchy, less narrative). 50/50 split for 2 weeks; winner becomes default.
4.3 Real schedule per grade. Replace the generic "Tuesday and Thursday evenings" with actual class times per grade level surfaced when a parent clicks a grade pill. Removes the silent "does this fit our soccer practice?" objection before it surfaces.

5. Disclosures

The "3x more questions" claim was removed and replaced with qualitative framing — no primary source for the number.
Footer Privacy/Terms/Support are inert placeholder buttons pending legal copy wiring; activating without real content would be dishonest, removing breaks compliance UX.
