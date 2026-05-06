# Wireframe — section by section

This is the page flow. Sections are listed top to bottom. Within each, what appears and roughly how it should feel.

## 1. Sticky nav

Logo left. Anchor links centre (How it works · Your teacher · Pricing · FAQ). "Start for $7" button right. Sticky at top, semi-transparent on scroll.

## 2. Hero — blue background

- Eyebrow pill: SCHOOLING WITHOUT THE SCHOOL
- H1 (large, bold): Your child's math grade is about to change
- The word "math" is highlighted with a lime background pill, and is replaced by the selected grade once a pill is chosen
- Subhead: Live classes twice a week, in your timezone
- Anchor line: "Private tutors charge $640+/mo. MyEdSpace is $149. Try it for just $7."
- Grade selector pills (Pre-Algebra, Algebra I, Geometry, Algebra II)
- Trust strip: 4.8 stars · 21,000+ students · 30-day money-back
- Right-hand column: video thumbnail of Eddie, click to open modal
- Decorative pixel blocks scattered (blue, lime, amber, white)

## 3. Personalised preview + lead form

Triggered by grade selection (the form section is always visible, but the personalised preview card appears only after a grade is picked).

Two columns:
- Left: "Loved by students. Trusted by parents." headline. Feature list with icons. A loss-aversion callout in an amber-tinted box.
- Right: The lead capture form. Pre-fills with selected grade. Shows endowment preview card above form when grade is picked.

## 4. Before / after narrative

Pale background (off-white). Two column "Before / After" treatment. Storytelling, no CTA.

## 5. Meet your teacher (Eddie Kang)

Dark or blue background. Photo of Eddie left, credentials right.
- "Only the top 1% of teachers pass our screening" pill
- Big number treatment for "800/800 Perfect SAT"
- UCLA Pure Math · 9+ years California
- @EddieDoesMath handle

## 6. World-class education for a fraction of the cost

Three-column comparison: SCHOOL · MYEDSPACE (highlighted, centre) · PRIVATE TUTOR.

Order matters: school left ($0, but inadequate), MyEdSpace middle ($149, the answer), private tutor right ($640+, anchor). The middle column is visually elevated — bigger, lifted, lime-accented.

Tagline above: "World-class education for a fraction of the cost"
Tagline below: "The gap school doesn't fill — without the cost of a tutor"

## 7. PISA stat + map

> "US students score nearly a year behind their UK peers in math."
> — OECD PISA 2022 · US 465 pts · UK 489 pts · 30-point gap = one year of schooling

Optional: world map graphic with US and UK highlighted. Don't get fancy if it's not ready — a clean blockquote treatment is fine.

This section comes BEFORE the reviews section, not after. (See growth principle #4.)

## 8. Reviews

Pale teal or off-white background. Headline: "Engaging lessons that your child will love."

Grid of review cards. Each card:
- Star rating (5 green stars)
- Bold review title
- Body text (2–3 lines)
- Footer: First name · City, State · Date

Use the data in `docs/REVIEWS.json`.

## 9. Live lesson schedule

Once a grade is selected, show that grade's schedule prominently. Otherwise show all four. Times must be displayed in BOTH PT and ET (the brief mentions PST-only — that's wrong, fix it).

A small "all times shown in your local timezone" note is a nice touch but not required for v1.

## 10. Watched by millions of students (social proof)

Dark section. Headline: "...and watched by millions of students." Stylised mosaic of phone screens / video thumbnails. Mostly visual. No CTA — this is breathing room before the final close.

## 11. Final warm CTA

This is the close. It should feel like the warmest, most human moment on the page.

- Headline: "Your child's math story starts with one class"
- Sub: "7 days. Full access. No commitment."
- Form (or just CTA button if duplicate form feels heavy)
- Below: "Join 21,000+ students · 30-day money-back · Cancel anytime"

## 12. FAQ

Accordion, single-open. Answers should be substantive — full paragraphs, not one-liners. The goal is "the parent does not need to call anyone".

## 13. Footer

Light footer: logo, contact email, links (privacy, terms, careers), copyright. Don't over-design.

---

## Responsive notes

- Mobile-first. The hero should still feel impactful on a 375px-wide screen.
- The 3-column comparison stacks to 1 column on mobile, with MyEdSpace appearing FIRST in the stack (not in the middle), so the answer is what they see first.
- The form on mobile sits below the feature list, not beside it.
