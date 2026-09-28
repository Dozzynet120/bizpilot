import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChannelConnectionModel = runtime.Types.Result.DefaultSelection<Prisma.$ChannelConnectionPayload>;
export type AggregateChannelConnection = {
    _count: ChannelConnectionCountAggregateOutputType | null;
    _min: ChannelConnectionMinAggregateOutputType | null;
    _max: ChannelConnectionMaxAggregateOutputType | null;
};
export type ChannelConnectionMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    channel: $Enums.ChannelType | null;
    status: $Enums.ChannelStatus | null;
    externalAccountId: string | null;
    externalPageId: string | null;
    accountName: string | null;
    username: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    tokenExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChannelConnectionMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    channel: $Enums.ChannelType | null;
    status: $Enums.ChannelStatus | null;
    externalAccountId: string | null;
    externalPageId: string | null;
    accountName: string | null;
    username: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    tokenExpiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChannelConnectionCountAggregateOutputType = {
    id: number;
    businessId: number;
    channel: number;
    status: number;
    externalAccountId: number;
    externalPageId: number;
    accountName: number;
    username: number;
    accessToken: number;
    refreshToken: number;
    tokenExpiresAt: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ChannelConnectionMinAggregateInputType = {
    id?: true;
    businessId?: true;
    channel?: true;
    status?: true;
    externalAccountId?: true;
    externalPageId?: true;
    accountName?: true;
    username?: true;
    accessToken?: true;
    refreshToken?: true;
    tokenExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChannelConnectionMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    channel?: true;
    status?: true;
    externalAccountId?: true;
    externalPageId?: true;
    accountName?: true;
    username?: true;
    accessToken?: true;
    refreshToken?: true;
    tokenExpiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChannelConnectionCountAggregateInputType = {
    id?: true;
    businessId?: true;
    channel?: true;
    status?: true;
    externalAccountId?: true;
    externalPageId?: true;
    accountName?: true;
    username?: true;
    accessToken?: true;
    refreshToken?: true;
    tokenExpiresAt?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ChannelConnectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChannelConnectionWhereInput;
    orderBy?: Prisma.ChannelConnectionOrderByWithRelationInput | Prisma.ChannelConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ChannelConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChannelConnectionCountAggregateInputType;
    _min?: ChannelConnectionMinAggregateInputType;
    _max?: ChannelConnectionMaxAggregateInputType;
};
export type GetChannelConnectionAggregateType<T extends ChannelConnectionAggregateArgs> = {
    [P in keyof T & keyof AggregateChannelConnection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChannelConnection[P]> : Prisma.GetScalarType<T[P], AggregateChannelConnection[P]>;
};
export type ChannelConnectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChannelConnectionWhereInput;
    orderBy?: Prisma.ChannelConnectionOrderByWithAggregationInput | Prisma.ChannelConnectionOrderByWithAggregationInput[];
    by: Prisma.ChannelConnectionScalarFieldEnum[] | Prisma.ChannelConnectionScalarFieldEnum;
    having?: Prisma.ChannelConnectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChannelConnectionCountAggregateInputType | true;
    _min?: ChannelConnectionMinAggregateInputType;
    _max?: ChannelConnectionMaxAggregateInputType;
};
export type ChannelConnectionGroupByOutputType = {
    id: string;
    businessId: string;
    channel: $Enums.ChannelType;
    status: $Enums.ChannelStatus;
    externalAccountId: string | null;
    externalPageId: string | null;
    accountName: string | null;
    username: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    tokenExpiresAt: Date | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ChannelConnectionCountAggregateOutputType | null;
    _min: ChannelConnectionMinAggregateOutputType | null;
    _max: ChannelConnectionMaxAggregateOutputType | null;
};
export type GetChannelConnectionGroupByPayload<T extends ChannelConnectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChannelConnectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChannelConnectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChannelConnectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChannelConnectionGroupByOutputType[P]>;
}>>;
export type ChannelConnectionWhereInput = {
    AND?: Prisma.ChannelConnectionWhereInput | Prisma.ChannelConnectionWhereInput[];
    OR?: Prisma.ChannelConnectionWhereInput[];
    NOT?: Prisma.ChannelConnectionWhereInput | Prisma.ChannelConnectionWhereInput[];
    id?: Prisma.StringFilter<"ChannelConnection"> | string;
    businessId?: Prisma.StringFilter<"ChannelConnection"> | string;
    channel?: Prisma.EnumChannelTypeFilter<"ChannelConnection"> | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFilter<"ChannelConnection"> | $Enums.ChannelStatus;
    externalAccountId?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    externalPageId?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    accountName?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    username?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    accessToken?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    refreshToken?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"ChannelConnection"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"ChannelConnection">;
    createdAt?: Prisma.DateTimeFilter<"ChannelConnection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChannelConnection"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    customers?: Prisma.CustomerIdentityListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
};
export type ChannelConnectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    externalPageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    accountName?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    accessToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    customers?: Prisma.CustomerIdentityOrderByRelationAggregateInput;
    conversations?: Prisma.ConversationOrderByRelationAggregateInput;
};
export type ChannelConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    businessId_channel_externalAccountId?: Prisma.ChannelConnectionBusinessIdChannelExternalAccountIdCompoundUniqueInput;
    AND?: Prisma.ChannelConnectionWhereInput | Prisma.ChannelConnectionWhereInput[];
    OR?: Prisma.ChannelConnectionWhereInput[];
    NOT?: Prisma.ChannelConnectionWhereInput | Prisma.ChannelConnectionWhereInput[];
    businessId?: Prisma.StringFilter<"ChannelConnection"> | string;
    channel?: Prisma.EnumChannelTypeFilter<"ChannelConnection"> | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFilter<"ChannelConnection"> | $Enums.ChannelStatus;
    externalAccountId?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    externalPageId?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    accountName?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    username?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    accessToken?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    refreshToken?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"ChannelConnection"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"ChannelConnection">;
    createdAt?: Prisma.DateTimeFilter<"ChannelConnection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChannelConnection"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    customers?: Prisma.CustomerIdentityListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
}, "id" | "businessId_channel_externalAccountId">;
export type ChannelConnectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    externalPageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    accountName?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    accessToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ChannelConnectionCountOrderByAggregateInput;
    _max?: Prisma.ChannelConnectionMaxOrderByAggregateInput;
    _min?: Prisma.ChannelConnectionMinOrderByAggregateInput;
};
export type ChannelConnectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChannelConnectionScalarWhereWithAggregatesInput | Prisma.ChannelConnectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChannelConnectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChannelConnectionScalarWhereWithAggregatesInput | Prisma.ChannelConnectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ChannelConnection"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"ChannelConnection"> | string;
    channel?: Prisma.EnumChannelTypeWithAggregatesFilter<"ChannelConnection"> | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusWithAggregatesFilter<"ChannelConnection"> | $Enums.ChannelStatus;
    externalAccountId?: Prisma.StringNullableWithAggregatesFilter<"ChannelConnection"> | string | null;
    externalPageId?: Prisma.StringNullableWithAggregatesFilter<"ChannelConnection"> | string | null;
    accountName?: Prisma.StringNullableWithAggregatesFilter<"ChannelConnection"> | string | null;
    username?: Prisma.StringNullableWithAggregatesFilter<"ChannelConnection"> | string | null;
    accessToken?: Prisma.StringNullableWithAggregatesFilter<"ChannelConnection"> | string | null;
    refreshToken?: Prisma.StringNullableWithAggregatesFilter<"ChannelConnection"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ChannelConnection"> | Date | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"ChannelConnection">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChannelConnection"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ChannelConnection"> | Date | string;
};
export type ChannelConnectionCreateInput = {
    id?: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutChannelsInput;
    customers?: Prisma.CustomerIdentityCreateNestedManyWithoutChannelConnectionInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionUncheckedCreateInput = {
    id?: string;
    businessId: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerIdentityUncheckedCreateNestedManyWithoutChannelConnectionInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutChannelsNestedInput;
    customers?: Prisma.CustomerIdentityUpdateManyWithoutChannelConnectionNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerIdentityUncheckedUpdateManyWithoutChannelConnectionNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionCreateManyInput = {
    id?: string;
    businessId: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChannelConnectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChannelConnectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChannelConnectionListRelationFilter = {
    every?: Prisma.ChannelConnectionWhereInput;
    some?: Prisma.ChannelConnectionWhereInput;
    none?: Prisma.ChannelConnectionWhereInput;
};
export type ChannelConnectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChannelConnectionBusinessIdChannelExternalAccountIdCompoundUniqueInput = {
    businessId: string;
    channel: $Enums.ChannelType;
    externalAccountId: string;
};
export type ChannelConnectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrder;
    externalPageId?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChannelConnectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrder;
    externalPageId?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChannelConnectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    externalAccountId?: Prisma.SortOrder;
    externalPageId?: Prisma.SortOrder;
    accountName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    tokenExpiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChannelConnectionScalarRelationFilter = {
    is?: Prisma.ChannelConnectionWhereInput;
    isNot?: Prisma.ChannelConnectionWhereInput;
};
export type ChannelConnectionCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput> | Prisma.ChannelConnectionCreateWithoutBusinessInput[] | Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput | Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.ChannelConnectionCreateManyBusinessInputEnvelope;
    connect?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
};
export type ChannelConnectionUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput> | Prisma.ChannelConnectionCreateWithoutBusinessInput[] | Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput | Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.ChannelConnectionCreateManyBusinessInputEnvelope;
    connect?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
};
export type ChannelConnectionUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput> | Prisma.ChannelConnectionCreateWithoutBusinessInput[] | Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput | Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.ChannelConnectionUpsertWithWhereUniqueWithoutBusinessInput | Prisma.ChannelConnectionUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.ChannelConnectionCreateManyBusinessInputEnvelope;
    set?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    disconnect?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    delete?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    connect?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    update?: Prisma.ChannelConnectionUpdateWithWhereUniqueWithoutBusinessInput | Prisma.ChannelConnectionUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.ChannelConnectionUpdateManyWithWhereWithoutBusinessInput | Prisma.ChannelConnectionUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.ChannelConnectionScalarWhereInput | Prisma.ChannelConnectionScalarWhereInput[];
};
export type ChannelConnectionUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput> | Prisma.ChannelConnectionCreateWithoutBusinessInput[] | Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput | Prisma.ChannelConnectionCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.ChannelConnectionUpsertWithWhereUniqueWithoutBusinessInput | Prisma.ChannelConnectionUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.ChannelConnectionCreateManyBusinessInputEnvelope;
    set?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    disconnect?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    delete?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    connect?: Prisma.ChannelConnectionWhereUniqueInput | Prisma.ChannelConnectionWhereUniqueInput[];
    update?: Prisma.ChannelConnectionUpdateWithWhereUniqueWithoutBusinessInput | Prisma.ChannelConnectionUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.ChannelConnectionUpdateManyWithWhereWithoutBusinessInput | Prisma.ChannelConnectionUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.ChannelConnectionScalarWhereInput | Prisma.ChannelConnectionScalarWhereInput[];
};
export type EnumChannelTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChannelType;
};
export type EnumChannelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChannelStatus;
};
export type ChannelConnectionCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutCustomersInput, Prisma.ChannelConnectionUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.ChannelConnectionWhereUniqueInput;
};
export type ChannelConnectionUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutCustomersInput, Prisma.ChannelConnectionUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.ChannelConnectionUpsertWithoutCustomersInput;
    connect?: Prisma.ChannelConnectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChannelConnectionUpdateToOneWithWhereWithoutCustomersInput, Prisma.ChannelConnectionUpdateWithoutCustomersInput>, Prisma.ChannelConnectionUncheckedUpdateWithoutCustomersInput>;
};
export type ChannelConnectionCreateNestedOneWithoutConversationsInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutConversationsInput, Prisma.ChannelConnectionUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutConversationsInput;
    connect?: Prisma.ChannelConnectionWhereUniqueInput;
};
export type ChannelConnectionUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutConversationsInput, Prisma.ChannelConnectionUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.ChannelConnectionCreateOrConnectWithoutConversationsInput;
    upsert?: Prisma.ChannelConnectionUpsertWithoutConversationsInput;
    connect?: Prisma.ChannelConnectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChannelConnectionUpdateToOneWithWhereWithoutConversationsInput, Prisma.ChannelConnectionUpdateWithoutConversationsInput>, Prisma.ChannelConnectionUncheckedUpdateWithoutConversationsInput>;
};
export type ChannelConnectionCreateWithoutBusinessInput = {
    id?: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerIdentityCreateNestedManyWithoutChannelConnectionInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionUncheckedCreateWithoutBusinessInput = {
    id?: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerIdentityUncheckedCreateNestedManyWithoutChannelConnectionInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionCreateOrConnectWithoutBusinessInput = {
    where: Prisma.ChannelConnectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput>;
};
export type ChannelConnectionCreateManyBusinessInputEnvelope = {
    data: Prisma.ChannelConnectionCreateManyBusinessInput | Prisma.ChannelConnectionCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type ChannelConnectionUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.ChannelConnectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChannelConnectionUpdateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedCreateWithoutBusinessInput>;
};
export type ChannelConnectionUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.ChannelConnectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChannelConnectionUpdateWithoutBusinessInput, Prisma.ChannelConnectionUncheckedUpdateWithoutBusinessInput>;
};
export type ChannelConnectionUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.ChannelConnectionScalarWhereInput;
    data: Prisma.XOR<Prisma.ChannelConnectionUpdateManyMutationInput, Prisma.ChannelConnectionUncheckedUpdateManyWithoutBusinessInput>;
};
export type ChannelConnectionScalarWhereInput = {
    AND?: Prisma.ChannelConnectionScalarWhereInput | Prisma.ChannelConnectionScalarWhereInput[];
    OR?: Prisma.ChannelConnectionScalarWhereInput[];
    NOT?: Prisma.ChannelConnectionScalarWhereInput | Prisma.ChannelConnectionScalarWhereInput[];
    id?: Prisma.StringFilter<"ChannelConnection"> | string;
    businessId?: Prisma.StringFilter<"ChannelConnection"> | string;
    channel?: Prisma.EnumChannelTypeFilter<"ChannelConnection"> | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFilter<"ChannelConnection"> | $Enums.ChannelStatus;
    externalAccountId?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    externalPageId?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    accountName?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    username?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    accessToken?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    refreshToken?: Prisma.StringNullableFilter<"ChannelConnection"> | string | null;
    tokenExpiresAt?: Prisma.DateTimeNullableFilter<"ChannelConnection"> | Date | string | null;
    metadata?: Prisma.JsonNullableFilter<"ChannelConnection">;
    createdAt?: Prisma.DateTimeFilter<"ChannelConnection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChannelConnection"> | Date | string;
};
export type ChannelConnectionCreateWithoutCustomersInput = {
    id?: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutChannelsInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionUncheckedCreateWithoutCustomersInput = {
    id?: string;
    businessId: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionCreateOrConnectWithoutCustomersInput = {
    where: Prisma.ChannelConnectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutCustomersInput, Prisma.ChannelConnectionUncheckedCreateWithoutCustomersInput>;
};
export type ChannelConnectionUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.ChannelConnectionUpdateWithoutCustomersInput, Prisma.ChannelConnectionUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutCustomersInput, Prisma.ChannelConnectionUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.ChannelConnectionWhereInput;
};
export type ChannelConnectionUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.ChannelConnectionWhereInput;
    data: Prisma.XOR<Prisma.ChannelConnectionUpdateWithoutCustomersInput, Prisma.ChannelConnectionUncheckedUpdateWithoutCustomersInput>;
};
export type ChannelConnectionUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutChannelsNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionUncheckedUpdateWithoutCustomersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionCreateWithoutConversationsInput = {
    id?: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutChannelsInput;
    customers?: Prisma.CustomerIdentityCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionUncheckedCreateWithoutConversationsInput = {
    id?: string;
    businessId: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customers?: Prisma.CustomerIdentityUncheckedCreateNestedManyWithoutChannelConnectionInput;
};
export type ChannelConnectionCreateOrConnectWithoutConversationsInput = {
    where: Prisma.ChannelConnectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutConversationsInput, Prisma.ChannelConnectionUncheckedCreateWithoutConversationsInput>;
};
export type ChannelConnectionUpsertWithoutConversationsInput = {
    update: Prisma.XOR<Prisma.ChannelConnectionUpdateWithoutConversationsInput, Prisma.ChannelConnectionUncheckedUpdateWithoutConversationsInput>;
    create: Prisma.XOR<Prisma.ChannelConnectionCreateWithoutConversationsInput, Prisma.ChannelConnectionUncheckedCreateWithoutConversationsInput>;
    where?: Prisma.ChannelConnectionWhereInput;
};
export type ChannelConnectionUpdateToOneWithWhereWithoutConversationsInput = {
    where?: Prisma.ChannelConnectionWhereInput;
    data: Prisma.XOR<Prisma.ChannelConnectionUpdateWithoutConversationsInput, Prisma.ChannelConnectionUncheckedUpdateWithoutConversationsInput>;
};
export type ChannelConnectionUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutChannelsNestedInput;
    customers?: Prisma.CustomerIdentityUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionUncheckedUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerIdentityUncheckedUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionCreateManyBusinessInput = {
    id?: string;
    channel: $Enums.ChannelType;
    status?: $Enums.ChannelStatus;
    externalAccountId?: string | null;
    externalPageId?: string | null;
    accountName?: string | null;
    username?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    tokenExpiresAt?: Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChannelConnectionUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerIdentityUpdateManyWithoutChannelConnectionNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customers?: Prisma.CustomerIdentityUncheckedUpdateManyWithoutChannelConnectionNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutChannelConnectionNestedInput;
};
export type ChannelConnectionUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType;
    status?: Prisma.EnumChannelStatusFieldUpdateOperationsInput | $Enums.ChannelStatus;
    externalAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    externalPageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accountName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tokenExpiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChannelConnectionCountOutputType = {
    customers: number;
    conversations: number;
};
export type ChannelConnectionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | ChannelConnectionCountOutputTypeCountCustomersArgs;
    conversations?: boolean | ChannelConnectionCountOutputTypeCountConversationsArgs;
};
export type ChannelConnectionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionCountOutputTypeSelect<ExtArgs> | null;
};
export type ChannelConnectionCountOutputTypeCountCustomersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerIdentityWhereInput;
};
export type ChannelConnectionCountOutputTypeCountConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
export type ChannelConnectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    channel?: boolean;
    status?: boolean;
    externalAccountId?: boolean;
    externalPageId?: boolean;
    accountName?: boolean;
    username?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    tokenExpiresAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.ChannelConnection$customersArgs<ExtArgs>;
    conversations?: boolean | Prisma.ChannelConnection$conversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChannelConnectionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["channelConnection"]>;
export type ChannelConnectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    channel?: boolean;
    status?: boolean;
    externalAccountId?: boolean;
    externalPageId?: boolean;
    accountName?: boolean;
    username?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    tokenExpiresAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["channelConnection"]>;
export type ChannelConnectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    channel?: boolean;
    status?: boolean;
    externalAccountId?: boolean;
    externalPageId?: boolean;
    accountName?: boolean;
    username?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    tokenExpiresAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["channelConnection"]>;
export type ChannelConnectionSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    channel?: boolean;
    status?: boolean;
    externalAccountId?: boolean;
    externalPageId?: boolean;
    accountName?: boolean;
    username?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    tokenExpiresAt?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ChannelConnectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "channel" | "status" | "externalAccountId" | "externalPageId" | "accountName" | "username" | "accessToken" | "refreshToken" | "tokenExpiresAt" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["channelConnection"]>;
export type ChannelConnectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customers?: boolean | Prisma.ChannelConnection$customersArgs<ExtArgs>;
    conversations?: boolean | Prisma.ChannelConnection$conversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChannelConnectionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ChannelConnectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type ChannelConnectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $ChannelConnectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChannelConnection";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        customers: Prisma.$CustomerIdentityPayload<ExtArgs>[];
        conversations: Prisma.$ConversationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        channel: $Enums.ChannelType;
        status: $Enums.ChannelStatus;
        externalAccountId: string | null;
        externalPageId: string | null;
        accountName: string | null;
        username: string | null;
        accessToken: string | null;
        refreshToken: string | null;
        tokenExpiresAt: Date | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["channelConnection"]>;
    composites: {};
};
export type ChannelConnectionGetPayload<S extends boolean | null | undefined | ChannelConnectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload, S>;
export type ChannelConnectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChannelConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChannelConnectionCountAggregateInputType | true;
};
export interface ChannelConnectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChannelConnection'];
        meta: {
            name: 'ChannelConnection';
        };
    };
    findUnique<T extends ChannelConnectionFindUniqueArgs>(args: Prisma.SelectSubset<T, ChannelConnectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChannelConnectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChannelConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChannelConnectionFindFirstArgs>(args?: Prisma.SelectSubset<T, ChannelConnectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChannelConnectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChannelConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChannelConnectionFindManyArgs>(args?: Prisma.SelectSubset<T, ChannelConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChannelConnectionCreateArgs>(args: Prisma.SelectSubset<T, ChannelConnectionCreateArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChannelConnectionCreateManyArgs>(args?: Prisma.SelectSubset<T, ChannelConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChannelConnectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChannelConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChannelConnectionDeleteArgs>(args: Prisma.SelectSubset<T, ChannelConnectionDeleteArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChannelConnectionUpdateArgs>(args: Prisma.SelectSubset<T, ChannelConnectionUpdateArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChannelConnectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChannelConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChannelConnectionUpdateManyArgs>(args: Prisma.SelectSubset<T, ChannelConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChannelConnectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChannelConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChannelConnectionUpsertArgs>(args: Prisma.SelectSubset<T, ChannelConnectionUpsertArgs<ExtArgs>>): Prisma.Prisma__ChannelConnectionClient<runtime.Types.Result.GetResult<Prisma.$ChannelConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChannelConnectionCountArgs>(args?: Prisma.Subset<T, ChannelConnectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChannelConnectionCountAggregateOutputType> : number>;
    aggregate<T extends ChannelConnectionAggregateArgs>(args: Prisma.Subset<T, ChannelConnectionAggregateArgs>): Prisma.PrismaPromise<GetChannelConnectionAggregateType<T>>;
    groupBy<T extends ChannelConnectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChannelConnectionGroupByArgs['orderBy'];
    } : {
        orderBy?: ChannelConnectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChannelConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChannelConnectionFieldRefs;
}
export interface Prisma__ChannelConnectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customers<T extends Prisma.ChannelConnection$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChannelConnection$customersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversations<T extends Prisma.ChannelConnection$conversationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChannelConnection$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChannelConnectionFieldRefs {
    readonly id: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly businessId: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly channel: Prisma.FieldRef<"ChannelConnection", 'ChannelType'>;
    readonly status: Prisma.FieldRef<"ChannelConnection", 'ChannelStatus'>;
    readonly externalAccountId: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly externalPageId: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly accountName: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly username: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly accessToken: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly refreshToken: Prisma.FieldRef<"ChannelConnection", 'String'>;
    readonly tokenExpiresAt: Prisma.FieldRef<"ChannelConnection", 'DateTime'>;
    readonly metadata: Prisma.FieldRef<"ChannelConnection", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ChannelConnection", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ChannelConnection", 'DateTime'>;
}
export type ChannelConnectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    where: Prisma.ChannelConnectionWhereUniqueInput;
};
export type ChannelConnectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    where: Prisma.ChannelConnectionWhereUniqueInput;
};
export type ChannelConnectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    where?: Prisma.ChannelConnectionWhereInput;
    orderBy?: Prisma.ChannelConnectionOrderByWithRelationInput | Prisma.ChannelConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ChannelConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChannelConnectionScalarFieldEnum | Prisma.ChannelConnectionScalarFieldEnum[];
};
export type ChannelConnectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    where?: Prisma.ChannelConnectionWhereInput;
    orderBy?: Prisma.ChannelConnectionOrderByWithRelationInput | Prisma.ChannelConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ChannelConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChannelConnectionScalarFieldEnum | Prisma.ChannelConnectionScalarFieldEnum[];
};
export type ChannelConnectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    where?: Prisma.ChannelConnectionWhereInput;
    orderBy?: Prisma.ChannelConnectionOrderByWithRelationInput | Prisma.ChannelConnectionOrderByWithRelationInput[];
    cursor?: Prisma.ChannelConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChannelConnectionScalarFieldEnum | Prisma.ChannelConnectionScalarFieldEnum[];
};
export type ChannelConnectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChannelConnectionCreateInput, Prisma.ChannelConnectionUncheckedCreateInput>;
};
export type ChannelConnectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChannelConnectionCreateManyInput | Prisma.ChannelConnectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChannelConnectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    data: Prisma.ChannelConnectionCreateManyInput | Prisma.ChannelConnectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ChannelConnectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChannelConnectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChannelConnectionUpdateInput, Prisma.ChannelConnectionUncheckedUpdateInput>;
    where: Prisma.ChannelConnectionWhereUniqueInput;
};
export type ChannelConnectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChannelConnectionUpdateManyMutationInput, Prisma.ChannelConnectionUncheckedUpdateManyInput>;
    where?: Prisma.ChannelConnectionWhereInput;
    limit?: number;
};
export type ChannelConnectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChannelConnectionUpdateManyMutationInput, Prisma.ChannelConnectionUncheckedUpdateManyInput>;
    where?: Prisma.ChannelConnectionWhereInput;
    limit?: number;
    include?: Prisma.ChannelConnectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChannelConnectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    where: Prisma.ChannelConnectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChannelConnectionCreateInput, Prisma.ChannelConnectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChannelConnectionUpdateInput, Prisma.ChannelConnectionUncheckedUpdateInput>;
};
export type ChannelConnectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
    where: Prisma.ChannelConnectionWhereUniqueInput;
};
export type ChannelConnectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChannelConnectionWhereInput;
    limit?: number;
};
export type ChannelConnection$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where?: Prisma.CustomerIdentityWhereInput;
    orderBy?: Prisma.CustomerIdentityOrderByWithRelationInput | Prisma.CustomerIdentityOrderByWithRelationInput[];
    cursor?: Prisma.CustomerIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerIdentityScalarFieldEnum | Prisma.CustomerIdentityScalarFieldEnum[];
};
export type ChannelConnection$conversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChannelConnectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChannelConnectionSelect<ExtArgs> | null;
    omit?: Prisma.ChannelConnectionOmit<ExtArgs> | null;
    include?: Prisma.ChannelConnectionInclude<ExtArgs> | null;
};
