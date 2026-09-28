import { apiRequest } from './api';
import { getAccessToken } from './auth';

export interface AiAgent {
  id: string;
  businessId: string;

  name: string;
  description: string | null;

  type: string;
  status: string;

  systemPrompt: string | null;
  instructions: string | null;
  model: string | null;

  temperature: number;

  createdAt: string;
  updatedAt: string;
}

function authHeaders() {
  const token = getAccessToken();

  return {
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Get all AI agents belonging to
 * the authenticated business.
 */
export async function getAiAgents() {
  return apiRequest<AiAgent[]>(
    '/ai-agents',
    {
      headers: authHeaders(),
    },
  );
}

/**
 * Get a single AI agent.
 */
export async function getAiAgent(
  agentId: string,
) {
  return apiRequest<AiAgent>(
    `/ai-agents/${encodeURIComponent(agentId)}`,
    {
      headers: authHeaders(),
    },
  );
}