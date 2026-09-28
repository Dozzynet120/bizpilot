'use client';

import {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import {
  getAccessToken,
} from '@/lib/auth';

import {
  getCustomers,
  Customer,
} from '@/lib/customers';

export default function DashboardPage() {
  const router = useRouter();

  const [customers, setCustomers] =
    useState<Customer[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');

  useEffect(() => {
    async function loadDashboard() {
      const token = getAccessToken();

      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const data =
          await getCustomers();

        setCustomers(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'Unable to load dashboard.',
        );
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, [router]);

  return (
    <main className="min-h-screen bg-slate-100">
      {/* =====================================================
          HEADER
          ===================================================== */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-indigo-600">
              BizPilot AI
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Business Dashboard
            </h1>
          </div>

          {/* Dashboard navigation */}
          <nav className="flex flex-wrap items-center gap-3">
            <a
              href="/dashboard/customers"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
            >
              Customers
            </a>

            <a
              href="/dashboard/widgets"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Widgets
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================
          DASHBOARD CONTENT
          ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        {/* ===================================================
            STATISTICS
            =================================================== */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Customers */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Customers
            </p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              {loading
                ? '—'
                : customers.length}
            </p>
          </div>

          {/* Conversations */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Conversations
            </p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              0
            </p>
          </div>

          {/* Leads */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Leads
            </p>

            <p className="mt-2 text-4xl font-bold text-slate-900">
              0
            </p>
          </div>
        </div>

        {/* ===================================================
            ERROR
            =================================================== */}
        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {/* ===================================================
            RECENT CUSTOMERS
            =================================================== */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Customers
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Live data from your BizPilot database.
              </p>
            </div>

            <a
              href="/dashboard/customers"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all
            </a>
          </div>

          {loading ? (
            <p className="mt-8 text-slate-500">
              Loading customers...
            </p>
          ) : customers.length === 0 ? (
            <p className="mt-8 text-slate-500">
              No customers yet.
            </p>
          ) : (
            <div className="mt-6 space-y-3">
              {customers
                .slice(0, 5)
                .map((customer) => (
                  <div
                    key={customer.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
                  >
                    <div>
                      <p className="font-semibold text-slate-900">
                        {customer.firstName}{' '}
                        {customer.lastName}
                      </p>

                      <p className="text-sm text-slate-500">
                        {customer.email ||
                          customer.phone ||
                          'No contact information'}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* ===================================================
            WIDGET MANAGEMENT INTRO
            =================================================== */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-slate-900 p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-300">
                AI Website Assistant
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Turn your website into an AI sales channel
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                Create and manage BizPilot chatbot widgets,
                connect them to your AI agents, control the
                websites where they can run, and generate
                embed code for your customers.
              </p>
            </div>

            <a
              href="/dashboard/widgets"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Manage Widgets
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}