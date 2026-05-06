# MyEdSpace US Homepage — Brief

## Goal

Convert cold paid traffic (Google Ads, Meta) from US parents into $7 trial signups for our online live-class math platform. The page must close the deal on its own — no sales call, no human in the loop.

## Audience

US parents of children aged 11–17 whose math grades are slipping. They are price-conscious but not cheap; they have already considered private tutoring and balked at the cost. Many have tried tutors and been burned by inconsistency.

## Brand

Visual standards live in `BRAND_GUIDELINES.md` — apply them across all UI. Summary below.

### Voice

Confident, warm, specific. Not edu-jargon. Not chirpy SaaS. We talk to parents the way a great teacher talks at parents' evening — direct, kind, informed.

### Colors

- Main blue: `#3533ff`
- CTA green: `#b1db00`
- Light blue: `#a3e1f0`
- Dark blue: `#101626`

### Font

Inter, everywhere (already wired in `app/layout.tsx`).

### Design style

- No rounded edges (`border-radius: 0` on everything)
- No drop shadows (no `box-shadow`, no `filter: drop-shadow(...)`)
- No glow effects

## Must-include copy

### Hero

- Eyebrow: Not 1:1 Tutoring
- H1: Create something that will capture attention
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

## Reviews source

Use the reviews in `docs/REVIEWS.json`. They've already been localized for the US market. Do not invent new ones, do not pull from the UK Trustpilot page.

