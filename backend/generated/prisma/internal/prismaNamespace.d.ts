import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Business: "Business";
    readonly BusinessMember: "BusinessMember";
    readonly ChannelConnection: "ChannelConnection";
    readonly Customer: "Customer";
    readonly CustomerIdentity: "CustomerIdentity";
    readonly Conversation: "Conversation";
    readonly Message: "Message";
    readonly Lead: "Lead";
    readonly Product: "Product";
    readonly Service: "Service";
    readonly FAQ: "FAQ";
    readonly KnowledgeDocument: "KnowledgeDocument";
    readonly AIAgent: "AIAgent";
    readonly Automation: "Automation";
    readonly Subscription: "Subscription";
    readonly Payment: "Payment";
    readonly UsageRecord: "UsageRecord";
    readonly RefreshToken: "RefreshToken";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "business" | "businessMember" | "channelConnection" | "customer" | "customerIdentity" | "conversation" | "message" | "lead" | "product" | "service" | "fAQ" | "knowledgeDocument" | "aIAgent" | "automation" | "subscription" | "payment" | "usageRecord" | "refreshToken" | "auditLog";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Business: {
            payload: Prisma.$BusinessPayload<ExtArgs>;
            fields: Prisma.BusinessFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BusinessFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                findFirst: {
                    args: Prisma.BusinessFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                findMany: {
                    args: Prisma.BusinessFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>[];
                };
                create: {
                    args: Prisma.BusinessCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                createMany: {
                    args: Prisma.BusinessCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>[];
                };
                delete: {
                    args: Prisma.BusinessDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                update: {
                    args: Prisma.BusinessUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                deleteMany: {
                    args: Prisma.BusinessDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BusinessUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>[];
                };
                upsert: {
                    args: Prisma.BusinessUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessPayload>;
                };
                aggregate: {
                    args: Prisma.BusinessAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBusiness>;
                };
                groupBy: {
                    args: Prisma.BusinessGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BusinessCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessCountAggregateOutputType> | number;
                };
            };
        };
        BusinessMember: {
            payload: Prisma.$BusinessMemberPayload<ExtArgs>;
            fields: Prisma.BusinessMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BusinessMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BusinessMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>;
                };
                findFirst: {
                    args: Prisma.BusinessMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BusinessMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>;
                };
                findMany: {
                    args: Prisma.BusinessMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>[];
                };
                create: {
                    args: Prisma.BusinessMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>;
                };
                createMany: {
                    args: Prisma.BusinessMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BusinessMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>[];
                };
                delete: {
                    args: Prisma.BusinessMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>;
                };
                update: {
                    args: Prisma.BusinessMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.BusinessMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BusinessMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BusinessMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>[];
                };
                upsert: {
                    args: Prisma.BusinessMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BusinessMemberPayload>;
                };
                aggregate: {
                    args: Prisma.BusinessMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBusinessMember>;
                };
                groupBy: {
                    args: Prisma.BusinessMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BusinessMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BusinessMemberCountAggregateOutputType> | number;
                };
            };
        };
        ChannelConnection: {
            payload: Prisma.$ChannelConnectionPayload<ExtArgs>;
            fields: Prisma.ChannelConnectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChannelConnectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChannelConnectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>;
                };
                findFirst: {
                    args: Prisma.ChannelConnectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChannelConnectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>;
                };
                findMany: {
                    args: Prisma.ChannelConnectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>[];
                };
                create: {
                    args: Prisma.ChannelConnectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>;
                };
                createMany: {
                    args: Prisma.ChannelConnectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChannelConnectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>[];
                };
                delete: {
                    args: Prisma.ChannelConnectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>;
                };
                update: {
                    args: Prisma.ChannelConnectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>;
                };
                deleteMany: {
                    args: Prisma.ChannelConnectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChannelConnectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChannelConnectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>[];
                };
                upsert: {
                    args: Prisma.ChannelConnectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelConnectionPayload>;
                };
                aggregate: {
                    args: Prisma.ChannelConnectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChannelConnection>;
                };
                groupBy: {
                    args: Prisma.ChannelConnectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChannelConnectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChannelConnectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChannelConnectionCountAggregateOutputType> | number;
                };
            };
        };
        Customer: {
            payload: Prisma.$CustomerPayload<ExtArgs>;
            fields: Prisma.CustomerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findMany: {
                    args: Prisma.CustomerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                create: {
                    args: Prisma.CustomerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                createMany: {
                    args: Prisma.CustomerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                update: {
                    args: Prisma.CustomerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.CustomerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        CustomerIdentity: {
            payload: Prisma.$CustomerIdentityPayload<ExtArgs>;
            fields: Prisma.CustomerIdentityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerIdentityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerIdentityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerIdentityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerIdentityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                findMany: {
                    args: Prisma.CustomerIdentityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>[];
                };
                create: {
                    args: Prisma.CustomerIdentityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                createMany: {
                    args: Prisma.CustomerIdentityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerIdentityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>[];
                };
                delete: {
                    args: Prisma.CustomerIdentityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                update: {
                    args: Prisma.CustomerIdentityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerIdentityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerIdentityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerIdentityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerIdentityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerIdentityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerIdentity>;
                };
                groupBy: {
                    args: Prisma.CustomerIdentityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerIdentityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerIdentityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerIdentityCountAggregateOutputType> | number;
                };
            };
        };
        Conversation: {
            payload: Prisma.$ConversationPayload<ExtArgs>;
            fields: Prisma.ConversationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConversationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findFirst: {
                    args: Prisma.ConversationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findMany: {
                    args: Prisma.ConversationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                create: {
                    args: Prisma.ConversationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                createMany: {
                    args: Prisma.ConversationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                delete: {
                    args: Prisma.ConversationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                update: {
                    args: Prisma.ConversationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                deleteMany: {
                    args: Prisma.ConversationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConversationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                upsert: {
                    args: Prisma.ConversationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversation>;
                };
                groupBy: {
                    args: Prisma.ConversationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConversationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        Lead: {
            payload: Prisma.$LeadPayload<ExtArgs>;
            fields: Prisma.LeadFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeadFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>;
                };
                findFirst: {
                    args: Prisma.LeadFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>;
                };
                findMany: {
                    args: Prisma.LeadFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>[];
                };
                create: {
                    args: Prisma.LeadCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>;
                };
                createMany: {
                    args: Prisma.LeadCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>[];
                };
                delete: {
                    args: Prisma.LeadDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>;
                };
                update: {
                    args: Prisma.LeadUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>;
                };
                deleteMany: {
                    args: Prisma.LeadDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeadUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>[];
                };
                upsert: {
                    args: Prisma.LeadUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeadPayload>;
                };
                aggregate: {
                    args: Prisma.LeadAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLead>;
                };
                groupBy: {
                    args: Prisma.LeadGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeadGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeadCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeadCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        Service: {
            payload: Prisma.$ServicePayload<ExtArgs>;
            fields: Prisma.ServiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findFirst: {
                    args: Prisma.ServiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findMany: {
                    args: Prisma.ServiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                create: {
                    args: Prisma.ServiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                createMany: {
                    args: Prisma.ServiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                delete: {
                    args: Prisma.ServiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                update: {
                    args: Prisma.ServiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                upsert: {
                    args: Prisma.ServiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                aggregate: {
                    args: Prisma.ServiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateService>;
                };
                groupBy: {
                    args: Prisma.ServiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceCountAggregateOutputType> | number;
                };
            };
        };
        FAQ: {
            payload: Prisma.$FAQPayload<ExtArgs>;
            fields: Prisma.FAQFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FAQFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>;
                };
                findFirst: {
                    args: Prisma.FAQFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>;
                };
                findMany: {
                    args: Prisma.FAQFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>[];
                };
                create: {
                    args: Prisma.FAQCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>;
                };
                createMany: {
                    args: Prisma.FAQCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>[];
                };
                delete: {
                    args: Prisma.FAQDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>;
                };
                update: {
                    args: Prisma.FAQUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>;
                };
                deleteMany: {
                    args: Prisma.FAQDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FAQUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FAQUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>[];
                };
                upsert: {
                    args: Prisma.FAQUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FAQPayload>;
                };
                aggregate: {
                    args: Prisma.FAQAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFAQ>;
                };
                groupBy: {
                    args: Prisma.FAQGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FAQGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FAQCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FAQCountAggregateOutputType> | number;
                };
            };
        };
        KnowledgeDocument: {
            payload: Prisma.$KnowledgeDocumentPayload<ExtArgs>;
            fields: Prisma.KnowledgeDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.KnowledgeDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.KnowledgeDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.KnowledgeDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.KnowledgeDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>;
                };
                findMany: {
                    args: Prisma.KnowledgeDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[];
                };
                create: {
                    args: Prisma.KnowledgeDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>;
                };
                createMany: {
                    args: Prisma.KnowledgeDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.KnowledgeDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[];
                };
                delete: {
                    args: Prisma.KnowledgeDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>;
                };
                update: {
                    args: Prisma.KnowledgeDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.KnowledgeDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.KnowledgeDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.KnowledgeDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.KnowledgeDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.KnowledgeDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKnowledgeDocument>;
                };
                groupBy: {
                    args: Prisma.KnowledgeDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KnowledgeDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.KnowledgeDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.KnowledgeDocumentCountAggregateOutputType> | number;
                };
            };
        };
        AIAgent: {
            payload: Prisma.$AIAgentPayload<ExtArgs>;
            fields: Prisma.AIAgentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AIAgentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AIAgentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>;
                };
                findFirst: {
                    args: Prisma.AIAgentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AIAgentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>;
                };
                findMany: {
                    args: Prisma.AIAgentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>[];
                };
                create: {
                    args: Prisma.AIAgentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>;
                };
                createMany: {
                    args: Prisma.AIAgentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AIAgentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>[];
                };
                delete: {
                    args: Prisma.AIAgentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>;
                };
                update: {
                    args: Prisma.AIAgentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>;
                };
                deleteMany: {
                    args: Prisma.AIAgentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AIAgentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AIAgentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>[];
                };
                upsert: {
                    args: Prisma.AIAgentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIAgentPayload>;
                };
                aggregate: {
                    args: Prisma.AIAgentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAIAgent>;
                };
                groupBy: {
                    args: Prisma.AIAgentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIAgentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AIAgentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIAgentCountAggregateOutputType> | number;
                };
            };
        };
        Automation: {
            payload: Prisma.$AutomationPayload<ExtArgs>;
            fields: Prisma.AutomationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AutomationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AutomationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>;
                };
                findFirst: {
                    args: Prisma.AutomationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AutomationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>;
                };
                findMany: {
                    args: Prisma.AutomationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>[];
                };
                create: {
                    args: Prisma.AutomationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>;
                };
                createMany: {
                    args: Prisma.AutomationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AutomationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>[];
                };
                delete: {
                    args: Prisma.AutomationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>;
                };
                update: {
                    args: Prisma.AutomationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>;
                };
                deleteMany: {
                    args: Prisma.AutomationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AutomationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AutomationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>[];
                };
                upsert: {
                    args: Prisma.AutomationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AutomationPayload>;
                };
                aggregate: {
                    args: Prisma.AutomationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAutomation>;
                };
                groupBy: {
                    args: Prisma.AutomationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AutomationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AutomationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AutomationCountAggregateOutputType> | number;
                };
            };
        };
        Subscription: {
            payload: Prisma.$SubscriptionPayload<ExtArgs>;
            fields: Prisma.SubscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findMany: {
                    args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                create: {
                    args: Prisma.SubscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                createMany: {
                    args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                delete: {
                    args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                update: {
                    args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
                };
                groupBy: {
                    args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number;
                };
            };
        };
        Payment: {
            payload: Prisma.$PaymentPayload<ExtArgs>;
            fields: Prisma.PaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                create: {
                    args: Prisma.PaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                update: {
                    args: Prisma.PaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.PaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        UsageRecord: {
            payload: Prisma.$UsageRecordPayload<ExtArgs>;
            fields: Prisma.UsageRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsageRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsageRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>;
                };
                findFirst: {
                    args: Prisma.UsageRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsageRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>;
                };
                findMany: {
                    args: Prisma.UsageRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>[];
                };
                create: {
                    args: Prisma.UsageRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>;
                };
                createMany: {
                    args: Prisma.UsageRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsageRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>[];
                };
                delete: {
                    args: Prisma.UsageRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>;
                };
                update: {
                    args: Prisma.UsageRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.UsageRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsageRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsageRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>[];
                };
                upsert: {
                    args: Prisma.UsageRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsageRecordPayload>;
                };
                aggregate: {
                    args: Prisma.UsageRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsageRecord>;
                };
                groupBy: {
                    args: Prisma.UsageRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsageRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsageRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsageRecordCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly avatarUrl: "avatarUrl";
    readonly status: "status";
    readonly emailVerified: "emailVerified";
    readonly phoneVerified: "phoneVerified";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const BusinessScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly websiteUrl: "websiteUrl";
    readonly email: "email";
    readonly phone: "phone";
    readonly logoUrl: "logoUrl";
    readonly timezone: "timezone";
    readonly currency: "currency";
    readonly country: "country";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum];
export declare const BusinessMemberScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly userId: "userId";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BusinessMemberScalarFieldEnum = (typeof BusinessMemberScalarFieldEnum)[keyof typeof BusinessMemberScalarFieldEnum];
export declare const ChannelConnectionScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly channel: "channel";
    readonly status: "status";
    readonly externalAccountId: "externalAccountId";
    readonly externalPageId: "externalPageId";
    readonly accountName: "accountName";
    readonly username: "username";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly tokenExpiresAt: "tokenExpiresAt";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChannelConnectionScalarFieldEnum = (typeof ChannelConnectionScalarFieldEnum)[keyof typeof ChannelConnectionScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly fullName: "fullName";
    readonly email: "email";
    readonly phone: "phone";
    readonly avatarUrl: "avatarUrl";
    readonly notes: "notes";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const CustomerIdentityScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly channelConnectionId: "channelConnectionId";
    readonly externalId: "externalId";
    readonly username: "username";
    readonly displayName: "displayName";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerIdentityScalarFieldEnum = (typeof CustomerIdentityScalarFieldEnum)[keyof typeof CustomerIdentityScalarFieldEnum];
export declare const ConversationScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly customerId: "customerId";
    readonly channelConnectionId: "channelConnectionId";
    readonly aiAgentId: "aiAgentId";
    readonly subject: "subject";
    readonly status: "status";
    readonly aiEnabled: "aiEnabled";
    readonly assignedToId: "assignedToId";
    readonly lastMessageAt: "lastMessageAt";
    readonly resolvedAt: "resolvedAt";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly conversationId: "conversationId";
    readonly externalMessageId: "externalMessageId";
    readonly direction: "direction";
    readonly senderType: "senderType";
    readonly type: "type";
    readonly content: "content";
    readonly mediaUrl: "mediaUrl";
    readonly aiGenerated: "aiGenerated";
    readonly aiModel: "aiModel";
    readonly aiConfidence: "aiConfidence";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const LeadScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly customerId: "customerId";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly source: "source";
    readonly value: "value";
    readonly currency: "currency";
    readonly assignedToId: "assignedToId";
    readonly notes: "notes";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly wonAt: "wonAt";
    readonly lostAt: "lostAt";
};
export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly sku: "sku";
    readonly price: "price";
    readonly currency: "currency";
    readonly stockQuantity: "stockQuantity";
    readonly status: "status";
    readonly imageUrl: "imageUrl";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly price: "price";
    readonly currency: "currency";
    readonly active: "active";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const FAQScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly question: "question";
    readonly answer: "answer";
    readonly category: "category";
    readonly active: "active";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum];
export declare const KnowledgeDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly name: "name";
    readonly description: "description";
    readonly type: "type";
    readonly content: "content";
    readonly sourceUrl: "sourceUrl";
    readonly active: "active";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type KnowledgeDocumentScalarFieldEnum = (typeof KnowledgeDocumentScalarFieldEnum)[keyof typeof KnowledgeDocumentScalarFieldEnum];
export declare const AIAgentScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly name: "name";
    readonly description: "description";
    readonly type: "type";
    readonly status: "status";
    readonly systemPrompt: "systemPrompt";
    readonly instructions: "instructions";
    readonly model: "model";
    readonly temperature: "temperature";
    readonly settings: "settings";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AIAgentScalarFieldEnum = (typeof AIAgentScalarFieldEnum)[keyof typeof AIAgentScalarFieldEnum];
export declare const AutomationScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly aiAgentId: "aiAgentId";
    readonly name: "name";
    readonly description: "description";
    readonly status: "status";
    readonly trigger: "trigger";
    readonly action: "action";
    readonly configuration: "configuration";
    readonly lastRunAt: "lastRunAt";
    readonly nextRunAt: "nextRunAt";
    readonly runCount: "runCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AutomationScalarFieldEnum = (typeof AutomationScalarFieldEnum)[keyof typeof AutomationScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly plan: "plan";
    readonly status: "status";
    readonly currentPeriodStart: "currentPeriodStart";
    readonly currentPeriodEnd: "currentPeriodEnd";
    readonly trialEndsAt: "trialEndsAt";
    readonly cancelledAt: "cancelledAt";
    readonly provider: "provider";
    readonly externalSubscriptionId: "externalSubscriptionId";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly provider: "provider";
    readonly status: "status";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly reference: "reference";
    readonly externalTransactionId: "externalTransactionId";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const UsageRecordScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly type: "type";
    readonly quantity: "quantity";
    readonly unitCost: "unitCost";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type UsageRecordScalarFieldEnum = (typeof UsageRecordScalarFieldEnum)[keyof typeof UsageRecordScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly userAgent: "userAgent";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly businessId: "businessId";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumBusinessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessStatus'>;
export type ListEnumBusinessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessStatus[]'>;
export type EnumMembershipRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipRole'>;
export type ListEnumMembershipRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipRole[]'>;
export type EnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType'>;
export type ListEnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType[]'>;
export type EnumChannelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelStatus'>;
export type ListEnumChannelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelStatus[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumConversationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationStatus'>;
export type ListEnumConversationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConversationStatus[]'>;
export type EnumMessageDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageDirection'>;
export type ListEnumMessageDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageDirection[]'>;
export type EnumMessageSenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageSenderType'>;
export type ListEnumMessageSenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageSenderType[]'>;
export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>;
export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>;
export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>;
export type EnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource'>;
export type ListEnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>;
export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>;
export type EnumKnowledgeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KnowledgeType'>;
export type ListEnumKnowledgeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KnowledgeType[]'>;
export type EnumAIAgentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIAgentType'>;
export type ListEnumAIAgentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIAgentType[]'>;
export type EnumAIAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIAgentStatus'>;
export type ListEnumAIAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIAgentStatus[]'>;
export type EnumAutomationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationStatus'>;
export type ListEnumAutomationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AutomationStatus[]'>;
export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>;
export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>;
export type EnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider'>;
export type ListEnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider[]'>;
export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>;
export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;
export type EnumUsageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageType'>;
export type ListEnumUsageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageType[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    business?: Prisma.BusinessOmit;
    businessMember?: Prisma.BusinessMemberOmit;
    channelConnection?: Prisma.ChannelConnectionOmit;
    customer?: Prisma.CustomerOmit;
    customerIdentity?: Prisma.CustomerIdentityOmit;
    conversation?: Prisma.ConversationOmit;
    message?: Prisma.MessageOmit;
    lead?: Prisma.LeadOmit;
    product?: Prisma.ProductOmit;
    service?: Prisma.ServiceOmit;
    fAQ?: Prisma.FAQOmit;
    knowledgeDocument?: Prisma.KnowledgeDocumentOmit;
    aIAgent?: Prisma.AIAgentOmit;
    automation?: Prisma.AutomationOmit;
    subscription?: Prisma.SubscriptionOmit;
    payment?: Prisma.PaymentOmit;
    usageRecord?: Prisma.UsageRecordOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    auditLog?: Prisma.AuditLogOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
