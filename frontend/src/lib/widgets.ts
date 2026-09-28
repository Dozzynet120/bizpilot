import { apiRequest } from './api';
import { getAccessToken } from './auth';

export interface WidgetAgent {
  id: string;
  name: string;
  type: string;
  status?: string;
}

export interface WidgetBusiness {
  id: string;
  name: string;
  slug: string;
}

export interface ChatbotWidget {
  id: string;
  widgetId: string;
  businessId: string;
  aiAgentId: string | null;

  name: string;
  logoUrl: string | null;

  primaryColor: string;
  secondaryColor: string;

  welcomeMessage: string;
  greeting: string;
  position: string;

  enabled: boolean;

  allowedDomains: string[] | null;

  createdAt: string;
  updatedAt: string;

  aiAgent?: WidgetAgent | null;
  business?: WidgetBusiness | null;
}

export interface CreateWidgetInput {
  name?: string;
  logoUrl?: string;

  primaryColor?: string;
  secondaryColor?: string;

  welcomeMessage?: string;
  greeting?: string;

  position?: string;

  aiAgentId?: string;

  enabled?: boolean;

  allowedDomains?: string[];
}

export type UpdateWidgetInput =
  Partial<CreateWidgetInput>;

function authHeaders() {
  const token = getAccessToken();

  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

/**
 * Get all widgets belonging to the
 * authenticated business.
 */
export async function getWidgets() {
  const response =
    await apiRequest<{
      success: boolean;
      widgets: ChatbotWidget[];
    }>('/widgets', {
      headers: authHeaders(),
    });

  return response.widgets;
}

/**
 * Get one widget by its public widgetId.
 */
export async function getWidget(
  widgetId: string,
) {
  const response =
    await apiRequest<{
      success: boolean;
      widget: ChatbotWidget;
    }>(
      `/widgets/${encodeURIComponent(widgetId)}`,
      {
        headers: authHeaders(),
      },
    );

  return response.widget;
}

/**
 * Create a new chatbot widget.
 */
export async function createWidget(
  input: CreateWidgetInput,
) {
  const response =
    await apiRequest<{
      success: boolean;
      widget: ChatbotWidget;
    }>('/widgets', {
      method: 'POST',

      headers: authHeaders(),

      body: JSON.stringify(input),
    });

  return response.widget;
}

/**
 * Update an existing chatbot widget.
 */
export async function updateWidget(
  widgetId: string,
  input: UpdateWidgetInput,
) {
  const response =
    await apiRequest<{
      success: boolean;
      widget: ChatbotWidget;
    }>(
      `/widgets/${encodeURIComponent(widgetId)}`,
      {
        method: 'PATCH',

        headers: authHeaders(),

        body: JSON.stringify(input),
      },
    );

  return response.widget;
}

/**
 * Delete an existing chatbot widget.
 */
export async function deleteWidget(
  widgetId: string,
) {
  return apiRequest<{
    success: boolean;
    message: string;
  }>(
    `/widgets/${encodeURIComponent(widgetId)}`,
    {
      method: 'DELETE',

      headers: authHeaders(),
    },
  );
}

/**
 * Enable or disable a widget.
 */
export async function setWidgetEnabled(
  widgetId: string,
  enabled: boolean,
) {
  return updateWidget(
    widgetId,
    {
      enabled,
    },
  );
}