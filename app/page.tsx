"use client";

import { FormEvent, useRef, useState, type ReactNode } from "react";

const GRADES = [
  "Pre-Algebra",
  "Algebra I",
  "Geometry",
  "Algebra II",
  "Pre-Calculus",
] as const;

const CURRICULUM = [
  { label: "Pre-Algebra PDF", href: "/assets/curriculum/pre-algebra.pdf" },
  { label: "Algebra I PDF", href: "/assets/curriculum/algebra-i.pdf" },
  { label: "Geometry PDF", href: "/assets/curriculum/geometry.pdf" },
  { label: "Algebra II PDF", href: "/assets/curriculum/algebra-ii.pdf" },
];

const AGITATE_COLUMNS = [
  {
    num: "01",
    title: "INCONSISTENCY BREAKS MOMENTUM",
    p1: "Math builds on itself. Miss one Tuesday because your tutor reschedules, and your kid is behind for the next two weeks.",
    p2: "In math, the gap doesn't stay small — it compounds.",
  },
  {
    num: "02",
    title: "THE COST DOESN'T MATCH THE RESULT",
    p1: "Private math tutors in the US charge $60–100 per hour. Twice a week, that's $480–800 a month.",
    p2: "Most of that pays for one-on-one logistics, not more teaching. Your kid still gets the same 45 minutes of real instruction.",
  },
  {
    num: "03",
    title: "1:1 IS LONELY, NOT FOCUSED",
    p1: "Sitting across from an adult who's watching their every answer is paralyzing for most kids. Smart kids freeze up.",
    p2: "They learn less in a 1:1 with a stranger than they would surrounded by other kids figuring it out together.",
  },
];

const RELIEF_COLUMNS = [
  {
    num: "01",
    title: "SAME TEACHER. SAME TIME. EVERY WEEK.",
    p1: "Eddie shows up live every Tuesday and Thursday. If your kid misses a class, the full recording is in their dashboard within an hour.",
    p2: 'No reschedules. No "your tutor had a thing." Math keeps moving.',
  },
  {
    num: "02",
    title: "$7 TO TRY. $149/MONTH IF YOU STAY.",
    p1: "No travel, no overhead, no idle hour fees. You're paying for teaching, not the tutor's commute.",
    p2: "That's less per month than two hours with a private tutor.",
  },
  {
    num: "03",
    title: "NO CAMERA. NO PRESSURE. JUST LEARNING.",
    p1: "Your child's camera stays off. They participate through live chat with a username — never their real name. No one sees them. No one judges them.",
    p2: "It's how shy kids ask the questions they'd never ask out loud — and how the teacher knows in real time who's lost and who isn't.",
  },
];

const FEATURE_CELLS = [
  {
    title: "LIVE CLASSES, TWICE A WEEK",
    body: "Tuesday and Thursday evenings, in your timezone. Same teacher, same time, every week.",
  },
  {
    title: "EVERY CLASS RECORDED",
    body: "Missed Tuesday? The full recording is in your child's dashboard within an hour. No catch-up calls needed.",
  },
  {
    title: "PRACTICE PROBLEMS + WORKBOOKS",
    body: "Aligned with what Eddie teaches in class. Sent automatically after each lesson.",
  },
  {
    title: "30-DAY MONEY-BACK GUARANTEE",
    body: "If you're not satisfied after 30 days, we refund the full month. No forms, no calls.",
  },
];

const COMPARISON_ROWS = [
  { label: "Format", tutor: "1:1 sessions", mes: "Small live group, cameras off" },
  {
    label: "Same teacher every session?",
    tutor: "Sometimes — turnover is common",
    mes: "Yes — every class, every week",
  },
  {
    label: "Recordings if your kid misses",
    tutor: "No",
    mes: "Every class, in the dashboard within the hour",
  },
  {
    label: "Homework help between sessions",
    tutor: "Only during paid session",
    mes: "24/7 AI coach, trained on the same curriculum",
  },
  {
    label: "Cost per month",
    tutor: "$480–800 ($60–100/hr × 2/week)",
    mes: "$149 ($7 to try first)",
  },
  {
    label: "What you're paying for",
    tutor: "1:1 logistics + the tutor's hour",
    mes: "Teaching, recordings, AI coach, and a community of learners",
  },
];

const REVIEWS = [
  {
    title: "Better than the tutor we paid $80/hr for",
    body: "We tried two private tutors before this. The structure here — same teacher, twice a week, recordings if we miss — is what was missing.",
    name: "Marcus T.",
    city: "Austin, TX",
    date: "February 2026",
  },
  {
    title: "Made geometry click",
    body: "She failed her last geometry test. Three weeks in with Eddie and she got a B+. Honestly, I'm a little emotional about it.",
    name: "Aisha B.",
    city: "Atlanta, GA",
    date: "April 2026",
  },
  {
    title: "The AI coach is a game changer",
    body: "He uses the AI tutor for homework when I can't help him. Not because I don't want to — because I genuinely don't remember Algebra II.",
    name: "Priya R.",
    city: "Edison, NJ",
    date: "April 2026",
  },
  {
    title: "The 30-day refund made me try it",
    body: "I almost didn't sign up — we'd been burned before. The money-back guarantee was the only reason I tried. Three months in, no regrets.",
    name: "Lauren H.",
    city: "Charlotte, NC",
    date: "January 2026",
  },
];

type Faq = { q: string; a: ReactNode };

const FAQS: Faq[] = [
  {
    q: "What happens after the 7-day trial?",
    a: "After 7 days, your subscription continues at $149/month unless you cancel. We'll email you 2 days before the trial ends so there are no surprises. You can cancel anytime from your dashboard — no calls, no forms. If you stay and change your mind, our 30-day money-back guarantee covers the full month.",
  },
  {
    q: "What if my child doesn't like it?",
    a: "Cancel within 7 days and you're not charged anything beyond the $7 trial. If you continue and decide it's not working within the first 30 days, we refund the full month — no questions asked. We'd rather have an honest refund than a frustrated family.",
  },
  {
    q: "What if we miss a class?",
    a: "Every class is recorded and available in your child's dashboard within an hour of the lesson ending. Your child watches when their schedule allows. The AI coach is available 24/7 for follow-up questions on anything they missed.",
  },
  {
    q: "Will my child have to be on camera?",
    a: "No. Student cameras stay off during every class. Your child participates through live chat using a username — never their real name. This is deliberate: kids ask the questions they'd never ask out loud, and the teacher sees who's lost in real time.",
  },
  {
    q: "How is this different from a private tutor?",
    a: "A private tutor gives your child 45 minutes of focused 1:1 time once or twice a week for $60–100/hour, with no continuity between sessions, no recordings, and no help between meetings. MyEdSpace gives your child the same expert teacher every Tuesday and Thursday, recorded sessions to revisit, practice materials aligned with each class, and an AI coach available 24/7 — for $149/month.",
  },
  {
    q: "What will my child actually learn?",
    a: (
      <>
        <p>
          Each course follows a structured curriculum aligned with US standards for that grade level. You can preview the full curriculum here:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {CURRICULUM.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 border border-brand-dark text-sm font-semibold hover:bg-brand-dark hover:text-brand-green transition-colors duration-200"
            >
              {c.label}
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Pre-Calculus curriculum available on request during signup.
        </p>
      </>
    ),
  },
];

const CTA_CLASS =
  "group inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-brand-dark font-bold border-2 border-brand-dark cursor-pointer transition-colors duration-200 ease-out hover:bg-brand-dark hover:text-brand-green active:scale-[0.98]";
const ARROW_CLASS =
  "inline-block transition-transform duration-200 group-hover:translate-x-1";

export default function HomePage() {
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const formSectionRef = useRef<HTMLElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);

  function scrollToFormAndPrefill(grade?: string) {
    if (grade) setSelectedGrade(grade);
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => firstNameRef.current?.focus({ preventScroll: true }), 700);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ firstName, lastName, email, phone, grade: selectedGrade });
    setSubmitted(true);
  }

  return (
    <main>
      {/* ─────────────────────── 1. HERO ─────────────────────── */}
      <section
        id="hero"
        className="bg-white md:min-h-[90vh] md:flex md:flex-col md:justify-center"
      >
        <div className="max-w-6xl mx-auto px-6 py-14 w-full">
          <div className="mb-6 flex justify-center md:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/favicon.webp"
              alt="MyEdSpace logo"
              className="h-9 w-9"
            />
          </div>
          <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center md:text-left">
            Not 1:1 Tutoring
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-center md:text-left">
            You tried a tutor.
            <br />
            It didn't stick.
            <br />
            Here's why.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-brand-dark/80 max-w-3xl text-center md:text-left">
            Live math class twice a week, taught by a real teacher who shows up every Tuesday and Thursday — at your kid's grade level, in your timezone.
          </p>

          <div className="mt-8 text-center md:text-left">
            <p className="text-sm font-semibold text-brand-dark mb-3">
              What grade is your child in?
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {GRADES.map((g) => (
                <button
                  key={g}
                  onClick={() => scrollToFormAndPrefill(g)}
                  className={`px-4 py-2 text-sm border border-brand-dark cursor-pointer transition-colors duration-200 ${
                    selectedGrade === g
                      ? "bg-brand-dark text-brand-green"
                      : "bg-white text-brand-dark hover:bg-brand-dark hover:text-brand-green"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center md:text-left">
            <button onClick={() => scrollToFormAndPrefill()} className={CTA_CLASS}>
              <span>Start Your $7 Trial</span>
              <span className={ARROW_CLASS}>→</span>
            </button>
          </div>

          <p className="mt-6 text-sm text-brand-dark/70 text-center md:text-left">
            <span className="text-brand-blue">★</span> 4.8 on Trustpilot
            &nbsp;·&nbsp; 21,000+ families worldwide &nbsp;·&nbsp; 1,700+ reviews
          </p>
        </div>
      </section>

      {/* ───────────────────── 2. BOLD CLAIM ───────────────────── */}
      <section id="bold-claim" className="bg-brand-dark">
        <div className="max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Private tutoring doesn't fail because of bad tutors.
          </p>
          <p className="mt-6 text-3xl md:text-5xl font-bold text-brand-light-blue leading-tight">
            It fails because of the format.
          </p>
        </div>
      </section>

      {/* ───────────────────── 3. AGITATE ───────────────────── */}
      <section id="agitate" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
            Three reasons 1:1 tutoring keeps failing kids.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {AGITATE_COLUMNS.map((col) => (
              <div key={col.num}>
                <div className="text-5xl md:text-6xl font-bold text-brand-dark/25 leading-none">
                  {col.num}
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide">
                  {col.title}
                </h3>
                <p className="mt-4 text-brand-dark/80 leading-relaxed">{col.p1}</p>
                <p className="mt-3 text-brand-dark/80 leading-relaxed">{col.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── 4. RELIEF ───────────────────── */}
      <section id="relief" className="bg-brand-light-blue/30">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl md:text-5xl font-bold text-center max-w-3xl mx-auto leading-tight">
            MyEdSpace was built to fix all three.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {RELIEF_COLUMNS.map((col) => (
              <div key={col.num}>
                <div className="text-5xl md:text-6xl font-bold text-brand-blue/70 leading-none">
                  {col.num}
                </div>
                <h3 className="mt-4 text-base font-bold uppercase tracking-wide">
                  {col.title}
                </h3>
                <p className="mt-4 text-brand-dark/80 leading-relaxed">{col.p1}</p>
                <p className="mt-3 text-brand-dark/80 leading-relaxed">{col.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── 5. MEET EDDIE ───────────────────── */}
      <section id="meet-eddie" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/eddie_2.webp"
                alt="Eddie Kang, MyEdSpace lead math instructor"
                className="w-full max-w-[500px]"
              />
            </div>
            <div>
              <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold">
                Your Lead Instructor
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Meet Eddie Kang.
              </h2>
              <p className="mt-6 text-lg text-brand-dark/80 leading-relaxed">
                He scored a perfect 800 on the SAT Math section. He studied Pure Math at UCLA. He's spent the last 9 years teaching algebra, geometry, and calculus to kids in California high schools and colleges.
              </p>
              <p className="mt-4 text-lg text-brand-dark/80 leading-relaxed">
                Now he teaches yours, twice a week.
              </p>
              <ul className="mt-6 space-y-2 text-brand-dark">
                <li>
                  <span className="text-brand-blue">◆</span>&nbsp;&nbsp;UCLA — Pure Math degree
                </li>
                <li>
                  <span className="text-brand-blue">◆</span>&nbsp;&nbsp;Perfect SAT Math score — 800/800
                </li>
                <li>
                  <span className="text-brand-blue">◆</span>&nbsp;&nbsp;9+ years teaching in California high schools and colleges
                </li>
              </ul>
              <p className="mt-4 text-sm text-brand-dark/60">@EddieDoesMath</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <video
              controls
              poster="/assets/img/eddie_3.webp"
              src="/assets/video/MES_intro.mp4"
              className="w-full max-w-[520px]"
            />
            <p className="mt-4 text-lg font-semibold text-brand-dark text-center max-w-[720px]">
              <span aria-hidden="true">▶</span>&nbsp; Watch Eddie explain why most math classes fail kids (90 seconds)
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── 6. WHAT YOUR CHILD GETS ─────────────── */}
      <section id="what-you-get" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center">
            What's Included
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-center leading-tight">
            Everything your child needs.
            <br />
            Nothing they don't.
          </h2>

          <div className="mt-10 bg-brand-light-blue p-6 md:p-8 border border-brand-dark">
            <p className="text-sm uppercase tracking-widest font-bold text-brand-dark">
              The AI Coach
            </p>
            <p className="mt-6 text-lg text-brand-dark leading-relaxed">
              Math gets learned between classes, not just during them. That's why your child has Eddie's AI coach available 24/7 — the same curriculum, the same approach, ready whenever they sit down to practice.
            </p>
            <p className="mt-4 text-lg text-brand-dark leading-relaxed">
              A homework question at 9pm on a Tuesday? The coach walks them through it the way Eddie would. Not just the answer — the method.
            </p>
            <p className="mt-4 text-lg font-bold text-brand-dark leading-relaxed">
              You don't have to remember Algebra II to support your child anymore.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURE_CELLS.map((cell) => (
              <div key={cell.title} className="border border-brand-dark p-6">
                <p className="text-sm uppercase tracking-widest font-bold">
                  {cell.title}
                </p>
                <p className="mt-3 text-brand-dark/80 leading-relaxed">{cell.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 7. SIDE BY SIDE COMPARISON ─────────────── */}
      <section id="side-by-side" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center">
            Side by side
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-center leading-tight">
            You've already got school. The question is what to add.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-center text-brand-dark/80 text-lg leading-relaxed">
            School gives your kid 30-kid classrooms at a fixed pace — that's why you're here. The real question is what to add: a private tutor, or something built different.
          </p>

          {/* Desktop: 3-col table */}
          <div className="mt-10 border border-brand-dark/30 hidden md:block">
            <div className="grid grid-cols-3 bg-brand-dark text-white text-xs md:text-sm uppercase tracking-widest font-bold">
              <div className="p-4">&nbsp;</div>
              <div className="p-4">Private Tutor</div>
              <div className="p-4 bg-brand-blue">MyEdSpace</div>
            </div>
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 border-t border-brand-dark/15 text-sm md:text-base"
              >
                <div className="p-4 font-semibold">{row.label}</div>
                <div className="p-4 text-brand-dark/70">{row.tutor}</div>
                <div className="p-4 font-semibold bg-brand-blue/5">{row.mes}</div>
              </div>
            ))}
          </div>

          {/* Mobile: 2 stacked cards */}
          <div className="mt-10 md:hidden space-y-6">
            {/* Private Tutor card */}
            <div className="border border-brand-dark/30">
              <div className="bg-brand-dark text-white p-4 text-xs uppercase tracking-widest font-bold">
                Private Tutor
              </div>
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="p-4 border-t border-brand-dark/15"
                >
                  <p className="text-xs uppercase tracking-wide font-semibold text-brand-dark/60 mb-1">
                    {row.label}
                  </p>
                  <p className="text-brand-dark/80">{row.tutor}</p>
                </div>
              ))}
            </div>

            {/* MyEdSpace card (emphasized) */}
            <div className="border border-brand-dark/30">
              <div className="bg-brand-blue text-white p-4 text-xs uppercase tracking-widest font-bold">
                MyEdSpace
              </div>
              {COMPARISON_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="p-4 border-t border-brand-dark/15 bg-brand-blue/5"
                >
                  <p className="text-xs uppercase tracking-wide font-semibold text-brand-dark/60 mb-1">
                    {row.label}
                  </p>
                  <p className="font-semibold">{row.mes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 8. REVIEWS ───────────────────── */}
      <section id="reviews" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center">
            Parents are seeing it work
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-center leading-tight">
            What families are saying after their first month.
          </h2>
          <p className="mt-6 text-center text-brand-dark/80">
            <span className="text-brand-blue tracking-widest">★ ★ ★ ★ ★</span>
            &nbsp;&nbsp; 4.8 on Trustpilot &nbsp;·&nbsp; 1,700+ reviews &nbsp;·&nbsp; 21,000+ families worldwide
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="border border-brand-dark p-6">
                <p className="text-brand-blue tracking-widest">★ ★ ★ ★ ★</p>
                <h3 className="mt-3 text-lg font-bold">&ldquo;{r.title}&rdquo;</h3>
                <p className="mt-3 text-brand-dark/80 leading-relaxed">{r.body}</p>
                <p className="mt-4 text-sm text-brand-dark/60">
                  — {r.name}, {r.city} &nbsp;·&nbsp; {r.date}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center">
            <a
              href="https://www.trustpilot.com/review/myedspace.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:underline"
            >
              Read our reviews on Trustpilot ↗
            </a>
          </p>
        </div>
      </section>

      {/* ───────────────────── 9. PRICING ───────────────────── */}
      <section id="pricing" className="bg-brand-dark">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="uppercase tracking-widest text-sm text-brand-light-blue font-semibold text-center">
            The math on the math
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-center text-white leading-tight">
            You've already seen what private tutors cost.
            <br />
            This is what we cost.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Private Tutor (muted) */}
            <div className="border border-white/20 p-6 text-white/60">
              <p className="text-xs uppercase tracking-widest font-bold">
                Private Tutor
              </p>
              <p className="mt-6 text-4xl font-bold">
                $480–800
                <span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-2 text-sm">$60–100/hr × 2/week</p>
              <p className="mt-6 text-xs text-white/40">
                Source: 2025 US private tutoring averages
              </p>
            </div>

            {/* Card 2: MyEdSpace */}
            <div className="border-2 border-brand-light-blue p-6 text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-brand-light-blue">
                MyEdSpace
              </p>
              <p className="mt-6 text-5xl font-bold">
                $149
                <span className="text-base font-normal">/mo</span>
              </p>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                Same teacher, twice a week, plus recordings and the AI coach 24/7.
              </p>
              <div className="my-6 border-t border-white/20" />
              <p className="text-sm">
                <span className="text-brand-green">✓</span>&nbsp; 30-day money-back guarantee
              </p>
              <p className="mt-2 text-xs text-white/70">
                If you're not satisfied, we refund the full month.
              </p>
              <div className="mt-6 border-t border-white/20" />
            </div>

            {/* Card 3: Trial (CTA) */}
            <div className="border-2 border-brand-green p-6 text-white flex flex-col">
              <p className="text-xs uppercase tracking-widest font-bold text-brand-green">
                Your First Week
              </p>
              <p className="mt-6 text-6xl font-bold">$7</p>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                7-day trial. Full access. Cancel in one click.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => scrollToFormAndPrefill()}
                  className={CTA_CLASS}
                >
                  <span>Start Your $7 Trial</span>
                  <span className={ARROW_CLASS}>→</span>
                </button>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
            After your 7-day trial, your subscription continues at $149/month unless you cancel. We'll email you 2 days before the trial ends. Cancel anytime from your dashboard — no calls, no forms.
          </p>
        </div>
      </section>

      {/* ───────────────────── 10. SIGNUP ───────────────────── */}
      <section
        id="signup"
        ref={formSectionRef}
        className="bg-white scroll-mt-8"
      >
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: reassurance */}
            <div>
              <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold">
                Start your trial
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                By Tuesday night, your child could be in their first MyEdSpace class.
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <span className="text-brand-green font-bold flex-shrink-0">✓</span>
                  <span>$7 today. $149/month after 7 days. Cancel anytime.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-green font-bold flex-shrink-0">✓</span>
                  <span>
                    We'll email you 2 days before your trial ends. No surprise charges.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-green font-bold flex-shrink-0">✓</span>
                  <span>
                    30-day money-back guarantee. If you're not satisfied, we refund the full month.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-green font-bold flex-shrink-0">✓</span>
                  <span>No sales calls. The page is the pitch.</span>
                </li>
              </ul>
            </div>

            {/* Right: form */}
            <div className="border-2 border-brand-dark p-6 md:p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <p className="text-3xl font-bold">Thanks!</p>
                  <p className="mt-3 text-brand-dark/80">
                    We'll be in touch with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold">Start Your $7 Trial</h3>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold mb-1"
                      >
                        First name *
                      </label>
                      <input
                        id="firstName"
                        ref={firstNameRef}
                        type="text"
                        required
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full border border-brand-dark px-3 py-2 bg-white focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold mb-1"
                      >
                        Last name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full border border-brand-dark px-3 py-2 bg-white focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-brand-dark px-3 py-2 bg-white focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:outline-none"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold mb-1"
                    >
                      Phone *
                    </label>
                    <div className="flex">
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center px-3 border border-brand-dark border-r-0 bg-brand-light-blue/30 text-brand-dark font-semibold"
                      >
                        +1
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel-national"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="7XXX XXXXXX"
                        className="w-full border border-brand-dark px-3 py-2 bg-white focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:outline-none"
                      />
                    </div>
                    <p className="mt-2 text-xs text-brand-dark/60">
                      For trial reminders only. We never call.
                    </p>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="grade"
                      className="block text-sm font-semibold mb-1"
                    >
                      What grade is your child in? *
                    </label>
                    <select
                      id="grade"
                      required
                      value={selectedGrade}
                      onChange={(e) => setSelectedGrade(e.target.value)}
                      className="w-full border border-brand-dark px-3 py-2 bg-white focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <option value="">Select grade</option>
                      {GRADES.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className={`${CTA_CLASS} w-full justify-center`}
                    >
                      <span>Start My $7 Trial</span>
                      <span className={ARROW_CLASS}>→</span>
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-brand-dark/60 leading-relaxed">
                    Next step: confirm your $7 payment to start the 7-day trial. By continuing, you agree to receive communications from MyEdSpace. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── 11. FAQ ───────────────────── */}
      <section id="faq" className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center">
            Common questions
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-center leading-tight">
            What parents usually ask before they start.
          </h2>

          <div className="mt-10 border-t border-brand-dark/20">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-brand-dark/20">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex justify-between items-center text-left py-5 cursor-pointer"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="text-2xl font-bold text-brand-dark/60 flex-shrink-0"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-panel-${i}`}
                      className="pb-5 text-brand-dark/80 leading-relaxed"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ───────────────────── 12. CLOSING ───────────────────── */}
      <section id="closing" className="bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Your kid's tutor wasn't the problem.
            <br />
            The format was.
          </h2>
          <p className="mt-8 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Try MyEdSpace for 7 days for $7. Same teacher, twice a week, in your timezone. Recordings forever. AI coach 24/7. 30-day money-back if it's not for you.
          </p>
          <div className="mt-10">
            <button
              onClick={() => scrollToFormAndPrefill()}
              className={`${CTA_CLASS} text-lg`}
            >
              <span>Start Your $7 Trial</span>
              <span className={ARROW_CLASS}>→</span>
            </button>
          </div>
          <p className="mt-6 text-sm text-white/60">
            By Tuesday night, your child could be in their first class.
          </p>
        </div>
      </section>

      {/* ───────────────────── 13. FOOTER ───────────────────── */}
      <footer id="footer" className="bg-brand-dark border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center text-white/70">
          <div className="text-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="inline-flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/favicon.webp"
                alt="MyEdSpace logo"
                className="h-7 w-7"
              />
              <span className="font-bold text-white">MyEdSpace</span>
            </span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              aria-disabled="true"
              title="Coming soon"
              className="bg-transparent border-0 p-0 hover:text-white cursor-not-allowed"
            >
              Privacy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              aria-disabled="true"
              title="Coming soon"
              className="bg-transparent border-0 p-0 hover:text-white cursor-not-allowed"
            >
              Terms
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              aria-disabled="true"
              title="Coming soon"
              className="bg-transparent border-0 p-0 hover:text-white cursor-not-allowed"
            >
              Support
            </button>
          </div>
          <p className="mt-3 text-xs">
            <span className="text-brand-green">★</span> 4.8 on Trustpilot
            &nbsp;·&nbsp; 1,700+ reviews
          </p>
          <p className="mt-3 text-xs">© 2026 MyEdSpace. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
