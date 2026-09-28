import { apiRequest } from './api';
import { getAccessToken } from './auth';

export interface Customer {
  id: string;
  businessId: string;
  firstName: string;
  lastName: string;
  fullName: string | null;
  email: string | null;
  phone: string | null;
  avatarUrl: string | null;
  notes: string | null;
  metadata: unknown;
  createdAt: string;
  updatedAt: string;

  _count?: {
    conversations: number;
    leads: number;
    identities: number;
  };
}

export interface CreateCustomerInput {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  notes?: string;
}

function authHeaders() {
  const token = getAccessToken();

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getCustomers() {
  return apiRequest<Customer[]>(
    '/customers',
    {
      headers: authHeaders(),
    },
  );
}

export async function getCustomer(
  customerId: string,
) {
  return apiRequest<Customer>(
    `/customers/${customerId}`,
    {
      headers: authHeaders(),
    },
  );
}

export async function createCustomer(
  input: CreateCustomerInput,
) {
  return apiRequest<Customer>(
    '/customers',
    {
      method: 'POST',

      headers: authHeaders(),

      body: JSON.stringify(input),
    },
  );
}

export async function updateCustomer(
  customerId: string,
  input: Partial<CreateCustomerInput>,
) {
  return apiRequest<Customer>(
    `/customers/${customerId}`,
    {
      method: 'PATCH',

      headers: authHeaders(),

      body: JSON.stringify(input),
    },
  );
}

export async function deleteCustomer(
  customerId: string,
) {
  return apiRequest<{
    message: string;
  }>(
    `/customers/${customerId}`,
    {
      method: 'DELETE',

      headers: authHeaders(),
    },
  );
}