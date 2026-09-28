import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AutomationModel = runtime.Types.Result.DefaultSelection<Prisma.$AutomationPayload>;
export type AggregateAutomation = {
    _count: AutomationCountAggregateOutputType | null;
    _avg: AutomationAvgAggregateOutputType | null;
    _sum: AutomationSumAggregateOutputType | null;
    _min: AutomationMinAggregateOutputType | null;
    _max: AutomationMaxAggregateOutputType | null;
};
export type AutomationAvgAggregateOutputType = {
    runCount: number | null;
};
export type AutomationSumAggregateOutputType = {
    runCount: number | null;
};
export type AutomationMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    aiAgentId: string | null;
    name: string | null;
    description: string | null;
    status: $Enums.AutomationStatus | null;
    trigger: string | null;
    action: string | null;
    lastRunAt: Date | null;
    nextRunAt: Date | null;
    runCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AutomationMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    aiAgentId: string | null;
    name: string | null;
    description: string | null;
    status: $Enums.AutomationStatus | null;
    trigger: string | null;
    action: string | null;
    lastRunAt: Date | null;
    nextRunAt: Date | null;
    runCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AutomationCountAggregateOutputType = {
    id: number;
    businessId: number;
    aiAgentId: number;
    name: number;
    description: number;
    status: number;
    trigger: number;
    action: number;
    configuration: number;
    lastRunAt: number;
    nextRunAt: number;
    runCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AutomationAvgAggregateInputType = {
    runCount?: true;
};
export type AutomationSumAggregateInputType = {
    runCount?: true;
};
export type AutomationMinAggregateInputType = {
    id?: true;
    businessId?: true;
    aiAgentId?: true;
    name?: true;
    description?: true;
    status?: true;
    trigger?: true;
    action?: true;
    lastRunAt?: true;
    nextRunAt?: true;
    runCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AutomationMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    aiAgentId?: true;
    name?: true;
    description?: true;
    status?: true;
    trigger?: true;
    action?: true;
    lastRunAt?: true;
    nextRunAt?: true;
    runCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AutomationCountAggregateInputType = {
    id?: true;
    businessId?: true;
    aiAgentId?: true;
    name?: true;
    description?: true;
    status?: true;
    trigger?: true;
    action?: true;
    configuration?: true;
    lastRunAt?: true;
    nextRunAt?: true;
    runCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AutomationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutomationWhereInput;
    orderBy?: Prisma.AutomationOrderByWithRelationInput | Prisma.AutomationOrderByWithRelationInput[];
    cursor?: Prisma.AutomationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AutomationCountAggregateInputType;
    _avg?: AutomationAvgAggregateInputType;
    _sum?: AutomationSumAggregateInputType;
    _min?: AutomationMinAggregateInputType;
    _max?: AutomationMaxAggregateInputType;
};
export type GetAutomationAggregateType<T extends AutomationAggregateArgs> = {
    [P in keyof T & keyof AggregateAutomation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAutomation[P]> : Prisma.GetScalarType<T[P], AggregateAutomation[P]>;
};
export type AutomationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutomationWhereInput;
    orderBy?: Prisma.AutomationOrderByWithAggregationInput | Prisma.AutomationOrderByWithAggregationInput[];
    by: Prisma.AutomationScalarFieldEnum[] | Prisma.AutomationScalarFieldEnum;
    having?: Prisma.AutomationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AutomationCountAggregateInputType | true;
    _avg?: AutomationAvgAggregateInputType;
    _sum?: AutomationSumAggregateInputType;
    _min?: AutomationMinAggregateInputType;
    _max?: AutomationMaxAggregateInputType;
};
export type AutomationGroupByOutputType = {
    id: string;
    businessId: string;
    aiAgentId: string | null;
    name: string;
    description: string | null;
    status: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration: runtime.JsonValue | null;
    lastRunAt: Date | null;
    nextRunAt: Date | null;
    runCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: AutomationCountAggregateOutputType | null;
    _avg: AutomationAvgAggregateOutputType | null;
    _sum: AutomationSumAggregateOutputType | null;
    _min: AutomationMinAggregateOutputType | null;
    _max: AutomationMaxAggregateOutputType | null;
};
export type GetAutomationGroupByPayload<T extends AutomationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AutomationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AutomationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AutomationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AutomationGroupByOutputType[P]>;
}>>;
export type AutomationWhereInput = {
    AND?: Prisma.AutomationWhereInput | Prisma.AutomationWhereInput[];
    OR?: Prisma.AutomationWhereInput[];
    NOT?: Prisma.AutomationWhereInput | Prisma.AutomationWhereInput[];
    id?: Prisma.StringFilter<"Automation"> | string;
    businessId?: Prisma.StringFilter<"Automation"> | string;
    aiAgentId?: Prisma.StringNullableFilter<"Automation"> | string | null;
    name?: Prisma.StringFilter<"Automation"> | string;
    description?: Prisma.StringNullableFilter<"Automation"> | string | null;
    status?: Prisma.EnumAutomationStatusFilter<"Automation"> | $Enums.AutomationStatus;
    trigger?: Prisma.StringFilter<"Automation"> | string;
    action?: Prisma.StringFilter<"Automation"> | string;
    configuration?: Prisma.JsonNullableFilter<"Automation">;
    lastRunAt?: Prisma.DateTimeNullableFilter<"Automation"> | Date | string | null;
    nextRunAt?: Prisma.DateTimeNullableFilter<"Automation"> | Date | string | null;
    runCount?: Prisma.IntFilter<"Automation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Automation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Automation"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    aiAgent?: Prisma.XOR<Prisma.AIAgentNullableScalarRelationFilter, Prisma.AIAgentWhereInput> | null;
};
export type AutomationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trigger?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    configuration?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastRunAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextRunAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    runCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    aiAgent?: Prisma.AIAgentOrderByWithRelationInput;
};
export type AutomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AutomationWhereInput | Prisma.AutomationWhereInput[];
    OR?: Prisma.AutomationWhereInput[];
    NOT?: Prisma.AutomationWhereInput | Prisma.AutomationWhereInput[];
    businessId?: Prisma.StringFilter<"Automation"> | string;
    aiAgentId?: Prisma.StringNullableFilter<"Automation"> | string | null;
    name?: Prisma.StringFilter<"Automation"> | string;
    description?: Prisma.StringNullableFilter<"Automation"> | string | null;
    status?: Prisma.EnumAutomationStatusFilter<"Automation"> | $Enums.AutomationStatus;
    trigger?: Prisma.StringFilter<"Automation"> | string;
    action?: Prisma.StringFilter<"Automation"> | string;
    configuration?: Prisma.JsonNullableFilter<"Automation">;
    lastRunAt?: Prisma.DateTimeNullableFilter<"Automation"> | Date | string | null;
    nextRunAt?: Prisma.DateTimeNullableFilter<"Automation"> | Date | string | null;
    runCount?: Prisma.IntFilter<"Automation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Automation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Automation"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    aiAgent?: Prisma.XOR<Prisma.AIAgentNullableScalarRelationFilter, Prisma.AIAgentWhereInput> | null;
}, "id">;
export type AutomationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trigger?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    configuration?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastRunAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextRunAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    runCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AutomationCountOrderByAggregateInput;
    _avg?: Prisma.AutomationAvgOrderByAggregateInput;
    _max?: Prisma.AutomationMaxOrderByAggregateInput;
    _min?: Prisma.AutomationMinOrderByAggregateInput;
    _sum?: Prisma.AutomationSumOrderByAggregateInput;
};
export type AutomationScalarWhereWithAggregatesInput = {
    AND?: Prisma.AutomationScalarWhereWithAggregatesInput | Prisma.AutomationScalarWhereWithAggregatesInput[];
    OR?: Prisma.AutomationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AutomationScalarWhereWithAggregatesInput | Prisma.AutomationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Automation"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Automation"> | string;
    aiAgentId?: Prisma.StringNullableWithAggregatesFilter<"Automation"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"Automation"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Automation"> | string | null;
    status?: Prisma.EnumAutomationStatusWithAggregatesFilter<"Automation"> | $Enums.AutomationStatus;
    trigger?: Prisma.StringWithAggregatesFilter<"Automation"> | string;
    action?: Prisma.StringWithAggregatesFilter<"Automation"> | string;
    configuration?: Prisma.JsonNullableWithAggregatesFilter<"Automation">;
    lastRunAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Automation"> | Date | string | null;
    nextRunAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Automation"> | Date | string | null;
    runCount?: Prisma.IntWithAggregatesFilter<"Automation"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Automation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Automation"> | Date | string;
};
export type AutomationCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutAutomationsInput;
    aiAgent?: Prisma.AIAgentCreateNestedOneWithoutAutomationsInput;
};
export type AutomationUncheckedCreateInput = {
    id?: string;
    businessId: string;
    aiAgentId?: string | null;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AutomationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutAutomationsNestedInput;
    aiAgent?: Prisma.AIAgentUpdateOneWithoutAutomationsNestedInput;
};
export type AutomationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AutomationCreateManyInput = {
    id?: string;
    businessId: string;
    aiAgentId?: string | null;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AutomationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AutomationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AutomationListRelationFilter = {
    every?: Prisma.AutomationWhereInput;
    some?: Prisma.AutomationWhereInput;
    none?: Prisma.AutomationWhereInput;
};
export type AutomationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AutomationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trigger?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    configuration?: Prisma.SortOrder;
    lastRunAt?: Prisma.SortOrder;
    nextRunAt?: Prisma.SortOrder;
    runCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AutomationAvgOrderByAggregateInput = {
    runCount?: Prisma.SortOrder;
};
export type AutomationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trigger?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    lastRunAt?: Prisma.SortOrder;
    nextRunAt?: Prisma.SortOrder;
    runCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AutomationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    aiAgentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trigger?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    lastRunAt?: Prisma.SortOrder;
    nextRunAt?: Prisma.SortOrder;
    runCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AutomationSumOrderByAggregateInput = {
    runCount?: Prisma.SortOrder;
};
export type AutomationCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutBusinessInput, Prisma.AutomationUncheckedCreateWithoutBusinessInput> | Prisma.AutomationCreateWithoutBusinessInput[] | Prisma.AutomationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutBusinessInput | Prisma.AutomationCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.AutomationCreateManyBusinessInputEnvelope;
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
};
export type AutomationUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutBusinessInput, Prisma.AutomationUncheckedCreateWithoutBusinessInput> | Prisma.AutomationCreateWithoutBusinessInput[] | Prisma.AutomationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutBusinessInput | Prisma.AutomationCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.AutomationCreateManyBusinessInputEnvelope;
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
};
export type AutomationUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutBusinessInput, Prisma.AutomationUncheckedCreateWithoutBusinessInput> | Prisma.AutomationCreateWithoutBusinessInput[] | Prisma.AutomationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutBusinessInput | Prisma.AutomationCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.AutomationUpsertWithWhereUniqueWithoutBusinessInput | Prisma.AutomationUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.AutomationCreateManyBusinessInputEnvelope;
    set?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    disconnect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    delete?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    update?: Prisma.AutomationUpdateWithWhereUniqueWithoutBusinessInput | Prisma.AutomationUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.AutomationUpdateManyWithWhereWithoutBusinessInput | Prisma.AutomationUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.AutomationScalarWhereInput | Prisma.AutomationScalarWhereInput[];
};
export type AutomationUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutBusinessInput, Prisma.AutomationUncheckedCreateWithoutBusinessInput> | Prisma.AutomationCreateWithoutBusinessInput[] | Prisma.AutomationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutBusinessInput | Prisma.AutomationCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.AutomationUpsertWithWhereUniqueWithoutBusinessInput | Prisma.AutomationUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.AutomationCreateManyBusinessInputEnvelope;
    set?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    disconnect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    delete?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    update?: Prisma.AutomationUpdateWithWhereUniqueWithoutBusinessInput | Prisma.AutomationUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.AutomationUpdateManyWithWhereWithoutBusinessInput | Prisma.AutomationUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.AutomationScalarWhereInput | Prisma.AutomationScalarWhereInput[];
};
export type AutomationCreateNestedManyWithoutAiAgentInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutAiAgentInput, Prisma.AutomationUncheckedCreateWithoutAiAgentInput> | Prisma.AutomationCreateWithoutAiAgentInput[] | Prisma.AutomationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutAiAgentInput | Prisma.AutomationCreateOrConnectWithoutAiAgentInput[];
    createMany?: Prisma.AutomationCreateManyAiAgentInputEnvelope;
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
};
export type AutomationUncheckedCreateNestedManyWithoutAiAgentInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutAiAgentInput, Prisma.AutomationUncheckedCreateWithoutAiAgentInput> | Prisma.AutomationCreateWithoutAiAgentInput[] | Prisma.AutomationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutAiAgentInput | Prisma.AutomationCreateOrConnectWithoutAiAgentInput[];
    createMany?: Prisma.AutomationCreateManyAiAgentInputEnvelope;
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
};
export type AutomationUpdateManyWithoutAiAgentNestedInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutAiAgentInput, Prisma.AutomationUncheckedCreateWithoutAiAgentInput> | Prisma.AutomationCreateWithoutAiAgentInput[] | Prisma.AutomationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutAiAgentInput | Prisma.AutomationCreateOrConnectWithoutAiAgentInput[];
    upsert?: Prisma.AutomationUpsertWithWhereUniqueWithoutAiAgentInput | Prisma.AutomationUpsertWithWhereUniqueWithoutAiAgentInput[];
    createMany?: Prisma.AutomationCreateManyAiAgentInputEnvelope;
    set?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    disconnect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    delete?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    update?: Prisma.AutomationUpdateWithWhereUniqueWithoutAiAgentInput | Prisma.AutomationUpdateWithWhereUniqueWithoutAiAgentInput[];
    updateMany?: Prisma.AutomationUpdateManyWithWhereWithoutAiAgentInput | Prisma.AutomationUpdateManyWithWhereWithoutAiAgentInput[];
    deleteMany?: Prisma.AutomationScalarWhereInput | Prisma.AutomationScalarWhereInput[];
};
export type AutomationUncheckedUpdateManyWithoutAiAgentNestedInput = {
    create?: Prisma.XOR<Prisma.AutomationCreateWithoutAiAgentInput, Prisma.AutomationUncheckedCreateWithoutAiAgentInput> | Prisma.AutomationCreateWithoutAiAgentInput[] | Prisma.AutomationUncheckedCreateWithoutAiAgentInput[];
    connectOrCreate?: Prisma.AutomationCreateOrConnectWithoutAiAgentInput | Prisma.AutomationCreateOrConnectWithoutAiAgentInput[];
    upsert?: Prisma.AutomationUpsertWithWhereUniqueWithoutAiAgentInput | Prisma.AutomationUpsertWithWhereUniqueWithoutAiAgentInput[];
    createMany?: Prisma.AutomationCreateManyAiAgentInputEnvelope;
    set?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    disconnect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    delete?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    connect?: Prisma.AutomationWhereUniqueInput | Prisma.AutomationWhereUniqueInput[];
    update?: Prisma.AutomationUpdateWithWhereUniqueWithoutAiAgentInput | Prisma.AutomationUpdateWithWhereUniqueWithoutAiAgentInput[];
    updateMany?: Prisma.AutomationUpdateManyWithWhereWithoutAiAgentInput | Prisma.AutomationUpdateManyWithWhereWithoutAiAgentInput[];
    deleteMany?: Prisma.AutomationScalarWhereInput | Prisma.AutomationScalarWhereInput[];
};
export type EnumAutomationStatusFieldUpdateOperationsInput = {
    set?: $Enums.AutomationStatus;
};
export type AutomationCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    aiAgent?: Prisma.AIAgentCreateNestedOneWithoutAutomationsInput;
};
export type AutomationUncheckedCreateWithoutBusinessInput = {
    id?: string;
    aiAgentId?: string | null;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AutomationCreateOrConnectWithoutBusinessInput = {
    where: Prisma.AutomationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutomationCreateWithoutBusinessInput, Prisma.AutomationUncheckedCreateWithoutBusinessInput>;
};
export type AutomationCreateManyBusinessInputEnvelope = {
    data: Prisma.AutomationCreateManyBusinessInput | Prisma.AutomationCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type AutomationUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.AutomationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AutomationUpdateWithoutBusinessInput, Prisma.AutomationUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.AutomationCreateWithoutBusinessInput, Prisma.AutomationUncheckedCreateWithoutBusinessInput>;
};
export type AutomationUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.AutomationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AutomationUpdateWithoutBusinessInput, Prisma.AutomationUncheckedUpdateWithoutBusinessInput>;
};
export type AutomationUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.AutomationScalarWhereInput;
    data: Prisma.XOR<Prisma.AutomationUpdateManyMutationInput, Prisma.AutomationUncheckedUpdateManyWithoutBusinessInput>;
};
export type AutomationScalarWhereInput = {
    AND?: Prisma.AutomationScalarWhereInput | Prisma.AutomationScalarWhereInput[];
    OR?: Prisma.AutomationScalarWhereInput[];
    NOT?: Prisma.AutomationScalarWhereInput | Prisma.AutomationScalarWhereInput[];
    id?: Prisma.StringFilter<"Automation"> | string;
    businessId?: Prisma.StringFilter<"Automation"> | string;
    aiAgentId?: Prisma.StringNullableFilter<"Automation"> | string | null;
    name?: Prisma.StringFilter<"Automation"> | string;
    description?: Prisma.StringNullableFilter<"Automation"> | string | null;
    status?: Prisma.EnumAutomationStatusFilter<"Automation"> | $Enums.AutomationStatus;
    trigger?: Prisma.StringFilter<"Automation"> | string;
    action?: Prisma.StringFilter<"Automation"> | string;
    configuration?: Prisma.JsonNullableFilter<"Automation">;
    lastRunAt?: Prisma.DateTimeNullableFilter<"Automation"> | Date | string | null;
    nextRunAt?: Prisma.DateTimeNullableFilter<"Automation"> | Date | string | null;
    runCount?: Prisma.IntFilter<"Automation"> | number;
    createdAt?: Prisma.DateTimeFilter<"Automation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Automation"> | Date | string;
};
export type AutomationCreateWithoutAiAgentInput = {
    id?: string;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutAutomationsInput;
};
export type AutomationUncheckedCreateWithoutAiAgentInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AutomationCreateOrConnectWithoutAiAgentInput = {
    where: Prisma.AutomationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutomationCreateWithoutAiAgentInput, Prisma.AutomationUncheckedCreateWithoutAiAgentInput>;
};
export type AutomationCreateManyAiAgentInputEnvelope = {
    data: Prisma.AutomationCreateManyAiAgentInput | Prisma.AutomationCreateManyAiAgentInput[];
    skipDuplicates?: boolean;
};
export type AutomationUpsertWithWhereUniqueWithoutAiAgentInput = {
    where: Prisma.AutomationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AutomationUpdateWithoutAiAgentInput, Prisma.AutomationUncheckedUpdateWithoutAiAgentInput>;
    create: Prisma.XOR<Prisma.AutomationCreateWithoutAiAgentInput, Prisma.AutomationUncheckedCreateWithoutAiAgentInput>;
};
export type AutomationUpdateWithWhereUniqueWithoutAiAgentInput = {
    where: Prisma.AutomationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AutomationUpdateWithoutAiAgentInput, Prisma.AutomationUncheckedUpdateWithoutAiAgentInput>;
};
export type AutomationUpdateManyWithWhereWithoutAiAgentInput = {
    where: Prisma.AutomationScalarWhereInput;
    data: Prisma.XOR<Prisma.AutomationUpdateManyMutationInput, Prisma.AutomationUncheckedUpdateManyWithoutAiAgentInput>;
};
export type AutomationCreateManyBusinessInput = {
    id?: string;
    aiAgentId?: string | null;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AutomationUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aiAgent?: Prisma.AIAgentUpdateOneWithoutAutomationsNestedInput;
};
export type AutomationUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AutomationUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    aiAgentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AutomationCreateManyAiAgentInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    status?: $Enums.AutomationStatus;
    trigger: string;
    action: string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Date | string | null;
    nextRunAt?: Date | string | null;
    runCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AutomationUpdateWithoutAiAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutAutomationsNestedInput;
};
export type AutomationUncheckedUpdateWithoutAiAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AutomationUncheckedUpdateManyWithoutAiAgentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAutomationStatusFieldUpdateOperationsInput | $Enums.AutomationStatus;
    trigger?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    configuration?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    lastRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextRunAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AutomationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    aiAgentId?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    trigger?: boolean;
    action?: boolean;
    configuration?: boolean;
    lastRunAt?: boolean;
    nextRunAt?: boolean;
    runCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Automation$aiAgentArgs<ExtArgs>;
}, ExtArgs["result"]["automation"]>;
export type AutomationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    aiAgentId?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    trigger?: boolean;
    action?: boolean;
    configuration?: boolean;
    lastRunAt?: boolean;
    nextRunAt?: boolean;
    runCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Automation$aiAgentArgs<ExtArgs>;
}, ExtArgs["result"]["automation"]>;
export type AutomationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    aiAgentId?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    trigger?: boolean;
    action?: boolean;
    configuration?: boolean;
    lastRunAt?: boolean;
    nextRunAt?: boolean;
    runCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Automation$aiAgentArgs<ExtArgs>;
}, ExtArgs["result"]["automation"]>;
export type AutomationSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    aiAgentId?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    trigger?: boolean;
    action?: boolean;
    configuration?: boolean;
    lastRunAt?: boolean;
    nextRunAt?: boolean;
    runCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AutomationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "aiAgentId" | "name" | "description" | "status" | "trigger" | "action" | "configuration" | "lastRunAt" | "nextRunAt" | "runCount" | "createdAt" | "updatedAt", ExtArgs["result"]["automation"]>;
export type AutomationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Automation$aiAgentArgs<ExtArgs>;
};
export type AutomationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Automation$aiAgentArgs<ExtArgs>;
};
export type AutomationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    aiAgent?: boolean | Prisma.Automation$aiAgentArgs<ExtArgs>;
};
export type $AutomationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Automation";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        aiAgent: Prisma.$AIAgentPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        aiAgentId: string | null;
        name: string;
        description: string | null;
        status: $Enums.AutomationStatus;
        trigger: string;
        action: string;
        configuration: runtime.JsonValue | null;
        lastRunAt: Date | null;
        nextRunAt: Date | null;
        runCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["automation"]>;
    composites: {};
};
export type AutomationGetPayload<S extends boolean | null | undefined | AutomationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AutomationPayload, S>;
export type AutomationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AutomationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AutomationCountAggregateInputType | true;
};
export interface AutomationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Automation'];
        meta: {
            name: 'Automation';
        };
    };
    findUnique<T extends AutomationFindUniqueArgs>(args: Prisma.SelectSubset<T, AutomationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AutomationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AutomationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AutomationFindFirstArgs>(args?: Prisma.SelectSubset<T, AutomationFindFirstArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AutomationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AutomationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AutomationFindManyArgs>(args?: Prisma.SelectSubset<T, AutomationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AutomationCreateArgs>(args: Prisma.SelectSubset<T, AutomationCreateArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AutomationCreateManyArgs>(args?: Prisma.SelectSubset<T, AutomationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AutomationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AutomationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AutomationDeleteArgs>(args: Prisma.SelectSubset<T, AutomationDeleteArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AutomationUpdateArgs>(args: Prisma.SelectSubset<T, AutomationUpdateArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AutomationDeleteManyArgs>(args?: Prisma.SelectSubset<T, AutomationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AutomationUpdateManyArgs>(args: Prisma.SelectSubset<T, AutomationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AutomationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AutomationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AutomationUpsertArgs>(args: Prisma.SelectSubset<T, AutomationUpsertArgs<ExtArgs>>): Prisma.Prisma__AutomationClient<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AutomationCountArgs>(args?: Prisma.Subset<T, AutomationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AutomationCountAggregateOutputType> : number>;
    aggregate<T extends AutomationAggregateArgs>(args: Prisma.Subset<T, AutomationAggregateArgs>): Prisma.PrismaPromise<GetAutomationAggregateType<T>>;
    groupBy<T extends AutomationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AutomationGroupByArgs['orderBy'];
    } : {
        orderBy?: AutomationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AutomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AutomationFieldRefs;
}
export interface Prisma__AutomationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    aiAgent<T extends Prisma.Automation$aiAgentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Automation$aiAgentArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AutomationFieldRefs {
    readonly id: Prisma.FieldRef<"Automation", 'String'>;
    readonly businessId: Prisma.FieldRef<"Automation", 'String'>;
    readonly aiAgentId: Prisma.FieldRef<"Automation", 'String'>;
    readonly name: Prisma.FieldRef<"Automation", 'String'>;
    readonly description: Prisma.FieldRef<"Automation", 'String'>;
    readonly status: Prisma.FieldRef<"Automation", 'AutomationStatus'>;
    readonly trigger: Prisma.FieldRef<"Automation", 'String'>;
    readonly action: Prisma.FieldRef<"Automation", 'String'>;
    readonly configuration: Prisma.FieldRef<"Automation", 'Json'>;
    readonly lastRunAt: Prisma.FieldRef<"Automation", 'DateTime'>;
    readonly nextRunAt: Prisma.FieldRef<"Automation", 'DateTime'>;
    readonly runCount: Prisma.FieldRef<"Automation", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Automation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Automation", 'DateTime'>;
}
export type AutomationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    where: Prisma.AutomationWhereUniqueInput;
};
export type AutomationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    where: Prisma.AutomationWhereUniqueInput;
};
export type AutomationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    where?: Prisma.AutomationWhereInput;
    orderBy?: Prisma.AutomationOrderByWithRelationInput | Prisma.AutomationOrderByWithRelationInput[];
    cursor?: Prisma.AutomationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AutomationScalarFieldEnum | Prisma.AutomationScalarFieldEnum[];
};
export type AutomationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    where?: Prisma.AutomationWhereInput;
    orderBy?: Prisma.AutomationOrderByWithRelationInput | Prisma.AutomationOrderByWithRelationInput[];
    cursor?: Prisma.AutomationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AutomationScalarFieldEnum | Prisma.AutomationScalarFieldEnum[];
};
export type AutomationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    where?: Prisma.AutomationWhereInput;
    orderBy?: Prisma.AutomationOrderByWithRelationInput | Prisma.AutomationOrderByWithRelationInput[];
    cursor?: Prisma.AutomationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AutomationScalarFieldEnum | Prisma.AutomationScalarFieldEnum[];
};
export type AutomationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AutomationCreateInput, Prisma.AutomationUncheckedCreateInput>;
};
export type AutomationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AutomationCreateManyInput | Prisma.AutomationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AutomationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    data: Prisma.AutomationCreateManyInput | Prisma.AutomationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AutomationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AutomationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AutomationUpdateInput, Prisma.AutomationUncheckedUpdateInput>;
    where: Prisma.AutomationWhereUniqueInput;
};
export type AutomationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AutomationUpdateManyMutationInput, Prisma.AutomationUncheckedUpdateManyInput>;
    where?: Prisma.AutomationWhereInput;
    limit?: number;
};
export type AutomationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AutomationUpdateManyMutationInput, Prisma.AutomationUncheckedUpdateManyInput>;
    where?: Prisma.AutomationWhereInput;
    limit?: number;
    include?: Prisma.AutomationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AutomationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    where: Prisma.AutomationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AutomationCreateInput, Prisma.AutomationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AutomationUpdateInput, Prisma.AutomationUncheckedUpdateInput>;
};
export type AutomationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
    where: Prisma.AutomationWhereUniqueInput;
};
export type AutomationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutomationWhereInput;
    limit?: number;
};
export type Automation$aiAgentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where?: Prisma.AIAgentWhereInput;
};
export type AutomationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AutomationSelect<ExtArgs> | null;
    omit?: Prisma.AutomationOmit<ExtArgs> | null;
    include?: Prisma.AutomationInclude<ExtArgs> | null;
};
