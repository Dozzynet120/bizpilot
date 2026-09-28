'use client';

import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useRouter } from 'next/navigation';

import {
  getAccessToken,
} from '@/lib/auth';

import {
  AiAgent,
  getAiAgents,
} from '@/lib/ai-agents';

import {
  ChatbotWidget,
  CreateWidgetInput,
  createWidget,
  deleteWidget,
  getWidgets,
  updateWidget,
} from '@/lib/widgets';

type FormState = {
  name: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  welcomeMessage: string;
  greeting: string;
  position: string;
  aiAgentId: string;
  enabled: boolean;
  allowedDomains: string;
};

const emptyForm: FormState = {
  name: 'BizPilot Assistant',
  logoUrl: '',
  primaryColor: '#2563EB',
  secondaryColor: '#0F172A',
  welcomeMessage:
    'Hello! How can we help you today?',
  greeting: 'Chat with us',
  position: 'bottom-right',
  aiAgentId: '',
  enabled: true,
  allowedDomains: '',
};

function widgetToForm(
  widget: ChatbotWidget,
): FormState {
  return {
    name: widget.name,
    logoUrl: widget.logoUrl ?? '',
    primaryColor: widget.primaryColor,
    secondaryColor: widget.secondaryColor,
    welcomeMessage: widget.welcomeMessage,
    greeting: widget.greeting,
    position: widget.position,
    aiAgentId: widget.aiAgentId ?? '',
    enabled: widget.enabled,
    allowedDomains:
      widget.allowedDomains?.join('\n') ?? '',
  };
}

function domainsToArray(
  value: string,
): string[] {
  return Array.from(
    new Set(
      value
        .split(/[\n,]+/)
        .map((domain) => domain.trim())
        .filter(Boolean),
    ),
  );
}

function formatDate(
  value: string,
): string {
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

export default function WidgetsPage() {
  const router = useRouter();

  const [widgets, setWidgets] =
    useState<ChatbotWidget[]>([]);

  const [agents, setAgents] =
    useState<AiAgent[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState<string | null>(null);

  const [error, setError] =
    useState('');

  const [success, setSuccess] =
    useState('');

  const [showForm, setShowForm] =
    useState(false);

  const [editingWidget, setEditingWidget] =
    useState<ChatbotWidget | null>(null);

  const [selectedEmbedWidget, setSelectedEmbedWidget] =
    useState<ChatbotWidget | null>(null);

  const [form, setForm] =
    useState<FormState>(emptyForm);

  const isEditing =
    editingWidget !== null;

  const activeWidgets = useMemo(
    () =>
      widgets.filter(
        (widget) => widget.enabled,
      ).length,
    [widgets],
  );

  async function loadData() {
    setLoading(true);
    setError('');

    try {
      const [
        widgetData,
        agentData,
      ] = await Promise.all([
        getWidgets(),
        getAiAgents(),
      ]);

      setWidgets(widgetData);
      setAgents(agentData);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to load widgets.';

      setError(message);

      if (
        message
          .toLowerCase()
          .includes('token')
      ) {
        router.push('/login');
      }
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

    loadData();
  }, [router]);

  function openCreateForm() {
    setEditingWidget(null);
    setForm({
      ...emptyForm,
      aiAgentId:
        agents.length > 0
          ? agents[0].id
          : '',
    });
    setError('');
    setSuccess('');
    setShowForm(true);
  }

  function openEditForm(
    widget: ChatbotWidget,
  ) {
    setEditingWidget(widget);
    setForm(widgetToForm(widget));
    setError('');
    setSuccess('');
    setShowForm(true);
  }

  function closeForm() {
    if (saving) {
      return;
    }

    setShowForm(false);
    setEditingWidget(null);
    setForm(emptyForm);
  }

  function updateForm(
    field: keyof FormState,
    value: string | boolean,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const domains =
        domainsToArray(
          form.allowedDomains,
        );

      if (domains.length === 0) {
        throw new Error(
          'Add at least one allowed website domain.',
        );
      }

      const payload: CreateWidgetInput = {
        name: form.name.trim(),
        primaryColor:
          form.primaryColor.trim(),
        secondaryColor:
          form.secondaryColor.trim(),
        welcomeMessage:
          form.welcomeMessage.trim(),
        greeting:
          form.greeting.trim(),
        position:
          form.position,
        enabled:
          form.enabled,
        allowedDomains:
          domains,
      };

      /**
       * Do not send an empty logo URL.
       *
       * The backend expects logoUrl to be a valid URL
       * when supplied.
       */
      if (form.logoUrl.trim()) {
        payload.logoUrl =
          form.logoUrl.trim();
      }

      /**
       * Only attach an AI agent when one
       * has actually been selected.
       */
      if (form.aiAgentId) {
        payload.aiAgentId =
          form.aiAgentId;
      }

      if (editingWidget) {
        const updated =
          await updateWidget(
            editingWidget.widgetId,
            payload,
          );

        setWidgets((current) =>
          current.map((widget) =>
            widget.widgetId ===
            editingWidget.widgetId
              ? updated
              : widget,
          ),
        );

        setSuccess(
          'Widget updated successfully.',
        );
      } else {
        const created =
          await createWidget(payload);

        setWidgets((current) => [
          created,
          ...current,
        ]);

        setSuccess(
          'Widget created successfully.',
        );
      }

      setShowForm(false);
      setEditingWidget(null);
      setForm(emptyForm);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to save widget.',
      );
    } finally {
      setSaving(false);
    }
  }

  async function toggleWidget(
    widget: ChatbotWidget,
  ) {
    setError('');
    setSuccess('');

    try {
      const updated =
        await updateWidget(
          widget.widgetId,
          {
            enabled:
              !widget.enabled,
          },
        );

      setWidgets((current) =>
        current.map((item) =>
          item.widgetId ===
          widget.widgetId
            ? updated
            : item,
        ),
      );

      setSuccess(
        updated.enabled
          ? 'Widget enabled.'
          : 'Widget disabled.',
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to update widget.',
      );
    }
  }

  async function handleDelete(
    widget: ChatbotWidget,
  ) {
    const confirmed =
      window.confirm(
        `Delete "${widget.name}"? This action cannot be undone.`,
      );

    if (!confirmed) {
      return;
    }

    setDeletingId(
      widget.widgetId,
    );

    setError('');
    setSuccess('');

    try {
      await deleteWidget(
        widget.widgetId,
      );

      setWidgets((current) =>
        current.filter(
          (item) =>
            item.widgetId !==
            widget.widgetId,
        ),
      );

      setSuccess(
        'Widget deleted successfully.',
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to delete widget.',
      );
    } finally {
      setDeletingId(null);
    }
  }

  function getAgentName(
    widget: ChatbotWidget,
  ) {
    if (widget.aiAgent?.name) {
      return widget.aiAgent.name;
    }

    const agent =
      agents.find(
        (item) =>
          item.id ===
          widget.aiAgentId,
      );

    return (
      agent?.name ??
      'No AI agent assigned'
    );
  }

  function getEmbedCode(
    widget: ChatbotWidget,
  ) {
    const origin =
      typeof window !==
      'undefined'
        ? window.location.origin
        : 'http://localhost:3000';

    return `<script
  src="${origin}/widget.js"
  data-widget-id="${widget.widgetId}">
</script>`;
  }

  async function copyEmbedCode(
    widget: ChatbotWidget,
  ) {
    const code =
      getEmbedCode(widget);

    try {
      await navigator.clipboard.writeText(
        code,
      );

      setSuccess(
        'Embed code copied to clipboard.',
      );
    } catch {
      setError(
        'Unable to copy embed code. Please copy it manually.',
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">
      {/* ===================================================
          HEADER
          =================================================== */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <div>
            <button
              type="button"
              onClick={() =>
                router.push('/dashboard')
              }
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              ← Dashboard
            </button>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Website Widgets
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Create and manage AI chatbot widgets
              for your websites.
            </p>
          </div>

          <button
            type="button"
            onClick={openCreateForm}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            + Create Widget
          </button>
        </div>
      </header>

      {/* ===================================================
          CONTENT
          =================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-8">

        {/* =================================================
            STATS
            ================================================= */}
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Widgets
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {loading
                ? '—'
                : widgets.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Active Widgets
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-600">
              {loading
                ? '—'
                : activeWidgets}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              AI Agents
            </p>

            <p className="mt-2 text-3xl font-bold text-indigo-600">
              {loading
                ? '—'
                : agents.length}
            </p>
          </div>
        </div>

        {/* =================================================
            NOTIFICATIONS
            ================================================= */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
            {success}
          </div>
        )}

        {/* =================================================
            WIDGET LIST
            ================================================= */}
        <div className="mt-8">
          {loading ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <p className="text-slate-500">
                Loading widgets...
              </p>
            </div>
          ) : widgets.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
                🤖
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                No widgets yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Create your first BizPilot website
                assistant and embed it on your website.
              </p>

              <button
                type="button"
                onClick={openCreateForm}
                className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Create Your First Widget
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  {/* Widget top */}
                  <div className="border-b border-slate-100 p-6">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-sm"
                          style={{
                            backgroundColor:
                              widget.primaryColor,
                          }}
                        >
                          {widget.logoUrl ? (
                            <img
                              src={
                                widget.logoUrl
                              }
                              alt=""
                              className="h-full w-full rounded-2xl object-cover"
                            />
                          ) : (
                            'AI'
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-lg font-bold text-slate-900">
                              {widget.name}
                            </h2>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                widget.enabled
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {widget.enabled
                                ? 'Active'
                                : 'Disabled'}
                            </span>
                          </div>

                          <p className="mt-1 font-mono text-xs text-slate-400">
                            {widget.widgetId}
                          </p>

                          <p className="mt-2 text-sm text-slate-500">
                            AI Agent:{' '}
                            <span className="font-semibold text-slate-700">
                              {getAgentName(
                                widget,
                              )}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            openEditForm(
                              widget,
                            )
                          }
                          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          Configure
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedEmbedWidget(
                              widget,
                            )
                          }
                          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                        >
                          Embed Code
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Widget details */}
                  <div className="grid gap-5 p-6 md:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Allowed Domains
                      </p>

                      <div className="mt-2 space-y-1">
                        {widget.allowedDomains &&
                        widget.allowedDomains.length >
                          0 ? (
                          widget.allowedDomains.map(
                            (domain) => (
                              <p
                                key={domain}
                                className="truncate text-sm text-slate-700"
                              >
                                {domain}
                              </p>
                            ),
                          )
                        ) : (
                          <p className="text-sm text-red-600">
                            No domains configured
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Appearance
                      </p>

                      <div className="mt-2 flex items-center gap-3">
                        <span
                          className="h-6 w-6 rounded-full border border-slate-200"
                          style={{
                            backgroundColor:
                              widget.primaryColor,
                          }}
                        />

                        <span
                          className="h-6 w-6 rounded-full border border-slate-200"
                          style={{
                            backgroundColor:
                              widget.secondaryColor,
                          }}
                        />

                        <span className="text-sm text-slate-600">
                          {widget.position}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Created
                      </p>

                      <p className="mt-2 text-sm text-slate-700">
                        {formatDate(
                          widget.createdAt,
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Widget actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 bg-slate-50 px-6 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        toggleWidget(
                          widget,
                        )
                      }
                      className={`text-sm font-semibold ${
                        widget.enabled
                          ? 'text-amber-600 hover:text-amber-700'
                          : 'text-emerald-600 hover:text-emerald-700'
                      }`}
                    >
                      {widget.enabled
                        ? 'Disable Widget'
                        : 'Enable Widget'}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(
                          widget,
                        )
                      }
                      disabled={
                        deletingId ===
                        widget.widgetId
                      }
                      className="text-sm font-semibold text-red-600 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId ===
                      widget.widgetId
                        ? 'Deleting...'
                        : 'Delete Widget'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          CREATE / EDIT MODAL
          =================================================== */}
      {showForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 px-4 py-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {isEditing
                    ? 'Configure Widget'
                    : 'Create Widget'}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Configure your website AI assistant.
                </p>
              </div>

              <button
                type="button"
                onClick={closeForm}
                className="rounded-lg p-2 text-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Widget Name
                </label>

                <input
                  value={form.name}
                  onChange={(event) =>
                    updateForm(
                      'name',
                      event.target.value,
                    )
                  }
                  maxLength={100}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="BizPilot Website Assistant"
                />
              </div>

              {/* AI Agent */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  AI Agent
                </label>

                <select
                  value={form.aiAgentId}
                  onChange={(event) =>
                    updateForm(
                      'aiAgentId',
                      event.target.value,
                    )
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="">
                    No AI agent selected
                  </option>

                  {agents.map((agent) => (
                    <option
                      key={agent.id}
                      value={agent.id}
                    >
                      {agent.name} — {agent.status}
                    </option>
                  ))}
                </select>

                {agents.length === 0 && (
                  <p className="mt-2 text-xs text-amber-600">
                    No AI agents are available for this
                    business yet.
                  </p>
                )}
              </div>

              {/* Logo */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Logo URL
                </label>

                <input
                  value={form.logoUrl}
                  onChange={(event) =>
                    updateForm(
                      'logoUrl',
                      event.target.value,
                    )
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="https://example.com/logo.png"
                />

                <p className="mt-1 text-xs text-slate-400">
                  Optional. Must be a valid URL.
                </p>
              </div>

              {/* Colors */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Primary Color
                  </label>

                  <div className="mt-2 flex gap-3">
                    <input
                      type="color"
                      value={
                        form.primaryColor
                      }
                      onChange={(event) =>
                        updateForm(
                          'primaryColor',
                          event.target.value.toUpperCase(),
                        )
                      }
                      className="h-12 w-16 cursor-pointer rounded-lg border border-slate-200 bg-white p-1"
                    />

                    <input
                      value={
                        form.primaryColor
                      }
                      onChange={(event) =>
                        updateForm(
                          'primaryColor',
                          event.target.value,
                        )
                      }
                      pattern="^#[0-9A-Fa-f]{6}$"
                      required
                      className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-mono uppercase outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Secondary Color
                  </label>

                  <div className="mt-2 flex gap-3">
                    <input
                      type="color"
                      value={
                        form.secondaryColor
                      }
                      onChange={(event) =>
                        updateForm(
                          'secondaryColor',
                          event.target.value.toUpperCase(),
                        )
                      }
                      className="h-12 w-16 cursor-pointer rounded-lg border border-slate-200 bg-white p-1"
                    />

                    <input
                      value={
                        form.secondaryColor
                      }
                      onChange={(event) =>
                        updateForm(
                          'secondaryColor',
                          event.target.value,
                        )
                      }
                      pattern="^#[0-9A-Fa-f]{6}$"
                      required
                      className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-mono uppercase outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>
              </div>

              {/* Greeting */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Greeting
                </label>

                <input
                  value={form.greeting}
                  onChange={(event) =>
                    updateForm(
                      'greeting',
                      event.target.value,
                    )
                  }
                  maxLength={100}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Chat with us"
                />
              </div>

              {/* Welcome Message */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Welcome Message
                </label>

                <textarea
                  value={
                    form.welcomeMessage
                  }
                  onChange={(event) =>
                    updateForm(
                      'welcomeMessage',
                      event.target.value,
                    )
                  }
                  maxLength={500}
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Hello! How can we help you today?"
                />
              </div>

              {/* Position */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Widget Position
                </label>

                <select
                  value={form.position}
                  onChange={(event) =>
                    updateForm(
                      'position',
                      event.target.value,
                    )
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="bottom-right">
                    Bottom Right
                  </option>

                  <option value="bottom-left">
                    Bottom Left
                  </option>

                  <option value="top-right">
                    Top Right
                  </option>

                  <option value="top-left">
                    Top Left
                  </option>
                </select>
              </div>

              {/* Allowed Domains */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Allowed Domains
                </label>

                <textarea
                  value={
                    form.allowedDomains
                  }
                  onChange={(event) =>
                    updateForm(
                      'allowedDomains',
                      event.target.value,
                    )
                  }
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-mono text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder={`http://localhost:3000
https://yourbusiness.com
https://www.yourbusiness.com`}
                />

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Enter one origin per line. Include the
                  protocol, for example
                  https://yourbusiness.com.
                </p>
              </div>

              {/* Enabled */}
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Widget Enabled
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Disabled widgets cannot create new
                    chatbot sessions.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={
                    form.enabled
                  }
                  onChange={(event) =>
                    updateForm(
                      'enabled',
                      event.target.checked,
                    )
                  }
                  className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
              </label>

              {/* Form error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeForm}
                  disabled={saving}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving
                    ? 'Saving...'
                    : isEditing
                      ? 'Save Changes'
                      : 'Create Widget'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================
          EMBED CODE MODAL
          =================================================== */}
      {selectedEmbedWidget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8">
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Embed Widget
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Add this code to your website.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedEmbedWidget(
                    null,
                  )
                }
                className="rounded-lg p-2 text-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                ×
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div className="rounded-xl bg-slate-950 p-5">
                <pre className="overflow-x-auto whitespace-pre-wrap break-words text-sm leading-6 text-slate-100">
                  {getEmbedCode(
                    selectedEmbedWidget,
                  )}
                </pre>
              </div>

              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <p className="text-sm font-semibold text-indigo-900">
                  Widget ID
                </p>

                <p className="mt-1 break-all font-mono text-sm text-indigo-700">
                  {
                    selectedEmbedWidget.widgetId
                  }
                </p>
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedEmbedWidget(
                      null,
                    )
                  }
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() =>
                    copyEmbedCode(
                      selectedEmbedWidget,
                    )
                  }
                  className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Copy Embed Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}