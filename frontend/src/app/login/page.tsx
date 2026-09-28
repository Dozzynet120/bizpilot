'use client';

import {
  FormEvent,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import { apiRequest } from '@/lib/api';
import { saveTokens } from '@/lib/auth';

interface LoginResponse {
  message: string;

  accessToken: string;

  refreshToken: string;

  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };

  business: {
    id: string;
    name: string;
    slug: string;
  };
}

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setError('');

    try {
      const result =
        await apiRequest<LoginResponse>(
          '/auth/login',
          {
            method: 'POST',

            body: JSON.stringify({
              email,
              password,
            }),
          },
        );

      saveTokens(
        result.accessToken,
        result.refreshToken,
      );

      router.push('/dashboard');
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Login failed.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            BizPilot AI
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Welcome back
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to your business workspace.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? 'Signing in...'
              : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  );
}