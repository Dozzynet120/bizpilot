import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AIAgentModel = runtime.Types.Result.DefaultSelection<Prisma.$AIAgentPayload>;
export type AggregateAIAgent = {
    _count: AIAgentCountAggregateOutputType | null;
    _avg: AIAgentAvgAggregateOutputType | null;
    _sum: AIAgentSumAggregateOutputType | null;
    _min: AIAgentMinAggregateOutputType | null;
    _max: AIAgentMaxAggregateOutputType | null;
};
export type AIAgentAvgAggregateOutputType = {
    temperature: number | null;
};
export type AIAgentSumAggregateOutputType = {
    temperature: number | null;
};
export type AIAgentMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    description: string | null;
    type: $Enums.AIAgentType | null;
    status: $Enums.AIAgentStatus | null;
    systemPrompt: string | null;
    instructions: string | null;
    model: string | null;
    temperature: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AIAgentMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    description: string | null;
    type: $Enums.AIAgentType | null;
    status: $Enums.AIAgentStatus | null;
    systemPrompt: string | null;
    instructions: string | null;
    model: string | null;
    temperature: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AIAgentCountAggregateOutputType = {
    id: number;
    businessId: number;
    name: number;
    description: number;
    type: number;
    status: number;
    systemPrompt: number;
    instructions: number;
    model: number;
    temperature: number;
    settings: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AIAgentAvgAggregateInputType = {
    temperature?: true;
};
export type AIAgentSumAggregateInputType = {
    temperature?: true;
};
export type AIAgentMinAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    description?: true;
    type?: true;
    status?: true;
    systemPrompt?: true;
    instructions?: true;
    model?: true;
    temperature?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AIAgentMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    description?: true;
    type?: true;
    status?: true;
    systemPrompt?: true;
    instructions?: true;
    model?: true;
    temperature?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AIAgentCountAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    description?: true;
    type?: true;
    status?: true;
    systemPrompt?: true;
    instructions?: true;
    model?: true;
    temperature?: true;
    settings?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AIAgentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIAgentWhereInput;
    orderBy?: Prisma.AIAgentOrderByWithRelationInput | Prisma.AIAgentOrderByWithRelationInput[];
    cursor?: Prisma.AIAgentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AIAgentCountAggregateInputType;
    _avg?: AIAgentAvgAggregateInputType;
    _sum?: AIAgentSumAggregateInputType;
    _min?: AIAgentMinAggregateInputType;
    _max?: AIAgentMaxAggregateInputType;
};
export type GetAIAgentAggregateType<T extends AIAgentAggregateArgs> = {
    [P in keyof T & keyof AggregateAIAgent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAIAgent[P]> : Prisma.GetScalarType<T[P], AggregateAIAgent[P]>;
};
export type AIAgentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIAgentWhereInput;
    orderBy?: Prisma.AIAgentOrderByWithAggregationInput | Prisma.AIAgentOrderByWithAggregationInput[];
    by: Prisma.AIAgentScalarFieldEnum[] | Prisma.AIAgentScalarFieldEnum;
    having?: Prisma.AIAgentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AIAgentCountAggregateInputType | true;
    _avg?: AIAgentAvgAggregateInputType;
    _sum?: AIAgentSumAggregateInputType;
    _min?: AIAgentMinAggregateInputType;
    _max?: AIAgentMaxAggregateInputType;
};
export type AIAgentGroupByOutputType = {
    id: string;
    businessId: string;
    name: string;
    description: string | null;
    type: $Enums.AIAgentType;
    status: $Enums.AIAgentStatus;
    systemPrompt: string | null;
    instructions: string | null;
    model: string | null;
    temperature: number | null;
    settings: runtime.JsonValue | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AIAgentCountAggregateOutputType | null;
    _avg: AIAgentAvgAggregateOutputType | null;
    _sum: AIAgentSumAggregateOutputType | null;
    _min: AIAgentMinAggregateOutputType | null;
    _max: AIAgentMaxAggregateOutputType | null;
};
export type GetAIAgentGroupByPayload<T extends AIAgentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AIAgentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AIAgentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AIAgentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AIAgentGroupByOutputType[P]>;
}>>;
export type AIAgentWhereInput = {
    AND?: Prisma.AIAgentWhereInput | Prisma.AIAgentWhereInput[];
    OR?: Prisma.AIAgentWhereInput[];
    NOT?: Prisma.AIAgentWhereInput | Prisma.AIAgentWhereInput[];
    id?: Prisma.StringFilter<"AIAgent"> | string;
    businessId?: Prisma.StringFilter<"AIAgent"> | string;
    name?: Prisma.StringFilter<"AIAgent"> | string;
    description?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    type?: Prisma.EnumAIAgentTypeFilter<"AIAgent"> | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFilter<"AIAgent"> | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    instructions?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    model?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    temperature?: Prisma.FloatNullableFilter<"AIAgent"> | number | null;
    settings?: Prisma.JsonNullableFilter<"AIAgent">;
    metadata?: Prisma.JsonNullableFilter<"AIAgent">;
    createdAt?: Prisma.DateTimeFilter<"AIAgent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AIAgent"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    conversations?: Prisma.ConversationListRelationFilter;
    automations?: Prisma.AutomationListRelationFilter;
};
export type AIAgentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    systemPrompt?: Prisma.SortOrderInput | Prisma.SortOrder;
    instructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    settings?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    conversations?: Prisma.ConversationOrderByRelationAggregateInput;
    automations?: Prisma.AutomationOrderByRelationAggregateInput;
};
export type AIAgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AIAgentWhereInput | Prisma.AIAgentWhereInput[];
    OR?: Prisma.AIAgentWhereInput[];
    NOT?: Prisma.AIAgentWhereInput | Prisma.AIAgentWhereInput[];
    businessId?: Prisma.StringFilter<"AIAgent"> | string;
    name?: Prisma.StringFilter<"AIAgent"> | string;
    description?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    type?: Prisma.EnumAIAgentTypeFilter<"AIAgent"> | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFilter<"AIAgent"> | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    instructions?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    model?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    temperature?: Prisma.FloatNullableFilter<"AIAgent"> | number | null;
    settings?: Prisma.JsonNullableFilter<"AIAgent">;
    metadata?: Prisma.JsonNullableFilter<"AIAgent">;
    createdAt?: Prisma.DateTimeFilter<"AIAgent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AIAgent"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    conversations?: Prisma.ConversationListRelationFilter;
    automations?: Prisma.AutomationListRelationFilter;
}, "id">;
export type AIAgentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    systemPrompt?: Prisma.SortOrderInput | Prisma.SortOrder;
    instructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperature?: Prisma.SortOrderInput | Prisma.SortOrder;
    settings?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AIAgentCountOrderByAggregateInput;
    _avg?: Prisma.AIAgentAvgOrderByAggregateInput;
    _max?: Prisma.AIAgentMaxOrderByAggregateInput;
    _min?: Prisma.AIAgentMinOrderByAggregateInput;
    _sum?: Prisma.AIAgentSumOrderByAggregateInput;
};
export type AIAgentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AIAgentScalarWhereWithAggregatesInput | Prisma.AIAgentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AIAgentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AIAgentScalarWhereWithAggregatesInput | Prisma.AIAgentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AIAgent"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"AIAgent"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AIAgent"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"AIAgent"> | string | null;
    type?: Prisma.EnumAIAgentTypeWithAggregatesFilter<"AIAgent"> | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusWithAggregatesFilter<"AIAgent"> | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.StringNullableWithAggregatesFilter<"AIAgent"> | string | null;
    instructions?: Prisma.StringNullableWithAggregatesFilter<"AIAgent"> | string | null;
    model?: Prisma.StringNullableWithAggregatesFilter<"AIAgent"> | string | null;
    temperature?: Prisma.FloatNullableWithAggregatesFilter<"AIAgent"> | number | null;
    settings?: Prisma.JsonNullableWithAggregatesFilter<"AIAgent">;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"AIAgent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AIAgent"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AIAgent"> | Date | string;
};
export type AIAgentCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutAiAgentsInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutAiAgentInput;
    automations?: Prisma.AutomationCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentUncheckedCreateInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutAiAgentInput;
    automations?: Prisma.AutomationUncheckedCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutAiAgentsNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutAiAgentNestedInput;
    automations?: Prisma.AutomationUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutAiAgentNestedInput;
    automations?: Prisma.AutomationUncheckedUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentCreateManyInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AIAgentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIAgentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIAgentListRelationFilter = {
    every?: Prisma.AIAgentWhereInput;
    some?: Prisma.AIAgentWhereInput;
    none?: Prisma.AIAgentWhereInput;
};
export type AIAgentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AIAgentNullableScalarRelationFilter = {
    is?: Prisma.AIAgentWhereInput | null;
    isNot?: Prisma.AIAgentWhereInput | null;
};
export type AIAgentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    systemPrompt?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    settings?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AIAgentAvgOrderByAggregateInput = {
    temperature?: Prisma.SortOrder;
};
export type AIAgentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    systemPrompt?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AIAgentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    systemPrompt?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AIAgentSumOrderByAggregateInput = {
    temperature?: Prisma.SortOrder;
};
export type AIAgentCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutBusinessInput, Prisma.AIAgentUncheckedCreateWithoutBusinessInput> | Prisma.AIAgentCreateWithoutBusinessInput[] | Prisma.AIAgentUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutBusinessInput | Prisma.AIAgentCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.AIAgentCreateManyBusinessInputEnvelope;
    connect?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
};
export type AIAgentUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutBusinessInput, Prisma.AIAgentUncheckedCreateWithoutBusinessInput> | Prisma.AIAgentCreateWithoutBusinessInput[] | Prisma.AIAgentUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutBusinessInput | Prisma.AIAgentCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.AIAgentCreateManyBusinessInputEnvelope;
    connect?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
};
export type AIAgentUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutBusinessInput, Prisma.AIAgentUncheckedCreateWithoutBusinessInput> | Prisma.AIAgentCreateWithoutBusinessInput[] | Prisma.AIAgentUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutBusinessInput | Prisma.AIAgentCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.AIAgentUpsertWithWhereUniqueWithoutBusinessInput | Prisma.AIAgentUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.AIAgentCreateManyBusinessInputEnvelope;
    set?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    disconnect?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    delete?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    connect?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    update?: Prisma.AIAgentUpdateWithWhereUniqueWithoutBusinessInput | Prisma.AIAgentUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.AIAgentUpdateManyWithWhereWithoutBusinessInput | Prisma.AIAgentUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.AIAgentScalarWhereInput | Prisma.AIAgentScalarWhereInput[];
};
export type AIAgentUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutBusinessInput, Prisma.AIAgentUncheckedCreateWithoutBusinessInput> | Prisma.AIAgentCreateWithoutBusinessInput[] | Prisma.AIAgentUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutBusinessInput | Prisma.AIAgentCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.AIAgentUpsertWithWhereUniqueWithoutBusinessInput | Prisma.AIAgentUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.AIAgentCreateManyBusinessInputEnvelope;
    set?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    disconnect?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    delete?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    connect?: Prisma.AIAgentWhereUniqueInput | Prisma.AIAgentWhereUniqueInput[];
    update?: Prisma.AIAgentUpdateWithWhereUniqueWithoutBusinessInput | Prisma.AIAgentUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.AIAgentUpdateManyWithWhereWithoutBusinessInput | Prisma.AIAgentUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.AIAgentScalarWhereInput | Prisma.AIAgentScalarWhereInput[];
};
export type AIAgentCreateNestedOneWithoutConversationsInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutConversationsInput, Prisma.AIAgentUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutConversationsInput;
    connect?: Prisma.AIAgentWhereUniqueInput;
};
export type AIAgentUpdateOneWithoutConversationsNestedInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutConversationsInput, Prisma.AIAgentUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutConversationsInput;
    upsert?: Prisma.AIAgentUpsertWithoutConversationsInput;
    disconnect?: Prisma.AIAgentWhereInput | boolean;
    delete?: Prisma.AIAgentWhereInput | boolean;
    connect?: Prisma.AIAgentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AIAgentUpdateToOneWithWhereWithoutConversationsInput, Prisma.AIAgentUpdateWithoutConversationsInput>, Prisma.AIAgentUncheckedUpdateWithoutConversationsInput>;
};
export type EnumAIAgentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AIAgentType;
};
export type EnumAIAgentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AIAgentStatus;
};
export type AIAgentCreateNestedOneWithoutAutomationsInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutAutomationsInput, Prisma.AIAgentUncheckedCreateWithoutAutomationsInput>;
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutAutomationsInput;
    connect?: Prisma.AIAgentWhereUniqueInput;
};
export type AIAgentUpdateOneWithoutAutomationsNestedInput = {
    create?: Prisma.XOR<Prisma.AIAgentCreateWithoutAutomationsInput, Prisma.AIAgentUncheckedCreateWithoutAutomationsInput>;
    connectOrCreate?: Prisma.AIAgentCreateOrConnectWithoutAutomationsInput;
    upsert?: Prisma.AIAgentUpsertWithoutAutomationsInput;
    disconnect?: Prisma.AIAgentWhereInput | boolean;
    delete?: Prisma.AIAgentWhereInput | boolean;
    connect?: Prisma.AIAgentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AIAgentUpdateToOneWithWhereWithoutAutomationsInput, Prisma.AIAgentUpdateWithoutAutomationsInput>, Prisma.AIAgentUncheckedUpdateWithoutAutomationsInput>;
};
export type AIAgentCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.ConversationCreateNestedManyWithoutAiAgentInput;
    automations?: Prisma.AutomationCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentUncheckedCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutAiAgentInput;
    automations?: Prisma.AutomationUncheckedCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentCreateOrConnectWithoutBusinessInput = {
    where: Prisma.AIAgentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIAgentCreateWithoutBusinessInput, Prisma.AIAgentUncheckedCreateWithoutBusinessInput>;
};
export type AIAgentCreateManyBusinessInputEnvelope = {
    data: Prisma.AIAgentCreateManyBusinessInput | Prisma.AIAgentCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type AIAgentUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.AIAgentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AIAgentUpdateWithoutBusinessInput, Prisma.AIAgentUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.AIAgentCreateWithoutBusinessInput, Prisma.AIAgentUncheckedCreateWithoutBusinessInput>;
};
export type AIAgentUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.AIAgentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AIAgentUpdateWithoutBusinessInput, Prisma.AIAgentUncheckedUpdateWithoutBusinessInput>;
};
export type AIAgentUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.AIAgentScalarWhereInput;
    data: Prisma.XOR<Prisma.AIAgentUpdateManyMutationInput, Prisma.AIAgentUncheckedUpdateManyWithoutBusinessInput>;
};
export type AIAgentScalarWhereInput = {
    AND?: Prisma.AIAgentScalarWhereInput | Prisma.AIAgentScalarWhereInput[];
    OR?: Prisma.AIAgentScalarWhereInput[];
    NOT?: Prisma.AIAgentScalarWhereInput | Prisma.AIAgentScalarWhereInput[];
    id?: Prisma.StringFilter<"AIAgent"> | string;
    businessId?: Prisma.StringFilter<"AIAgent"> | string;
    name?: Prisma.StringFilter<"AIAgent"> | string;
    description?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    type?: Prisma.EnumAIAgentTypeFilter<"AIAgent"> | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFilter<"AIAgent"> | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    instructions?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    model?: Prisma.StringNullableFilter<"AIAgent"> | string | null;
    temperature?: Prisma.FloatNullableFilter<"AIAgent"> | number | null;
    settings?: Prisma.JsonNullableFilter<"AIAgent">;
    metadata?: Prisma.JsonNullableFilter<"AIAgent">;
    createdAt?: Prisma.DateTimeFilter<"AIAgent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AIAgent"> | Date | string;
};
export type AIAgentCreateWithoutConversationsInput = {
    id?: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutAiAgentsInput;
    automations?: Prisma.AutomationCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentUncheckedCreateWithoutConversationsInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    automations?: Prisma.AutomationUncheckedCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentCreateOrConnectWithoutConversationsInput = {
    where: Prisma.AIAgentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIAgentCreateWithoutConversationsInput, Prisma.AIAgentUncheckedCreateWithoutConversationsInput>;
};
export type AIAgentUpsertWithoutConversationsInput = {
    update: Prisma.XOR<Prisma.AIAgentUpdateWithoutConversationsInput, Prisma.AIAgentUncheckedUpdateWithoutConversationsInput>;
    create: Prisma.XOR<Prisma.AIAgentCreateWithoutConversationsInput, Prisma.AIAgentUncheckedCreateWithoutConversationsInput>;
    where?: Prisma.AIAgentWhereInput;
};
export type AIAgentUpdateToOneWithWhereWithoutConversationsInput = {
    where?: Prisma.AIAgentWhereInput;
    data: Prisma.XOR<Prisma.AIAgentUpdateWithoutConversationsInput, Prisma.AIAgentUncheckedUpdateWithoutConversationsInput>;
};
export type AIAgentUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutAiAgentsNestedInput;
    automations?: Prisma.AutomationUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentUncheckedUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    automations?: Prisma.AutomationUncheckedUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentCreateWithoutAutomationsInput = {
    id?: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutAiAgentsInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentUncheckedCreateWithoutAutomationsInput = {
    id?: string;
    businessId: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutAiAgentInput;
};
export type AIAgentCreateOrConnectWithoutAutomationsInput = {
    where: Prisma.AIAgentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIAgentCreateWithoutAutomationsInput, Prisma.AIAgentUncheckedCreateWithoutAutomationsInput>;
};
export type AIAgentUpsertWithoutAutomationsInput = {
    update: Prisma.XOR<Prisma.AIAgentUpdateWithoutAutomationsInput, Prisma.AIAgentUncheckedUpdateWithoutAutomationsInput>;
    create: Prisma.XOR<Prisma.AIAgentCreateWithoutAutomationsInput, Prisma.AIAgentUncheckedCreateWithoutAutomationsInput>;
    where?: Prisma.AIAgentWhereInput;
};
export type AIAgentUpdateToOneWithWhereWithoutAutomationsInput = {
    where?: Prisma.AIAgentWhereInput;
    data: Prisma.XOR<Prisma.AIAgentUpdateWithoutAutomationsInput, Prisma.AIAgentUncheckedUpdateWithoutAutomationsInput>;
};
export type AIAgentUpdateWithoutAutomationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutAiAgentsNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentUncheckedUpdateWithoutAutomationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentCreateManyBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    type?: $Enums.AIAgentType;
    status?: $Enums.AIAgentStatus;
    systemPrompt?: string | null;
    instructions?: string | null;
    model?: string | null;
    temperature?: number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AIAgentUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.ConversationUpdateManyWithoutAiAgentNestedInput;
    automations?: Prisma.AutomationUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutAiAgentNestedInput;
    automations?: Prisma.AutomationUncheckedUpdateManyWithoutAiAgentNestedInput;
};
export type AIAgentUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumAIAgentTypeFieldUpdateOperationsInput | $Enums.AIAgentType;
    status?: Prisma.EnumAIAgentStatusFieldUpdateOperationsInput | $Enums.AIAgentStatus;
    systemPrompt?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperature?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    settings?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIAgentCountOutputType = {
    conversations: number;
    automations: number;
};
export type AIAgentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conversations?: boolean | AIAgentCountOutputTypeCountConversationsArgs;
    automations?: boolean | AIAgentCountOutputTypeCountAutomationsArgs;
};
export type AIAgentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentCountOutputTypeSelect<ExtArgs> | null;
};
export type AIAgentCountOutputTypeCountConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
export type AIAgentCountOutputTypeCountAutomationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AutomationWhereInput;
};
export type AIAgentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    systemPrompt?: boolean;
    instructions?: boolean;
    model?: boolean;
    temperature?: boolean;
    settings?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    conversations?: boolean | Prisma.AIAgent$conversationsArgs<ExtArgs>;
    automations?: boolean | Prisma.AIAgent$automationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AIAgentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIAgent"]>;
export type AIAgentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    systemPrompt?: boolean;
    instructions?: boolean;
    model?: boolean;
    temperature?: boolean;
    settings?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIAgent"]>;
export type AIAgentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    systemPrompt?: boolean;
    instructions?: boolean;
    model?: boolean;
    temperature?: boolean;
    settings?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIAgent"]>;
export type AIAgentSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    description?: boolean;
    type?: boolean;
    status?: boolean;
    systemPrompt?: boolean;
    instructions?: boolean;
    model?: boolean;
    temperature?: boolean;
    settings?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AIAgentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "name" | "description" | "type" | "status" | "systemPrompt" | "instructions" | "model" | "temperature" | "settings" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["aIAgent"]>;
export type AIAgentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    conversations?: boolean | Prisma.AIAgent$conversationsArgs<ExtArgs>;
    automations?: boolean | Prisma.AIAgent$automationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AIAgentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AIAgentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type AIAgentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $AIAgentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AIAgent";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        conversations: Prisma.$ConversationPayload<ExtArgs>[];
        automations: Prisma.$AutomationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        name: string;
        description: string | null;
        type: $Enums.AIAgentType;
        status: $Enums.AIAgentStatus;
        systemPrompt: string | null;
        instructions: string | null;
        model: string | null;
        temperature: number | null;
        settings: runtime.JsonValue | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["aIAgent"]>;
    composites: {};
};
export type AIAgentGetPayload<S extends boolean | null | undefined | AIAgentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AIAgentPayload, S>;
export type AIAgentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AIAgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AIAgentCountAggregateInputType | true;
};
export interface AIAgentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AIAgent'];
        meta: {
            name: 'AIAgent';
        };
    };
    findUnique<T extends AIAgentFindUniqueArgs>(args: Prisma.SelectSubset<T, AIAgentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AIAgentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AIAgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AIAgentFindFirstArgs>(args?: Prisma.SelectSubset<T, AIAgentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AIAgentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AIAgentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AIAgentFindManyArgs>(args?: Prisma.SelectSubset<T, AIAgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AIAgentCreateArgs>(args: Prisma.SelectSubset<T, AIAgentCreateArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AIAgentCreateManyArgs>(args?: Prisma.SelectSubset<T, AIAgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AIAgentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AIAgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AIAgentDeleteArgs>(args: Prisma.SelectSubset<T, AIAgentDeleteArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AIAgentUpdateArgs>(args: Prisma.SelectSubset<T, AIAgentUpdateArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AIAgentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AIAgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AIAgentUpdateManyArgs>(args: Prisma.SelectSubset<T, AIAgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AIAgentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AIAgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AIAgentUpsertArgs>(args: Prisma.SelectSubset<T, AIAgentUpsertArgs<ExtArgs>>): Prisma.Prisma__AIAgentClient<runtime.Types.Result.GetResult<Prisma.$AIAgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AIAgentCountArgs>(args?: Prisma.Subset<T, AIAgentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AIAgentCountAggregateOutputType> : number>;
    aggregate<T extends AIAgentAggregateArgs>(args: Prisma.Subset<T, AIAgentAggregateArgs>): Prisma.PrismaPromise<GetAIAgentAggregateType<T>>;
    groupBy<T extends AIAgentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AIAgentGroupByArgs['orderBy'];
    } : {
        orderBy?: AIAgentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AIAgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AIAgentFieldRefs;
}
export interface Prisma__AIAgentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    conversations<T extends Prisma.AIAgent$conversationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AIAgent$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    automations<T extends Prisma.AIAgent$automationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AIAgent$automationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AIAgentFieldRefs {
    readonly id: Prisma.FieldRef<"AIAgent", 'String'>;
    readonly businessId: Prisma.FieldRef<"AIAgent", 'String'>;
    readonly name: Prisma.FieldRef<"AIAgent", 'String'>;
    readonly description: Prisma.FieldRef<"AIAgent", 'String'>;
    readonly type: Prisma.FieldRef<"AIAgent", 'AIAgentType'>;
    readonly status: Prisma.FieldRef<"AIAgent", 'AIAgentStatus'>;
    readonly systemPrompt: Prisma.FieldRef<"AIAgent", 'String'>;
    readonly instructions: Prisma.FieldRef<"AIAgent", 'String'>;
    readonly model: Prisma.FieldRef<"AIAgent", 'String'>;
    readonly temperature: Prisma.FieldRef<"AIAgent", 'Float'>;
    readonly settings: Prisma.FieldRef<"AIAgent", 'Json'>;
    readonly metadata: Prisma.FieldRef<"AIAgent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"AIAgent", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AIAgent", 'DateTime'>;
}
export type AIAgentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where: Prisma.AIAgentWhereUniqueInput;
};
export type AIAgentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where: Prisma.AIAgentWhereUniqueInput;
};
export type AIAgentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where?: Prisma.AIAgentWhereInput;
    orderBy?: Prisma.AIAgentOrderByWithRelationInput | Prisma.AIAgentOrderByWithRelationInput[];
    cursor?: Prisma.AIAgentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIAgentScalarFieldEnum | Prisma.AIAgentScalarFieldEnum[];
};
export type AIAgentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where?: Prisma.AIAgentWhereInput;
    orderBy?: Prisma.AIAgentOrderByWithRelationInput | Prisma.AIAgentOrderByWithRelationInput[];
    cursor?: Prisma.AIAgentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIAgentScalarFieldEnum | Prisma.AIAgentScalarFieldEnum[];
};
export type AIAgentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where?: Prisma.AIAgentWhereInput;
    orderBy?: Prisma.AIAgentOrderByWithRelationInput | Prisma.AIAgentOrderByWithRelationInput[];
    cursor?: Prisma.AIAgentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIAgentScalarFieldEnum | Prisma.AIAgentScalarFieldEnum[];
};
export type AIAgentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIAgentCreateInput, Prisma.AIAgentUncheckedCreateInput>;
};
export type AIAgentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AIAgentCreateManyInput | Prisma.AIAgentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AIAgentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    data: Prisma.AIAgentCreateManyInput | Prisma.AIAgentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AIAgentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AIAgentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIAgentUpdateInput, Prisma.AIAgentUncheckedUpdateInput>;
    where: Prisma.AIAgentWhereUniqueInput;
};
export type AIAgentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AIAgentUpdateManyMutationInput, Prisma.AIAgentUncheckedUpdateManyInput>;
    where?: Prisma.AIAgentWhereInput;
    limit?: number;
};
export type AIAgentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIAgentUpdateManyMutationInput, Prisma.AIAgentUncheckedUpdateManyInput>;
    where?: Prisma.AIAgentWhereInput;
    limit?: number;
    include?: Prisma.AIAgentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AIAgentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where: Prisma.AIAgentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIAgentCreateInput, Prisma.AIAgentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AIAgentUpdateInput, Prisma.AIAgentUncheckedUpdateInput>;
};
export type AIAgentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
    where: Prisma.AIAgentWhereUniqueInput;
};
export type AIAgentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIAgentWhereInput;
    limit?: number;
};
export type AIAgent$conversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AIAgent$automationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AIAgentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AIAgentSelect<ExtArgs> | null;
    omit?: Prisma.AIAgentOmit<ExtArgs> | null;
    include?: Prisma.AIAgentInclude<ExtArgs> | null;
};
