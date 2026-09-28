-- CreateTable
CREATE TABLE "ChatbotWidget" (
    "id" TEXT NOT NULL,
    "widgetId" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "aiAgentId" TEXT,
    "name" TEXT NOT NULL DEFAULT 'BizPilot Assistant',
    "logoUrl" TEXT,
    "primaryColor" TEXT NOT NULL DEFAULT '#2563EB',
    "secondaryColor" TEXT NOT NULL DEFAULT '#0F172A',
    "welcomeMessage" TEXT NOT NULL DEFAULT 'Hello! How can we help you today?',
    "greeting" TEXT NOT NULL DEFAULT 'Chat with us',
    "position" TEXT NOT NULL DEFAULT 'bottom-right',
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "allowedDomains" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatbotWidget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChatbotWidget_widgetId_key" ON "ChatbotWidget"("widgetId");

-- CreateIndex
CREATE INDEX "ChatbotWidget_businessId_idx" ON "ChatbotWidget"("businessId");

-- CreateIndex
CREATE INDEX "ChatbotWidget_aiAgentId_idx" ON "ChatbotWidget"("aiAgentId");

-- AddForeignKey
ALTER TABLE "ChatbotWidget" ADD CONSTRAINT "ChatbotWidget_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatbotWidget" ADD CONSTRAINT "ChatbotWidget_aiAgentId_fkey" FOREIGN KEY ("aiAgentId") REFERENCES "AIAgent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
