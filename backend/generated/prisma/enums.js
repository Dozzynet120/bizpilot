"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageType = exports.PaymentProvider = exports.PaymentStatus = exports.SubscriptionStatus = exports.AutomationStatus = exports.AIAgentStatus = exports.AIAgentType = exports.KnowledgeType = exports.ProductStatus = exports.LeadSource = exports.LeadStatus = exports.ConversationStatus = exports.MessageType = exports.MessageSenderType = exports.MessageDirection = exports.ChannelStatus = exports.ChannelType = exports.MembershipRole = exports.BusinessStatus = exports.UserStatus = void 0;
exports.UserStatus = {
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    DELETED: 'DELETED'
};
exports.BusinessStatus = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED'
};
exports.MembershipRole = {
    OWNER: 'OWNER',
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    STAFF: 'STAFF'
};
exports.ChannelType = {
    WEBSITE: 'WEBSITE',
    WHATSAPP: 'WHATSAPP',
    INSTAGRAM: 'INSTAGRAM',
    FACEBOOK: 'FACEBOOK',
    TIKTOK: 'TIKTOK',
    LINKEDIN: 'LINKEDIN',
    X: 'X',
    TINDER: 'TINDER'
};
exports.ChannelStatus = {
    CONNECTING: 'CONNECTING',
    CONNECTED: 'CONNECTED',
    DISCONNECTED: 'DISCONNECTED',
    ERROR: 'ERROR',
    PENDING_REVIEW: 'PENDING_REVIEW'
};
exports.MessageDirection = {
    INBOUND: 'INBOUND',
    OUTBOUND: 'OUTBOUND'
};
exports.MessageSenderType = {
    CUSTOMER: 'CUSTOMER',
    AI: 'AI',
    HUMAN: 'HUMAN',
    SYSTEM: 'SYSTEM'
};
exports.MessageType = {
    TEXT: 'TEXT',
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO',
    AUDIO: 'AUDIO',
    DOCUMENT: 'DOCUMENT',
    LOCATION: 'LOCATION',
    CONTACT: 'CONTACT',
    SYSTEM: 'SYSTEM'
};
exports.ConversationStatus = {
    OPEN: 'OPEN',
    PENDING: 'PENDING',
    RESOLVED: 'RESOLVED',
    ARCHIVED: 'ARCHIVED'
};
exports.LeadStatus = {
    NEW: 'NEW',
    CONTACTED: 'CONTACTED',
    QUALIFIED: 'QUALIFIED',
    PROPOSAL: 'PROPOSAL',
    WON: 'WON',
    LOST: 'LOST'
};
exports.LeadSource = {
    WEBSITE: 'WEBSITE',
    WHATSAPP: 'WHATSAPP',
    INSTAGRAM: 'INSTAGRAM',
    FACEBOOK: 'FACEBOOK',
    TIKTOK: 'TIKTOK',
    LINKEDIN: 'LINKEDIN',
    X: 'X',
    TINDER: 'TINDER',
    REFERRAL: 'REFERRAL',
    MANUAL: 'MANUAL',
    OTHER: 'OTHER'
};
exports.ProductStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    OUT_OF_STOCK: 'OUT_OF_STOCK',
    ARCHIVED: 'ARCHIVED'
};
exports.KnowledgeType = {
    FAQ: 'FAQ',
    PRODUCT: 'PRODUCT',
    SERVICE: 'SERVICE',
    DOCUMENT: 'DOCUMENT',
    WEBSITE: 'WEBSITE',
    CUSTOM: 'CUSTOM'
};
exports.AIAgentType = {
    CUSTOMER_SUPPORT: 'CUSTOMER_SUPPORT',
    SALES: 'SALES',
    LEAD_QUALIFICATION: 'LEAD_QUALIFICATION',
    MARKETING: 'MARKETING',
    RESEARCH: 'RESEARCH',
    GENERAL: 'GENERAL'
};
exports.AIAgentStatus = {
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED',
    DRAFT: 'DRAFT'
};
exports.AutomationStatus = {
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED',
    DRAFT: 'DRAFT'
};
exports.SubscriptionStatus = {
    TRIALING: 'TRIALING',
    ACTIVE: 'ACTIVE',
    PAST_DUE: 'PAST_DUE',
    CANCELLED: 'CANCELLED',
    EXPIRED: 'EXPIRED'
};
exports.PaymentStatus = {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    REFUNDED: 'REFUNDED'
};
exports.PaymentProvider = {
    PAYSTACK: 'PAYSTACK',
    STRIPE: 'STRIPE',
    FLUTTERWAVE: 'FLUTTERWAVE',
    OTHER: 'OTHER'
};
exports.UsageType = {
    AI_MESSAGE: 'AI_MESSAGE',
    AI_GENERATION: 'AI_GENERATION',
    CUSTOMER_MESSAGE: 'CUSTOMER_MESSAGE',
    LEAD_CREATED: 'LEAD_CREATED',
    AUTOMATION_RUN: 'AUTOMATION_RUN',
    API_REQUEST: 'API_REQUEST'
};
//# sourceMappingURL=enums.js.map