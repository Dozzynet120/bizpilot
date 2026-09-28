'use client';

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
};

type ChatbotProps = {
  widgetId: string;
};

type ChatSession = {
  conversationId: string;
  customerId: string;
  businessId: string;
  aiAgentId: string;
  widgetId: string;
};

type ChatSessionResponse = {
  success: boolean;

  session: {
    conversationId: string;
    customerId: string;
    businessId: string;
    channelConnectionId: string;
    aiAgentId: string;
    widgetId: string;
  };

  agent?: {
    id: string;
    name: string;
    type: string;
    model?: string;
  };

  widget?: {
    widgetId: string;
    name: string;
    logoUrl: string | null;
    primaryColor: string;
    secondaryColor: string;
    welcomeMessage: string;
    greeting: string;
    position: string;
    enabled: boolean;
    allowedDomains?: string[] | null;
  };
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:4000';

const VISITOR_STORAGE_KEY =
  'bizpilot_chatbot_visitor_id';

const SESSION_STORAGE_KEY =
  'bizpilot_chatbot_session';

export default function Chatbot({
  widgetId,
}: ChatbotProps) {
  const [open, setOpen] =
    useState(true);

  const [message, setMessage] =
    useState('');

  const [sending, setSending] =
    useState(false);

  const [initializing, setInitializing] =
    useState(true);

  const [session, setSession] =
    useState<ChatSession | null>(null);

  const [messages, setMessages] =
    useState<ChatMessage[]>([]);

  const [widget, setWidget] =
    useState<
      ChatSessionResponse['widget'] | null
    >(null);

  const [agentName, setAgentName] =
    useState('BizPilot AI');

  const [domainAllowed, setDomainAllowed] =
    useState(true);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);

  // ============================================================
  // WIDGET BRANDING
  // ============================================================

  const primaryColor =
    widget?.primaryColor ||
    '#2563EB';

  const secondaryColor =
    widget?.secondaryColor ||
    '#0F172A';

  const widgetName =
    widget?.name ||
    agentName ||
    'BizPilot AI';

  const logoUrl =
    widget?.logoUrl ||
    null;

  // ============================================================
  // DOMAIN AUTHORIZATION
  // ============================================================

  function isAllowedDomain(
    allowedDomains?: string[] | null,
  ): boolean {
    /*
     * If no domains have been configured,
     * allow the widget.
     *
     * This is useful during development and
     * preserves the current working behavior.
     */
    if (
      !allowedDomains ||
      allowedDomains.length === 0
    ) {
      return true;
    }

    /*
     * When the chatbot is embedded inside an
     * iframe, document.referrer normally contains
     * the URL of the parent website.
     */
    const referrer =
      document.referrer;

    /*
     * Directly opening:
     *
     * /widget/bp_wgt_xxxxx
     *
     * should remain possible during development.
     */
    if (!referrer) {
      return true;
    }

    try {
      const parentUrl =
        new URL(referrer);

      const parentOrigin =
        parentUrl.origin;

      return allowedDomains.some(
        (domain) => {
          const normalized =
            domain
              .trim()
              .replace(/\/+$/, '');

          if (!normalized) {
            return false;
          }

          /*
           * Support:
           *
           * https://example.com
           * http://localhost:3000
           */
          try {
            const allowedUrl =
              new URL(normalized);

            return (
              allowedUrl.origin ===
              parentOrigin
            );
          } catch {
            /*
             * Also support:
             *
             * example.com
             * www.example.com
             */
            return (
              parentUrl.hostname ===
              normalized
            );
          }
        },
      );
    } catch {
      return false;
    }
  }

  // ============================================================
  // CLOSE WIDGET WHEN EMBEDDED INSIDE IFRAME
  // ============================================================

  function closeEmbeddedWidget() {
    if (window.parent !== window) {
      window.parent.postMessage(
        {
          type: 'BIZPILOT_WIDGET_CLOSE',
        },
        '*',
      );

      return;
    }

    setOpen(false);
  }

  // ============================================================
  // INITIALIZE CHATBOT SESSION
  // ============================================================

  useEffect(() => {
    let cancelled = false;

    async function initializeSession() {
      setInitializing(true);

      try {
        // --------------------------------------------------------
        // CREATE / RESTORE VISITOR ID
        // --------------------------------------------------------

        let visitorId =
          localStorage.getItem(
            VISITOR_STORAGE_KEY,
          );

        if (!visitorId) {
          visitorId =
            crypto.randomUUID();

          localStorage.setItem(
            VISITOR_STORAGE_KEY,
            visitorId,
          );
        }

        // --------------------------------------------------------
        // TRY TO RESTORE EXISTING SESSION
        // --------------------------------------------------------

        const existingSession =
          localStorage.getItem(
            SESSION_STORAGE_KEY,
          );

        if (existingSession) {
          try {
            const parsed =
              JSON.parse(
                existingSession,
              );

            if (
              parsed?.widgetId === widgetId &&
              parsed?.conversationId
            ) {
              const response =
                await fetch(
                  `${API_URL}/chatbot/session/${parsed.conversationId}`,
                );

              if (response.ok) {
                const data =
                  await response.json();

                if (
                  data?.success &&
                  data?.conversation
                ) {
                  if (cancelled) {
                    return;
                  }

                  /*
                   * Restore widget configuration
                   * returned by the backend.
                   */
                  if (data.widget) {
                    setWidget(
                      data.widget,
                    );

                    const allowed =
                      isAllowedDomain(
                        data.widget
                          .allowedDomains,
                      );

                    if (!allowed) {
                      setDomainAllowed(
                        false,
                      );

                      setInitializing(
                        false,
                      );

                      return;
                    }

                    setDomainAllowed(
                      true,
                    );
                  }

                  if (data.agent?.name) {
                    setAgentName(
                      data.agent.name,
                    );
                  }

                  const restoredSession: ChatSession =
                  {
                    conversationId:
                      data.conversation.id,

                    customerId:
                      data.conversation
                        .customerId,

                    businessId:
                      data.conversation
                        .businessId,

                    aiAgentId:
                      data.conversation
                        .aiAgentId,

                    widgetId,
                  };

                  setSession(
                    restoredSession,
                  );

                  const history: ChatMessage[] =
                    (
                      data.conversation
                        .messages || []
                    )
                      .map(
                        (item: {
                          id: string;
                          direction?: string;
                          senderType?: string;
                          content:
                          | string
                          | null;
                          createdAt: string;
                        }) => ({
                          id: item.id,

                          role:
                            item.direction ===
                              'INBOUND' ||
                              item.senderType ===
                              'CUSTOMER'
                              ? 'user'
                              : 'assistant',

                          content:
                            item.content || '',

                          createdAt:
                            item.createdAt,
                        }),
                      )
                      .filter(
                        (
                          item: ChatMessage,
                        ) =>
                          Boolean(
                            item.content,
                          ),
                      );

                  setMessages(
                    history,
                  );

                  return;
                }
              }
            }

            /*
             * Saved session is invalid or
             * belongs to another widget.
             */
            localStorage.removeItem(
              SESSION_STORAGE_KEY,
            );
          } catch (error) {
            console.warn(
              'Unable to restore saved BizPilot chatbot session:',
              error,
            );

            localStorage.removeItem(
              SESSION_STORAGE_KEY,
            );
          }
        }

        // --------------------------------------------------------
        // CREATE NEW PUBLIC CHATBOT SESSION
        // --------------------------------------------------------

        const response =
          await fetch(
            `${API_URL}/chatbot/session`,
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json',
              },

              body: JSON.stringify({
                widgetId,

                name:
                  'Website Visitor',

                visitorId,
              }),
            },
          );

        const data =
          (await response.json()) as
          ChatSessionResponse & {
            message?: string;
          };

        if (!response.ok) {
          throw new Error(
            data?.message ||
            'Unable to create chatbot session.',
          );
        }

        if (
          !data.success ||
          !data.session
        ) {
          throw new Error(
            'Invalid chatbot session response.',
          );
        }

        if (cancelled) {
          return;
        }

        // --------------------------------------------------------
        // SAVE WIDGET CONFIGURATION
        // --------------------------------------------------------

        if (data.widget) {
          setWidget(
            data.widget,
          );

          /*
           * Verify the website domain before
           * allowing the visitor to use the widget.
           */
          const allowed =
            isAllowedDomain(
              data.widget
                .allowedDomains,
            );

          if (!allowed) {
            setDomainAllowed(
              false,
            );

            setInitializing(
              false,
            );

            return;
          }

          setDomainAllowed(
            true,
          );
        }

        // --------------------------------------------------------
        // SAVE AGENT NAME
        // --------------------------------------------------------

        if (data.agent?.name) {
          setAgentName(
            data.agent.name,
          );
        }

        // --------------------------------------------------------
        // SAVE SESSION
        // --------------------------------------------------------

        const newSession: ChatSession =
        {
          conversationId:
            data.session
              .conversationId,

          customerId:
            data.session.customerId,

          businessId:
            data.session.businessId,

          aiAgentId:
            data.session.aiAgentId,

          widgetId:
            data.session.widgetId ||
            widgetId,
        };

        setSession(
          newSession,
        );

        localStorage.setItem(
          SESSION_STORAGE_KEY,
          JSON.stringify(
            newSession,
          ),
        );

        // --------------------------------------------------------
        // WELCOME MESSAGE
        // --------------------------------------------------------

        const welcomeMessage =
          data.widget?.welcomeMessage ||
          `Hello! 👋 I'm ${data.agent?.name ||
          'BizPilot AI'
          }. How can I help you today?`;

        setMessages([
          {
            id: 'welcome',

            role: 'assistant',

            content:
              welcomeMessage,

            createdAt:
              new Date().toISOString(),
          },
        ]);
      } catch (error) {
        if (cancelled) {
          return;
        }

        console.error(
          'Failed to initialize BizPilot chatbot:',
          error,
        );

        setSession(null);

        setMessages([
          {
            id:
              'connection-error',

            role: 'assistant',

            content:
              'Sorry, I could not connect to BizPilot AI right now. Please try again.',

            createdAt:
              new Date().toISOString(),
          },
        ]);
      } finally {
        if (!cancelled) {
          setInitializing(
            false,
          );
        }
      }
    }

    initializeSession();

    return () => {
      cancelled = true;
    };
  }, [widgetId]);

  // ============================================================
  // SCROLL TO LATEST MESSAGE
  // ============================================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: 'smooth',
      },
    );
  }, [
    messages,
    sending,
  ]);

  // ============================================================
  // SEND MESSAGE
  // ============================================================

  async function sendMessage(
    event?: FormEvent,
  ) {
    event?.preventDefault();

    const trimmed =
      message.trim();

    if (
      !trimmed ||
      sending ||
      !session ||
      !domainAllowed
    ) {
      return;
    }

    // ----------------------------------------------------------
    // ADD USER MESSAGE
    // ----------------------------------------------------------

    const userMessage: ChatMessage =
    {
      id:
        crypto.randomUUID(),

      role: 'user',

      content:
        trimmed,

      createdAt:
        new Date().toISOString(),
    };

    setMessages(
      (current) => [
        ...current,
        userMessage,
      ],
    );

    setMessage('');

    setSending(true);

    try {
      const response =
        await fetch(
          `${API_URL}/chatbot/session/${session.conversationId}/message`,
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json',
            },

            body: JSON.stringify({
              message:
                trimmed,
            }),
          },
        );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
          data?.error ||
          'Unable to contact BizPilot AI.',
        );
      }

      const aiContent =
        data?.message?.content ||
        'I received your message, but I could not generate a response.';

      const assistantMessage:
        ChatMessage = {
        id:
          data?.message?.id ||
          crypto.randomUUID(),

        role:
          'assistant',

        content:
          aiContent,

        createdAt:
          data?.message?.createdAt ||
          new Date().toISOString(),
      };

      setMessages(
        (current) => [
          ...current,
          assistantMessage,
        ],
      );
    } catch (error) {
      console.error(
        'BizPilot chatbot error:',
        error,
      );

      setMessages(
        (current) => [
          ...current,

          {
            id:
              crypto.randomUUID(),

            role:
              'assistant',

            content:
              'Sorry, I’m having trouble connecting right now. Please try again.',

            createdAt:
              new Date().toISOString(),
          },
        ],
      );
    } finally {
      setSending(false);
    }
  }

  // ============================================================
  // UNAUTHORIZED DOMAIN
  // ============================================================

  if (!domainAllowed) {
    return (
      <div
        className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        {/* HEADER */}

        <div
          className="px-5 py-4 text-white"
          style={{
            background:
              `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/15 text-xl">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={widgetName}
                  className="h-full w-full object-cover"
                />
              ) : (
                '🤖'
              )}
            </div>

            <div>
              <h2 className="font-semibold">
                {widgetName}
              </h2>

              <p className="text-xs text-white/80">
                Widget unavailable
              </p>
            </div>
          </div>
        </div>

        {/* MESSAGE */}

        <div className="px-6 py-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl">
            🔒
          </div>

          <h3 className="text-lg font-semibold text-slate-900">
            Website not authorized
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            This BizPilot widget is not
            authorized to run on this
            website.
          </p>
        </div>
      </div>
    );
  }

  // ============================================================
  // CLOSED CHAT
  // ============================================================

  if (!open) {
    return (
      <button
        type="button"
        onClick={() =>
          setOpen(true)
        }
        aria-label={`Open ${widgetName}`}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white shadow-2xl transition hover:scale-105"
        style={{
          background:
            `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
        }}
      >
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={widgetName}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          '🤖'
        )}
      </button>
    );
  }

  // ============================================================
  // CHAT WINDOW
  // ============================================================

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-2xl border bg-white shadow-2xl"
      style={{
        borderColor:
          `${primaryColor}22`,
      }}
    >
      {/* ======================================================
          HEADER
          ====================================================== */}

      <div
        className="flex items-center justify-between px-5 py-4 text-white"
        style={{
          background:
            `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/15 text-xl">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={widgetName}
                className="h-full w-full object-cover"
              />
            ) : (
              '🤖'
            )}
          </div>

          <div>
            <h2 className="font-semibold">
              {widgetName}
            </h2>

            <div className="flex items-center gap-2 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />

              {initializing
                ? 'Connecting...'
                : agentName}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={
            closeEmbeddedWidget
          }
          className="rounded-lg px-2 py-1 text-xl text-white/80 transition hover:bg-white/10 hover:text-white"
          aria-label="Close chatbot"
        >
          ×
        </button>
      </div>

      {/* ======================================================
          MESSAGES
          ====================================================== */}

      <div className="h-[430px] overflow-y-auto bg-slate-50 px-4 py-5">
        <div className="space-y-4">
          {messages.map(
            (item) => (
              <div
                key={item.id}
                className={`flex ${item.role ===
                    'user'
                    ? 'justify-end'
                    : 'justify-start'
                  }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${item.role ===
                      'user'
                      ? 'rounded-br-md text-white'
                      : 'rounded-bl-md border border-slate-200 bg-white text-slate-700'
                    }`}
                  style={
                    item.role ===
                      'user'
                      ? {
                        backgroundColor:
                          primaryColor,
                      }
                      : undefined
                  }
                >
                  {item.content}
                </div>
              </div>
            ),
          )}

          {initializing && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style={{
                      animationDelay:
                        '150ms',
                    }}
                  />

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style={{
                      animationDelay:
                        '300ms',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {sending && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style={{
                      animationDelay:
                        '150ms',
                    }}
                  />

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style={{
                      animationDelay:
                        '300ms',
                    }}
                  />

                  <span className="sr-only">
                    AI is typing
                  </span>
                </div>
              </div>
            </div>
          )}

          <div
            ref={messagesEndRef}
          />
        </div>
      </div>

      {/* ======================================================
          INPUT
          ====================================================== */}

      <form
        onSubmit={sendMessage}
        className="border-t border-slate-200 bg-white p-3"
      >
        <div
          className="flex items-end gap-2 rounded-xl border bg-slate-50 p-2 focus-within:ring-2"
          style={{
            borderColor:
              `${primaryColor}55`,
          }}
        >
          <textarea
            value={message}
            onChange={(
              event,
            ) =>
              setMessage(
                event.target.value,
              )
            }
            onKeyDown={(
              event,
            ) => {
              if (
                event.key ===
                'Enter' &&
                !event.shiftKey
              ) {
                event.preventDefault();

                sendMessage();
              }
            }}
            placeholder={
              initializing
                ? 'Connecting...'
                : 'Type your message...'
            }
            rows={1}
            disabled={
              initializing ||
              sending ||
              !session
            }
            className="max-h-24 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          <button
            type="submit"
            disabled={
              !message.trim() ||
              sending ||
              initializing ||
              !session
            }
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            style={{
              backgroundColor:
                primaryColor,
            }}
            aria-label="Send message"
          >
            ↑
          </button>
        </div>

        <p className="mt-2 text-center text-[10px] text-slate-400">
          Powered by BizPilot AI
        </p>
      </form>
    </div>
  );
}