import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConversationModel = runtime.Types.Result.DefaultSelection<Prisma.$ConversationPayload>;
export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
};
export type ConversationMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    customerId: string | null;
    channelConnectionId: string | null;
    aiAgentId: string | null;
    subject: string | null;
    status: $Enums.ConversationStatus | null;
    aiEnabled: boolean | null;
    assignedToId: string | null;
    lastMessageAt: Date | null;
    resolvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConversationMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    customerId: string | null;
    channelConnectionId: string | null;
    aiAgentId: string | null;
    subject: string | null;
    status: $Enums.ConversationStatus | null;
    aiEnabled: boolean | null;
    assignedToId: string | null;
    lastMessageAt: Date | null;
    resolvedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConversationCountAggregateOutputType = {
    id: number;
    businessId: number;
    customerId: number;
    channelConnectionId: number;
    aiAgentId: number;
    subject: number;
    status: number;
    aiEnabled: number;
    assignedToId: number;
    lastMessageAt: number;
    resolvedAt: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ConversationMinAggregateInputType = {
    id?: true;
    businessId?: true;
    customerId?: true;
    channelConnectionId?: true;
    aiAgentId?: true;
    subject?: true;
    status?: true;
    aiEnabled?: true;
    assignedToId?: true;
    lastMessageAt?: true;
    resolvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConversationMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    customerId?: true;
    channelConnectionId?: true;
    aiAgentId?: true;
    subject?: true;
    status?: true;
    aiEnabled?: true;
    assignedToId?: true;
    lastMessageAt?: true;
    resolvedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConversationCountAggregateInputType = {
    id?: true;
    businessId?: true;
    customerId?: true;
    channelConnectionId?: true;
    aiAgentId?: true;
    subject?: true;
    status?: true;
    aiEnabled?: true;
    assignedToId?: true;
    lastMessageAt?: true;
    resolvedAt?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConversationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConversationCountAggregateInputType;
    _min?: ConversationMinAggregateInputType;
    _max?: ConversationMaxAggregateInputType;
};
export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
    [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversation[P]> : Prisma.GetScalarType<T[P], AggregateConversation[P]>;
};
export type ConversationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithAggregationInput | Prisma.ConversationOrderByWithAggregationInput[];
    by: Prisma.ConversationScalarFieldEnum[] | Prisma.ConversationScalarFieldEnum;
    having?: Prisma.ConversationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversationCountAggregateInputType | true;
    _min?: ConversationMinAggregateInputType;
    _max?: ConversationMaxAggregateInputType;
};
export type ConversationGroupByOutputType = {
    id: string;
    businessId: string;
    customerId: string;
    channelConnectionId: string;
    aiAgentId: string | null;
    subject: string | null;
    status: $Enums.ConversationStatus;
    aiEnabled: boolean;
    assignedToId: string | null;
    lastMessageAt: Date | null;
    resolvedAt: Date | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ConversationCountAggregateOutputType | null;
    _min: ConversationMinAggregateOutputType | null;
    _max: ConversationMaxAggregateOutputType | null;
};
export type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConversationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConversationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConversationGroupByOutputType[P]>;
}>>;
export type ConversationWhereInput = {
    AND?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    OR?: Prisma.ConversationWhereInput[];
    NOT?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    id?: Prisma.StringFilter<"Conversation"> | string;
    businessId?: Prisma.StringFilter<"Conversation"> | string;
    customerId?: Prisma.StringFilter<"Conversation"> | string;
    channelConnectionId?: Prisma.StringFilter<"Conversation"> | string;
    aiAgentId?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    subject?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    status?: Prisma.EnumConversationStatusFilter<"Conversation"> | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFilter<"Conversation"> | boolean;
    assignedToId?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"Conversation">;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    channelConnection?: Prisma.XOR<Prisma.ChannelConnectionScalarRelationFilter, Prisma.ChannelConnectionWhereInput>;
    aiAgent?: Prisma.XOR<Prisma.AIAgentNullableScalarRelationFilter, Prisma.AIAgentWhereInput> | null;
    messages?: Prisma.MessageListRelationFilter;
};
export type ConversationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channelConnectionId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    aiEnabled?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    channelConnection?: Prisma.ChannelConnectionOrderByWithRelationInput;
    aiAgent?: Prisma.AIAgentOrderByWithRelationInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
};
export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    OR?: Prisma.ConversationWhereInput[];
    NOT?: Prisma.ConversationWhereInput | Prisma.ConversationWhereInput[];
    businessId?: Prisma.StringFilter<"Conversation"> | string;
    customerId?: Prisma.StringFilter<"Conversation"> | string;
    channelConnectionId?: Prisma.StringFilter<"Conversation"> | string;
    aiAgentId?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    subject?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    status?: Prisma.EnumConversationStatusFilter<"Conversation"> | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFilter<"Conversation"> | boolean;
    assignedToId?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"Conversation">;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    channelConnection?: Prisma.XOR<Prisma.ChannelConnectionScalarRelationFilter, Prisma.ChannelConnectionWhereInput>;
    aiAgent?: Prisma.XOR<Prisma.AIAgentNullableScalarRelationFilter, Prisma.AIAgentWhereInput> | null;
    messages?: Prisma.MessageListRelationFilter;
}, "id">;
export type ConversationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channelConnectionId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    aiEnabled?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConversationCountOrderByAggregateInput;
    _max?: Prisma.ConversationMaxOrderByAggregateInput;
    _min?: Prisma.ConversationMinOrderByAggregateInput;
};
export type ConversationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConversationScalarWhereWithAggregatesInput | Prisma.ConversationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConversationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConversationScalarWhereWithAggregatesInput | Prisma.ConversationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Conversation"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Conversation"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Conversation"> | string;
    channelConnectionId?: Prisma.StringWithAggregatesFilter<"Conversation"> | string;
    aiAgentId?: Prisma.StringNullableWithAggregatesFilter<"Conversation"> | string | null;
    subject?: Prisma.StringNullableWithAggregatesFilter<"Conversation"> | string | null;
    status?: Prisma.EnumConversationStatusWithAggregatesFilter<"Conversation"> | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolWithAggregatesFilter<"Conversation"> | boolean;
    assignedToId?: Prisma.StringNullableWithAggregatesFilter<"Conversation"> | string | null;
    lastMessageAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Conversation">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Conversation"> | Date | string;
};
export type ConversationCreateInput = {
    id?: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutConversationsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutConversationsInput;
    channelConnection: Prisma.ChannelConnectionCreateNestedOneWithoutConversationsInput;
    aiAgent?: Prisma.AIAgentCreateNestedOneWithoutConversationsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateInput = {
    id?: string;
    businessId: string;
    customerId: string;
    channelConnectionId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutConversationsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutConversationsNestedInput;
    channelConnection?: Prisma.ChannelConnectionUpdateOneRequiredWithoutConversationsNestedInput;
    aiAgent?: Prisma.AIAgentUpdateOneWithoutConversationsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationCreateManyInput = {
    id?: string;
    businessId: string;
    customerId: string;
    channelConnectionId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationListRelationFilter = {
    every?: Prisma.ConversationWhereInput;
    some?: Prisma.ConversationWhereInput;
    none?: Prisma.ConversationWhereInput;
};
export type ConversationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConversationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channelConnectionId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    aiEnabled?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConversationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channelConnectionId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    aiEnabled?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConversationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channelConnectionId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    aiEnabled?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    lastMessageAt?: Prisma.SortOrder;
    resolvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConversationScalarRelationFilter = {
    is?: Prisma.ConversationWhereInput;
    isNot?: Prisma.ConversationWhereInput;
};
export type ConversationCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutBusinessInput, Prisma.ConversationUncheckedCreateWithoutBusinessInput> | Prisma.ConversationCreateWithoutBusinessInput[] | Prisma.ConversationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutBusinessInput | Prisma.ConversationCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.ConversationCreateManyBusinessInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutBusinessInput, Prisma.ConversationUncheckedCreateWithoutBusinessInput> | Prisma.ConversationCreateWithoutBusinessInput[] | Prisma.ConversationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutBusinessInput | Prisma.ConversationCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.ConversationCreateManyBusinessInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutBusinessInput, Prisma.ConversationUncheckedCreateWithoutBusinessInput> | Prisma.ConversationCreateWithoutBusinessInput[] | Prisma.ConversationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutBusinessInput | Prisma.ConversationCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutBusinessInput | Prisma.ConversationUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.ConversationCreateManyBusinessInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutBusinessInput | Prisma.ConversationUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutBusinessInput | Prisma.ConversationUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutBusinessInput, Prisma.ConversationUncheckedCreateWithoutBusinessInput> | Prisma.ConversationCreateWithoutBusinessInput[] | Prisma.ConversationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutBusinessInput | Prisma.ConversationCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutBusinessInput | Prisma.ConversationUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.ConversationCreateManyBusinessInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutBusinessInput | Prisma.ConversationUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutBusinessInput | Prisma.ConversationUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationCreateNestedManyWithoutChannelConnectionInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutChannelConnectionInput, Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput> | Prisma.ConversationCreateWithoutChannelConnectionInput[] | Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput | Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput[];
    createMany?: Prisma.ConversationCreateManyChannelConnectionInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUncheckedCreateNestedManyWithoutChannelConnectionInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutChannelConnectionInput, Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput> | Prisma.ConversationCreateWithoutChannelConnectionInput[] | Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput | Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput[];
    createMany?: Prisma.ConversationCreateManyChannelConnectionInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUpdateManyWithoutChannelConnectionNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutChannelConnectionInput, Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput> | Prisma.ConversationCreateWithoutChannelConnectionInput[] | Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput | Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutChannelConnectionInput | Prisma.ConversationUpsertWithWhereUniqueWithoutChannelConnectionInput[];
    createMany?: Prisma.ConversationCreateManyChannelConnectionInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutChannelConnectionInput | Prisma.ConversationUpdateWithWhereUniqueWithoutChannelConnectionInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutChannelConnectionInput | Prisma.ConversationUpdateManyWithWhereWithoutChannelConnectionInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationUncheckedUpdateManyWithoutChannelConnectionNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutChannelConnectionInput, Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput> | Prisma.ConversationCreateWithoutChannelConnectionInput[] | Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput | Prisma.ConversationCreateOrConnectWithoutChannelConnectionInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutChannelConnectionInput | Prisma.ConversationUpsertWithWhereUniqueWithoutChannelConnectionInput[];
    createMany?: Prisma.ConversationCreateManyChannelConnectionInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutChannelConnectionInput | Prisma.ConversationUpdateWithWhereUniqueWithoutChannelConnectionInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutChannelConnectionInput | Prisma.ConversationUpdateManyWithWhereWithoutChannelConnectionInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput | Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput> | Prisma.ConversationCreateWithoutCustomerInput[] | Prisma.ConversationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutCustomerInput | Prisma.ConversationCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ConversationCreateManyCustomerInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ConversationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput | Prisma.ConversationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type EnumConversationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConversationStatus;
};
export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.ConversationUpsertWithoutMessagesInput;
    connect?: Prisma.ConversationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConversationUpdateToOneWithWhereWithoutMessagesInput, Prisma.ConversationUpdateWithoutMessagesInput>, Prisma.ConversationUncheckedUpdateWithoutMessagesInput>;
};
export type ConversationCreateNestedManyWithoutAiAgentInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutAiAgentInput, Prisma.ConversationUncheckedCreateWithoutAiAgentInput> | Prisma.ConversationCreateWithoutAiAgentInput[] | Prisma.ConversationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutAiAgentInput | Prisma.ConversationCreateOrConnectWithoutAiAgentInput[];
    createMany?: Prisma.ConversationCreateManyAiAgentInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUncheckedCreateNestedManyWithoutAiAgentInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutAiAgentInput, Prisma.ConversationUncheckedCreateWithoutAiAgentInput> | Prisma.ConversationCreateWithoutAiAgentInput[] | Prisma.ConversationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutAiAgentInput | Prisma.ConversationCreateOrConnectWithoutAiAgentInput[];
    createMany?: Prisma.ConversationCreateManyAiAgentInputEnvelope;
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
};
export type ConversationUpdateManyWithoutAiAgentNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutAiAgentInput, Prisma.ConversationUncheckedCreateWithoutAiAgentInput> | Prisma.ConversationCreateWithoutAiAgentInput[] | Prisma.ConversationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutAiAgentInput | Prisma.ConversationCreateOrConnectWithoutAiAgentInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutAiAgentInput | Prisma.ConversationUpsertWithWhereUniqueWithoutAiAgentInput[];
    createMany?: Prisma.ConversationCreateManyAiAgentInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutAiAgentInput | Prisma.ConversationUpdateWithWhereUniqueWithoutAiAgentInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutAiAgentInput | Prisma.ConversationUpdateManyWithWhereWithoutAiAgentInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationUncheckedUpdateManyWithoutAiAgentNestedInput = {
    create?: Prisma.XOR<Prisma.ConversationCreateWithoutAiAgentInput, Prisma.ConversationUncheckedCreateWithoutAiAgentInput> | Prisma.ConversationCreateWithoutAiAgentInput[] | Prisma.ConversationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.ConversationCreateOrConnectWithoutAiAgentInput | Prisma.ConversationCreateOrConnectWithoutAiAgentInput[];
    upsert?: Prisma.ConversationUpsertWithWhereUniqueWithoutAiAgentInput | Prisma.ConversationUpsertWithWhereUniqueWithoutAiAgentInput[];
    createMany?: Prisma.ConversationCreateManyAiAgentInputEnvelope;
    set?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    disconnect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    delete?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    connect?: Prisma.ConversationWhereUniqueInput | Prisma.ConversationWhereUniqueInput[];
    update?: Prisma.ConversationUpdateWithWhereUniqueWithoutAiAgentInput | Prisma.ConversationUpdateWithWhereUniqueWithoutAiAgentInput[];
    updateMany?: Prisma.ConversationUpdateManyWithWhereWithoutAiAgentInput | Prisma.ConversationUpdateManyWithWhereWithoutAiAgentInput[];
    deleteMany?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
};
export type ConversationCreateWithoutBusinessInput = {
    id?: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutConversationsInput;
    channelConnection: Prisma.ChannelConnectionCreateNestedOneWithoutConversationsInput;
    aiAgent?: Prisma.AIAgentCreateNestedOneWithoutConversationsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutBusinessInput = {
    id?: string;
    customerId: string;
    channelConnectionId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutBusinessInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutBusinessInput, Prisma.ConversationUncheckedCreateWithoutBusinessInput>;
};
export type ConversationCreateManyBusinessInputEnvelope = {
    data: Prisma.ConversationCreateManyBusinessInput | Prisma.ConversationCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type ConversationUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.ConversationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutBusinessInput, Prisma.ConversationUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutBusinessInput, Prisma.ConversationUncheckedCreateWithoutBusinessInput>;
};
export type ConversationUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.ConversationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutBusinessInput, Prisma.ConversationUncheckedUpdateWithoutBusinessInput>;
};
export type ConversationUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.ConversationScalarWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyWithoutBusinessInput>;
};
export type ConversationScalarWhereInput = {
    AND?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
    OR?: Prisma.ConversationScalarWhereInput[];
    NOT?: Prisma.ConversationScalarWhereInput | Prisma.ConversationScalarWhereInput[];
    id?: Prisma.StringFilter<"Conversation"> | string;
    businessId?: Prisma.StringFilter<"Conversation"> | string;
    customerId?: Prisma.StringFilter<"Conversation"> | string;
    channelConnectionId?: Prisma.StringFilter<"Conversation"> | string;
    aiAgentId?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    subject?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    status?: Prisma.EnumConversationStatusFilter<"Conversation"> | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFilter<"Conversation"> | boolean;
    assignedToId?: Prisma.StringNullableFilter<"Conversation"> | string | null;
    lastMessageAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    resolvedAt?: Prisma.DateTimeNullableFilter<"Conversation"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"Conversation">;
    createdAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Conversation"> | Date | string;
};
export type ConversationCreateWithoutChannelConnectionInput = {
    id?: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutConversationsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutConversationsInput;
    aiAgent?: Prisma.AIAgentCreateNestedOneWithoutConversationsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutChannelConnectionInput = {
    id?: string;
    businessId: string;
    customerId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutChannelConnectionInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutChannelConnectionInput, Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput>;
};
export type ConversationCreateManyChannelConnectionInputEnvelope = {
    data: Prisma.ConversationCreateManyChannelConnectionInput | Prisma.ConversationCreateManyChannelConnectionInput[];
    skipDuplicates?: boolean;
};
export type ConversationUpsertWithWhereUniqueWithoutChannelConnectionInput = {
    where: Prisma.ConversationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutChannelConnectionInput, Prisma.ConversationUncheckedUpdateWithoutChannelConnectionInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutChannelConnectionInput, Prisma.ConversationUncheckedCreateWithoutChannelConnectionInput>;
};
export type ConversationUpdateWithWhereUniqueWithoutChannelConnectionInput = {
    where: Prisma.ConversationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutChannelConnectionInput, Prisma.ConversationUncheckedUpdateWithoutChannelConnectionInput>;
};
export type ConversationUpdateManyWithWhereWithoutChannelConnectionInput = {
    where: Prisma.ConversationScalarWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyWithoutChannelConnectionInput>;
};
export type ConversationCreateWithoutCustomerInput = {
    id?: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutConversationsInput;
    channelConnection: Prisma.ChannelConnectionCreateNestedOneWithoutConversationsInput;
    aiAgent?: Prisma.AIAgentCreateNestedOneWithoutConversationsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutCustomerInput = {
    id?: string;
    businessId: string;
    channelConnectionId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput>;
};
export type ConversationCreateManyCustomerInputEnvelope = {
    data: Prisma.ConversationCreateManyCustomerInput | Prisma.ConversationCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ConversationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ConversationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutCustomerInput, Prisma.ConversationUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutCustomerInput, Prisma.ConversationUncheckedCreateWithoutCustomerInput>;
};
export type ConversationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ConversationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutCustomerInput, Prisma.ConversationUncheckedUpdateWithoutCustomerInput>;
};
export type ConversationUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ConversationScalarWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyWithoutCustomerInput>;
};
export type ConversationCreateWithoutMessagesInput = {
    id?: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutConversationsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutConversationsInput;
    channelConnection: Prisma.ChannelConnectionCreateNestedOneWithoutConversationsInput;
    aiAgent?: Prisma.AIAgentCreateNestedOneWithoutConversationsInput;
};
export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string;
    businessId: string;
    customerId: string;
    channelConnectionId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
};
export type ConversationUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutMessagesInput, Prisma.ConversationUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutMessagesInput, Prisma.ConversationUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.ConversationWhereInput;
};
export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.ConversationWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutMessagesInput, Prisma.ConversationUncheckedUpdateWithoutMessagesInput>;
};
export type ConversationUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutConversationsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutConversationsNestedInput;
    channelConnection?: Prisma.ChannelConnectionUpdateOneRequiredWithoutConversationsNestedInput;
    aiAgent?: Prisma.AIAgentUpdateOneWithoutConversationsNestedInput;
};
export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationCreateWithoutAiAgentInput = {
    id?: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutConversationsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutConversationsInput;
    channelConnection: Prisma.ChannelConnectionCreateNestedOneWithoutConversationsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutConversationInput;
};
export type ConversationUncheckedCreateWithoutAiAgentInput = {
    id?: string;
    businessId: string;
    customerId: string;
    channelConnectionId: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutConversationInput;
};
export type ConversationCreateOrConnectWithoutAiAgentInput = {
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutAiAgentInput, Prisma.ConversationUncheckedCreateWithoutAiAgentInput>;
};
export type ConversationCreateManyAiAgentInputEnvelope = {
    data: Prisma.ConversationCreateManyAiAgentInput | Prisma.ConversationCreateManyAiAgentInput[];
    skipDuplicates?: boolean;
};
export type ConversationUpsertWithWhereUniqueWithoutAiAgentInput = {
    where: Prisma.ConversationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConversationUpdateWithoutAiAgentInput, Prisma.ConversationUncheckedUpdateWithoutAiAgentInput>;
    create: Prisma.XOR<Prisma.ConversationCreateWithoutAiAgentInput, Prisma.ConversationUncheckedCreateWithoutAiAgentInput>;
};
export type ConversationUpdateWithWhereUniqueWithoutAiAgentInput = {
    where: Prisma.ConversationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConversationUpdateWithoutAiAgentInput, Prisma.ConversationUncheckedUpdateWithoutAiAgentInput>;
};
export type ConversationUpdateManyWithWhereWithoutAiAgentInput = {
    where: Prisma.ConversationScalarWhereInput;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyWithoutAiAgentInput>;
};
export type ConversationCreateManyBusinessInput = {
    id?: string;
    customerId: string;
    channelConnectionId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutConversationsNestedInput;
    channelConnection?: Prisma.ChannelConnectionUpdateOneRequiredWithoutConversationsNestedInput;
    aiAgent?: Prisma.AIAgentUpdateOneWithoutConversationsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationCreateManyChannelConnectionInput = {
    id?: string;
    businessId: string;
    customerId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationUpdateWithoutChannelConnectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutConversationsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutConversationsNestedInput;
    aiAgent?: Prisma.AIAgentUpdateOneWithoutConversationsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutChannelConnectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateManyWithoutChannelConnectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationCreateManyCustomerInput = {
    id?: string;
    businessId: string;
    channelConnectionId: string;
    aiAgentId?: string | null;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutConversationsNestedInput;
    channelConnection?: Prisma.ChannelConnectionUpdateOneRequiredWithoutConversationsNestedInput;
    aiAgent?: Prisma.AIAgentUpdateOneWithoutConversationsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationCreateManyAiAgentInput = {
    id?: string;
    businessId: string;
    customerId: string;
    channelConnectionId: string;
    subject?: string | null;
    status?: $Enums.ConversationStatus;
    aiEnabled?: boolean;
    assignedToId?: string | null;
    lastMessageAt?: Date | string | null;
    resolvedAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConversationUpdateWithoutAiAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutConversationsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutConversationsNestedInput;
    channelConnection?: Prisma.ChannelConnectionUpdateOneRequiredWithoutConversationsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateWithoutAiAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutConversationNestedInput;
};
export type ConversationUncheckedUpdateManyWithoutAiAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelConnectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumConversationStatusFieldUpdateOperationsInput | $Enums.ConversationStatus;
    aiEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    resolvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConversationCountOutputType = {
    messages: number;
};
export type ConversationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs;
};
export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationCountOutputTypeSelect<ExtArgs> | null;
};
export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type ConversationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    channelConnectionId?: boolean;
    aiAgentId?: boolean;
    subject?: boolean;
    status?: boolean;
    aiEnabled?: boolean;
    assignedToId?: boolean;
    lastMessageAt?: boolean;
    resolvedAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    channelConnection?: boolean | Prisma.ChannelConnectionDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Conversation$aiAgentArgs<ExtArgs>;
    messages?: boolean | Prisma.Conversation$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    channelConnectionId?: boolean;
    aiAgentId?: boolean;
    subject?: boolean;
    status?: boolean;
    aiEnabled?: boolean;
    assignedToId?: boolean;
    lastMessageAt?: boolean;
    resolvedAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    channelConnection?: boolean | Prisma.ChannelConnectionDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Conversation$aiAgentArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    channelConnectionId?: boolean;
    aiAgentId?: boolean;
    subject?: boolean;
    status?: boolean;
    aiEnabled?: boolean;
    assignedToId?: boolean;
    lastMessageAt?: boolean;
    resolvedAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    channelConnection?: boolean | Prisma.ChannelConnectionDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Conversation$aiAgentArgs<ExtArgs>;
}, ExtArgs["result"]["conversation"]>;
export type ConversationSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    channelConnectionId?: boolean;
    aiAgentId?: boolean;
    subject?: boolean;
    status?: boolean;
    aiEnabled?: boolean;
    assignedToId?: boolean;
    lastMessageAt?: boolean;
    resolvedAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ConversationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "customerId" | "channelConnectionId" | "aiAgentId" | "subject" | "status" | "aiEnabled" | "assignedToId" | "lastMessageAt" | "resolvedAt" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>;
export type ConversationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    channelConnection?: boolean | Prisma.ChannelConnectionDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Conversation$aiAgentArgs<ExtArgs>;
    messages?: boolean | Prisma.Conversation$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ConversationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ConversationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    channelConnection?: boolean | Prisma.ChannelConnectionDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Conversation$aiAgentArgs<ExtArgs>;
};
export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    channelConnection?: boolean | Prisma.ChannelConnectionDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Conversation$aiAgentArgs<ExtArgs>;
};
export type $ConversationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Conversation";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        channelConnection: Prisma.$ChannelConnectionPayload<ExtArgs>;
        aiAgent: Prisma.$AIAgentPayload<ExtArgs> | null;
        messages: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        customerId: string;
        channelConnectionId: string;
        aiAgentId: string | null;
        subject: string | null;
        status: $Enums.ConversationStatus;
        aiEnabled: boolean;
        assignedToId: string | null;
        lastMessageAt: Date | null;
        resolvedAt: Date | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["conversation"]>;
    composites: {};
};
export type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConversationPayload, S>;
export type ConversationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversationCountAggregateInputType | true;
};
export interface ConversationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Conversation'];
        meta: {
            name: 'Conversation';
        };
    };
    findUnique<T extends ConversationFindUniqueArgs>(args: Prisma.SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConversationFindFirstArgs>(args?: Prisma.SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConversationFindManyArgs>(args?: Prisma.SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConversationCreateArgs>(args: Prisma.SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConversationCreateManyArgs>(args?: Prisma.SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConversationDeleteArgs>(args: Prisma.SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConversationUpdateArgs>(args: Prisma.SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConversationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConversationUpdateManyArgs>(args: Prisma.SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConversationUpsertArgs>(args: Prisma.SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma.Prisma__ConversationClient<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConversationCountArgs>(args?: Prisma.Subset<T, ConversationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConversationCountAggregateOutputType> : number>;
    aggregate<T extends ConversationAggregateArgs>(args: Prisma.Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>;
    groupBy<T extends ConversationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConversationGroupByArgs['orderBy'];
    } : {
        orderBy?: ConversationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConversationFieldRefs;
}
export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    channelConnection<T extends Prisma.ChannelConnectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChannelConnectionDefaultArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    aiAgent<T extends Prisma.Conversation$aiAgentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversation$aiAgentArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.Conversation$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConversationFieldRefs {
    readonly id: Prisma.FieldRef<"Conversation", 'String'>;
    readonly businessId: Prisma.FieldRef<"Conversation", 'String'>;
    readonly customerId: Prisma.FieldRef<"Conversation", 'String'>;
    readonly channelConnectionId: Prisma.FieldRef<"Conversation", 'String'>;
    readonly aiAgentId: Prisma.FieldRef<"Conversation", 'String'>;
    readonly subject: Prisma.FieldRef<"Conversation", 'String'>;
    readonly status: Prisma.FieldRef<"Conversation", 'ConversationStatus'>;
    readonly aiEnabled: Prisma.FieldRef<"Conversation", 'Boolean'>;
    readonly assignedToId: Prisma.FieldRef<"Conversation", 'String'>;
    readonly lastMessageAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
    readonly resolvedAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
    readonly metadata: Prisma.FieldRef<"Conversation", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Conversation", 'DateTime'>;
}
export type ConversationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type ConversationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationCreateInput, Prisma.ConversationUncheckedCreateInput>;
};
export type ConversationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConversationCreateManyInput | Prisma.ConversationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConversationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    data: Prisma.ConversationCreateManyInput | Prisma.ConversationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConversationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConversationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationUpdateInput, Prisma.ConversationUncheckedUpdateInput>;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyInput>;
    where?: Prisma.ConversationWhereInput;
    limit?: number;
};
export type ConversationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConversationUpdateManyMutationInput, Prisma.ConversationUncheckedUpdateManyInput>;
    where?: Prisma.ConversationWhereInput;
    limit?: number;
    include?: Prisma.ConversationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConversationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConversationCreateInput, Prisma.ConversationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConversationUpdateInput, Prisma.ConversationUncheckedUpdateInput>;
};
export type ConversationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where: Prisma.ConversationWhereUniqueInput;
};
export type ConversationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
    limit?: number;
};
export type Conversation$aiAgentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where?: Prisma.AIAgentWhereInput;
};
export type Conversation$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type ConversationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
};
