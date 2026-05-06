# MyEdSpace US Homepage — Brief

## Goal

Convert cold paid traffic (Google Ads, Meta) from US parents into $7 trial signups for our online live-class math platform. The page must close the deal on its own — no sales call, no human in the loop.

## Audience

US parents of children aged 11–17 whose math grades are slipping. They are price-conscious but not cheap; they have already considered private tutoring and balked at the cost. Many have tried tutors and been burned by inconsistency.

## Brand

### Voice

Confident, warm, specific. Not edu-jargon. Not chirpy SaaS. We talk to parents the way a great teacher talks at parents' evening — direct, kind, informed.

### Colors

- Primary blue: `#3333FF`
- Lime green CTA: `#8BC400`
- Amber accent: `#E8A020`
- Dark text: `#1A1A2A`

### Font

Inter (already wired in `app/layout.tsx`)

### Decorative motif

Small pixel/Minecraft-style square blocks scattered around hero and section breaks, in blue and amber. Subtle, not loud.

## Must-include copy

### Hero

- Eyebrow: SCHOOLING WITHOUT THE SCHOOL
- H1: Your child's math grade is about to change
- Subhead: Live classes twice a week, in your timezone
- Grade pill label: Select their grade to get started
- Grades: Pre-Algebra · Algebra I · Geometry · Algebra II
- Primary CTA: Start Your $7 Trial

### Teacher

- Name: Eddie Kang
- Handle: @EddieDoesMath
- Credentials: UCLA Pure Math degree · Perfect SAT Math Score (800/800) · 9+ years teaching in California high schools and colleges

### Pricing

- Full price: $149/month
- Trial: $7 for 7 days
- Anchor: private tutors charge $640+/month

### Comparison columns

- **School**: 30 kids per class · fixed pace · no recordings · no homework help · free
- **MyEdSpace**: real teacher · your child's pace · 24/7 AI coach · recordings included · live twice a week · $149/mo · $7 to start
- **Private tutor**: your pace · 1 student · no structure · random quality · $640+/mo

### PISA stat

> US students score nearly a year behind their UK peers in math.

Source: OECD PISA 2022 — US 465 pts · UK 489 pts · 30-point gap = one year of schooling.

### Social proof

- 21,000+ students
- 1,700+ Trustpilot reviews
- 4.8 average rating, "Excellent"

### Form fields (lead capture)

- First name + Last name (side by side)
- Email
- Phone (with `+1` prefix, placeholder `7XXX XXXXXX`)
- Grade dropdown
- Submit: Start Your $7 Trial
- Microcopy under button: "By clicking, you agree to receive communications from MyEdSpace. You can unsubscribe anytime."

## Page sections (rough order)

1. Hero with grade pills + video
2. Loved by students / features + form
3. Meet your teacher (Eddie)
4. World-class education for a fraction of the cost (3-column comparison)
5. Reviews
6. PISA stat + world map
7. Live lesson schedule
8. Watched by millions of students
9. Final CTA + form
10. FAQ
11. Contact us

## Reviews source

Use the reviews in `docs/REVIEWS.json`. They've already been localized for the US market. Do not invent new ones, do not pull from the UK Trustpilot page.

## What this page must do that the current page doesn't

- Make the parent feel they can decide today, without calling anyone
- Answer every objection before it's asked
- Feel premium enough to justify $149/mo without feeling expensive enough to scare off cold traffic

## Non-goals

- Don't build the Arizona ESA / ClassWallet flow on this page. That's a separate landing page.
- Don't add a curriculum PDF download on this page. We've decided that lives on the post-purchase confirmation page.
- Don't build a chat widget. We're explicitly designing for self-checkout.
