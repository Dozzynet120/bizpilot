'use client';

import {
  FormEvent,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import {
  createCustomer,
  Customer,
  getCustomers,
} from '@/lib/customers';

import {
  getAccessToken,
} from '@/lib/auth';

export default function CustomersPage() {
  const router = useRouter();

  const [customers, setCustomers] =
    useState<Customer[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [error, setError] =
    useState('');

  const [firstName, setFirstName] =
    useState('');

  const [lastName, setLastName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [phone, setPhone] =
    useState('');

  async function loadCustomers() {
    try {
      setLoading(true);

      const data =
        await getCustomers();

      setCustomers(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to load customers.',
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = getAccessToken();

    if (!token) {
      router.push('/login');
      return;
    }

    loadCustomers();
  }, [router]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSaving(true);
    setError('');

    try {
      await createCustomer({
        firstName,
        lastName,
        email: email || undefined,
        phone: phone || undefined,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');

      await loadCustomers();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to create customer.',
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <a
              href="/dashboard"
              className="text-sm font-semibold text-indigo-600"
            >
              ← Dashboard
            </a>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Customers
            </h1>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Add Customer
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <input
                value={firstName}
                onChange={(event) =>
                  setFirstName(event.target.value)
                }
                required
                placeholder="First name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
              />

              <input
                value={lastName}
                onChange={(event) =>
                  setLastName(event.target.value)
                }
                required
                placeholder="Last name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
              />

              <input
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
              />

              <input
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                placeholder="Phone"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
              />

              {error && (
                <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
              >
                {saving
                  ? 'Adding...'
                  : 'Add Customer'}
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Customer List
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {customers.length}{' '}
                  customer
                  {customers.length === 1
                    ? ''
                    : 's'}
                </p>
              </div>
            </div>

            {loading ? (
              <p className="mt-8 text-slate-500">
                Loading customers...
              </p>
            ) : customers.length === 0 ? (
              <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-8 text-center">
                <p className="font-medium text-slate-700">
                  No customers yet
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Add your first customer using the form.
                </p>
              </div>
            ) : (
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <div className="divide-y divide-slate-200">
                  {customers.map(
                    (customer) => (
                      <div
                        key={customer.id}
                        className="flex items-center justify-between p-4"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">
                            {customer.firstName}{' '}
                            {customer.lastName}
                          </p>

                          <p className="text-sm text-slate-500">
                            {customer.email ||
                              'No email'}
                          </p>

                          <p className="text-sm text-slate-500">
                            {customer.phone ||
                              'No phone'}
                          </p>
                        </div>

                        <div className="text-right text-xs text-slate-400">
                          <p>
                            Conversations:{' '}
                            {customer._count
                              ?.conversations ??
                              0}
                          </p>

                          <p>
                            Leads:{' '}
                            {customer._count
                              ?.leads ??
                              0}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}