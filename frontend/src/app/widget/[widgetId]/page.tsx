import Chatbot from '@/components/chatbot/Chatbot';

type WidgetPageProps = {
  params: Promise<{
    widgetId: string;
  }>;
};

export default async function WidgetPage({
  params,
}: WidgetPageProps) {
  const { widgetId } = await params;

  return (
    <main className="min-h-screen bg-transparent">
      <Chatbot widgetId={widgetId} />
    </main>
  );
}