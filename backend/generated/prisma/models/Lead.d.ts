import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LeadModel = runtime.Types.Result.DefaultSelection<Prisma.$LeadPayload>;
export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null;
    _avg: LeadAvgAggregateOutputType | null;
    _sum: LeadSumAggregateOutputType | null;
    _min: LeadMinAggregateOutputType | null;
    _max: LeadMaxAggregateOutputType | null;
};
export type LeadAvgAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type LeadSumAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type LeadMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    customerId: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.LeadStatus | null;
    source: $Enums.LeadSource | null;
    value: runtime.Decimal | null;
    currency: string | null;
    assignedToId: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    wonAt: Date | null;
    lostAt: Date | null;
};
export type LeadMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    customerId: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.LeadStatus | null;
    source: $Enums.LeadSource | null;
    value: runtime.Decimal | null;
    currency: string | null;
    assignedToId: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    wonAt: Date | null;
    lostAt: Date | null;
};
export type LeadCountAggregateOutputType = {
    id: number;
    businessId: number;
    customerId: number;
    title: number;
    description: number;
    status: number;
    source: number;
    value: number;
    currency: number;
    assignedToId: number;
    notes: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    wonAt: number;
    lostAt: number;
    _all: number;
};
export type LeadAvgAggregateInputType = {
    value?: true;
};
export type LeadSumAggregateInputType = {
    value?: true;
};
export type LeadMinAggregateInputType = {
    id?: true;
    businessId?: true;
    customerId?: true;
    title?: true;
    description?: true;
    status?: true;
    source?: true;
    value?: true;
    currency?: true;
    assignedToId?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    wonAt?: true;
    lostAt?: true;
};
export type LeadMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    customerId?: true;
    title?: true;
    description?: true;
    status?: true;
    source?: true;
    value?: true;
    currency?: true;
    assignedToId?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    wonAt?: true;
    lostAt?: true;
};
export type LeadCountAggregateInputType = {
    id?: true;
    businessId?: true;
    customerId?: true;
    title?: true;
    description?: true;
    status?: true;
    source?: true;
    value?: true;
    currency?: true;
    assignedToId?: true;
    notes?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    wonAt?: true;
    lostAt?: true;
    _all?: true;
};
export type LeadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithRelationInput | Prisma.LeadOrderByWithRelationInput[];
    cursor?: Prisma.LeadWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeadCountAggregateInputType;
    _avg?: LeadAvgAggregateInputType;
    _sum?: LeadSumAggregateInputType;
    _min?: LeadMinAggregateInputType;
    _max?: LeadMaxAggregateInputType;
};
export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
    [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLead[P]> : Prisma.GetScalarType<T[P], AggregateLead[P]>;
};
export type LeadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithAggregationInput | Prisma.LeadOrderByWithAggregationInput[];
    by: Prisma.LeadScalarFieldEnum[] | Prisma.LeadScalarFieldEnum;
    having?: Prisma.LeadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeadCountAggregateInputType | true;
    _avg?: LeadAvgAggregateInputType;
    _sum?: LeadSumAggregateInputType;
    _min?: LeadMinAggregateInputType;
    _max?: LeadMaxAggregateInputType;
};
export type LeadGroupByOutputType = {
    id: string;
    businessId: string;
    customerId: string | null;
    title: string;
    description: string | null;
    status: $Enums.LeadStatus;
    source: $Enums.LeadSource;
    value: runtime.Decimal | null;
    currency: string;
    assignedToId: string | null;
    notes: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    wonAt: Date | null;
    lostAt: Date | null;
    _count: LeadCountAggregateOutputType | null;
    _avg: LeadAvgAggregateOutputType | null;
    _sum: LeadSumAggregateOutputType | null;
    _min: LeadMinAggregateOutputType | null;
    _max: LeadMaxAggregateOutputType | null;
};
export type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeadGroupByOutputType[P]>;
}>>;
export type LeadWhereInput = {
    AND?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    OR?: Prisma.LeadWhereInput[];
    NOT?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    id?: Prisma.StringFilter<"Lead"> | string;
    businessId?: Prisma.StringFilter<"Lead"> | string;
    customerId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    title?: Prisma.StringFilter<"Lead"> | string;
    description?: Prisma.StringNullableFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource;
    value?: Prisma.DecimalNullableFilter<"Lead"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFilter<"Lead"> | string;
    assignedToId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    notes?: Prisma.StringNullableFilter<"Lead"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Lead">;
    createdAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    wonAt?: Prisma.DateTimeNullableFilter<"Lead"> | Date | string | null;
    lostAt?: Prisma.DateTimeNullableFilter<"Lead"> | Date | string | null;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
};
export type LeadOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wonAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lostAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    OR?: Prisma.LeadWhereInput[];
    NOT?: Prisma.LeadWhereInput | Prisma.LeadWhereInput[];
    businessId?: Prisma.StringFilter<"Lead"> | string;
    customerId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    title?: Prisma.StringFilter<"Lead"> | string;
    description?: Prisma.StringNullableFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource;
    value?: Prisma.DecimalNullableFilter<"Lead"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFilter<"Lead"> | string;
    assignedToId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    notes?: Prisma.StringNullableFilter<"Lead"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Lead">;
    createdAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    wonAt?: Prisma.DateTimeNullableFilter<"Lead"> | Date | string | null;
    lostAt?: Prisma.DateTimeNullableFilter<"Lead"> | Date | string | null;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
}, "id">;
export type LeadOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wonAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    lostAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.LeadCountOrderByAggregateInput;
    _avg?: Prisma.LeadAvgOrderByAggregateInput;
    _max?: Prisma.LeadMaxOrderByAggregateInput;
    _min?: Prisma.LeadMinOrderByAggregateInput;
    _sum?: Prisma.LeadSumOrderByAggregateInput;
};
export type LeadScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeadScalarWhereWithAggregatesInput | Prisma.LeadScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeadScalarWhereWithAggregatesInput | Prisma.LeadScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Lead"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Lead"> | string;
    customerId?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    title?: Prisma.StringWithAggregatesFilter<"Lead"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceWithAggregatesFilter<"Lead"> | $Enums.LeadSource;
    value?: Prisma.DecimalNullableWithAggregatesFilter<"Lead"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringWithAggregatesFilter<"Lead"> | string;
    assignedToId?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Lead"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Lead">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Lead"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Lead"> | Date | string;
    wonAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null;
    lostAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null;
};
export type LeadCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
    business: Prisma.BusinessCreateNestedOneWithoutLeadsInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutLeadsInput;
};
export type LeadUncheckedCreateInput = {
    id?: string;
    businessId: string;
    customerId?: string | null;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
};
export type LeadUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    business?: Prisma.BusinessUpdateOneRequiredWithoutLeadsNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutLeadsNestedInput;
};
export type LeadUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeadCreateManyInput = {
    id?: string;
    businessId: string;
    customerId?: string | null;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
};
export type LeadUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeadUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeadListRelationFilter = {
    every?: Prisma.LeadWhereInput;
    some?: Prisma.LeadWhereInput;
    none?: Prisma.LeadWhereInput;
};
export type LeadOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LeadCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wonAt?: Prisma.SortOrder;
    lostAt?: Prisma.SortOrder;
};
export type LeadAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type LeadMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wonAt?: Prisma.SortOrder;
    lostAt?: Prisma.SortOrder;
};
export type LeadMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    assignedToId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    wonAt?: Prisma.SortOrder;
    lostAt?: Prisma.SortOrder;
};
export type LeadSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type LeadCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutBusinessInput, Prisma.LeadUncheckedCreateWithoutBusinessInput> | Prisma.LeadCreateWithoutBusinessInput[] | Prisma.LeadUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutBusinessInput | Prisma.LeadCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.LeadCreateManyBusinessInputEnvelope;
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
};
export type LeadUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutBusinessInput, Prisma.LeadUncheckedCreateWithoutBusinessInput> | Prisma.LeadCreateWithoutBusinessInput[] | Prisma.LeadUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutBusinessInput | Prisma.LeadCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.LeadCreateManyBusinessInputEnvelope;
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
};
export type LeadUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutBusinessInput, Prisma.LeadUncheckedCreateWithoutBusinessInput> | Prisma.LeadCreateWithoutBusinessInput[] | Prisma.LeadUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutBusinessInput | Prisma.LeadCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.LeadUpsertWithWhereUniqueWithoutBusinessInput | Prisma.LeadUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.LeadCreateManyBusinessInputEnvelope;
    set?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    disconnect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    delete?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    update?: Prisma.LeadUpdateWithWhereUniqueWithoutBusinessInput | Prisma.LeadUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.LeadUpdateManyWithWhereWithoutBusinessInput | Prisma.LeadUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
};
export type LeadUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutBusinessInput, Prisma.LeadUncheckedCreateWithoutBusinessInput> | Prisma.LeadCreateWithoutBusinessInput[] | Prisma.LeadUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutBusinessInput | Prisma.LeadCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.LeadUpsertWithWhereUniqueWithoutBusinessInput | Prisma.LeadUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.LeadCreateManyBusinessInputEnvelope;
    set?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    disconnect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    delete?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    update?: Prisma.LeadUpdateWithWhereUniqueWithoutBusinessInput | Prisma.LeadUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.LeadUpdateManyWithWhereWithoutBusinessInput | Prisma.LeadUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
};
export type LeadCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCustomerInput, Prisma.LeadUncheckedCreateWithoutCustomerInput> | Prisma.LeadCreateWithoutCustomerInput[] | Prisma.LeadUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCustomerInput | Prisma.LeadCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.LeadCreateManyCustomerInputEnvelope;
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
};
export type LeadUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCustomerInput, Prisma.LeadUncheckedCreateWithoutCustomerInput> | Prisma.LeadCreateWithoutCustomerInput[] | Prisma.LeadUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCustomerInput | Prisma.LeadCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.LeadCreateManyCustomerInputEnvelope;
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
};
export type LeadUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCustomerInput, Prisma.LeadUncheckedCreateWithoutCustomerInput> | Prisma.LeadCreateWithoutCustomerInput[] | Prisma.LeadUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCustomerInput | Prisma.LeadCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.LeadUpsertWithWhereUniqueWithoutCustomerInput | Prisma.LeadUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.LeadCreateManyCustomerInputEnvelope;
    set?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    disconnect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    delete?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    update?: Prisma.LeadUpdateWithWhereUniqueWithoutCustomerInput | Prisma.LeadUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.LeadUpdateManyWithWhereWithoutCustomerInput | Prisma.LeadUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
};
export type LeadUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.LeadCreateWithoutCustomerInput, Prisma.LeadUncheckedCreateWithoutCustomerInput> | Prisma.LeadCreateWithoutCustomerInput[] | Prisma.LeadUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LeadCreateOrConnectWithoutCustomerInput | Prisma.LeadCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.LeadUpsertWithWhereUniqueWithoutCustomerInput | Prisma.LeadUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.LeadCreateManyCustomerInputEnvelope;
    set?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    disconnect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    delete?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    connect?: Prisma.LeadWhereUniqueInput | Prisma.LeadWhereUniqueInput[];
    update?: Prisma.LeadUpdateWithWhereUniqueWithoutCustomerInput | Prisma.LeadUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.LeadUpdateManyWithWhereWithoutCustomerInput | Prisma.LeadUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
};
export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus;
};
export type EnumLeadSourceFieldUpdateOperationsInput = {
    set?: $Enums.LeadSource;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type LeadCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
    customer?: Prisma.CustomerCreateNestedOneWithoutLeadsInput;
};
export type LeadUncheckedCreateWithoutBusinessInput = {
    id?: string;
    customerId?: string | null;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
};
export type LeadCreateOrConnectWithoutBusinessInput = {
    where: Prisma.LeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeadCreateWithoutBusinessInput, Prisma.LeadUncheckedCreateWithoutBusinessInput>;
};
export type LeadCreateManyBusinessInputEnvelope = {
    data: Prisma.LeadCreateManyBusinessInput | Prisma.LeadCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type LeadUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.LeadWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeadUpdateWithoutBusinessInput, Prisma.LeadUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.LeadCreateWithoutBusinessInput, Prisma.LeadUncheckedCreateWithoutBusinessInput>;
};
export type LeadUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.LeadWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeadUpdateWithoutBusinessInput, Prisma.LeadUncheckedUpdateWithoutBusinessInput>;
};
export type LeadUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.LeadScalarWhereInput;
    data: Prisma.XOR<Prisma.LeadUpdateManyMutationInput, Prisma.LeadUncheckedUpdateManyWithoutBusinessInput>;
};
export type LeadScalarWhereInput = {
    AND?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
    OR?: Prisma.LeadScalarWhereInput[];
    NOT?: Prisma.LeadScalarWhereInput | Prisma.LeadScalarWhereInput[];
    id?: Prisma.StringFilter<"Lead"> | string;
    businessId?: Prisma.StringFilter<"Lead"> | string;
    customerId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    title?: Prisma.StringFilter<"Lead"> | string;
    description?: Prisma.StringNullableFilter<"Lead"> | string | null;
    status?: Prisma.EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource;
    value?: Prisma.DecimalNullableFilter<"Lead"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFilter<"Lead"> | string;
    assignedToId?: Prisma.StringNullableFilter<"Lead"> | string | null;
    notes?: Prisma.StringNullableFilter<"Lead"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Lead">;
    createdAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lead"> | Date | string;
    wonAt?: Prisma.DateTimeNullableFilter<"Lead"> | Date | string | null;
    lostAt?: Prisma.DateTimeNullableFilter<"Lead"> | Date | string | null;
};
export type LeadCreateWithoutCustomerInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
    business: Prisma.BusinessCreateNestedOneWithoutLeadsInput;
};
export type LeadUncheckedCreateWithoutCustomerInput = {
    id?: string;
    businessId: string;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
};
export type LeadCreateOrConnectWithoutCustomerInput = {
    where: Prisma.LeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeadCreateWithoutCustomerInput, Prisma.LeadUncheckedCreateWithoutCustomerInput>;
};
export type LeadCreateManyCustomerInputEnvelope = {
    data: Prisma.LeadCreateManyCustomerInput | Prisma.LeadCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type LeadUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.LeadWhereUniqueInput;
    update: Prisma.XOR<Prisma.LeadUpdateWithoutCustomerInput, Prisma.LeadUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.LeadCreateWithoutCustomerInput, Prisma.LeadUncheckedCreateWithoutCustomerInput>;
};
export type LeadUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.LeadWhereUniqueInput;
    data: Prisma.XOR<Prisma.LeadUpdateWithoutCustomerInput, Prisma.LeadUncheckedUpdateWithoutCustomerInput>;
};
export type LeadUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.LeadScalarWhereInput;
    data: Prisma.XOR<Prisma.LeadUpdateManyMutationInput, Prisma.LeadUncheckedUpdateManyWithoutCustomerInput>;
};
export type LeadCreateManyBusinessInput = {
    id?: string;
    customerId?: string | null;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
};
export type LeadUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer?: Prisma.CustomerUpdateOneWithoutLeadsNestedInput;
};
export type LeadUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeadUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeadCreateManyCustomerInput = {
    id?: string;
    businessId: string;
    title: string;
    description?: string | null;
    status?: $Enums.LeadStatus;
    source?: $Enums.LeadSource;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    assignedToId?: string | null;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    wonAt?: Date | string | null;
    lostAt?: Date | string | null;
};
export type LeadUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    business?: Prisma.BusinessUpdateOneRequiredWithoutLeadsNestedInput;
};
export type LeadUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeadUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus;
    source?: Prisma.EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedToId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wonAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lostAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    source?: boolean;
    value?: boolean;
    currency?: boolean;
    assignedToId?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wonAt?: boolean;
    lostAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Lead$customerArgs<ExtArgs>;
}, ExtArgs["result"]["lead"]>;
export type LeadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    source?: boolean;
    value?: boolean;
    currency?: boolean;
    assignedToId?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wonAt?: boolean;
    lostAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Lead$customerArgs<ExtArgs>;
}, ExtArgs["result"]["lead"]>;
export type LeadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    source?: boolean;
    value?: boolean;
    currency?: boolean;
    assignedToId?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wonAt?: boolean;
    lostAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Lead$customerArgs<ExtArgs>;
}, ExtArgs["result"]["lead"]>;
export type LeadSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    customerId?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    source?: boolean;
    value?: boolean;
    currency?: boolean;
    assignedToId?: boolean;
    notes?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    wonAt?: boolean;
    lostAt?: boolean;
};
export type LeadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "customerId" | "title" | "description" | "status" | "source" | "value" | "currency" | "assignedToId" | "notes" | "metadata" | "createdAt" | "updatedAt" | "wonAt" | "lostAt", ExtArgs["result"]["lead"]>;
export type LeadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Lead$customerArgs<ExtArgs>;
};
export type LeadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Lead$customerArgs<ExtArgs>;
};
export type LeadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.Lead$customerArgs<ExtArgs>;
};
export type $LeadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lead";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        customerId: string | null;
        title: string;
        description: string | null;
        status: $Enums.LeadStatus;
        source: $Enums.LeadSource;
        value: runtime.Decimal | null;
        currency: string;
        assignedToId: string | null;
        notes: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
        wonAt: Date | null;
        lostAt: Date | null;
    }, ExtArgs["result"]["lead"]>;
    composites: {};
};
export type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeadPayload, S>;
export type LeadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeadCountAggregateInputType | true;
};
export interface LeadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lead'];
        meta: {
            name: 'Lead';
        };
    };
    findUnique<T extends LeadFindUniqueArgs>(args: Prisma.SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeadFindFirstArgs>(args?: Prisma.SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeadFindManyArgs>(args?: Prisma.SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeadCreateArgs>(args: Prisma.SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeadCreateManyArgs>(args?: Prisma.SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeadDeleteArgs>(args: Prisma.SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeadUpdateArgs>(args: Prisma.SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeadDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeadUpdateManyArgs>(args: Prisma.SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeadUpsertArgs>(args: Prisma.SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma.Prisma__LeadClient<runtime.Types.Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeadCountArgs>(args?: Prisma.Subset<T, LeadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeadCountAggregateOutputType> : number>;
    aggregate<T extends LeadAggregateArgs>(args: Prisma.Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>;
    groupBy<T extends LeadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeadGroupByArgs['orderBy'];
    } : {
        orderBy?: LeadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeadFieldRefs;
}
export interface Prisma__LeadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.Lead$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lead$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeadFieldRefs {
    readonly id: Prisma.FieldRef<"Lead", 'String'>;
    readonly businessId: Prisma.FieldRef<"Lead", 'String'>;
    readonly customerId: Prisma.FieldRef<"Lead", 'String'>;
    readonly title: Prisma.FieldRef<"Lead", 'String'>;
    readonly description: Prisma.FieldRef<"Lead", 'String'>;
    readonly status: Prisma.FieldRef<"Lead", 'LeadStatus'>;
    readonly source: Prisma.FieldRef<"Lead", 'LeadSource'>;
    readonly value: Prisma.FieldRef<"Lead", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Lead", 'String'>;
    readonly assignedToId: Prisma.FieldRef<"Lead", 'String'>;
    readonly notes: Prisma.FieldRef<"Lead", 'String'>;
    readonly metadata: Prisma.FieldRef<"Lead", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Lead", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Lead", 'DateTime'>;
    readonly wonAt: Prisma.FieldRef<"Lead", 'DateTime'>;
    readonly lostAt: Prisma.FieldRef<"Lead", 'DateTime'>;
}
export type LeadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeadCreateInput, Prisma.LeadUncheckedCreateInput>;
};
export type LeadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeadCreateManyInput | Prisma.LeadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    data: Prisma.LeadCreateManyInput | Prisma.LeadCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeadIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeadUpdateInput, Prisma.LeadUncheckedUpdateInput>;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeadUpdateManyMutationInput, Prisma.LeadUncheckedUpdateManyInput>;
    where?: Prisma.LeadWhereInput;
    limit?: number;
};
export type LeadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeadUpdateManyMutationInput, Prisma.LeadUncheckedUpdateManyInput>;
    where?: Prisma.LeadWhereInput;
    limit?: number;
    include?: Prisma.LeadIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeadCreateInput, Prisma.LeadUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeadUpdateInput, Prisma.LeadUncheckedUpdateInput>;
};
export type LeadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
    where: Prisma.LeadWhereUniqueInput;
};
export type LeadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeadWhereInput;
    limit?: number;
};
export type Lead$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type LeadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeadSelect<ExtArgs> | null;
    omit?: Prisma.LeadOmit<ExtArgs> | null;
    include?: Prisma.LeadInclude<ExtArgs> | null;
};
