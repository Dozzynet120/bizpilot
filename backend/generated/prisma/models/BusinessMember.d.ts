import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BusinessMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$BusinessMemberPayload>;
export type AggregateBusinessMember = {
    _count: BusinessMemberCountAggregateOutputType | null;
    _min: BusinessMemberMinAggregateOutputType | null;
    _max: BusinessMemberMaxAggregateOutputType | null;
};
export type BusinessMemberMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    userId: string | null;
    role: $Enums.MembershipRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BusinessMemberMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    userId: string | null;
    role: $Enums.MembershipRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BusinessMemberCountAggregateOutputType = {
    id: number;
    businessId: number;
    userId: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BusinessMemberMinAggregateInputType = {
    id?: true;
    businessId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BusinessMemberMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BusinessMemberCountAggregateInputType = {
    id?: true;
    businessId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BusinessMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessMemberWhereInput;
    orderBy?: Prisma.BusinessMemberOrderByWithRelationInput | Prisma.BusinessMemberOrderByWithRelationInput[];
    cursor?: Prisma.BusinessMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BusinessMemberCountAggregateInputType;
    _min?: BusinessMemberMinAggregateInputType;
    _max?: BusinessMemberMaxAggregateInputType;
};
export type GetBusinessMemberAggregateType<T extends BusinessMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateBusinessMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBusinessMember[P]> : Prisma.GetScalarType<T[P], AggregateBusinessMember[P]>;
};
export type BusinessMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessMemberWhereInput;
    orderBy?: Prisma.BusinessMemberOrderByWithAggregationInput | Prisma.BusinessMemberOrderByWithAggregationInput[];
    by: Prisma.BusinessMemberScalarFieldEnum[] | Prisma.BusinessMemberScalarFieldEnum;
    having?: Prisma.BusinessMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessMemberCountAggregateInputType | true;
    _min?: BusinessMemberMinAggregateInputType;
    _max?: BusinessMemberMaxAggregateInputType;
};
export type BusinessMemberGroupByOutputType = {
    id: string;
    businessId: string;
    userId: string;
    role: $Enums.MembershipRole;
    createdAt: Date;
    updatedAt: Date;
    _count: BusinessMemberCountAggregateOutputType | null;
    _min: BusinessMemberMinAggregateOutputType | null;
    _max: BusinessMemberMaxAggregateOutputType | null;
};
export type GetBusinessMemberGroupByPayload<T extends BusinessMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BusinessMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BusinessMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BusinessMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BusinessMemberGroupByOutputType[P]>;
}>>;
export type BusinessMemberWhereInput = {
    AND?: Prisma.BusinessMemberWhereInput | Prisma.BusinessMemberWhereInput[];
    OR?: Prisma.BusinessMemberWhereInput[];
    NOT?: Prisma.BusinessMemberWhereInput | Prisma.BusinessMemberWhereInput[];
    id?: Prisma.StringFilter<"BusinessMember"> | string;
    businessId?: Prisma.StringFilter<"BusinessMember"> | string;
    userId?: Prisma.StringFilter<"BusinessMember"> | string;
    role?: Prisma.EnumMembershipRoleFilter<"BusinessMember"> | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFilter<"BusinessMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BusinessMember"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BusinessMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BusinessMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    businessId_userId?: Prisma.BusinessMemberBusinessIdUserIdCompoundUniqueInput;
    AND?: Prisma.BusinessMemberWhereInput | Prisma.BusinessMemberWhereInput[];
    OR?: Prisma.BusinessMemberWhereInput[];
    NOT?: Prisma.BusinessMemberWhereInput | Prisma.BusinessMemberWhereInput[];
    businessId?: Prisma.StringFilter<"BusinessMember"> | string;
    userId?: Prisma.StringFilter<"BusinessMember"> | string;
    role?: Prisma.EnumMembershipRoleFilter<"BusinessMember"> | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFilter<"BusinessMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BusinessMember"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "businessId_userId">;
export type BusinessMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BusinessMemberCountOrderByAggregateInput;
    _max?: Prisma.BusinessMemberMaxOrderByAggregateInput;
    _min?: Prisma.BusinessMemberMinOrderByAggregateInput;
};
export type BusinessMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.BusinessMemberScalarWhereWithAggregatesInput | Prisma.BusinessMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.BusinessMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BusinessMemberScalarWhereWithAggregatesInput | Prisma.BusinessMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BusinessMember"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"BusinessMember"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"BusinessMember"> | string;
    role?: Prisma.EnumMembershipRoleWithAggregatesFilter<"BusinessMember"> | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BusinessMember"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BusinessMember"> | Date | string;
};
export type BusinessMemberCreateInput = {
    id?: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type BusinessMemberUncheckedCreateInput = {
    id?: string;
    businessId: string;
    userId: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type BusinessMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessMemberCreateManyInput = {
    id?: string;
    businessId: string;
    userId: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessMemberListRelationFilter = {
    every?: Prisma.BusinessMemberWhereInput;
    some?: Prisma.BusinessMemberWhereInput;
    none?: Prisma.BusinessMemberWhereInput;
};
export type BusinessMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BusinessMemberBusinessIdUserIdCompoundUniqueInput = {
    businessId: string;
    userId: string;
};
export type BusinessMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BusinessMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BusinessMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BusinessMemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutUserInput, Prisma.BusinessMemberUncheckedCreateWithoutUserInput> | Prisma.BusinessMemberCreateWithoutUserInput[] | Prisma.BusinessMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutUserInput | Prisma.BusinessMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BusinessMemberCreateManyUserInputEnvelope;
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
};
export type BusinessMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutUserInput, Prisma.BusinessMemberUncheckedCreateWithoutUserInput> | Prisma.BusinessMemberCreateWithoutUserInput[] | Prisma.BusinessMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutUserInput | Prisma.BusinessMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BusinessMemberCreateManyUserInputEnvelope;
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
};
export type BusinessMemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutUserInput, Prisma.BusinessMemberUncheckedCreateWithoutUserInput> | Prisma.BusinessMemberCreateWithoutUserInput[] | Prisma.BusinessMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutUserInput | Prisma.BusinessMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BusinessMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.BusinessMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BusinessMemberCreateManyUserInputEnvelope;
    set?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    disconnect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    delete?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    update?: Prisma.BusinessMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.BusinessMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BusinessMemberUpdateManyWithWhereWithoutUserInput | Prisma.BusinessMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BusinessMemberScalarWhereInput | Prisma.BusinessMemberScalarWhereInput[];
};
export type BusinessMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutUserInput, Prisma.BusinessMemberUncheckedCreateWithoutUserInput> | Prisma.BusinessMemberCreateWithoutUserInput[] | Prisma.BusinessMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutUserInput | Prisma.BusinessMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BusinessMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.BusinessMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BusinessMemberCreateManyUserInputEnvelope;
    set?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    disconnect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    delete?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    update?: Prisma.BusinessMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.BusinessMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BusinessMemberUpdateManyWithWhereWithoutUserInput | Prisma.BusinessMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BusinessMemberScalarWhereInput | Prisma.BusinessMemberScalarWhereInput[];
};
export type BusinessMemberCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutBusinessInput, Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput> | Prisma.BusinessMemberCreateWithoutBusinessInput[] | Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput | Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.BusinessMemberCreateManyBusinessInputEnvelope;
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
};
export type BusinessMemberUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutBusinessInput, Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput> | Prisma.BusinessMemberCreateWithoutBusinessInput[] | Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput | Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.BusinessMemberCreateManyBusinessInputEnvelope;
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
};
export type BusinessMemberUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutBusinessInput, Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput> | Prisma.BusinessMemberCreateWithoutBusinessInput[] | Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput | Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.BusinessMemberUpsertWithWhereUniqueWithoutBusinessInput | Prisma.BusinessMemberUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.BusinessMemberCreateManyBusinessInputEnvelope;
    set?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    disconnect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    delete?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    update?: Prisma.BusinessMemberUpdateWithWhereUniqueWithoutBusinessInput | Prisma.BusinessMemberUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.BusinessMemberUpdateManyWithWhereWithoutBusinessInput | Prisma.BusinessMemberUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.BusinessMemberScalarWhereInput | Prisma.BusinessMemberScalarWhereInput[];
};
export type BusinessMemberUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessMemberCreateWithoutBusinessInput, Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput> | Prisma.BusinessMemberCreateWithoutBusinessInput[] | Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput | Prisma.BusinessMemberCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.BusinessMemberUpsertWithWhereUniqueWithoutBusinessInput | Prisma.BusinessMemberUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.BusinessMemberCreateManyBusinessInputEnvelope;
    set?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    disconnect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    delete?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    connect?: Prisma.BusinessMemberWhereUniqueInput | Prisma.BusinessMemberWhereUniqueInput[];
    update?: Prisma.BusinessMemberUpdateWithWhereUniqueWithoutBusinessInput | Prisma.BusinessMemberUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.BusinessMemberUpdateManyWithWhereWithoutBusinessInput | Prisma.BusinessMemberUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.BusinessMemberScalarWhereInput | Prisma.BusinessMemberScalarWhereInput[];
};
export type EnumMembershipRoleFieldUpdateOperationsInput = {
    set?: $Enums.MembershipRole;
};
export type BusinessMemberCreateWithoutUserInput = {
    id?: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutMembersInput;
};
export type BusinessMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    businessId: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessMemberCreateOrConnectWithoutUserInput = {
    where: Prisma.BusinessMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessMemberCreateWithoutUserInput, Prisma.BusinessMemberUncheckedCreateWithoutUserInput>;
};
export type BusinessMemberCreateManyUserInputEnvelope = {
    data: Prisma.BusinessMemberCreateManyUserInput | Prisma.BusinessMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BusinessMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BusinessMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.BusinessMemberUpdateWithoutUserInput, Prisma.BusinessMemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BusinessMemberCreateWithoutUserInput, Prisma.BusinessMemberUncheckedCreateWithoutUserInput>;
};
export type BusinessMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BusinessMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.BusinessMemberUpdateWithoutUserInput, Prisma.BusinessMemberUncheckedUpdateWithoutUserInput>;
};
export type BusinessMemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BusinessMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.BusinessMemberUpdateManyMutationInput, Prisma.BusinessMemberUncheckedUpdateManyWithoutUserInput>;
};
export type BusinessMemberScalarWhereInput = {
    AND?: Prisma.BusinessMemberScalarWhereInput | Prisma.BusinessMemberScalarWhereInput[];
    OR?: Prisma.BusinessMemberScalarWhereInput[];
    NOT?: Prisma.BusinessMemberScalarWhereInput | Prisma.BusinessMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"BusinessMember"> | string;
    businessId?: Prisma.StringFilter<"BusinessMember"> | string;
    userId?: Prisma.StringFilter<"BusinessMember"> | string;
    role?: Prisma.EnumMembershipRoleFilter<"BusinessMember"> | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFilter<"BusinessMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BusinessMember"> | Date | string;
};
export type BusinessMemberCreateWithoutBusinessInput = {
    id?: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type BusinessMemberUncheckedCreateWithoutBusinessInput = {
    id?: string;
    userId: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessMemberCreateOrConnectWithoutBusinessInput = {
    where: Prisma.BusinessMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessMemberCreateWithoutBusinessInput, Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput>;
};
export type BusinessMemberCreateManyBusinessInputEnvelope = {
    data: Prisma.BusinessMemberCreateManyBusinessInput | Prisma.BusinessMemberCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type BusinessMemberUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.BusinessMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.BusinessMemberUpdateWithoutBusinessInput, Prisma.BusinessMemberUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.BusinessMemberCreateWithoutBusinessInput, Prisma.BusinessMemberUncheckedCreateWithoutBusinessInput>;
};
export type BusinessMemberUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.BusinessMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.BusinessMemberUpdateWithoutBusinessInput, Prisma.BusinessMemberUncheckedUpdateWithoutBusinessInput>;
};
export type BusinessMemberUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.BusinessMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.BusinessMemberUpdateManyMutationInput, Prisma.BusinessMemberUncheckedUpdateManyWithoutBusinessInput>;
};
export type BusinessMemberCreateManyUserInput = {
    id?: string;
    businessId: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessMemberUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutMembersNestedInput;
};
export type BusinessMemberUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessMemberUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessMemberCreateManyBusinessInput = {
    id?: string;
    userId: string;
    role?: $Enums.MembershipRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BusinessMemberUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type BusinessMemberUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessMemberUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMembershipRoleFieldUpdateOperationsInput | $Enums.MembershipRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["businessMember"]>;
export type BusinessMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["businessMember"]>;
export type BusinessMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["businessMember"]>;
export type BusinessMemberSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BusinessMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "userId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["businessMember"]>;
export type BusinessMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BusinessMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BusinessMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BusinessMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BusinessMember";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        userId: string;
        role: $Enums.MembershipRole;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["businessMember"]>;
    composites: {};
};
export type BusinessMemberGetPayload<S extends boolean | null | undefined | BusinessMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload, S>;
export type BusinessMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BusinessMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BusinessMemberCountAggregateInputType | true;
};
export interface BusinessMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BusinessMember'];
        meta: {
            name: 'BusinessMember';
        };
    };
    findUnique<T extends BusinessMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, BusinessMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BusinessMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BusinessMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BusinessMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, BusinessMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BusinessMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BusinessMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BusinessMemberFindManyArgs>(args?: Prisma.SelectSubset<T, BusinessMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BusinessMemberCreateArgs>(args: Prisma.SelectSubset<T, BusinessMemberCreateArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BusinessMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, BusinessMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BusinessMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BusinessMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BusinessMemberDeleteArgs>(args: Prisma.SelectSubset<T, BusinessMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BusinessMemberUpdateArgs>(args: Prisma.SelectSubset<T, BusinessMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BusinessMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, BusinessMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BusinessMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, BusinessMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BusinessMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BusinessMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BusinessMemberUpsertArgs>(args: Prisma.SelectSubset<T, BusinessMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__BusinessMemberClient<runtime.Types.Result.GetResult<Prisma.$BusinessMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BusinessMemberCountArgs>(args?: Prisma.Subset<T, BusinessMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BusinessMemberCountAggregateOutputType> : number>;
    aggregate<T extends BusinessMemberAggregateArgs>(args: Prisma.Subset<T, BusinessMemberAggregateArgs>): Prisma.PrismaPromise<GetBusinessMemberAggregateType<T>>;
    groupBy<T extends BusinessMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BusinessMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: BusinessMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BusinessMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BusinessMemberFieldRefs;
}
export interface Prisma__BusinessMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BusinessMemberFieldRefs {
    readonly id: Prisma.FieldRef<"BusinessMember", 'String'>;
    readonly businessId: Prisma.FieldRef<"BusinessMember", 'String'>;
    readonly userId: Prisma.FieldRef<"BusinessMember", 'String'>;
    readonly role: Prisma.FieldRef<"BusinessMember", 'MembershipRole'>;
    readonly createdAt: Prisma.FieldRef<"BusinessMember", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BusinessMember", 'DateTime'>;
}
export type BusinessMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    where: Prisma.BusinessMemberWhereUniqueInput;
};
export type BusinessMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    where: Prisma.BusinessMemberWhereUniqueInput;
};
export type BusinessMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    where?: Prisma.BusinessMemberWhereInput;
    orderBy?: Prisma.BusinessMemberOrderByWithRelationInput | Prisma.BusinessMemberOrderByWithRelationInput[];
    cursor?: Prisma.BusinessMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessMemberScalarFieldEnum | Prisma.BusinessMemberScalarFieldEnum[];
};
export type BusinessMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    where?: Prisma.BusinessMemberWhereInput;
    orderBy?: Prisma.BusinessMemberOrderByWithRelationInput | Prisma.BusinessMemberOrderByWithRelationInput[];
    cursor?: Prisma.BusinessMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessMemberScalarFieldEnum | Prisma.BusinessMemberScalarFieldEnum[];
};
export type BusinessMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    where?: Prisma.BusinessMemberWhereInput;
    orderBy?: Prisma.BusinessMemberOrderByWithRelationInput | Prisma.BusinessMemberOrderByWithRelationInput[];
    cursor?: Prisma.BusinessMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessMemberScalarFieldEnum | Prisma.BusinessMemberScalarFieldEnum[];
};
export type BusinessMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessMemberCreateInput, Prisma.BusinessMemberUncheckedCreateInput>;
};
export type BusinessMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BusinessMemberCreateManyInput | Prisma.BusinessMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BusinessMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    data: Prisma.BusinessMemberCreateManyInput | Prisma.BusinessMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BusinessMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BusinessMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessMemberUpdateInput, Prisma.BusinessMemberUncheckedUpdateInput>;
    where: Prisma.BusinessMemberWhereUniqueInput;
};
export type BusinessMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BusinessMemberUpdateManyMutationInput, Prisma.BusinessMemberUncheckedUpdateManyInput>;
    where?: Prisma.BusinessMemberWhereInput;
    limit?: number;
};
export type BusinessMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessMemberUpdateManyMutationInput, Prisma.BusinessMemberUncheckedUpdateManyInput>;
    where?: Prisma.BusinessMemberWhereInput;
    limit?: number;
    include?: Prisma.BusinessMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BusinessMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    where: Prisma.BusinessMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessMemberCreateInput, Prisma.BusinessMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BusinessMemberUpdateInput, Prisma.BusinessMemberUncheckedUpdateInput>;
};
export type BusinessMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
    where: Prisma.BusinessMemberWhereUniqueInput;
};
export type BusinessMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessMemberWhereInput;
    limit?: number;
};
export type BusinessMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessMemberSelect<ExtArgs> | null;
    omit?: Prisma.BusinessMemberOmit<ExtArgs> | null;
    include?: Prisma.BusinessMemberInclude<ExtArgs> | null;
};
