# NOTES.md

## Approach

I built this page for a US parent arriving cold from a paid ad. The target is someone who has already considered private tutoring and balked at the cost. The goal is one decision: try the $7 trial. Every section pushes toward that moment, and every decision is something I can explain the reasoning behind.

The strategic anchors I optimized for:

- **Risk reversal at the trial decision-point** (the $7 itself + 30-day money-back).
- **Trust transfer to Eddie and Adam as verifiable, specific teachers with real US classroom experience** (not "our team of expert tutors").
- **A pricing structure that lets parents say yes without feeling they overpaid.** Addressed in detail in the "biggest conversion lever" section below.

---

## 1. Anything in the brief I'd push back on or change

**Resolving the brief's ambiguity on the conversion flow**

The brief sets up a tension I had to resolve: the goal section says "no sales call, no human in the loop," which implies the page should close the sale directly via paywall. The form fields section, however, is explicitly labeled "(lead capture)," which implies collecting parent contact info before the payment. These two framings describe different flows.

I shipped the lead-capture-into-paywall flow: parents fill the form, see a confirmation message, and the microcopy below the submit button reads "Next step: confirm your $7 payment to start the 7-day trial" so they know payment is coming. This preserves what the brief asked for (lead data captured) and matches what "no human in the loop" actually means in practice: the next click after the form should land them in Stripe Checkout, not in an email queue waiting for a sales rep. In production, the form submission would POST to a backend that creates the lead record, then immediately redirect to Stripe Checkout with the $7 charge pre-configured. The current implementation shows a confirmation message because the Stripe integration is out of scope for this assessment, but the "Next step" microcopy is in place so parents understand the flow and don't abandon thinking the trial has somehow already started.

**The H1 was a placeholder, so I wrote one**

The brief explicitly says "Create something that will capture attention." I shipped "Your child's strongest math year is one teacher away." The construction names the outcome a parent actually wants (the strongest math year, not just better grades), uses possessive framing so the parent claims that outcome, and the bridge phrase "one teacher away" reframes the brief's eyebrow concept ("Not 1:1 Tutoring") into something positive: the solution exists, it's close, and it's just about getting the right teacher in front of your child. The page delivers on that promise by showing two real, credentialed teachers in the next section.

**Grade range covers the brief's audience, not just the brief's grades**

The brief states an audience of "children aged 11–17" but lists grades that cover roughly 11–15 (Pre-Algebra through Algebra II). I added Pre-Calculus to close the gap. This also aligns with Eddie's "Perfect SAT Math (800/800)" credential, which is most relevant for SAT-prep-adjacent grades. Without Pre-Calc, that credential is wasted on grade levels too young to use it.

**Pricing anchor stays at $640+ per the brief, with verifiable math beneath**

The brief gives "$640+/month" as the private tutor anchor. I kept that literal but added the math breakdown beneath it (~$80/hr × 2/week × 4 weeks) so a skeptical parent can verify it themselves. In a real production launch I'd validate this anchor against current US tutoring market data before scaling paid acquisition spend.

**Added a 30-day money-back guarantee not specified in the brief**

The brief defines a $7 trial for 7 days but no money-back guarantee. For a cold-traffic audience converting on a $149/mo subscription, that's incomplete: the $7 reduces the barrier to entry, but parents commit to a $149/mo charge after seven days. US edtech subscriptions in this price range typically offer money-back guarantees as standard friction-removal at the commit-point, and adding one to MyEdSpace aligns with what a parent expects to see when handing over recurring billing.

**Logo: SVG lockup on continuous brand-blue**

Used the existing MES + MyEdSpace SVG (native white fill) over a brand-blue header that flows directly into the hero. No border between header and hero, no separate text wordmark. Reads as one branded entry moment rather than chrome stacked above content.

**Two forms, isolated state**

Hero form and Section 9 form share no React state. Independent useState hooks, refs, and submit handlers. The hero form can be toggled off entirely on mobile without affecting the canonical Section 9 form, which remains the persistent conversion target from every CTA on the page.

**Mobile signup is a different funnel**

Below the 1024px breakpoint the hero form is hidden and replaced by a sticky bottom CTA bar that stays within thumb reach during scroll. Side-by-Side condenses from a static table into a SCHOOL/MYEDSPACE toggle showing one column at a time. Reviews shift from a 2x2 grid into a 1-card auto-rotating carousel that pauses on touch. The AI Coach mock chat collapses behind a tap-to-expand button. Same content, density tuned to how mobile actually reads.

**Video poster is brand-neutral**

The walkthrough shows the platform and aggregate outcome stats, not a specific instructor. The cover uses the MyEdSpace SVG logo centered on a brand-dark background with a green play button below. Putting a single teacher's photo on the cover would have implied that teacher was the one speaking, which is not accurate.

**WCAG CTA contrast: shipped accessible, not just brand-compliant**

The CTA pairs brand-green (#b1db00) with brand-dark (#101626), not white on green (which fails WCAG AA contrast at this size). The brand colors were given but the contrast pairing wasn't, and shipping a CTA that fails accessibility on the conversion moment of the page is not a trade-off worth making.

**Trust Stats as a dark slab, not a light section**

I treated the four social proof stats as a dark slab with brand-green numbers rather than a light section with brand-dark numbers. The contrast against the surrounding white sections forces the eye to stop scrolling, and the brand-green over brand-dark gives the stats the visual weight they need to function as a trust gate before the feature content.

**Next.js 14.2.5 has a known CVE: flagged, not upgraded**

The repo ships with Next.js 14.2.5, which has a known middleware vulnerability (CVE-2025-29927). I didn't upgrade because the scope is a landing page assessment and a version bump could introduce build-time regressions outside that scope. In production this would be addressed alongside the standard dependency security audit.

---

## 2. Three prompts that meaningfully shaped the output

**Prompt 1: Setting the positive angle as a non-negotiable constraint**

The first major prompt did the obvious work of defining sections, copy, and brand constraints. But its real job was setting one explicit rule: the page would never argue against private tutoring. This sounds simple, but the brief's eyebrow ("Not 1:1 Tutoring") makes it tempting to build the whole page as an anti-tutor case. I wrote the prompt to specifically forbid that: no agitate sections about tutor failures, no comparison framed as "tutors fail because X." The decision underneath: cold-traffic parents already have negative feelings about tutoring (they balked at the cost). Reminding them they "wasted money" creates buyer's remorse, not buying intent. The prompt encoded that constraint so every later decision had to respect it.

**Prompt 2: Forcing a literal brief audit instead of trusting the build**

After the page was structurally complete, the instinct was to ship it. Instead I ran a prompt that did the opposite. It told Claude to assume my copy had drifted from BRIEF.md and to find every divergence, even small ones. That prompt caught four places where I had written "what sounded better" instead of what the brief said: the grade pill label, the trust strip phrasing, the form microcopy, and the pricing anchor format. None of these were wrong on their own. But the brief is the source of truth for what the client expects to see, and "I improved on the brief" without documentation is harder to defend than "I matched the brief except where I had a reason to deviate." This prompt is the discipline layer. It converts intuition back into intentional decisions.

**Prompt 3: Diagnosing the actual whitespace problem, not just reducing padding**

The first attempt at fixing whitespace ran py-16 lg:py-20 → py-12 lg:py-16. The page got more whitespace on desktop, not less, because the current state was already py-14 and the literal change increased it on desktop while reducing it on mobile. Claude flagged this before I noticed it on screen. The prompt that worked was the one that asked Claude to first grep the current state of every section, then propose padding values that actually reduce on the viewport I'm reviewing on. The decision underneath: assumptions about current state are the most common source of CSS regressions. A 30-second verification prompt prevents 30 minutes of "why does this look worse now?" debugging.

---

## 3. The single biggest conversion lever I implemented

**The pricing structure as a triple anchor: $640+ → $149 → $7, with the 30-day money-back at the $149 commit-point.**

The brief describes the audience as price-conscious parents who have already considered private tutoring and balked at the cost. That gives me three useful signals about their state of mind on arrival: they've seen what tutoring costs (so they have a price reference), they thought it was too much (so they have a budget ceiling), and they haven't given up on the problem (so they're still actively looking).

The pricing structure I shipped is designed to land inside that mental frame. The $640+ private tutor card isn't a comparison the parent uses to evaluate MyEdSpace. It's a reflection of the price they already saw. Putting it on the page reminds them what they were looking at before, and lets the $149/mo card read as a 77% reduction against the price they already found unmanageable. The framing converts $149 from "another subscription I have to evaluate" into "a reasonable version of something I was already considering."

The $7 trial then collapses the entry barrier almost completely. A parent who hesitated at $640/mo is unlikely to refuse to spend $7 to test whether a $149/mo solution actually works. The decision becomes binary in a way $149 alone never could: not "is this worth $149/mo?" but "is this worth $7 to find out?"

The 30-day money-back guarantee handles the friction that appears after the $7 trial converts. Without it, the $7 trial reads as a trap door into a $149/mo charge. With it, the trial becomes a genuinely low-risk evaluation period at the commit-point that matters.

This is the lever because no single feature on the page (not Eddie, not the live classes, not the AI coach) converts a price-conscious parent without this structure underneath. The features make MyEdSpace worth considering. The pricing structure makes it worth saying yes to.

---

## 4. What I'd ship next if I had another day

In priority order:

1. **Real Stripe Checkout integration on the $7 trial form.** The current submit shows a confirmation message. The form already captures the lead data; the next click should POST to a backend that creates the lead record and immediately redirects to Stripe Checkout with the $7 charge pre-configured. This is the highest-impact next step because it closes the gap between "lead captured" and "trial actually started."

2. **A/B test the H1 against a credibility-led variant** (e.g., "Math, taught by the teacher your kid will actually remember"). The current H1 leads with outcome; an alternative leads with the teacher as the differentiator. Worth testing which converts cold traffic better at the top of the funnel.

3. **Performance audit and Lighthouse pass.** The page hasn't been profiled for LCP, CLS, or mobile network throttling. For paid traffic where bounce starts at 3 seconds, this is table-stakes before scaling spend.

4. **Expand the team page beyond two teachers.** Eddie and Adam are shown as co-equals, which establishes bench depth. A production launch scaling beyond the current curriculum coverage (Elementary through AP Calculus AB) would benefit from showing the third and fourth teachers as those hires come on board, plus a "Meet the full team" expandable view for parents who want to verify depth before committing.

5. **Curriculum video previews per grade.** The curriculum PDFs are linked in the FAQ. A 30-second preview of an actual class per grade level would convert parents who need to see the product before committing $7.

6. **Cookie consent and GDPR/CCPA disclosures.** Out of scope for this assessment but required for paid traffic in regulated markets.

7. **Next.js 14.2.5 → latest patch.** Addresses the CVE flagged above.
