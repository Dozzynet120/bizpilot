'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface ChatbotProps {
  widgetId: string;
}

interface WidgetConfig {
  widgetId: string;
  name: string;
  logoUrl: string | null;
  primaryColor: string;
  secondaryColor: string;
  welcomeMessage: string;
  greeting: string;
  position: string;
  enabled: boolean;
}

interface SessionResponse {
  success: boolean;
  session: {
    conversationId: string;
    customerId: string;
    businessId: string;
    channelConnectionId: string;
    aiAgentId: string;
    widgetId: string;
  };
  widget: WidgetConfig;
}

interface ChatMessage {
  id: string;
  content: string;
  senderType: 'CUSTOMER' | 'AI' | 'AGENT';
  createdAt: string;
}

export default function Chatbot({ widgetId }: ChatbotProps) {
  const [widget, setWidget] = useState<WidgetConfig | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const storageKey = `bizpilot_chat_${widgetId}`;

  useEffect(() => {
    const initializeChat = async () => {
      try {
        setLoading(true);
        setError('');

        const savedConversationId = localStorage.getItem(storageKey);

        if (savedConversationId) {
          const response = await fetch(
            `${API_URL}/chatbot/session/${savedConversationId}`,
          );

          if (response.ok) {
            const data = await response.json();

            if (data.success) {
              setConversationId(savedConversationId);
              setWidget(data.widget);

              const loadedMessages = (data.conversation?.messages || []).map(
                (item: any) => ({
                  id: item.id,
                  content: item.content,
                  senderType: item.senderType,
                  createdAt: item.createdAt,
                }),
              );

              setMessages(loadedMessages);

              return;
            }
          }

          localStorage.removeItem(storageKey);
        }

        const response = await fetch(`${API_URL}/chatbot/session`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            widgetId,
            visitorId:
              localStorage.getItem('bizpilot_visitor_id') ||
              `visitor-${crypto.randomUUID()}`,
          }),
        });

        if (!response.ok) {
          throw new Error('Unable to start chatbot session.');
        }

        const data: SessionResponse = await response.json();

        if (!data.success) {
          throw new Error('Unable to initialize chatbot.');
        }

        setConversationId(data.session.conversationId);
        setWidget(data.widget);

        localStorage.setItem(
          storageKey,
          data.session.conversationId,
        );

        if (!localStorage.getItem('bizpilot_visitor_id')) {
          localStorage.setItem(
            'bizpilot_visitor_id',
            `visitor-${crypto.randomUUID()}`,
          );
        }
      } catch (err) {
        console.error(err);
        setError(
          'Unable to connect to BizPilot AI. Please try again.',
        );
      } finally {
        setLoading(false);
      }
    };

    initializeChat();
  }, [widgetId, storageKey]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages, sending]);

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || !conversationId || sending) {
      return;
    }

    setMessage('');
    setSending(true);
    setError('');

    const temporaryMessage: ChatMessage = {
      id: `temp-${Date.now()}`,
      content: trimmedMessage,
      senderType: 'CUSTOMER',
      createdAt: new Date().toISOString(),
    };

    setMessages((current) => [
      ...current,
      temporaryMessage,
    ]);

    try {
      const response = await fetch(
        `${API_URL}/chatbot/session/${conversationId}/message`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: trimmedMessage,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Message could not be sent.');
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error('AI response failed.');
      }

      if (data.message) {
        setMessages((current) => [
          ...current,
          {
            id: data.message.id,
            content: data.message.content,
            senderType: data.message.senderType || 'AI',
            createdAt: data.message.createdAt,
          },
        ]);
      }
    } catch (err) {
      console.error(err);

      setError(
        'Sorry, I could not process that message. Please try again.',
      );
    } finally {
      setSending(false);
    }
  };

  const primaryColor = widget?.primaryColor || '#2563EB';
  const secondaryColor = widget?.secondaryColor || '#0F172A';

  if (loading) {
    return (
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        <p className="text-sm text-slate-600">
          Connecting to BizPilot AI...
        </p>
      </div>
    );
  }

  if (error && !widget) {
    return (
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mb-4 text-4xl">⚠️</div>

        <h2 className="text-lg font-semibold text-slate-900">
          Chat unavailable
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          {error}
        </p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-5 rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
          style={{ backgroundColor: primaryColor }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-4 text-white"
        style={{ backgroundColor: secondaryColor }}
      >
        {widget?.logoUrl ? (
          <img
            src={widget.logoUrl}
            alt={widget.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
            style={{ backgroundColor: primaryColor }}
          >
            B
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h2 className="truncate font-semibold">
            {widget?.name || 'BizPilot Assistant'}
          </h2>

          <p className="text-xs text-slate-300">
            AI Sales & Customer Support
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-300">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Online
        </div>
      </div>

      {/* Welcome */}
      <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
        <p className="text-sm leading-6 text-slate-700">
          {widget?.welcomeMessage ||
            'Hello! How can we help you today?'}
        </p>
      </div>

      {/* Messages */}
      <div className="h-[420px] overflow-y-auto bg-white px-4 py-5">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-center">
            <div>
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white"
                style={{ backgroundColor: primaryColor }}
              >
                AI
              </div>

              <h3 className="font-semibold text-slate-900">
                {widget?.greeting || 'Chat with us'}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Ask me about our products, services or pricing.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((item) => {
              const isCustomer =
                item.senderType === 'CUSTOMER';

              return (
                <div
                  key={item.id}
                  className={`flex ${
                    isCustomer
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      isCustomer
                        ? 'rounded-br-md text-white'
                        : 'rounded-bl-md bg-slate-100 text-slate-800'
                    }`}
                    style={
                      isCustomer
                        ? { backgroundColor: primaryColor }
                        : undefined
                    }
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}

            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:120ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:240ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="border-t border-red-100 bg-red-50 px-4 py-2 text-xs text-red-600">
          {error}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="flex gap-2 border-t border-slate-200 bg-white p-3"
      >
        <input
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          placeholder="Type your message..."
          disabled={sending}
          className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
        />

        <button
          type="submit"
          disabled={!message.trim() || sending}
          className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
          style={{ backgroundColor: primaryColor }}
        >
          Send
        </button>
      </form>

      <div className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-center">
        <p className="text-[11px] text-slate-400">
          Powered by BizPilot AI
        </p>
      </div>
    </div>
  );
}