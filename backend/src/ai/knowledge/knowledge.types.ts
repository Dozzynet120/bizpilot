export interface KnowledgeContext {
  products: Array<{
    name: string;
    description: string | null;
    price: string | null;
    currency: string;
  }>;

  services: Array<{
    name: string;
    description: string | null;
    price: string | null;
    currency: string;
  }>;

  faqs: Array<{
    question: string;
    answer: string;
    category: string | null;
  }>;
}