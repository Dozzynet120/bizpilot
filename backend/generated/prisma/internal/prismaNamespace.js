"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AuditLogScalarFieldEnum = exports.RefreshTokenScalarFieldEnum = exports.UsageRecordScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.SubscriptionScalarFieldEnum = exports.AutomationScalarFieldEnum = exports.AIAgentScalarFieldEnum = exports.KnowledgeDocumentScalarFieldEnum = exports.FAQScalarFieldEnum = exports.ServiceScalarFieldEnum = exports.ProductScalarFieldEnum = exports.LeadScalarFieldEnum = exports.MessageScalarFieldEnum = exports.ConversationScalarFieldEnum = exports.CustomerIdentityScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.ChannelConnectionScalarFieldEnum = exports.BusinessMemberScalarFieldEnum = exports.BusinessScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Business: 'Business',
    BusinessMember: 'BusinessMember',
    ChannelConnection: 'ChannelConnection',
    Customer: 'Customer',
    CustomerIdentity: 'CustomerIdentity',
    Conversation: 'Conversation',
    Message: 'Message',
    Lead: 'Lead',
    Product: 'Product',
    Service: 'Service',
    FAQ: 'FAQ',
    KnowledgeDocument: 'KnowledgeDocument',
    AIAgent: 'AIAgent',
    Automation: 'Automation',
    Subscription: 'Subscription',
    Payment: 'Payment',
    UsageRecord: 'UsageRecord',
    RefreshToken: 'RefreshToken',
    AuditLog: 'AuditLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    status: 'status',
    emailVerified: 'emailVerified',
    phoneVerified: 'phoneVerified',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BusinessScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    websiteUrl: 'websiteUrl',
    email: 'email',
    phone: 'phone',
    logoUrl: 'logoUrl',
    timezone: 'timezone',
    currency: 'currency',
    country: 'country',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BusinessMemberScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ChannelConnectionScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    channel: 'channel',
    status: 'status',
    externalAccountId: 'externalAccountId',
    externalPageId: 'externalPageId',
    accountName: 'accountName',
    username: 'username',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiresAt: 'tokenExpiresAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CustomerScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    firstName: 'firstName',
    lastName: 'lastName',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    notes: 'notes',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CustomerIdentityScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    channelConnectionId: 'channelConnectionId',
    externalId: 'externalId',
    username: 'username',
    displayName: 'displayName',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ConversationScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    customerId: 'customerId',
    channelConnectionId: 'channelConnectionId',
    aiAgentId: 'aiAgentId',
    subject: 'subject',
    status: 'status',
    aiEnabled: 'aiEnabled',
    assignedToId: 'assignedToId',
    lastMessageAt: 'lastMessageAt',
    resolvedAt: 'resolvedAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MessageScalarFieldEnum = {
    id: 'id',
    conversationId: 'conversationId',
    externalMessageId: 'externalMessageId',
    direction: 'direction',
    senderType: 'senderType',
    type: 'type',
    content: 'content',
    mediaUrl: 'mediaUrl',
    aiGenerated: 'aiGenerated',
    aiModel: 'aiModel',
    aiConfidence: 'aiConfidence',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.LeadScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    customerId: 'customerId',
    title: 'title',
    description: 'description',
    status: 'status',
    source: 'source',
    value: 'value',
    currency: 'currency',
    assignedToId: 'assignedToId',
    notes: 'notes',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    wonAt: 'wonAt',
    lostAt: 'lostAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    sku: 'sku',
    price: 'price',
    currency: 'currency',
    stockQuantity: 'stockQuantity',
    status: 'status',
    imageUrl: 'imageUrl',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ServiceScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    currency: 'currency',
    active: 'active',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FAQScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    question: 'question',
    answer: 'answer',
    category: 'category',
    active: 'active',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.KnowledgeDocumentScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    description: 'description',
    type: 'type',
    content: 'content',
    sourceUrl: 'sourceUrl',
    active: 'active',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AIAgentScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    description: 'description',
    type: 'type',
    status: 'status',
    systemPrompt: 'systemPrompt',
    instructions: 'instructions',
    model: 'model',
    temperature: 'temperature',
    settings: 'settings',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AutomationScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    aiAgentId: 'aiAgentId',
    name: 'name',
    description: 'description',
    status: 'status',
    trigger: 'trigger',
    action: 'action',
    configuration: 'configuration',
    lastRunAt: 'lastRunAt',
    nextRunAt: 'nextRunAt',
    runCount: 'runCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SubscriptionScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    plan: 'plan',
    status: 'status',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    trialEndsAt: 'trialEndsAt',
    cancelledAt: 'cancelledAt',
    provider: 'provider',
    externalSubscriptionId: 'externalSubscriptionId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    provider: 'provider',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    reference: 'reference',
    externalTransactionId: 'externalTransactionId',
    description: 'description',
    metadata: 'metadata',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UsageRecordScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    type: 'type',
    quantity: 'quantity',
    unitCost: 'unitCost',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    businessId: 'businessId',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map