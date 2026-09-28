export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const BusinessStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type BusinessStatus = (typeof BusinessStatus)[keyof typeof BusinessStatus];
export declare const MembershipRole: {
    readonly OWNER: "OWNER";
    readonly ADMIN: "ADMIN";
    readonly MANAGER: "MANAGER";
    readonly STAFF: "STAFF";
};
export type MembershipRole = (typeof MembershipRole)[keyof typeof MembershipRole];
export declare const ChannelType: {
    readonly WEBSITE: "WEBSITE";
    readonly WHATSAPP: "WHATSAPP";
    readonly INSTAGRAM: "INSTAGRAM";
    readonly FACEBOOK: "FACEBOOK";
    readonly TIKTOK: "TIKTOK";
    readonly LINKEDIN: "LINKEDIN";
    readonly X: "X";
    readonly TINDER: "TINDER";
};
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];
export declare const ChannelStatus: {
    readonly CONNECTING: "CONNECTING";
    readonly CONNECTED: "CONNECTED";
    readonly DISCONNECTED: "DISCONNECTED";
    readonly ERROR: "ERROR";
    readonly PENDING_REVIEW: "PENDING_REVIEW";
};
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus];
export declare const MessageDirection: {
    readonly INBOUND: "INBOUND";
    readonly OUTBOUND: "OUTBOUND";
};
export type MessageDirection = (typeof MessageDirection)[keyof typeof MessageDirection];
export declare const MessageSenderType: {
    readonly CUSTOMER: "CUSTOMER";
    readonly AI: "AI";
    readonly HUMAN: "HUMAN";
    readonly SYSTEM: "SYSTEM";
};
export type MessageSenderType = (typeof MessageSenderType)[keyof typeof MessageSenderType];
export declare const MessageType: {
    readonly TEXT: "TEXT";
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
    readonly AUDIO: "AUDIO";
    readonly DOCUMENT: "DOCUMENT";
    readonly LOCATION: "LOCATION";
    readonly CONTACT: "CONTACT";
    readonly SYSTEM: "SYSTEM";
};
export type MessageType = (typeof MessageType)[keyof typeof MessageType];
export declare const ConversationStatus: {
    readonly OPEN: "OPEN";
    readonly PENDING: "PENDING";
    readonly RESOLVED: "RESOLVED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ConversationStatus = (typeof ConversationStatus)[keyof typeof ConversationStatus];
export declare const LeadStatus: {
    readonly NEW: "NEW";
    readonly CONTACTED: "CONTACTED";
    readonly QUALIFIED: "QUALIFIED";
    readonly PROPOSAL: "PROPOSAL";
    readonly WON: "WON";
    readonly LOST: "LOST";
};
export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus];
export declare const LeadSource: {
    readonly WEBSITE: "WEBSITE";
    readonly WHATSAPP: "WHATSAPP";
    readonly INSTAGRAM: "INSTAGRAM";
    readonly FACEBOOK: "FACEBOOK";
    readonly TIKTOK: "TIKTOK";
    readonly LINKEDIN: "LINKEDIN";
    readonly X: "X";
    readonly TINDER: "TINDER";
    readonly REFERRAL: "REFERRAL";
    readonly MANUAL: "MANUAL";
    readonly OTHER: "OTHER";
};
export type LeadSource = (typeof LeadSource)[keyof typeof LeadSource];
export declare const ProductStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly OUT_OF_STOCK: "OUT_OF_STOCK";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const KnowledgeType: {
    readonly FAQ: "FAQ";
    readonly PRODUCT: "PRODUCT";
    readonly SERVICE: "SERVICE";
    readonly DOCUMENT: "DOCUMENT";
    readonly WEBSITE: "WEBSITE";
    readonly CUSTOM: "CUSTOM";
};
export type KnowledgeType = (typeof KnowledgeType)[keyof typeof KnowledgeType];
export declare const AIAgentType: {
    readonly CUSTOMER_SUPPORT: "CUSTOMER_SUPPORT";
    readonly SALES: "SALES";
    readonly LEAD_QUALIFICATION: "LEAD_QUALIFICATION";
    readonly MARKETING: "MARKETING";
    readonly RESEARCH: "RESEARCH";
    readonly GENERAL: "GENERAL";
};
export type AIAgentType = (typeof AIAgentType)[keyof typeof AIAgentType];
export declare const AIAgentStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly PAUSED: "PAUSED";
    readonly DRAFT: "DRAFT";
};
export type AIAgentStatus = (typeof AIAgentStatus)[keyof typeof AIAgentStatus];
export declare const AutomationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly PAUSED: "PAUSED";
    readonly DRAFT: "DRAFT";
};
export type AutomationStatus = (typeof AutomationStatus)[keyof typeof AutomationStatus];
export declare const SubscriptionStatus: {
    readonly TRIALING: "TRIALING";
    readonly ACTIVE: "ACTIVE";
    readonly PAST_DUE: "PAST_DUE";
    readonly CANCELLED: "CANCELLED";
    readonly EXPIRED: "EXPIRED";
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentProvider: {
    readonly PAYSTACK: "PAYSTACK";
    readonly STRIPE: "STRIPE";
    readonly FLUTTERWAVE: "FLUTTERWAVE";
    readonly OTHER: "OTHER";
};
export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider];
export declare const UsageType: {
    readonly AI_MESSAGE: "AI_MESSAGE";
    readonly AI_GENERATION: "AI_GENERATION";
    readonly CUSTOMER_MESSAGE: "CUSTOMER_MESSAGE";
    readonly LEAD_CREATED: "LEAD_CREATED";
    readonly AUTOMATION_RUN: "AUTOMATION_RUN";
    readonly API_REQUEST: "API_REQUEST";
};
export type UsageType = (typeof UsageType)[keyof typeof UsageType];
