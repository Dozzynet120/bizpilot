'use client';

import Chatbot from '@/components/chatbot/Chatbot';

const BIZPILOT_WIDGET_ID = 'bp_wgt_24e26522dddd8372';

export default function ChatbotPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            BizPilot AI
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            AI Customer Service & Sales
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Experience the BizPilot AI website assistant. Ask questions about
            products, services, pricing, and more.
          </p>
        </div>

        <div className="mt-12">
          <Chatbot widgetId={BIZPILOT_WIDGET_ID} />
        </div>
      </section>
    </main>
  );
}