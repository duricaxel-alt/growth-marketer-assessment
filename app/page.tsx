"use client";

import { FormEvent, useEffect, useRef, useState, type ReactNode } from "react";

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

const TRUST_STATS = [
  { value: "21,000+", label: "Students Taught" },
  { value: "95%", label: "Parent Satisfaction" },
  { value: "4.8★", label: "Trustpilot Rating" },
  { value: "83%", label: "Improved Confidence" },
];

const FEATURE_CELLS = [
  {
    title: "LIVE CLASSES, TWICE A WEEK",
    body: "Tuesday and Thursday evenings, in your timezone. Same teacher, same time, every week.",
    icon: (
      <svg
        className="w-5 h-5 lg:w-7 lg:h-7 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "EVERY CLASS RECORDED",
    body: "Missed Tuesday? The full recording is in your child's dashboard within an hour. No catch-up calls needed.",
    icon: (
      <svg
        className="w-5 h-5 lg:w-7 lg:h-7 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "PRACTICE PROBLEMS + WORKBOOKS",
    body: "Aligned with what your teacher covers in class. Sent automatically after each lesson.",
    icon: (
      <svg
        className="w-5 h-5 lg:w-7 lg:h-7 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "30-DAY MONEY-BACK GUARANTEE",
    body: "If you're not satisfied after 30 days, we refund the full month. No forms, no calls.",
    icon: (
      <svg
        className="w-5 h-5 lg:w-7 lg:h-7 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const COMPARISON_ROWS = [
  {
    label: "Class size",
    school: "~30 students",
    mes: "Small live group, cameras off",
  },
  {
    label: "Pace",
    school: "Fixed for the whole class",
    mes: "Designed for your child's grade level",
  },
  {
    label: "Same teacher every week?",
    school: "Yes, but in a group of 30",
    mes: "Yes. Eddie or Adam, twice a week.",
  },
  {
    label: "Recordings if your kid misses",
    school: "No",
    mes: "Every class, in the dashboard within the hour",
  },
  {
    label: "Homework help between classes",
    school: "No",
    mes: "24/7 AI coach, trained on the same curriculum",
  },
  {
    label: "What you're paying for",
    school: "Free (public education)",
    mes: "Focused live teaching, recordings, AI coach, practice materials",
  },
  {
    label: "Cost per month",
    school: "Free",
    mes: "$149 ($7 to try first)",
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

const TEACHERS = [
  {
    photo: "/assets/img/adam_1.png",
    photoAlt: "Adam Gilbert, math teacher at MyEdSpace",
    name: "Adam Gilbert",
    bio: "Over 7 years teaching Math in Charter schools across the United States, with a Bachelor's from Brown University and an MSc from Johns Hopkins.",
    subjects: ["Elementary Math", "Pre-Algebra", "AP Pre-Calculus"],
  },
  {
    photo: "/assets/img/eddie_5.webp",
    photoAlt: "Eddie Kang, math teacher at MyEdSpace",
    name: "Eddie Kang",
    bio: "Over 9 years teaching Math across schools in California, with a Pure Mathematics degree from UCLA and a Perfect SAT Math Score of 800 out of 800.",
    subjects: ["Algebra I", "Algebra II", "Geometry", "AP Calculus AB"],
  },
];

const AWARDS = [
  { name: "Best Online School", year: "2025" },
  { name: "Home Education Service of the Year", year: "2025/26" },
];

type Faq = { q: string; a: ReactNode };

const FAQS: Faq[] = [
  {
    q: "What happens after the 7-day trial?",
    a: "After 7 days, your subscription continues at $149/month unless you cancel. We'll email you 2 days before the trial ends so there are no surprises. Cancel anytime from your dashboard. No calls, no forms. If you stay and change your mind, our 30-day money-back guarantee covers the full month.",
  },
  {
    q: "What if my child doesn't like it?",
    a: "Cancel within 7 days and you're not charged anything beyond the $7 trial. If you continue and decide it's not working within the first 30 days, we refund the full month with no questions asked. We'd rather have an honest refund than a frustrated family.",
  },
  {
    q: "What if we miss a class?",
    a: "Every class is recorded and available in your child's dashboard within an hour of the lesson ending. Your child watches when their schedule allows. The AI coach is available 24/7 for follow-up questions on anything they missed.",
  },
  {
    q: "Will my child have to be on camera?",
    a: "No. Student cameras stay off during every class. Your child participates through live chat using a username instead of their real name. This is deliberate: kids ask the questions they'd never ask out loud, and the teacher sees who's lost in real time.",
  },
  {
    q: "What if my child needs 1-on-1 attention?",
    a: "Every live class is small enough that the teacher sees who's engaged and who's lost in real time. Students participate through chat using usernames instead of their real names, which actually surfaces more questions than they'd ever ask out loud. For homework practice between classes, the 24/7 AI coach gives step-by-step guidance based on the same curriculum your teacher covers. If your child needs traditional 1-on-1 tutoring on top of MyEdSpace, you can always combine both. Most families find the live group format plus AI coach is enough.",
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
// Hero CTA sits on the brand-blue section background, so its hover goes to white instead of brand-dark.
// Brand-dark hover on brand-blue would visually disappear; white keeps the button distinct on every state.
const HERO_CTA_CLASS =
  "group inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-brand-dark font-bold border-2 border-brand-dark cursor-pointer transition-colors duration-200 ease-out hover:bg-white hover:text-brand-dark active:scale-[0.98]";
const ARROW_CLASS =
  "inline-block transition-transform duration-200 group-hover:translate-x-1";

const INPUT_CLASS =
  "w-full border border-brand-dark px-3 py-2 bg-white focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:outline-none";

// Side by Side comparison cell icons: green check for MyEdSpace wins, gray X for School limits.
const CompareCheckIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 bg-brand-green mr-2 flex-shrink-0 align-text-bottom">
    <svg
      className="w-3 h-3 text-brand-dark"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const CompareCrossIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 bg-brand-dark/10 mr-2 flex-shrink-0 align-text-bottom">
    <svg
      className="w-3 h-3 text-brand-dark/50"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

export default function HomePage() {
  // === Section 9 form state (INTOCABLE, names preserved exactly) ===
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

  // === Hero form state (NEW, fully independent from section 9) ===
  const [heroFirstName, setHeroFirstName] = useState("");
  const [heroLastName, setHeroLastName] = useState("");
  const [heroEmail, setHeroEmail] = useState("");
  const [heroPhone, setHeroPhone] = useState("");
  const [heroGrade, setHeroGrade] = useState("");
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // === Mobile-only UI state ===
  const [showAICoachMock, setShowAICoachMock] = useState(false);
  const [sideToggle, setSideToggle] = useState<"school" | "myedspace">("myedspace");
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Reviews carousel state (mobile auto-rotation)
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviewsCarouselRef = useRef<HTMLDivElement>(null);
  const reviewsAutoRotateRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const heroFormRef = useRef<HTMLDivElement>(null);
  const heroFirstNameRef = useRef<HTMLInputElement>(null);

  // Auto-rotate mobile reviews carousel every 5 seconds
  useEffect(() => {
    reviewsAutoRotateRef.current = setInterval(() => {
      // Only auto-step when mobile viewport (carousel actually scrolls)
      if (
        typeof window !== "undefined" &&
        !window.matchMedia("(min-width: 1024px)").matches
      ) {
        setReviewIndex((prev) => (prev + 1) % 4);
      }
    }, 5000);
    return () => {
      if (reviewsAutoRotateRef.current) {
        clearInterval(reviewsAutoRotateRef.current);
        reviewsAutoRotateRef.current = null;
      }
    };
  }, []);

  // Scroll the mobile carousel into position when reviewIndex changes
  useEffect(() => {
    const el = reviewsCarouselRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / 4;
    el.scrollTo({ left: cardWidth * reviewIndex, behavior: "smooth" });
  }, [reviewIndex]);

  // Stop auto-rotation when the user takes control (touch or dot click)
  function pauseReviewAutoRotate() {
    if (reviewsAutoRotateRef.current) {
      clearInterval(reviewsAutoRotateRef.current);
      reviewsAutoRotateRef.current = null;
    }
  }

  function scrollToHeroFormAndPrefill(grade?: string) {
    if (grade) setHeroGrade(grade);
    heroFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => heroFirstNameRef.current?.focus({ preventScroll: true }), 700);
  }

  function handleHeroSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({
      firstName: heroFirstName,
      lastName: heroLastName,
      email: heroEmail,
      phone: heroPhone,
      grade: heroGrade,
      source: "hero",
    });
    setHeroSubmitted(true);
  }

  return (
    <>
      {/* ─────────────────────── 0. HEADER ─────────────────────── */}
      <header className="bg-brand-blue">
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center">
          <a
            href="/"
            aria-label="MyEdSpace home"
            className="inline-flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/myedspace-logo.svg"
              alt="MyEdSpace"
              className="h-10 md:h-12 w-auto"
            />
          </a>
        </div>
      </header>

      <main>
        {/* ─────────────────────── 1. HERO ─────────────────────── */}
        <section id="hero" className="bg-brand-blue">
          <div className="max-w-6xl mx-auto px-6 pt-8 lg:pt-12 pb-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column */}
              <div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
                  Your child's strongest{" "}
                  <span
                    className="text-brand-green"
                    style={{
                      WebkitTextStroke: "4px #101626",
                      paintOrder: "stroke fill",
                    }}
                  >
                    math
                  </span>
                  {" "}year is one teacher away.
                </h1>
                <p className="mt-6 text-xl text-white/90 max-w-xl leading-relaxed">
                  Live online math twice a week. In your timezone. From teachers who get it.
                </p>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-white/80 mb-3">
                    Select their grade to get started
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {GRADES.map((g) => (
                      <button
                        key={g}
                        onClick={() => {
                          const isDesktop =
                            typeof window !== "undefined" &&
                            window.matchMedia("(min-width: 1024px)").matches;
                          if (isDesktop) {
                            scrollToHeroFormAndPrefill(g);
                          } else {
                            scrollToFormAndPrefill(g);
                          }
                        }}
                        className={`px-4 py-2 text-sm border-[3px] border-brand-dark cursor-pointer transition-colors duration-200 active:scale-[0.98] ${
                          heroGrade === g
                            ? "bg-brand-green text-brand-dark"
                            : "bg-white text-brand-dark hover:bg-brand-green hover:text-brand-dark"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => {
                      const isDesktop =
                        typeof window !== "undefined" &&
                        window.matchMedia("(min-width: 1024px)").matches;
                      if (isDesktop) {
                        scrollToHeroFormAndPrefill();
                      } else {
                        scrollToFormAndPrefill();
                      }
                    }}
                    className={HERO_CTA_CLASS}
                  >
                    <span>Start Your $7 Trial</span>
                    <span className={ARROW_CLASS}>→</span>
                  </button>
                </div>

                <div className="mt-6 text-xs sm:text-sm text-white/70 flex flex-wrap justify-start gap-x-2 gap-y-1">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="text-brand-green">★</span>
                    <a
                      href="https://www.trustpilot.com/review/myedspace.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      4.8 on Trustpilot
                    </a>
                  </span>
                  <span aria-hidden="true" className="text-white/40">·</span>
                  <span>21,000+ students</span>
                  <span aria-hidden="true" className="text-white/40">·</span>
                  <span>1,700+ reviews</span>
                </div>
              </div>

              {/* Right column - HERO FORM (independent state) */}
              <div
                ref={heroFormRef}
                className="hidden lg:block bg-white border-4 border-brand-dark p-4 lg:p-8 scroll-mt-8"
              >
                {heroSubmitted ? (
                  <div>
                    <p className="text-sm uppercase tracking-wide text-brand-blue font-semibold mb-2">
                      Got it
                    </p>
                    <h3 className="text-lg font-bold text-brand-dark">
                      Check your inbox.
                    </h3>
                    <p className="mt-3 text-base text-brand-dark/80 leading-relaxed">
                      We'll email you the next step to start your $7 trial. Same fields you just filled, plus the secure payment screen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit}>
                    <p className="text-sm uppercase tracking-wide text-brand-blue font-semibold mb-2">
                      Start your $7 trial
                    </p>
                    <p className="text-lg font-semibold text-brand-dark mb-4">
                      Two live classes a week. Cancel anytime.
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="hero-firstName"
                          className="block text-sm font-semibold mb-1"
                        >
                          First name *
                        </label>
                        <input
                          id="hero-firstName"
                          ref={heroFirstNameRef}
                          type="text"
                          required
                          autoComplete="given-name"
                          value={heroFirstName}
                          onChange={(e) => setHeroFirstName(e.target.value)}
                          className={INPUT_CLASS}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hero-lastName"
                          className="block text-sm font-semibold mb-1"
                        >
                          Last name *
                        </label>
                        <input
                          id="hero-lastName"
                          type="text"
                          required
                          autoComplete="family-name"
                          value={heroLastName}
                          onChange={(e) => setHeroLastName(e.target.value)}
                          className={INPUT_CLASS}
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="hero-email"
                        className="block text-sm font-semibold mb-1"
                      >
                        Email *
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={heroEmail}
                        onChange={(e) => setHeroEmail(e.target.value)}
                        className={INPUT_CLASS}
                      />
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="hero-phone"
                        className="block text-sm font-semibold mb-1"
                      >
                        Phone *
                      </label>
                      <div className="flex">
                        <span
                          aria-hidden="true"
                          className="inline-flex items-center px-3 border border-brand-dark border-r-0 bg-brand-light-blue/50 text-brand-dark font-semibold"
                        >
                          +1
                        </span>
                        <input
                          id="hero-phone"
                          type="tel"
                          required
                          autoComplete="tel-national"
                          value={heroPhone}
                          onChange={(e) => setHeroPhone(e.target.value)}
                          placeholder="7XXX XXXXXX"
                          className={INPUT_CLASS}
                        />
                      </div>
                      <p className="mt-1 text-xs text-brand-dark/60">
                        For trial reminders only. We never call.
                      </p>
                    </div>

                    <div className="mt-3">
                      <label
                        htmlFor="hero-grade"
                        className="block text-sm font-semibold mb-1"
                      >
                        What grade is your child in? *
                      </label>
                      <select
                        id="hero-grade"
                        required
                        value={heroGrade}
                        onChange={(e) => setHeroGrade(e.target.value)}
                        className={INPUT_CLASS}
                      >
                        <option value="">Select grade</option>
                        {GRADES.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-5">
                      <button
                        type="submit"
                        className={`${CTA_CLASS} w-full justify-center px-6 py-3`}
                      >
                        <span>Start Your $7 Trial</span>
                        <span className={ARROW_CLASS}>→</span>
                      </button>
                    </div>

                    <p className="mt-3 text-sm font-medium text-brand-dark leading-relaxed">
                      Next step: confirm your $7 payment to start the 7-day trial.
                    </p>
                    <p className="mt-2 text-xs text-brand-dark/60 leading-relaxed">
                      By clicking, you agree to receive communications from MyEdSpace. You can unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────── 2. TRUST STATS ─────────────────────── */}
        <section id="stats" className="bg-brand-dark">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-5xl md:text-6xl font-bold text-brand-green">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm md:text-base text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────── 4. MEET YOUR TEACHERS ─────────────────────── */}
        <section id="meet-teachers" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 lg:py-12">
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold">
                Your Math Teachers
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
                Meet your teachers.
              </h2>
              <p className="mt-4 text-lg text-brand-dark/80 max-w-3xl mx-auto leading-relaxed">
                Years of US classroom experience and top-university degrees in math. Two teachers, full curriculum coverage from Elementary Math through AP Calculus.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {TEACHERS.map((t, idx) => (
                <div
                  key={t.name}
                  className={`flex flex-col border border-brand-dark/10 ${
                    idx === 0 ? "order-2 lg:order-none" : "order-1 lg:order-none"
                  }`}
                >
                  {/* Photo container */}
                  <div className="bg-brand-light-blue h-80 lg:h-96 overflow-hidden flex items-end justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.photo}
                      alt={t.photoAlt}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  {/* Info area */}
                  <div className="bg-white p-4 lg:p-8">
                    <span className="inline-block bg-brand-blue text-white text-xs uppercase tracking-wide font-semibold px-3 py-1 mb-3">
                      Math Teacher
                    </span>
                    <h3 className="text-2xl font-bold text-brand-dark">
                      {t.name}
                    </h3>
                    <p className="mt-3 text-base text-brand-dark/80 leading-relaxed">
                      {t.bio}
                    </p>
                    <p className="mt-5 mb-3 text-xs uppercase tracking-wide text-brand-dark/60 font-semibold">
                      Subjects
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {t.subjects.map((subject) => (
                        <li
                          key={subject}
                          className="inline-block bg-brand-light-blue text-brand-dark text-sm font-semibold px-3 py-1.5"
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Video below grid */}
            <div className="mt-12 lg:mt-16 bg-brand-light-blue border-2 border-brand-dark p-4 lg:p-10 max-w-3xl mx-auto">
              {/* Eyebrow + heading */}
              <div className="text-center mb-6">
                <span className="inline-block bg-brand-dark text-white text-xs uppercase tracking-widest font-bold px-3 py-1 mb-3">
                  Inside MyEdSpace
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark leading-tight">
                  See how MyEdSpace works.
                </h3>
              </div>

              {/* Video element with brand poster (no teacher faces) */}
              <div className="max-w-[640px] mx-auto">
                {videoPlaying ? (
                  <video
                    controls
                    autoPlay
                    className="w-full border-2 border-brand-dark"
                  >
                    <source
                      src="/assets/video/MES_intro.mp4"
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <button
                    type="button"
                    onClick={() => setVideoPlaying(true)}
                    aria-label="Play 55-second walkthrough"
                    className="aspect-video w-full bg-brand-dark border-2 border-brand-dark flex items-center justify-center relative cursor-pointer group overflow-hidden"
                  >
                    {/* MyEdSpace wordmark, centered, scaled responsively */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/img/myedspace-logo.svg"
                      alt="MyEdSpace"
                      className="w-32 sm:w-40 lg:w-56 opacity-90 transition-opacity group-hover:opacity-100"
                    />

                    {/* Subtle gradient overlay at bottom for play button contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none"></div>

                    {/* Play button: bottom-center on all viewports */}
                    <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-3">
                      <div className="w-10 h-10 lg:w-14 lg:h-14 bg-brand-green border-2 border-brand-dark flex items-center justify-center transition-transform group-hover:scale-105">
                        <svg
                          className="w-4 h-4 lg:w-6 lg:h-6 text-brand-dark ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="text-white text-[10px] lg:text-sm font-bold uppercase tracking-wide bg-brand-dark/60 px-2 py-1 lg:px-3 lg:py-1.5 backdrop-blur-sm">
                        Watch &nbsp;·&nbsp; 55s
                      </span>
                    </div>
                  </button>
                )}
              </div>

              {/* Caption below video */}
              <p className="text-sm text-brand-dark/70 mt-4 text-center">
                55-second walkthrough.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────── 5. WHAT YOUR CHILD GETS ─────────────── */}
        <section id="what-you-get" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 lg:py-12">
            <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center">
              What's Included
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-center leading-tight">
              Everything your child needs.
              <br />
              Nothing they don't.
            </h2>

            <div className="mt-8 lg:mt-10 mb-12 lg:mb-16 bg-brand-light-blue border-4 border-brand-dark p-5 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left column: text content */}
                <div>
                  <span className="inline-block bg-brand-dark text-brand-green text-base uppercase tracking-wide font-black px-4 py-2 mb-5">
                    24/7 AI MATH COACH
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark leading-tight mb-5">
                    Stuck on homework? Ask the AI Coach.
                  </h3>
                  <p className="text-base lg:text-lg text-brand-dark/80 leading-relaxed mb-6">
                    Most learning happens between classes. The AI Math Coach is trained on the same curriculum your teacher covers, so when your kid hits a wall on problem set 7, the help is one chat away.
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-blue flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-brand-dark text-base lg:text-lg">
                        Trained on the same curriculum your teacher covers in class
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-blue flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-brand-dark text-base lg:text-lg">
                        Step-by-step explanations, not just answers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-blue flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-brand-dark text-base lg:text-lg">
                        Available 24/7, across every grade level
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Right column: mock chat app */}
                <div>
                  {/* Mobile-only toggle button (collapses mock chat to save scroll) */}
                  <div className="lg:hidden mt-6">
                    <button
                      type="button"
                      onClick={() => setShowAICoachMock(!showAICoachMock)}
                      className="w-full bg-brand-dark text-white px-5 py-3 border-2 border-brand-dark font-bold text-sm uppercase tracking-wide flex items-center justify-between"
                      aria-expanded={showAICoachMock}
                    >
                      <span>
                        {showAICoachMock ? "Hide example chat" : "See example chat"}
                      </span>
                      <span className="text-brand-green text-lg">
                        {showAICoachMock ? "−" : "+"}
                      </span>
                    </button>
                  </div>

                  {/* Mock chat: always visible on lg+, conditional on mobile */}
                  <div
                    className={`mt-6 lg:mt-0 ${
                      showAICoachMock ? "block" : "hidden lg:block"
                    }`}
                  >
                    <div className="bg-white border-2 border-brand-dark w-full max-w-md mx-auto lg:mx-0">
                    {/* App chrome */}
                    <div className="bg-brand-dark px-4 py-3 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 bg-white/30" />
                        <span className="w-3 h-3 bg-white/30" />
                        <span className="w-3 h-3 bg-white/30" />
                      </div>
                      <span className="ml-3 text-white text-sm font-semibold">
                        AI Math Coach
                      </span>
                      <span className="ml-auto flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-brand-green animate-pulse" />
                        <span className="text-white/70 text-xs uppercase tracking-wide font-semibold">
                          Live
                        </span>
                      </span>
                    </div>

                    {/* Messages area */}
                    <div className="bg-white p-5 lg:p-6 flex flex-col gap-4 min-h-[280px]">
                      {/* Student message 1 */}
                      <div className="flex flex-col items-start gap-1 max-w-[85%]">
                        <span className="text-[11px] uppercase tracking-wide text-brand-dark/50 font-semibold">
                          Student
                        </span>
                        <div className="bg-white border-2 border-brand-dark px-4 py-3 text-sm text-brand-dark">
                          I don't get why we flip the inequality sign when we multiply by a negative number.
                        </div>
                      </div>

                      {/* AI Coach message */}
                      <div className="flex flex-col items-end gap-1 max-w-[85%] self-end">
                        <span className="text-[11px] uppercase tracking-wide text-brand-blue font-semibold">
                          AI Coach
                        </span>
                        <div className="bg-brand-dark border-2 border-brand-dark text-white px-4 py-3 text-sm">
                          Great question. When you multiply or divide by a negative number, the inequality reverses direction. Want me to walk you through an example?
                        </div>
                      </div>

                      {/* Student message 2 */}
                      <div className="flex flex-col items-start gap-1 max-w-[85%]">
                        <span className="text-[11px] uppercase tracking-wide text-brand-dark/50 font-semibold">
                          Student
                        </span>
                        <div className="bg-white border-2 border-brand-dark px-4 py-3 text-sm text-brand-dark">
                          Yes please.
                        </div>
                      </div>
                    </div>

                    {/* Input bar (static, not functional) */}
                    <div className="border-t border-brand-dark/10 bg-white p-3 flex items-center gap-2">
                      <div className="flex-1 bg-brand-dark/5 px-3 py-2 text-sm text-brand-dark/40">
                        Ask anything about your homework...
                      </div>
                      <div className="bg-brand-blue p-2 flex items-center justify-center cursor-default">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-brand-dark mt-5 text-center inline-flex items-center justify-center gap-2 w-full">
                    <svg
                      className="w-4 h-4 text-brand-blue inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Real chat. Available 24/7 to every MyEdSpace student.
                  </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 lg:gap-6">
              {FEATURE_CELLS.map((cell) => (
                <div
                  key={cell.title}
                  className="flex flex-col gap-4 bg-white border-l-4 border-brand-blue border-t border-r border-b border-brand-dark/10 p-4 lg:p-7"
                >
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-brand-blue flex items-center justify-center flex-shrink-0">
                    {cell.icon}
                  </div>
                  <p className="text-xs lg:text-sm uppercase tracking-wide font-bold text-brand-dark">
                    {cell.title}
                  </p>
                  <p className="text-sm lg:text-base text-brand-dark/80 leading-relaxed">
                    {cell.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── 6. SIDE BY SIDE COMPARISON ─────────────── */}
        <section id="side-by-side" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 lg:py-12">
            <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center">
              Side by side
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
              There's school, and there's MyEdSpace.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-brand-dark/80 text-lg leading-relaxed">
              School gives your kid 30-kid classrooms at a fixed pace. That's why so many parents add MyEdSpace on top, for the focused, structured math help schools can't deliver one-on-one.
            </p>

            {/* Desktop: 3-col table */}
            <div className="mt-10 border border-brand-dark/30 hidden lg:block">
              {/* Header row */}
              <div className="grid grid-cols-3">
                <div className="bg-white p-4">&nbsp;</div>
                <div className="bg-brand-dark text-white text-base lg:text-lg font-bold py-5 lg:py-6 px-6 uppercase tracking-wide">
                  School
                </div>
                <div className="bg-brand-blue text-white text-base lg:text-lg font-bold py-5 lg:py-6 px-6 uppercase tracking-wide">
                  MyEdSpace
                </div>
              </div>

              {/* Data rows */}
              {COMPARISON_ROWS.map((row, i) => {
                const isLast = i === COMPARISON_ROWS.length - 1;
                const schoolHasNoIcon =
                  row.label === "Same teacher every week?";

                if (isLast) {
                  return (
                    <div
                      key={row.label}
                      className="grid grid-cols-3 border-t-2 border-brand-dark/20"
                    >
                      <div className="px-6 py-6 lg:py-8 font-semibold text-brand-dark">
                        {row.label}
                      </div>
                      <div className="px-6 py-6 lg:py-8 bg-white text-brand-dark/70">
                        Free
                      </div>
                      <div className="px-6 py-6 lg:py-8 bg-brand-blue text-white">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                              $149
                            </span>
                            <span className="text-base text-white/70">
                              /month
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-1">
                            <span className="inline-flex items-center bg-brand-green text-brand-dark text-sm font-bold px-3 py-1">
                              $7 first week
                            </span>
                            <button
                              type="button"
                              onClick={() => scrollToHeroFormAndPrefill()}
                              className="text-sm font-semibold text-white underline hover:text-brand-green transition-colors cursor-pointer bg-transparent border-0 p-0"
                            >
                              Start your trial →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 border-t border-brand-dark/10 text-sm md:text-base"
                  >
                    <div className="p-4 font-semibold text-brand-dark">
                      {row.label}
                    </div>
                    <div className="p-4 text-brand-dark/70">
                      {!schoolHasNoIcon && <CompareCrossIcon />}
                      {row.school}
                    </div>
                    <div className="p-4 font-semibold bg-brand-light-blue/40">
                      <CompareCheckIcon />
                      {row.mes}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile: 2 stacked cards */}
            <div className="mt-10 lg:hidden">
              {/* Mobile toggle tabs */}
              <div className="grid grid-cols-2 mb-6 border-2 border-brand-dark">
                <button
                  type="button"
                  onClick={() => setSideToggle("school")}
                  className={`py-3 px-4 font-bold text-sm uppercase tracking-wide transition-colors ${
                    sideToggle === "school"
                      ? "bg-brand-dark text-white"
                      : "bg-white text-brand-dark"
                  }`}
                  aria-pressed={sideToggle === "school"}
                >
                  School
                </button>
                <button
                  type="button"
                  onClick={() => setSideToggle("myedspace")}
                  className={`py-3 px-4 font-bold text-sm uppercase tracking-wide transition-colors ${
                    sideToggle === "myedspace"
                      ? "bg-brand-blue text-white"
                      : "bg-white text-brand-dark"
                  }`}
                  aria-pressed={sideToggle === "myedspace"}
                >
                  MyEdSpace
                </button>
              </div>

              {/* School card (visible when sideToggle = school) */}
              <div className={sideToggle === "school" ? "border border-brand-dark/30" : "hidden"}>
                <div className="bg-brand-dark text-white p-4 text-xs uppercase tracking-widest font-bold">
                  School
                </div>
                {COMPARISON_ROWS.map((row, i) => {
                  const isLast = i === COMPARISON_ROWS.length - 1;
                  const schoolHasNoIcon =
                    row.label === "Same teacher every week?";
                  return (
                    <div
                      key={row.label}
                      className={
                        isLast
                          ? "p-4 py-6 border-t-2 border-brand-dark/20"
                          : "p-4 border-t border-brand-dark/10"
                      }
                    >
                      <p className="text-xs uppercase tracking-wide font-semibold text-brand-dark/60 mb-1">
                        {row.label}
                      </p>
                      <p className="text-brand-dark/80">
                        {!isLast && !schoolHasNoIcon && <CompareCrossIcon />}
                        {isLast ? "Free" : row.school}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* MyEdSpace card (emphasized): visible when sideToggle = myedspace */}
              <div className={sideToggle === "myedspace" ? "border border-brand-dark/30" : "hidden"}>
                <div className="bg-brand-blue text-white p-4 text-xs uppercase tracking-widest font-bold">
                  MyEdSpace
                </div>
                {COMPARISON_ROWS.map((row, i) => {
                  const isLast = i === COMPARISON_ROWS.length - 1;

                  if (isLast) {
                    return (
                      <div
                        key={row.label}
                        className="p-4 py-6 border-t-2 border-brand-dark/20 bg-brand-blue text-white"
                      >
                        <p className="text-xs uppercase tracking-wide font-semibold text-white/70 mb-2">
                          {row.label}
                        </p>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white">
                              $149
                            </span>
                            <span className="text-base text-white/70">
                              /month
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-1">
                            <span className="inline-flex items-center bg-brand-green text-brand-dark text-sm font-bold px-3 py-1">
                              $7 first week
                            </span>
                            <button
                              type="button"
                              onClick={() => scrollToHeroFormAndPrefill()}
                              className="text-sm font-semibold text-white underline hover:text-brand-green transition-colors cursor-pointer bg-transparent border-0 p-0"
                            >
                              Start your trial →
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={row.label}
                      className="p-4 border-t border-brand-dark/10 bg-brand-light-blue/40"
                    >
                      <p className="text-xs uppercase tracking-wide font-semibold text-brand-dark/60 mb-1">
                        {row.label}
                      </p>
                      <p className="font-semibold">
                        <CompareCheckIcon />
                        {row.mes}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────── 7. REVIEWS ─────────────────────── */}
        <section id="reviews" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 lg:py-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark leading-tight">
                <span className="block">Better grades.</span>
                <span className="block">Happier homes.</span>
              </h2>
              <p className="mt-4 text-base text-brand-dark/70 max-w-xl mx-auto">
                Real reviews from verified parents on Trustpilot.
              </p>
            </div>

            <div className="mt-12 lg:mt-16">
              <div
                ref={reviewsCarouselRef}
                onTouchStart={pauseReviewAutoRotate}
                onScroll={(e) => {
                  const target = e.currentTarget;
                  const cardWidth = target.scrollWidth / 4;
                  const newIndex = Math.round(target.scrollLeft / cardWidth);
                  if (newIndex !== reviewIndex && newIndex >= 0 && newIndex < 4) {
                    setReviewIndex(newIndex);
                  }
                }}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 gap-4 lg:gap-6 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0"
              >
              {REVIEWS.map((r) => {
                // Split review body into a pull quote (first sentence)
                // and the rest as supporting body copy.
                const firstPeriod = r.body.indexOf(".");
                const useFullAsPullQuote =
                  firstPeriod === -1 || firstPeriod > 120;
                const pullQuote = useFullAsPullQuote
                  ? r.body
                  : r.body.slice(0, firstPeriod + 1);
                const rest = useFullAsPullQuote
                  ? ""
                  : r.body.slice(firstPeriod + 1).trim();

                return (
                  <div
                    key={r.name}
                    className="flex-shrink-0 w-[calc(100vw-4rem)] snap-center lg:w-auto lg:flex-shrink flex flex-col bg-white border-2 border-brand-dark"
                  >
                    {/* Region 1: Top badge bar */}
                    <div className="bg-brand-green text-brand-dark px-5 py-2.5 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest font-bold">
                        VERIFIED PARENT
                      </span>
                      <div className="flex gap-0.5" aria-hidden="true">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-3.5 h-3.5 bg-white flex items-center justify-center"
                          >
                            <span className="text-[#00b67a] text-[9px] leading-none font-bold">
                              ★
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Region 2: Header block (avatar + name + meta) */}
                    <div className="p-5 lg:p-6 border-b border-brand-dark/10 flex items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="w-12 h-12 bg-brand-dark text-white flex items-center justify-center font-bold text-lg flex-shrink-0"
                      >
                        {r.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-brand-dark leading-tight">
                          {r.name}
                        </span>
                        <span className="text-sm text-brand-dark/60 mt-0.5">
                          {r.city} &nbsp;·&nbsp; {r.date}
                        </span>
                      </div>
                    </div>

                    {/* Region 3: Pull quote + body */}
                    <div className="p-5 lg:p-6 flex-1">
                      <p className="text-lg lg:text-xl font-semibold text-brand-dark leading-snug mb-3">
                        {pullQuote}
                      </p>
                      {rest && (
                        <p className="text-sm lg:text-base text-brand-dark/75 leading-relaxed">
                          {rest}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
              </div>

              {/* Mobile-only dots indicator (interactive) */}
              <div className="lg:hidden flex items-center justify-center gap-2 mt-4">
                {REVIEWS.map((r, idx) => (
                  <button
                    key={`dot-${idx}`}
                    type="button"
                    onClick={() => {
                      setReviewIndex(idx);
                      pauseReviewAutoRotate();
                    }}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`w-2 h-2 transition-colors ${
                      idx === reviewIndex
                        ? "bg-brand-blue"
                        : "bg-brand-dark/20"
                    }`}
                  />
                ))}
              </div>
              <p className="lg:hidden text-xs text-brand-dark/60 text-center mt-3">
                Auto-rotating &nbsp;·&nbsp; Swipe to control
              </p>
            </div>

            <p className="mt-10 text-center text-sm text-brand-dark/70">
              <span className="text-[#00b67a]">★</span> Excellent on Trustpilot
              &nbsp;·&nbsp;
              <a
                href="https://www.trustpilot.com/review/myedspace.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-blue"
              >
                1,700+ reviews
              </a>
            </p>
          </div>
        </section>

        {/* ─────────────────────── 8. PRICING ─────────────────────── */}
        <section id="pricing" className="bg-brand-dark">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-28">
            <p className="uppercase tracking-widest text-sm text-brand-light-blue font-semibold text-center">
              The math on the math
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white leading-tight">
              One price. Try the first week for $7.
            </h2>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch lg:items-end max-w-6xl mx-auto">
              {/* Card 1: Private Tutor (expensive anchor) */}
              <div className="bg-brand-dark border border-white/15 p-5 lg:p-8 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4">
                  Private Tutor
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-white/70">
                    $640+
                  </span>
                  <span className="text-base text-white/40">/month</span>
                </div>
                <p className="text-sm text-white/50 mb-3">
                  ~$80/hr × 2/week × 4 weeks
                </p>
                <p className="text-xs text-white/40">
                  Source: 2025 US private tutoring averages
                </p>
                <div className="flex-1" />
                <p className="text-sm text-white/40 mt-6">
                  One-on-one tutoring time. No recordings, no AI coach, no curriculum alignment.
                </p>
              </div>

              {/* Card 2: MyEdSpace anchor, most popular tier */}
              <div className="relative bg-brand-blue border-4 border-brand-green p-5 lg:p-8 flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-brand-dark text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                  Most Popular
                </div>
                <p className="text-xs uppercase tracking-widest text-white font-bold mb-4 mt-2">
                  MyEdSpace
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl lg:text-6xl font-bold text-white">
                    $149
                  </span>
                  <span className="text-base text-white/80">/month</span>
                </div>
                <div className="mb-5">
                  <span className="inline-flex items-center bg-brand-green text-brand-dark text-sm font-bold px-3 py-1">
                    Save $491/month vs tutoring
                  </span>
                </div>
                <div className="border-t border-white/20 my-5" />
                <ul className="flex flex-col gap-3 mb-6">
                  {[
                    "Two live classes a week with your teacher",
                    "Every class recorded in your dashboard",
                    "24/7 AI Math Coach for homework help",
                    "30-day money-back guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-brand-green flex-shrink-0 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-brand-dark"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-sm lg:text-base text-white">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => scrollToFormAndPrefill()}
                  className="mt-auto w-full bg-brand-green text-brand-dark font-bold text-base lg:text-lg px-6 py-4 hover:bg-white transition-colors cursor-pointer"
                >
                  Get MyEdSpace →
                </button>
              </div>

              {/* Card 3: $7 trial (low-risk entry) */}
              <div className="relative bg-brand-dark border-4 border-brand-green p-5 lg:p-8 flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-brand-dark text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                  Start Here
                </div>
                <p className="text-xs uppercase tracking-widest text-brand-green font-bold mb-4 mt-2">
                  Your First Week
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl lg:text-6xl font-bold text-white">
                    $7
                  </span>
                  <span className="text-base text-white/60">one-time</span>
                </div>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  7 days of full access. Both live classes, AI coach, everything. Cancel anytime in one click. No questions, no calls.
                </p>
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={() => scrollToFormAndPrefill()}
                  className="mt-auto w-full bg-brand-green text-brand-dark font-bold text-base lg:text-lg px-6 py-4 hover:bg-white transition-colors cursor-pointer"
                >
                  Start $7 Trial →
                </button>
              </div>
            </div>

            {/* Awards block (redesigned) */}
            <div className="mt-12 lg:mt-16">
              <p className="text-xs uppercase tracking-widest text-white/50 font-bold mb-6 text-center">
                Industry Recognition
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {AWARDS.map((award) => (
                  <div
                    key={award.name}
                    className="bg-white/5 border border-white/10 p-5 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-brand-green flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-brand-dark"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-white leading-tight">
                        {award.name}
                      </span>
                      <span className="text-xs text-white/50 mt-1">
                        {award.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
              After your 7-day trial, your subscription continues at $149/month unless you cancel. We'll email you 2 days before the trial ends. Cancel anytime from your dashboard. No calls, no forms.
            </p>
          </div>
        </section>

        {/* ─────────────────────── 9. SIGNUP (INTOCABLE) ─────────────────────── */}
        <section
          id="signup"
          ref={formSectionRef}
          className="bg-brand-dark scroll-mt-8"
        >
          <div className="max-w-6xl mx-auto px-6 py-10 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: reassurance (on dark slab) */}
              <div>
                <span className="inline-block bg-brand-green text-brand-dark text-xs uppercase tracking-wide font-bold px-3 py-1 mb-5">
                  Start your trial
                </span>
                {/* Mobile H2: compressed */}
                <h2 className="lg:hidden text-3xl font-bold text-white leading-tight mb-4">
                  Try it for $7.
                </h2>
                {/* Desktop H2: full sentence */}
                <h2 className="hidden lg:block text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  By Tuesday night, your child could be in their first MyEdSpace class.
                </h2>
                <p className="hidden lg:block text-lg text-white/80 mb-8">
                  Two live classes a week. Same teacher. $7 to try the first week.
                </p>
                {/* Mobile bullets: 2 critical */}
                <ul className="lg:hidden flex flex-col gap-3 mt-6">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-white/90">
                      $7 today. Cancel anytime in one click.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-white/90">
                      30-day money-back guarantee.
                    </span>
                  </li>
                </ul>
                {/* Desktop bullets: full 4 */}
                <ul className="hidden lg:block mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base lg:text-lg text-white/90">
                      $7 today. $149/month after 7 days. Cancel anytime.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base lg:text-lg text-white/90">
                      We'll email you 2 days before your trial ends. No surprise charges.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base lg:text-lg text-white/90">
                      30-day money-back guarantee. If you're not satisfied, we refund the full month.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base lg:text-lg text-white/90">
                      No sales calls. The page is the pitch.
                    </span>
                  </li>
                </ul>

                {/* Urgency badge */}
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-4 py-2">
                    <span className="w-2 h-2 bg-brand-green animate-pulse" />
                    Next live class: this Tuesday
                  </span>
                </div>
              </div>

              {/* Right: form. INTOCABLE: only outer container className changes. */}
              <div className="bg-white border-2 border-brand-green p-5 lg:p-10">
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

                    <p className="mt-4 text-sm font-medium text-brand-dark leading-relaxed">
                      Next step: confirm your $7 payment to start the 7-day trial.
                    </p>
                    <p className="mt-2 text-xs text-brand-dark/60 leading-relaxed">
                      By clicking, you agree to receive communications from MyEdSpace. You can unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────── 10. FAQ ─────────────────────── */}
        <section id="faq" className="bg-white">
          <div className="max-w-3xl mx-auto px-6 py-8 lg:py-12">
            <p className="uppercase tracking-widest text-sm text-brand-blue font-semibold text-center">
              Common questions
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-center leading-tight">
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

        {/* ─────────────────────── 11. CLOSING ─────────────────────── */}
        <section id="closing" className="bg-brand-dark">
          <div className="max-w-4xl mx-auto px-6 py-8 md:py-32 text-center">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Your kid's math year starts here.
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Try MyEdSpace for 7 days for $7. Two live classes a week, in your timezone. Recordings forever. AI coach 24/7. 30-day money-back if it's not for you.
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
            <p className="mt-6 text-sm text-white/70">
              30-day money-back guarantee &nbsp;·&nbsp; Cancel anytime
            </p>
          </div>
        </section>
      </main>

      {/* ─────────────────────── 12. FOOTER ─────────────────────── */}
      <footer id="footer" className="bg-brand-dark border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-24 lg:py-10 text-center text-white/70">
          <div className="text-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="font-bold text-white text-lg">MyEdSpace</span>
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

      {/* Mobile-only sticky CTA bar */}
      <div
        className="fixed bottom-0 left-0 right-0 lg:hidden bg-brand-blue border-t-4 border-brand-green p-3 z-50"
        role="region"
        aria-label="Quick trial signup"
      >
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <div className="flex-1 text-white">
            <div className="text-xs uppercase tracking-wide font-bold text-brand-green leading-none">
              $7 First Week
            </div>
            <div className="text-xs text-white/80 mt-0.5">Cancel anytime</div>
          </div>
          <button
            type="button"
            onClick={() => scrollToHeroFormAndPrefill()}
            className="bg-brand-green text-brand-dark font-bold text-sm px-5 py-3 border-2 border-brand-dark hover:bg-white transition-colors flex-shrink-0"
          >
            Start Trial →
          </button>
        </div>
      </div>
    </>
  );
}
