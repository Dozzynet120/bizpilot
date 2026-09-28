import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
          BizPilot AI
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Your AI team for running your business.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Turn customer conversations into sales,
          automate customer service, manage leads,
          and run your business from one intelligent
          workspace.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-500"
          >
            Sign in to BizPilot
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-800"
          >
            Open Dashboard
          </Link>
        </div>

        <div className="mt-16 grid w-full max-w-4xl gap-4 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="text-2xl">💬</div>

            <h2 className="mt-4 font-semibold">
              Customer Conversations
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Bring customer conversations into
              one intelligent workspace.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="text-2xl">🤖</div>

            <h2 className="mt-4 font-semibold">
              AI Sales & Support
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Let AI answer questions, qualify
              leads, and help close sales.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="text-2xl">📊</div>

            <h2 className="mt-4 font-semibold">
              Business Intelligence
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Understand customers, leads,
              conversations, and business activity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}