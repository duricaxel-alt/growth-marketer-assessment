/**
 * MyEdSpace US homepage.
 *
 * This is the file you'll build out for the assessment.
 *
 * Read in this order before touching anything:
 *   1. README.md
 *   2. CLAUDE.md
 *   3. BRIEF.md
 *   4. docs/GROWTH_PRINCIPLES.md
 *   5. docs/WIREFRAME.md
 *   6. docs/REVIEWS.json
 *
 * Then open Claude Code in the repo root (`claude`) and get to work.
 *
 * Reminder: we are not evaluating whether you wrote this code yourself.
 * We are evaluating how you direct an AI agent to ship something that
 * converts. Drive Claude Code well.
 */

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <div className="inline-block w-12 h-12 rounded-md bg-brand-blue mb-6" />
        <h1 className="text-2xl font-bold text-brand-dark">
          MyEdSpace assessment scaffold
        </h1>
        <p className="mt-3 text-brand-dark/70">
          Replace this with the landing page described in{" "}
          <code className="px-1.5 py-0.5 bg-black/5 rounded text-sm">
            BRIEF.md
          </code>
          .
        </p>
        <p className="mt-2 text-sm text-brand-dark/50">
          See <code>README.md</code> for instructions.
        </p>
      </div>
    </main>
  );
}
