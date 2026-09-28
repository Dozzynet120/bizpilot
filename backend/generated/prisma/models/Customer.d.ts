import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    email: string | null;
    phone: string | null;
    avatarUrl: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    email: string | null;
    phone: string | null;
    avatarUrl: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerCountAggregateOutputType = {
    id: number;
    businessId: number;
    firstName: number;
    lastName: number;
    fullName: number;
    email: number;
    phone: number;
    avatarUrl: number;
    notes: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CustomerMinAggregateInputType = {
    id?: true;
    businessId?: true;
    firstName?: true;
    lastName?: true;
    fullName?: true;
    email?: true;
    phone?: true;
    avatarUrl?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    firstName?: true;
    lastName?: true;
    fullName?: true;
    email?: true;
    phone?: true;
    avatarUrl?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerCountAggregateInputType = {
    id?: true;
    businessId?: true;
    firstName?: true;
    lastName?: true;
    fullName?: true;
    email?: true;
    phone?: true;
    avatarUrl?: true;
    notes?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type CustomerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithAggregationInput | Prisma.CustomerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    id: string;
    businessId: string;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    email: string | null;
    phone: string | null;
    avatarUrl: string | null;
    notes: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type CustomerWhereInput = {
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    id?: Prisma.StringFilter<"Customer"> | string;
    businessId?: Prisma.StringFilter<"Customer"> | string;
    firstName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    lastName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    fullName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    email?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"Customer"> | string | null;
    notes?: Prisma.StringNullableFilter<"Customer"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Customer">;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    identities?: Prisma.CustomerIdentityListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
    leads?: Prisma.LeadListRelationFilter;
};
export type CustomerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    identities?: Prisma.CustomerIdentityOrderByRelationAggregateInput;
    conversations?: Prisma.ConversationOrderByRelationAggregateInput;
    leads?: Prisma.LeadOrderByRelationAggregateInput;
};
export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    businessId?: Prisma.StringFilter<"Customer"> | string;
    firstName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    lastName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    fullName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    email?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"Customer"> | string | null;
    notes?: Prisma.StringNullableFilter<"Customer"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Customer">;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    identities?: Prisma.CustomerIdentityListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
    leads?: Prisma.LeadListRelationFilter;
}, "id">;
export type CustomerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerCountOrderByAggregateInput;
    _max?: Prisma.CustomerMaxOrderByAggregateInput;
    _min?: Prisma.CustomerMinOrderByAggregateInput;
};
export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    firstName?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    lastName?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Customer"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Customer">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
};
export type CustomerCreateInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCustomersInput;
    identities?: Prisma.CustomerIdentityCreateNestedManyWithoutCustomerInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateInput = {
    id?: string;
    businessId: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identities?: Prisma.CustomerIdentityUncheckedCreateNestedManyWithoutCustomerInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCustomersNestedInput;
    identities?: Prisma.CustomerIdentityUpdateManyWithoutCustomerNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identities?: Prisma.CustomerIdentityUncheckedUpdateManyWithoutCustomerNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyInput = {
    id?: string;
    businessId: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerListRelationFilter = {
    every?: Prisma.CustomerWhereInput;
    some?: Prisma.CustomerWhereInput;
    none?: Prisma.CustomerWhereInput;
};
export type CustomerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput;
    isNot?: Prisma.CustomerWhereInput;
};
export type CustomerNullableScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput | null;
    isNot?: Prisma.CustomerWhereInput | null;
};
export type CustomerCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
};
export type CustomerUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput | Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput> | Prisma.CustomerCreateWithoutBusinessInput[] | Prisma.CustomerUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBusinessInput | Prisma.CustomerCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.CustomerCreateManyBusinessInputEnvelope;
    set?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    disconnect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    delete?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    connect?: Prisma.CustomerWhereUniqueInput | Prisma.CustomerWhereUniqueInput[];
    update?: Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput | Prisma.CustomerUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput | Prisma.CustomerUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
};
export type CustomerCreateNestedOneWithoutIdentitiesInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutIdentitiesInput, Prisma.CustomerUncheckedCreateWithoutIdentitiesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutIdentitiesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutIdentitiesNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutIdentitiesInput, Prisma.CustomerUncheckedCreateWithoutIdentitiesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutIdentitiesInput;
    upsert?: Prisma.CustomerUpsertWithoutIdentitiesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutIdentitiesInput, Prisma.CustomerUpdateWithoutIdentitiesInput>, Prisma.CustomerUncheckedUpdateWithoutIdentitiesInput>;
};
export type CustomerCreateNestedOneWithoutConversationsInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutConversationsInput, Prisma.CustomerUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutConversationsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutConversationsInput, Prisma.CustomerUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutConversationsInput;
    upsert?: Prisma.CustomerUpsertWithoutConversationsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutConversationsInput, Prisma.CustomerUpdateWithoutConversationsInput>, Prisma.CustomerUncheckedUpdateWithoutConversationsInput>;
};
export type CustomerCreateNestedOneWithoutLeadsInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutLeadsInput, Prisma.CustomerUncheckedCreateWithoutLeadsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutLeadsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneWithoutLeadsNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutLeadsInput, Prisma.CustomerUncheckedCreateWithoutLeadsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutLeadsInput;
    upsert?: Prisma.CustomerUpsertWithoutLeadsInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutLeadsInput, Prisma.CustomerUpdateWithoutLeadsInput>, Prisma.CustomerUncheckedUpdateWithoutLeadsInput>;
};
export type CustomerCreateWithoutBusinessInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identities?: Prisma.CustomerIdentityCreateNestedManyWithoutCustomerInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutBusinessInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identities?: Prisma.CustomerIdentityUncheckedCreateNestedManyWithoutCustomerInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutBusinessInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput>;
};
export type CustomerCreateManyBusinessInputEnvelope = {
    data: Prisma.CustomerCreateManyBusinessInput | Prisma.CustomerCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type CustomerUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.CustomerWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutBusinessInput, Prisma.CustomerUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutBusinessInput, Prisma.CustomerUncheckedCreateWithoutBusinessInput>;
};
export type CustomerUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.CustomerWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutBusinessInput, Prisma.CustomerUncheckedUpdateWithoutBusinessInput>;
};
export type CustomerUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.CustomerScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyWithoutBusinessInput>;
};
export type CustomerScalarWhereInput = {
    AND?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    OR?: Prisma.CustomerScalarWhereInput[];
    NOT?: Prisma.CustomerScalarWhereInput | Prisma.CustomerScalarWhereInput[];
    id?: Prisma.StringFilter<"Customer"> | string;
    businessId?: Prisma.StringFilter<"Customer"> | string;
    firstName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    lastName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    fullName?: Prisma.StringNullableFilter<"Customer"> | string | null;
    email?: Prisma.StringNullableFilter<"Customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"Customer"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"Customer"> | string | null;
    notes?: Prisma.StringNullableFilter<"Customer"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Customer">;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
};
export type CustomerCreateWithoutIdentitiesInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCustomersInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutIdentitiesInput = {
    id?: string;
    businessId: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutIdentitiesInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutIdentitiesInput, Prisma.CustomerUncheckedCreateWithoutIdentitiesInput>;
};
export type CustomerUpsertWithoutIdentitiesInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutIdentitiesInput, Prisma.CustomerUncheckedUpdateWithoutIdentitiesInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutIdentitiesInput, Prisma.CustomerUncheckedCreateWithoutIdentitiesInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutIdentitiesInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutIdentitiesInput, Prisma.CustomerUncheckedUpdateWithoutIdentitiesInput>;
};
export type CustomerUpdateWithoutIdentitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCustomersNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutIdentitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutConversationsInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCustomersInput;
    identities?: Prisma.CustomerIdentityCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutConversationsInput = {
    id?: string;
    businessId: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identities?: Prisma.CustomerIdentityUncheckedCreateNestedManyWithoutCustomerInput;
    leads?: Prisma.LeadUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutConversationsInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutConversationsInput, Prisma.CustomerUncheckedCreateWithoutConversationsInput>;
};
export type CustomerUpsertWithoutConversationsInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutConversationsInput, Prisma.CustomerUncheckedUpdateWithoutConversationsInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutConversationsInput, Prisma.CustomerUncheckedCreateWithoutConversationsInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutConversationsInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutConversationsInput, Prisma.CustomerUncheckedUpdateWithoutConversationsInput>;
};
export type CustomerUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCustomersNestedInput;
    identities?: Prisma.CustomerIdentityUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identities?: Prisma.CustomerIdentityUncheckedUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutLeadsInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutCustomersInput;
    identities?: Prisma.CustomerIdentityCreateNestedManyWithoutCustomerInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutLeadsInput = {
    id?: string;
    businessId: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identities?: Prisma.CustomerIdentityUncheckedCreateNestedManyWithoutCustomerInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutLeadsInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutLeadsInput, Prisma.CustomerUncheckedCreateWithoutLeadsInput>;
};
export type CustomerUpsertWithoutLeadsInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutLeadsInput, Prisma.CustomerUncheckedUpdateWithoutLeadsInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutLeadsInput, Prisma.CustomerUncheckedCreateWithoutLeadsInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutLeadsInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutLeadsInput, Prisma.CustomerUncheckedUpdateWithoutLeadsInput>;
};
export type CustomerUpdateWithoutLeadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutCustomersNestedInput;
    identities?: Prisma.CustomerIdentityUpdateManyWithoutCustomerNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutLeadsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identities?: Prisma.CustomerIdentityUncheckedUpdateManyWithoutCustomerNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyBusinessInput = {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
    phone?: string | null;
    avatarUrl?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identities?: Prisma.CustomerIdentityUpdateManyWithoutCustomerNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identities?: Prisma.CustomerIdentityUncheckedUpdateManyWithoutCustomerNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutCustomerNestedInput;
    leads?: Prisma.LeadUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerCountOutputType = {
    identities: number;
    conversations: number;
    leads: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    identities?: boolean | CustomerCountOutputTypeCountIdentitiesArgs;
    conversations?: boolean | CustomerCountOutputTypeCountConversationsArgs;
    leads?: boolean | CustomerCountOutputTypeCountLeadsArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountIdentitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerIdentityWhereInput;
};
export type CustomerCountOutputTypeCountConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
export type CustomerCountOutputTypeCountLeadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeadWhereInput;
};
export type CustomerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    fullName?: boolean;
    email?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    identities?: boolean | Prisma.Customer$identitiesArgs<ExtArgs>;
    conversations?: boolean | Prisma.Customer$conversationsArgs<ExtArgs>;
    leads?: boolean | Prisma.Customer$leadsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    fullName?: boolean;
    email?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    fullName?: boolean;
    email?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    fullName?: boolean;
    email?: boolean;
    phone?: boolean;
    avatarUrl?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CustomerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "firstName" | "lastName" | "fullName" | "email" | "phone" | "avatarUrl" | "notes" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>;
export type CustomerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    identities?: boolean | Prisma.Customer$identitiesArgs<ExtArgs>;
    conversations?: boolean | Prisma.Customer$conversationsArgs<ExtArgs>;
    leads?: boolean | Prisma.Customer$leadsArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CustomerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $CustomerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Customer";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        identities: Prisma.$CustomerIdentityPayload<ExtArgs>[];
        conversations: Prisma.$ConversationPayload<ExtArgs>[];
        leads: Prisma.$LeadPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        firstName: string | null;
        lastName: string | null;
        fullName: string | null;
        email: string | null;
        phone: string | null;
        avatarUrl: string | null;
        notes: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerPayload, S>;
export type CustomerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface CustomerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Customer'];
        meta: {
            name: 'Customer';
        };
    };
    findUnique<T extends CustomerFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerCreateArgs>(args: Prisma.SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerDeleteArgs>(args: Prisma.SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerUpdateArgs>(args: Prisma.SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerUpsertArgs>(args: Prisma.SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerCountArgs>(args?: Prisma.Subset<T, CustomerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends CustomerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerFieldRefs;
}
export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    identities<T extends Prisma.Customer$identitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$identitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversations<T extends Prisma.Customer$conversationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    leads<T extends Prisma.Customer$leadsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerFieldRefs {
    readonly id: Prisma.FieldRef<"Customer", 'String'>;
    readonly businessId: Prisma.FieldRef<"Customer", 'String'>;
    readonly firstName: Prisma.FieldRef<"Customer", 'String'>;
    readonly lastName: Prisma.FieldRef<"Customer", 'String'>;
    readonly fullName: Prisma.FieldRef<"Customer", 'String'>;
    readonly email: Prisma.FieldRef<"Customer", 'String'>;
    readonly phone: Prisma.FieldRef<"Customer", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"Customer", 'String'>;
    readonly notes: Prisma.FieldRef<"Customer", 'String'>;
    readonly metadata: Prisma.FieldRef<"Customer", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Customer", 'DateTime'>;
}
export type CustomerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
};
export type CustomerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type CustomerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
    include?: Prisma.CustomerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
};
export type CustomerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type Customer$identitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Customer$conversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Customer$leadsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithRelationInput | Prisma.LeadOrderByWithRelationInput[];
    cursor?: Prisma.LeadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeadScalarFieldEnum | Prisma.LeadScalarFieldEnum[];
};
export type CustomerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
};
