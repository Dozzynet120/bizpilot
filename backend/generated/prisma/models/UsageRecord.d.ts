import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsageRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$UsageRecordPayload>;
export type AggregateUsageRecord = {
    _count: UsageRecordCountAggregateOutputType | null;
    _avg: UsageRecordAvgAggregateOutputType | null;
    _sum: UsageRecordSumAggregateOutputType | null;
    _min: UsageRecordMinAggregateOutputType | null;
    _max: UsageRecordMaxAggregateOutputType | null;
};
export type UsageRecordAvgAggregateOutputType = {
    quantity: number | null;
    unitCost: runtime.Decimal | null;
};
export type UsageRecordSumAggregateOutputType = {
    quantity: number | null;
    unitCost: runtime.Decimal | null;
};
export type UsageRecordMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    type: $Enums.UsageType | null;
    quantity: number | null;
    unitCost: runtime.Decimal | null;
    createdAt: Date | null;
};
export type UsageRecordMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    type: $Enums.UsageType | null;
    quantity: number | null;
    unitCost: runtime.Decimal | null;
    createdAt: Date | null;
};
export type UsageRecordCountAggregateOutputType = {
    id: number;
    businessId: number;
    type: number;
    quantity: number;
    unitCost: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type UsageRecordAvgAggregateInputType = {
    quantity?: true;
    unitCost?: true;
};
export type UsageRecordSumAggregateInputType = {
    quantity?: true;
    unitCost?: true;
};
export type UsageRecordMinAggregateInputType = {
    id?: true;
    businessId?: true;
    type?: true;
    quantity?: true;
    unitCost?: true;
    createdAt?: true;
};
export type UsageRecordMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    type?: true;
    quantity?: true;
    unitCost?: true;
    createdAt?: true;
};
export type UsageRecordCountAggregateInputType = {
    id?: true;
    businessId?: true;
    type?: true;
    quantity?: true;
    unitCost?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type UsageRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsageRecordWhereInput;
    orderBy?: Prisma.UsageRecordOrderByWithRelationInput | Prisma.UsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.UsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsageRecordCountAggregateInputType;
    _avg?: UsageRecordAvgAggregateInputType;
    _sum?: UsageRecordSumAggregateInputType;
    _min?: UsageRecordMinAggregateInputType;
    _max?: UsageRecordMaxAggregateInputType;
};
export type GetUsageRecordAggregateType<T extends UsageRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateUsageRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsageRecord[P]> : Prisma.GetScalarType<T[P], AggregateUsageRecord[P]>;
};
export type UsageRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsageRecordWhereInput;
    orderBy?: Prisma.UsageRecordOrderByWithAggregationInput | Prisma.UsageRecordOrderByWithAggregationInput[];
    by: Prisma.UsageRecordScalarFieldEnum[] | Prisma.UsageRecordScalarFieldEnum;
    having?: Prisma.UsageRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsageRecordCountAggregateInputType | true;
    _avg?: UsageRecordAvgAggregateInputType;
    _sum?: UsageRecordSumAggregateInputType;
    _min?: UsageRecordMinAggregateInputType;
    _max?: UsageRecordMaxAggregateInputType;
};
export type UsageRecordGroupByOutputType = {
    id: string;
    businessId: string;
    type: $Enums.UsageType;
    quantity: number;
    unitCost: runtime.Decimal | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: UsageRecordCountAggregateOutputType | null;
    _avg: UsageRecordAvgAggregateOutputType | null;
    _sum: UsageRecordSumAggregateOutputType | null;
    _min: UsageRecordMinAggregateOutputType | null;
    _max: UsageRecordMaxAggregateOutputType | null;
};
export type GetUsageRecordGroupByPayload<T extends UsageRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsageRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsageRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsageRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsageRecordGroupByOutputType[P]>;
}>>;
export type UsageRecordWhereInput = {
    AND?: Prisma.UsageRecordWhereInput | Prisma.UsageRecordWhereInput[];
    OR?: Prisma.UsageRecordWhereInput[];
    NOT?: Prisma.UsageRecordWhereInput | Prisma.UsageRecordWhereInput[];
    id?: Prisma.StringFilter<"UsageRecord"> | string;
    businessId?: Prisma.StringFilter<"UsageRecord"> | string;
    type?: Prisma.EnumUsageTypeFilter<"UsageRecord"> | $Enums.UsageType;
    quantity?: Prisma.IntFilter<"UsageRecord"> | number;
    unitCost?: Prisma.DecimalNullableFilter<"UsageRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.JsonNullableFilter<"UsageRecord">;
    createdAt?: Prisma.DateTimeFilter<"UsageRecord"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
};
export type UsageRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
};
export type UsageRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UsageRecordWhereInput | Prisma.UsageRecordWhereInput[];
    OR?: Prisma.UsageRecordWhereInput[];
    NOT?: Prisma.UsageRecordWhereInput | Prisma.UsageRecordWhereInput[];
    businessId?: Prisma.StringFilter<"UsageRecord"> | string;
    type?: Prisma.EnumUsageTypeFilter<"UsageRecord"> | $Enums.UsageType;
    quantity?: Prisma.IntFilter<"UsageRecord"> | number;
    unitCost?: Prisma.DecimalNullableFilter<"UsageRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.JsonNullableFilter<"UsageRecord">;
    createdAt?: Prisma.DateTimeFilter<"UsageRecord"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
}, "id">;
export type UsageRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UsageRecordCountOrderByAggregateInput;
    _avg?: Prisma.UsageRecordAvgOrderByAggregateInput;
    _max?: Prisma.UsageRecordMaxOrderByAggregateInput;
    _min?: Prisma.UsageRecordMinOrderByAggregateInput;
    _sum?: Prisma.UsageRecordSumOrderByAggregateInput;
};
export type UsageRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsageRecordScalarWhereWithAggregatesInput | Prisma.UsageRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsageRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsageRecordScalarWhereWithAggregatesInput | Prisma.UsageRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UsageRecord"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"UsageRecord"> | string;
    type?: Prisma.EnumUsageTypeWithAggregatesFilter<"UsageRecord"> | $Enums.UsageType;
    quantity?: Prisma.IntWithAggregatesFilter<"UsageRecord"> | number;
    unitCost?: Prisma.DecimalNullableWithAggregatesFilter<"UsageRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"UsageRecord">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UsageRecord"> | Date | string;
};
export type UsageRecordCreateInput = {
    id?: string;
    type: $Enums.UsageType;
    quantity?: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutUsageRecordsInput;
};
export type UsageRecordUncheckedCreateInput = {
    id?: string;
    businessId: string;
    type: $Enums.UsageType;
    quantity?: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type UsageRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutUsageRecordsNestedInput;
};
export type UsageRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageRecordCreateManyInput = {
    id?: string;
    businessId: string;
    type: $Enums.UsageType;
    quantity?: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type UsageRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageRecordListRelationFilter = {
    every?: Prisma.UsageRecordWhereInput;
    some?: Prisma.UsageRecordWhereInput;
    none?: Prisma.UsageRecordWhereInput;
};
export type UsageRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UsageRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsageRecordAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
};
export type UsageRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsageRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsageRecordSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
};
export type UsageRecordCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.UsageRecordCreateWithoutBusinessInput, Prisma.UsageRecordUncheckedCreateWithoutBusinessInput> | Prisma.UsageRecordCreateWithoutBusinessInput[] | Prisma.UsageRecordUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UsageRecordCreateOrConnectWithoutBusinessInput | Prisma.UsageRecordCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.UsageRecordCreateManyBusinessInputEnvelope;
    connect?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
};
export type UsageRecordUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.UsageRecordCreateWithoutBusinessInput, Prisma.UsageRecordUncheckedCreateWithoutBusinessInput> | Prisma.UsageRecordCreateWithoutBusinessInput[] | Prisma.UsageRecordUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UsageRecordCreateOrConnectWithoutBusinessInput | Prisma.UsageRecordCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.UsageRecordCreateManyBusinessInputEnvelope;
    connect?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
};
export type UsageRecordUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.UsageRecordCreateWithoutBusinessInput, Prisma.UsageRecordUncheckedCreateWithoutBusinessInput> | Prisma.UsageRecordCreateWithoutBusinessInput[] | Prisma.UsageRecordUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UsageRecordCreateOrConnectWithoutBusinessInput | Prisma.UsageRecordCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.UsageRecordUpsertWithWhereUniqueWithoutBusinessInput | Prisma.UsageRecordUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.UsageRecordCreateManyBusinessInputEnvelope;
    set?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    disconnect?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    delete?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    connect?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    update?: Prisma.UsageRecordUpdateWithWhereUniqueWithoutBusinessInput | Prisma.UsageRecordUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.UsageRecordUpdateManyWithWhereWithoutBusinessInput | Prisma.UsageRecordUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.UsageRecordScalarWhereInput | Prisma.UsageRecordScalarWhereInput[];
};
export type UsageRecordUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.UsageRecordCreateWithoutBusinessInput, Prisma.UsageRecordUncheckedCreateWithoutBusinessInput> | Prisma.UsageRecordCreateWithoutBusinessInput[] | Prisma.UsageRecordUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.UsageRecordCreateOrConnectWithoutBusinessInput | Prisma.UsageRecordCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.UsageRecordUpsertWithWhereUniqueWithoutBusinessInput | Prisma.UsageRecordUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.UsageRecordCreateManyBusinessInputEnvelope;
    set?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    disconnect?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    delete?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    connect?: Prisma.UsageRecordWhereUniqueInput | Prisma.UsageRecordWhereUniqueInput[];
    update?: Prisma.UsageRecordUpdateWithWhereUniqueWithoutBusinessInput | Prisma.UsageRecordUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.UsageRecordUpdateManyWithWhereWithoutBusinessInput | Prisma.UsageRecordUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.UsageRecordScalarWhereInput | Prisma.UsageRecordScalarWhereInput[];
};
export type EnumUsageTypeFieldUpdateOperationsInput = {
    set?: $Enums.UsageType;
};
export type UsageRecordCreateWithoutBusinessInput = {
    id?: string;
    type: $Enums.UsageType;
    quantity?: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type UsageRecordUncheckedCreateWithoutBusinessInput = {
    id?: string;
    type: $Enums.UsageType;
    quantity?: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type UsageRecordCreateOrConnectWithoutBusinessInput = {
    where: Prisma.UsageRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsageRecordCreateWithoutBusinessInput, Prisma.UsageRecordUncheckedCreateWithoutBusinessInput>;
};
export type UsageRecordCreateManyBusinessInputEnvelope = {
    data: Prisma.UsageRecordCreateManyBusinessInput | Prisma.UsageRecordCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type UsageRecordUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.UsageRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsageRecordUpdateWithoutBusinessInput, Prisma.UsageRecordUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.UsageRecordCreateWithoutBusinessInput, Prisma.UsageRecordUncheckedCreateWithoutBusinessInput>;
};
export type UsageRecordUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.UsageRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsageRecordUpdateWithoutBusinessInput, Prisma.UsageRecordUncheckedUpdateWithoutBusinessInput>;
};
export type UsageRecordUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.UsageRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.UsageRecordUpdateManyMutationInput, Prisma.UsageRecordUncheckedUpdateManyWithoutBusinessInput>;
};
export type UsageRecordScalarWhereInput = {
    AND?: Prisma.UsageRecordScalarWhereInput | Prisma.UsageRecordScalarWhereInput[];
    OR?: Prisma.UsageRecordScalarWhereInput[];
    NOT?: Prisma.UsageRecordScalarWhereInput | Prisma.UsageRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"UsageRecord"> | string;
    businessId?: Prisma.StringFilter<"UsageRecord"> | string;
    type?: Prisma.EnumUsageTypeFilter<"UsageRecord"> | $Enums.UsageType;
    quantity?: Prisma.IntFilter<"UsageRecord"> | number;
    unitCost?: Prisma.DecimalNullableFilter<"UsageRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.JsonNullableFilter<"UsageRecord">;
    createdAt?: Prisma.DateTimeFilter<"UsageRecord"> | Date | string;
};
export type UsageRecordCreateManyBusinessInput = {
    id?: string;
    type: $Enums.UsageType;
    quantity?: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type UsageRecordUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageRecordUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageRecordUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsageRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    type?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usageRecord"]>;
export type UsageRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    type?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usageRecord"]>;
export type UsageRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    type?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usageRecord"]>;
export type UsageRecordSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    type?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type UsageRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "type" | "quantity" | "unitCost" | "metadata" | "createdAt", ExtArgs["result"]["usageRecord"]>;
export type UsageRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type UsageRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type UsageRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $UsageRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UsageRecord";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        type: $Enums.UsageType;
        quantity: number;
        unitCost: runtime.Decimal | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["usageRecord"]>;
    composites: {};
};
export type UsageRecordGetPayload<S extends boolean | null | undefined | UsageRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload, S>;
export type UsageRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsageRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsageRecordCountAggregateInputType | true;
};
export interface UsageRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UsageRecord'];
        meta: {
            name: 'UsageRecord';
        };
    };
    findUnique<T extends UsageRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, UsageRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsageRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsageRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsageRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, UsageRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsageRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsageRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsageRecordFindManyArgs>(args?: Prisma.SelectSubset<T, UsageRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsageRecordCreateArgs>(args: Prisma.SelectSubset<T, UsageRecordCreateArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsageRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, UsageRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsageRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsageRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsageRecordDeleteArgs>(args: Prisma.SelectSubset<T, UsageRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsageRecordUpdateArgs>(args: Prisma.SelectSubset<T, UsageRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsageRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsageRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsageRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, UsageRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsageRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsageRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsageRecordUpsertArgs>(args: Prisma.SelectSubset<T, UsageRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__UsageRecordClient<runtime.Types.Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsageRecordCountArgs>(args?: Prisma.Subset<T, UsageRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsageRecordCountAggregateOutputType> : number>;
    aggregate<T extends UsageRecordAggregateArgs>(args: Prisma.Subset<T, UsageRecordAggregateArgs>): Prisma.PrismaPromise<GetUsageRecordAggregateType<T>>;
    groupBy<T extends UsageRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsageRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: UsageRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsageRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsageRecordFieldRefs;
}
export interface Prisma__UsageRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsageRecordFieldRefs {
    readonly id: Prisma.FieldRef<"UsageRecord", 'String'>;
    readonly businessId: Prisma.FieldRef<"UsageRecord", 'String'>;
    readonly type: Prisma.FieldRef<"UsageRecord", 'UsageType'>;
    readonly quantity: Prisma.FieldRef<"UsageRecord", 'Int'>;
    readonly unitCost: Prisma.FieldRef<"UsageRecord", 'Decimal'>;
    readonly metadata: Prisma.FieldRef<"UsageRecord", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"UsageRecord", 'DateTime'>;
}
export type UsageRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    where: Prisma.UsageRecordWhereUniqueInput;
};
export type UsageRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    where: Prisma.UsageRecordWhereUniqueInput;
};
export type UsageRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    where?: Prisma.UsageRecordWhereInput;
    orderBy?: Prisma.UsageRecordOrderByWithRelationInput | Prisma.UsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.UsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsageRecordScalarFieldEnum | Prisma.UsageRecordScalarFieldEnum[];
};
export type UsageRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    where?: Prisma.UsageRecordWhereInput;
    orderBy?: Prisma.UsageRecordOrderByWithRelationInput | Prisma.UsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.UsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsageRecordScalarFieldEnum | Prisma.UsageRecordScalarFieldEnum[];
};
export type UsageRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    where?: Prisma.UsageRecordWhereInput;
    orderBy?: Prisma.UsageRecordOrderByWithRelationInput | Prisma.UsageRecordOrderByWithRelationInput[];
    cursor?: Prisma.UsageRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsageRecordScalarFieldEnum | Prisma.UsageRecordScalarFieldEnum[];
};
export type UsageRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsageRecordCreateInput, Prisma.UsageRecordUncheckedCreateInput>;
};
export type UsageRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsageRecordCreateManyInput | Prisma.UsageRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsageRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    data: Prisma.UsageRecordCreateManyInput | Prisma.UsageRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UsageRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UsageRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsageRecordUpdateInput, Prisma.UsageRecordUncheckedUpdateInput>;
    where: Prisma.UsageRecordWhereUniqueInput;
};
export type UsageRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsageRecordUpdateManyMutationInput, Prisma.UsageRecordUncheckedUpdateManyInput>;
    where?: Prisma.UsageRecordWhereInput;
    limit?: number;
};
export type UsageRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsageRecordUpdateManyMutationInput, Prisma.UsageRecordUncheckedUpdateManyInput>;
    where?: Prisma.UsageRecordWhereInput;
    limit?: number;
    include?: Prisma.UsageRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UsageRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    where: Prisma.UsageRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsageRecordCreateInput, Prisma.UsageRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsageRecordUpdateInput, Prisma.UsageRecordUncheckedUpdateInput>;
};
export type UsageRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
    where: Prisma.UsageRecordWhereUniqueInput;
};
export type UsageRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsageRecordWhereInput;
    limit?: number;
};
export type UsageRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsageRecordSelect<ExtArgs> | null;
    omit?: Prisma.UsageRecordOmit<ExtArgs> | null;
    include?: Prisma.UsageRecordInclude<ExtArgs> | null;
};
