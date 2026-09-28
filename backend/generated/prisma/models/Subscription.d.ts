import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$SubscriptionPayload>;
export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    plan: string | null;
    status: $Enums.SubscriptionStatus | null;
    currentPeriodStart: Date | null;
    currentPeriodEnd: Date | null;
    trialEndsAt: Date | null;
    cancelledAt: Date | null;
    provider: $Enums.PaymentProvider | null;
    externalSubscriptionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    plan: string | null;
    status: $Enums.SubscriptionStatus | null;
    currentPeriodStart: Date | null;
    currentPeriodEnd: Date | null;
    trialEndsAt: Date | null;
    cancelledAt: Date | null;
    provider: $Enums.PaymentProvider | null;
    externalSubscriptionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubscriptionCountAggregateOutputType = {
    id: number;
    businessId: number;
    plan: number;
    status: number;
    currentPeriodStart: number;
    currentPeriodEnd: number;
    trialEndsAt: number;
    cancelledAt: number;
    provider: number;
    externalSubscriptionId: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubscriptionMinAggregateInputType = {
    id?: true;
    businessId?: true;
    plan?: true;
    status?: true;
    currentPeriodStart?: true;
    currentPeriodEnd?: true;
    trialEndsAt?: true;
    cancelledAt?: true;
    provider?: true;
    externalSubscriptionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubscriptionMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    plan?: true;
    status?: true;
    currentPeriodStart?: true;
    currentPeriodEnd?: true;
    trialEndsAt?: true;
    cancelledAt?: true;
    provider?: true;
    externalSubscriptionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubscriptionCountAggregateInputType = {
    id?: true;
    businessId?: true;
    plan?: true;
    status?: true;
    currentPeriodStart?: true;
    currentPeriodEnd?: true;
    trialEndsAt?: true;
    cancelledAt?: true;
    provider?: true;
    externalSubscriptionId?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubscriptionCountAggregateInputType;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscription[P]> : Prisma.GetScalarType<T[P], AggregateSubscription[P]>;
};
export type SubscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithAggregationInput | Prisma.SubscriptionOrderByWithAggregationInput[];
    by: Prisma.SubscriptionScalarFieldEnum[] | Prisma.SubscriptionScalarFieldEnum;
    having?: Prisma.SubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type SubscriptionGroupByOutputType = {
    id: string;
    businessId: string;
    plan: string;
    status: $Enums.SubscriptionStatus;
    currentPeriodStart: Date | null;
    currentPeriodEnd: Date | null;
    trialEndsAt: Date | null;
    cancelledAt: Date | null;
    provider: $Enums.PaymentProvider | null;
    externalSubscriptionId: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
export type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubscriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
}>>;
export type SubscriptionWhereInput = {
    AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    OR?: Prisma.SubscriptionWhereInput[];
    NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    id?: Prisma.StringFilter<"Subscription"> | string;
    businessId?: Prisma.StringFilter<"Subscription"> | string;
    plan?: Prisma.StringFilter<"Subscription"> | string;
    status?: Prisma.EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    currentPeriodEnd?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    trialEndsAt?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    provider?: Prisma.EnumPaymentProviderNullableFilter<"Subscription"> | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.StringNullableFilter<"Subscription"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Subscription">;
    createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
};
export type SubscriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    trialEndsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrderInput | Prisma.SortOrder;
    externalSubscriptionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
};
export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    businessId?: string;
    AND?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    OR?: Prisma.SubscriptionWhereInput[];
    NOT?: Prisma.SubscriptionWhereInput | Prisma.SubscriptionWhereInput[];
    plan?: Prisma.StringFilter<"Subscription"> | string;
    status?: Prisma.EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    currentPeriodEnd?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    trialEndsAt?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Subscription"> | Date | string | null;
    provider?: Prisma.EnumPaymentProviderNullableFilter<"Subscription"> | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.StringNullableFilter<"Subscription"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Subscription">;
    createdAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Subscription"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
}, "id" | "businessId">;
export type SubscriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodStart?: Prisma.SortOrderInput | Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrderInput | Prisma.SortOrder;
    trialEndsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider?: Prisma.SortOrderInput | Prisma.SortOrder;
    externalSubscriptionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubscriptionCountOrderByAggregateInput;
    _max?: Prisma.SubscriptionMaxOrderByAggregateInput;
    _min?: Prisma.SubscriptionMinOrderByAggregateInput;
};
export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubscriptionScalarWhereWithAggregatesInput | Prisma.SubscriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Subscription"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Subscription"> | string;
    plan?: Prisma.StringWithAggregatesFilter<"Subscription"> | string;
    status?: Prisma.EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null;
    currentPeriodEnd?: Prisma.DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null;
    trialEndsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null;
    provider?: Prisma.EnumPaymentProviderNullableWithAggregatesFilter<"Subscription"> | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.StringNullableWithAggregatesFilter<"Subscription"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Subscription">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Subscription"> | Date | string;
};
export type SubscriptionCreateInput = {
    id?: string;
    plan: string;
    status?: $Enums.SubscriptionStatus;
    currentPeriodStart?: Date | string | null;
    currentPeriodEnd?: Date | string | null;
    trialEndsAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    provider?: $Enums.PaymentProvider | null;
    externalSubscriptionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutSubscriptionInput;
};
export type SubscriptionUncheckedCreateInput = {
    id?: string;
    businessId: string;
    plan: string;
    status?: $Enums.SubscriptionStatus;
    currentPeriodStart?: Date | string | null;
    currentPeriodEnd?: Date | string | null;
    trialEndsAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    provider?: $Enums.PaymentProvider | null;
    externalSubscriptionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trialEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: Prisma.NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutSubscriptionNestedInput;
};
export type SubscriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trialEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: Prisma.NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionCreateManyInput = {
    id?: string;
    businessId: string;
    plan: string;
    status?: $Enums.SubscriptionStatus;
    currentPeriodStart?: Date | string | null;
    currentPeriodEnd?: Date | string | null;
    trialEndsAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    provider?: $Enums.PaymentProvider | null;
    externalSubscriptionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trialEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: Prisma.NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trialEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: Prisma.NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionNullableScalarRelationFilter = {
    is?: Prisma.SubscriptionWhereInput | null;
    isNot?: Prisma.SubscriptionWhereInput | null;
};
export type SubscriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodStart?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrder;
    trialEndsAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalSubscriptionId?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodStart?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrder;
    trialEndsAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalSubscriptionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    plan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    currentPeriodStart?: Prisma.SortOrder;
    currentPeriodEnd?: Prisma.SortOrder;
    trialEndsAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    externalSubscriptionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubscriptionCreateNestedOneWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutBusinessInput, Prisma.SubscriptionUncheckedCreateWithoutBusinessInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutBusinessInput;
    connect?: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUncheckedCreateNestedOneWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutBusinessInput, Prisma.SubscriptionUncheckedCreateWithoutBusinessInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutBusinessInput;
    connect?: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUpdateOneWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutBusinessInput, Prisma.SubscriptionUncheckedCreateWithoutBusinessInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutBusinessInput;
    upsert?: Prisma.SubscriptionUpsertWithoutBusinessInput;
    disconnect?: Prisma.SubscriptionWhereInput | boolean;
    delete?: Prisma.SubscriptionWhereInput | boolean;
    connect?: Prisma.SubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubscriptionUpdateToOneWithWhereWithoutBusinessInput, Prisma.SubscriptionUpdateWithoutBusinessInput>, Prisma.SubscriptionUncheckedUpdateWithoutBusinessInput>;
};
export type SubscriptionUncheckedUpdateOneWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.SubscriptionCreateWithoutBusinessInput, Prisma.SubscriptionUncheckedCreateWithoutBusinessInput>;
    connectOrCreate?: Prisma.SubscriptionCreateOrConnectWithoutBusinessInput;
    upsert?: Prisma.SubscriptionUpsertWithoutBusinessInput;
    disconnect?: Prisma.SubscriptionWhereInput | boolean;
    delete?: Prisma.SubscriptionWhereInput | boolean;
    connect?: Prisma.SubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SubscriptionUpdateToOneWithWhereWithoutBusinessInput, Prisma.SubscriptionUpdateWithoutBusinessInput>, Prisma.SubscriptionUncheckedUpdateWithoutBusinessInput>;
};
export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus;
};
export type NullableEnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider | null;
};
export type SubscriptionCreateWithoutBusinessInput = {
    id?: string;
    plan: string;
    status?: $Enums.SubscriptionStatus;
    currentPeriodStart?: Date | string | null;
    currentPeriodEnd?: Date | string | null;
    trialEndsAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    provider?: $Enums.PaymentProvider | null;
    externalSubscriptionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionUncheckedCreateWithoutBusinessInput = {
    id?: string;
    plan: string;
    status?: $Enums.SubscriptionStatus;
    currentPeriodStart?: Date | string | null;
    currentPeriodEnd?: Date | string | null;
    trialEndsAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    provider?: $Enums.PaymentProvider | null;
    externalSubscriptionId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubscriptionCreateOrConnectWithoutBusinessInput = {
    where: Prisma.SubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutBusinessInput, Prisma.SubscriptionUncheckedCreateWithoutBusinessInput>;
};
export type SubscriptionUpsertWithoutBusinessInput = {
    update: Prisma.XOR<Prisma.SubscriptionUpdateWithoutBusinessInput, Prisma.SubscriptionUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.SubscriptionCreateWithoutBusinessInput, Prisma.SubscriptionUncheckedCreateWithoutBusinessInput>;
    where?: Prisma.SubscriptionWhereInput;
};
export type SubscriptionUpdateToOneWithWhereWithoutBusinessInput = {
    where?: Prisma.SubscriptionWhereInput;
    data: Prisma.XOR<Prisma.SubscriptionUpdateWithoutBusinessInput, Prisma.SubscriptionUncheckedUpdateWithoutBusinessInput>;
};
export type SubscriptionUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trialEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: Prisma.NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plan?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus;
    currentPeriodStart?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    currentPeriodEnd?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    trialEndsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    provider?: Prisma.NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null;
    externalSubscriptionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    plan?: boolean;
    status?: boolean;
    currentPeriodStart?: boolean;
    currentPeriodEnd?: boolean;
    trialEndsAt?: boolean;
    cancelledAt?: boolean;
    provider?: boolean;
    externalSubscriptionId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    plan?: boolean;
    status?: boolean;
    currentPeriodStart?: boolean;
    currentPeriodEnd?: boolean;
    trialEndsAt?: boolean;
    cancelledAt?: boolean;
    provider?: boolean;
    externalSubscriptionId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    plan?: boolean;
    status?: boolean;
    currentPeriodStart?: boolean;
    currentPeriodEnd?: boolean;
    trialEndsAt?: boolean;
    cancelledAt?: boolean;
    provider?: boolean;
    externalSubscriptionId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type SubscriptionSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    plan?: boolean;
    status?: boolean;
    currentPeriodStart?: boolean;
    currentPeriodEnd?: boolean;
    trialEndsAt?: boolean;
    cancelledAt?: boolean;
    provider?: boolean;
    externalSubscriptionId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "plan" | "status" | "currentPeriodStart" | "currentPeriodEnd" | "trialEndsAt" | "cancelledAt" | "provider" | "externalSubscriptionId" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>;
export type SubscriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $SubscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Subscription";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        plan: string;
        status: $Enums.SubscriptionStatus;
        currentPeriodStart: Date | null;
        currentPeriodEnd: Date | null;
        trialEndsAt: Date | null;
        cancelledAt: Date | null;
        provider: $Enums.PaymentProvider | null;
        externalSubscriptionId: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["subscription"]>;
    composites: {};
};
export type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload, S>;
export type SubscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionCountAggregateInputType | true;
};
export interface SubscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Subscription'];
        meta: {
            name: 'Subscription';
        };
    };
    findUnique<T extends SubscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubscriptionCreateArgs>(args: Prisma.SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubscriptionDeleteArgs>(args: Prisma.SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubscriptionUpdateArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubscriptionUpsertArgs>(args: Prisma.SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__SubscriptionClient<runtime.Types.Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubscriptionCountArgs>(args?: Prisma.Subset<T, SubscriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubscriptionCountAggregateOutputType> : number>;
    aggregate<T extends SubscriptionAggregateArgs>(args: Prisma.Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;
    groupBy<T extends SubscriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubscriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: SubscriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubscriptionFieldRefs;
}
export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubscriptionFieldRefs {
    readonly id: Prisma.FieldRef<"Subscription", 'String'>;
    readonly businessId: Prisma.FieldRef<"Subscription", 'String'>;
    readonly plan: Prisma.FieldRef<"Subscription", 'String'>;
    readonly status: Prisma.FieldRef<"Subscription", 'SubscriptionStatus'>;
    readonly currentPeriodStart: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly currentPeriodEnd: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly trialEndsAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly provider: Prisma.FieldRef<"Subscription", 'PaymentProvider'>;
    readonly externalSubscriptionId: Prisma.FieldRef<"Subscription", 'String'>;
    readonly metadata: Prisma.FieldRef<"Subscription", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Subscription", 'DateTime'>;
}
export type SubscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where?: Prisma.SubscriptionWhereInput;
    orderBy?: Prisma.SubscriptionOrderByWithRelationInput | Prisma.SubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type SubscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>;
};
export type SubscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    data: Prisma.SubscriptionCreateManyInput | Prisma.SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
};
export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubscriptionUpdateManyMutationInput, Prisma.SubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
    include?: Prisma.SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubscriptionCreateInput, Prisma.SubscriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubscriptionUpdateInput, Prisma.SubscriptionUncheckedUpdateInput>;
};
export type SubscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
    where: Prisma.SubscriptionWhereUniqueInput;
};
export type SubscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubscriptionWhereInput;
    limit?: number;
};
export type SubscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.SubscriptionOmit<ExtArgs> | null;
    include?: Prisma.SubscriptionInclude<ExtArgs> | null;
};
