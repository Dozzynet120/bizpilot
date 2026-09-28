import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FAQModel = runtime.Types.Result.DefaultSelection<Prisma.$FAQPayload>;
export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null;
    _min: FAQMinAggregateOutputType | null;
    _max: FAQMaxAggregateOutputType | null;
};
export type FAQMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    question: string | null;
    answer: string | null;
    category: string | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FAQMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    question: string | null;
    answer: string | null;
    category: string | null;
    active: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FAQCountAggregateOutputType = {
    id: number;
    businessId: number;
    question: number;
    answer: number;
    category: number;
    active: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FAQMinAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    answer?: true;
    category?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FAQMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    answer?: true;
    category?: true;
    active?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FAQCountAggregateInputType = {
    id?: true;
    businessId?: true;
    question?: true;
    answer?: true;
    category?: true;
    active?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FAQAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FAQWhereInput;
    orderBy?: Prisma.FAQOrderByWithRelationInput | Prisma.FAQOrderByWithRelationInput[];
    cursor?: Prisma.FAQWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FAQCountAggregateInputType;
    _min?: FAQMinAggregateInputType;
    _max?: FAQMaxAggregateInputType;
};
export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
    [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFAQ[P]> : Prisma.GetScalarType<T[P], AggregateFAQ[P]>;
};
export type FAQGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FAQWhereInput;
    orderBy?: Prisma.FAQOrderByWithAggregationInput | Prisma.FAQOrderByWithAggregationInput[];
    by: Prisma.FAQScalarFieldEnum[] | Prisma.FAQScalarFieldEnum;
    having?: Prisma.FAQScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FAQCountAggregateInputType | true;
    _min?: FAQMinAggregateInputType;
    _max?: FAQMaxAggregateInputType;
};
export type FAQGroupByOutputType = {
    id: string;
    businessId: string;
    question: string;
    answer: string;
    category: string | null;
    active: boolean;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FAQCountAggregateOutputType | null;
    _min: FAQMinAggregateOutputType | null;
    _max: FAQMaxAggregateOutputType | null;
};
export type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FAQGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FAQGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FAQGroupByOutputType[P]>;
}>>;
export type FAQWhereInput = {
    AND?: Prisma.FAQWhereInput | Prisma.FAQWhereInput[];
    OR?: Prisma.FAQWhereInput[];
    NOT?: Prisma.FAQWhereInput | Prisma.FAQWhereInput[];
    id?: Prisma.StringFilter<"FAQ"> | string;
    businessId?: Prisma.StringFilter<"FAQ"> | string;
    question?: Prisma.StringFilter<"FAQ"> | string;
    answer?: Prisma.StringFilter<"FAQ"> | string;
    category?: Prisma.StringNullableFilter<"FAQ"> | string | null;
    active?: Prisma.BoolFilter<"FAQ"> | boolean;
    metadata?: Prisma.JsonNullableFilter<"FAQ">;
    createdAt?: Prisma.DateTimeFilter<"FAQ"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FAQ"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
};
export type FAQOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
};
export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FAQWhereInput | Prisma.FAQWhereInput[];
    OR?: Prisma.FAQWhereInput[];
    NOT?: Prisma.FAQWhereInput | Prisma.FAQWhereInput[];
    businessId?: Prisma.StringFilter<"FAQ"> | string;
    question?: Prisma.StringFilter<"FAQ"> | string;
    answer?: Prisma.StringFilter<"FAQ"> | string;
    category?: Prisma.StringNullableFilter<"FAQ"> | string | null;
    active?: Prisma.BoolFilter<"FAQ"> | boolean;
    metadata?: Prisma.JsonNullableFilter<"FAQ">;
    createdAt?: Prisma.DateTimeFilter<"FAQ"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FAQ"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
}, "id">;
export type FAQOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    active?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FAQCountOrderByAggregateInput;
    _max?: Prisma.FAQMaxOrderByAggregateInput;
    _min?: Prisma.FAQMinOrderByAggregateInput;
};
export type FAQScalarWhereWithAggregatesInput = {
    AND?: Prisma.FAQScalarWhereWithAggregatesInput | Prisma.FAQScalarWhereWithAggregatesInput[];
    OR?: Prisma.FAQScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FAQScalarWhereWithAggregatesInput | Prisma.FAQScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FAQ"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"FAQ"> | string;
    question?: Prisma.StringWithAggregatesFilter<"FAQ"> | string;
    answer?: Prisma.StringWithAggregatesFilter<"FAQ"> | string;
    category?: Prisma.StringNullableWithAggregatesFilter<"FAQ"> | string | null;
    active?: Prisma.BoolWithAggregatesFilter<"FAQ"> | boolean;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"FAQ">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FAQ"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FAQ"> | Date | string;
};
export type FAQCreateInput = {
    id?: string;
    question: string;
    answer: string;
    category?: string | null;
    active?: boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutFaqsInput;
};
export type FAQUncheckedCreateInput = {
    id?: string;
    businessId: string;
    question: string;
    answer: string;
    category?: string | null;
    active?: boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FAQUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutFaqsNestedInput;
};
export type FAQUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FAQCreateManyInput = {
    id?: string;
    businessId: string;
    question: string;
    answer: string;
    category?: string | null;
    active?: boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FAQUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FAQUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FAQListRelationFilter = {
    every?: Prisma.FAQWhereInput;
    some?: Prisma.FAQWhereInput;
    none?: Prisma.FAQWhereInput;
};
export type FAQOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FAQCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FAQMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FAQMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FAQCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.FAQCreateWithoutBusinessInput, Prisma.FAQUncheckedCreateWithoutBusinessInput> | Prisma.FAQCreateWithoutBusinessInput[] | Prisma.FAQUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FAQCreateOrConnectWithoutBusinessInput | Prisma.FAQCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.FAQCreateManyBusinessInputEnvelope;
    connect?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
};
export type FAQUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.FAQCreateWithoutBusinessInput, Prisma.FAQUncheckedCreateWithoutBusinessInput> | Prisma.FAQCreateWithoutBusinessInput[] | Prisma.FAQUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FAQCreateOrConnectWithoutBusinessInput | Prisma.FAQCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.FAQCreateManyBusinessInputEnvelope;
    connect?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
};
export type FAQUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.FAQCreateWithoutBusinessInput, Prisma.FAQUncheckedCreateWithoutBusinessInput> | Prisma.FAQCreateWithoutBusinessInput[] | Prisma.FAQUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FAQCreateOrConnectWithoutBusinessInput | Prisma.FAQCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.FAQUpsertWithWhereUniqueWithoutBusinessInput | Prisma.FAQUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.FAQCreateManyBusinessInputEnvelope;
    set?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    disconnect?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    delete?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    connect?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    update?: Prisma.FAQUpdateWithWhereUniqueWithoutBusinessInput | Prisma.FAQUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.FAQUpdateManyWithWhereWithoutBusinessInput | Prisma.FAQUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.FAQScalarWhereInput | Prisma.FAQScalarWhereInput[];
};
export type FAQUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.FAQCreateWithoutBusinessInput, Prisma.FAQUncheckedCreateWithoutBusinessInput> | Prisma.FAQCreateWithoutBusinessInput[] | Prisma.FAQUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.FAQCreateOrConnectWithoutBusinessInput | Prisma.FAQCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.FAQUpsertWithWhereUniqueWithoutBusinessInput | Prisma.FAQUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.FAQCreateManyBusinessInputEnvelope;
    set?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    disconnect?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    delete?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    connect?: Prisma.FAQWhereUniqueInput | Prisma.FAQWhereUniqueInput[];
    update?: Prisma.FAQUpdateWithWhereUniqueWithoutBusinessInput | Prisma.FAQUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.FAQUpdateManyWithWhereWithoutBusinessInput | Prisma.FAQUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.FAQScalarWhereInput | Prisma.FAQScalarWhereInput[];
};
export type FAQCreateWithoutBusinessInput = {
    id?: string;
    question: string;
    answer: string;
    category?: string | null;
    active?: boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FAQUncheckedCreateWithoutBusinessInput = {
    id?: string;
    question: string;
    answer: string;
    category?: string | null;
    active?: boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FAQCreateOrConnectWithoutBusinessInput = {
    where: Prisma.FAQWhereUniqueInput;
    create: Prisma.XOR<Prisma.FAQCreateWithoutBusinessInput, Prisma.FAQUncheckedCreateWithoutBusinessInput>;
};
export type FAQCreateManyBusinessInputEnvelope = {
    data: Prisma.FAQCreateManyBusinessInput | Prisma.FAQCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type FAQUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.FAQWhereUniqueInput;
    update: Prisma.XOR<Prisma.FAQUpdateWithoutBusinessInput, Prisma.FAQUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.FAQCreateWithoutBusinessInput, Prisma.FAQUncheckedCreateWithoutBusinessInput>;
};
export type FAQUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.FAQWhereUniqueInput;
    data: Prisma.XOR<Prisma.FAQUpdateWithoutBusinessInput, Prisma.FAQUncheckedUpdateWithoutBusinessInput>;
};
export type FAQUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.FAQScalarWhereInput;
    data: Prisma.XOR<Prisma.FAQUpdateManyMutationInput, Prisma.FAQUncheckedUpdateManyWithoutBusinessInput>;
};
export type FAQScalarWhereInput = {
    AND?: Prisma.FAQScalarWhereInput | Prisma.FAQScalarWhereInput[];
    OR?: Prisma.FAQScalarWhereInput[];
    NOT?: Prisma.FAQScalarWhereInput | Prisma.FAQScalarWhereInput[];
    id?: Prisma.StringFilter<"FAQ"> | string;
    businessId?: Prisma.StringFilter<"FAQ"> | string;
    question?: Prisma.StringFilter<"FAQ"> | string;
    answer?: Prisma.StringFilter<"FAQ"> | string;
    category?: Prisma.StringNullableFilter<"FAQ"> | string | null;
    active?: Prisma.BoolFilter<"FAQ"> | boolean;
    metadata?: Prisma.JsonNullableFilter<"FAQ">;
    createdAt?: Prisma.DateTimeFilter<"FAQ"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FAQ"> | Date | string;
};
export type FAQCreateManyBusinessInput = {
    id?: string;
    question: string;
    answer: string;
    category?: string | null;
    active?: boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FAQUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FAQUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FAQUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FAQSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    active?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fAQ"]>;
export type FAQSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    active?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fAQ"]>;
export type FAQSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    active?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fAQ"]>;
export type FAQSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    question?: boolean;
    answer?: boolean;
    category?: boolean;
    active?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FAQOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "question" | "answer" | "category" | "active" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["fAQ"]>;
export type FAQInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type FAQIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type FAQIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $FAQPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FAQ";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        question: string;
        answer: string;
        category: string | null;
        active: boolean;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["fAQ"]>;
    composites: {};
};
export type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FAQPayload, S>;
export type FAQCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FAQCountAggregateInputType | true;
};
export interface FAQDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FAQ'];
        meta: {
            name: 'FAQ';
        };
    };
    findUnique<T extends FAQFindUniqueArgs>(args: Prisma.SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FAQFindFirstArgs>(args?: Prisma.SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FAQFindManyArgs>(args?: Prisma.SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FAQCreateArgs>(args: Prisma.SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FAQCreateManyArgs>(args?: Prisma.SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FAQDeleteArgs>(args: Prisma.SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FAQUpdateArgs>(args: Prisma.SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FAQDeleteManyArgs>(args?: Prisma.SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FAQUpdateManyArgs>(args: Prisma.SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FAQUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FAQUpsertArgs>(args: Prisma.SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma.Prisma__FAQClient<runtime.Types.Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FAQCountArgs>(args?: Prisma.Subset<T, FAQCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FAQCountAggregateOutputType> : number>;
    aggregate<T extends FAQAggregateArgs>(args: Prisma.Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>;
    groupBy<T extends FAQGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FAQGroupByArgs['orderBy'];
    } : {
        orderBy?: FAQGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FAQFieldRefs;
}
export interface Prisma__FAQClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FAQFieldRefs {
    readonly id: Prisma.FieldRef<"FAQ", 'String'>;
    readonly businessId: Prisma.FieldRef<"FAQ", 'String'>;
    readonly question: Prisma.FieldRef<"FAQ", 'String'>;
    readonly answer: Prisma.FieldRef<"FAQ", 'String'>;
    readonly category: Prisma.FieldRef<"FAQ", 'String'>;
    readonly active: Prisma.FieldRef<"FAQ", 'Boolean'>;
    readonly metadata: Prisma.FieldRef<"FAQ", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"FAQ", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FAQ", 'DateTime'>;
}
export type FAQFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    where: Prisma.FAQWhereUniqueInput;
};
export type FAQFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    where: Prisma.FAQWhereUniqueInput;
};
export type FAQFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    where?: Prisma.FAQWhereInput;
    orderBy?: Prisma.FAQOrderByWithRelationInput | Prisma.FAQOrderByWithRelationInput[];
    cursor?: Prisma.FAQWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FAQScalarFieldEnum | Prisma.FAQScalarFieldEnum[];
};
export type FAQFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    where?: Prisma.FAQWhereInput;
    orderBy?: Prisma.FAQOrderByWithRelationInput | Prisma.FAQOrderByWithRelationInput[];
    cursor?: Prisma.FAQWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FAQScalarFieldEnum | Prisma.FAQScalarFieldEnum[];
};
export type FAQFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    where?: Prisma.FAQWhereInput;
    orderBy?: Prisma.FAQOrderByWithRelationInput | Prisma.FAQOrderByWithRelationInput[];
    cursor?: Prisma.FAQWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FAQScalarFieldEnum | Prisma.FAQScalarFieldEnum[];
};
export type FAQCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FAQCreateInput, Prisma.FAQUncheckedCreateInput>;
};
export type FAQCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FAQCreateManyInput | Prisma.FAQCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FAQCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    data: Prisma.FAQCreateManyInput | Prisma.FAQCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FAQIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FAQUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FAQUpdateInput, Prisma.FAQUncheckedUpdateInput>;
    where: Prisma.FAQWhereUniqueInput;
};
export type FAQUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FAQUpdateManyMutationInput, Prisma.FAQUncheckedUpdateManyInput>;
    where?: Prisma.FAQWhereInput;
    limit?: number;
};
export type FAQUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FAQUpdateManyMutationInput, Prisma.FAQUncheckedUpdateManyInput>;
    where?: Prisma.FAQWhereInput;
    limit?: number;
    include?: Prisma.FAQIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FAQUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    where: Prisma.FAQWhereUniqueInput;
    create: Prisma.XOR<Prisma.FAQCreateInput, Prisma.FAQUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FAQUpdateInput, Prisma.FAQUncheckedUpdateInput>;
};
export type FAQDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
    where: Prisma.FAQWhereUniqueInput;
};
export type FAQDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FAQWhereInput;
    limit?: number;
};
export type FAQDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FAQSelect<ExtArgs> | null;
    omit?: Prisma.FAQOmit<ExtArgs> | null;
    include?: Prisma.FAQInclude<ExtArgs> | null;
};
