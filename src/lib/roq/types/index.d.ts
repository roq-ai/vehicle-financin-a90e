/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model advisor
 *
 */
export type advisor = $Result.DefaultSelection<Prisma.$advisorPayload>;
/**
 * Model business_owner
 *
 */
export type business_owner = $Result.DefaultSelection<Prisma.$business_ownerPayload>;
/**
 * Model loan
 *
 */
export type loan = $Result.DefaultSelection<Prisma.$loanPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vehicle
 *
 */
export type vehicle = $Result.DefaultSelection<Prisma.$vehiclePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Advisors
 * const advisors = await prisma.advisor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Advisors
   * const advisors = await prisma.advisor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.advisor`: Exposes CRUD operations for the **advisor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Advisors
   * const advisors = await prisma.advisor.findMany()
   * ```
   */
  get advisor(): Prisma.advisorDelegate<ExtArgs>;

  /**
   * `prisma.business_owner`: Exposes CRUD operations for the **business_owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   */
  get business_owner(): Prisma.business_ownerDelegate<ExtArgs>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **loan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Loans
   * const loans = await prisma.loan.findMany()
   * ```
   */
  get loan(): Prisma.loanDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **vehicle** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   */
  get vehicle(): Prisma.vehicleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    advisor: 'advisor';
    business_owner: 'business_owner';
    loan: 'loan';
    organization: 'organization';
    user: 'user';
    vehicle: 'vehicle';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'advisor' | 'business_owner' | 'loan' | 'organization' | 'user' | 'vehicle';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      advisor: {
        payload: Prisma.$advisorPayload<ExtArgs>;
        fields: Prisma.advisorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.advisorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.advisorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload>;
          };
          findFirst: {
            args: Prisma.advisorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.advisorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload>;
          };
          findMany: {
            args: Prisma.advisorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload>[];
          };
          create: {
            args: Prisma.advisorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload>;
          };
          createMany: {
            args: Prisma.advisorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.advisorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload>;
          };
          update: {
            args: Prisma.advisorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload>;
          };
          deleteMany: {
            args: Prisma.advisorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.advisorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.advisorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$advisorPayload>;
          };
          aggregate: {
            args: Prisma.AdvisorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdvisor>;
          };
          groupBy: {
            args: Prisma.advisorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdvisorGroupByOutputType>[];
          };
          count: {
            args: Prisma.advisorCountArgs<ExtArgs>;
            result: $Utils.Optional<AdvisorCountAggregateOutputType> | number;
          };
        };
      };
      business_owner: {
        payload: Prisma.$business_ownerPayload<ExtArgs>;
        fields: Prisma.business_ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.business_ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.business_ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findFirst: {
            args: Prisma.business_ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.business_ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findMany: {
            args: Prisma.business_ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>[];
          };
          create: {
            args: Prisma.business_ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          createMany: {
            args: Prisma.business_ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.business_ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          update: {
            args: Prisma.business_ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          deleteMany: {
            args: Prisma.business_ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.business_ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.business_ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          aggregate: {
            args: Prisma.Business_ownerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness_owner>;
          };
          groupBy: {
            args: Prisma.business_ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerGroupByOutputType>[];
          };
          count: {
            args: Prisma.business_ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerCountAggregateOutputType> | number;
          };
        };
      };
      loan: {
        payload: Prisma.$loanPayload<ExtArgs>;
        fields: Prisma.loanFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.loanFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.loanFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          findFirst: {
            args: Prisma.loanFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.loanFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          findMany: {
            args: Prisma.loanFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[];
          };
          create: {
            args: Prisma.loanCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          createMany: {
            args: Prisma.loanCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.loanDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          update: {
            args: Prisma.loanUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          deleteMany: {
            args: Prisma.loanDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.loanUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.loanUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLoan>;
          };
          groupBy: {
            args: Prisma.loanGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LoanGroupByOutputType>[];
          };
          count: {
            args: Prisma.loanCountArgs<ExtArgs>;
            result: $Utils.Optional<LoanCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vehicle: {
        payload: Prisma.$vehiclePayload<ExtArgs>;
        fields: Prisma.vehicleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.vehicleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.vehicleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findFirst: {
            args: Prisma.vehicleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.vehicleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          findMany: {
            args: Prisma.vehicleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[];
          };
          create: {
            args: Prisma.vehicleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          createMany: {
            args: Prisma.vehicleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.vehicleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          update: {
            args: Prisma.vehicleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          deleteMany: {
            args: Prisma.vehicleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.vehicleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.vehicleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>;
          };
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVehicle>;
          };
          groupBy: {
            args: Prisma.vehicleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VehicleGroupByOutputType>[];
          };
          count: {
            args: Prisma.vehicleCountArgs<ExtArgs>;
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

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
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    vehicle: number;
  };

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | LoanCountOutputTypeCountVehicleArgs;
  };

  // Custom InputTypes

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: vehicleWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    advisor: number;
    business_owner: number;
    loan: number;
    organization: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advisor?: boolean | UserCountOutputTypeCountAdvisorArgs;
    business_owner?: boolean | UserCountOutputTypeCountBusiness_ownerArgs;
    loan?: boolean | UserCountOutputTypeCountLoanArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdvisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: advisorWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusiness_ownerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: business_ownerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model advisor
   */

  export type AggregateAdvisor = {
    _count: AdvisorCountAggregateOutputType | null;
    _min: AdvisorMinAggregateOutputType | null;
    _max: AdvisorMaxAggregateOutputType | null;
  };

  export type AdvisorMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AdvisorMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AdvisorCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    email: number;
    phone: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AdvisorMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AdvisorMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AdvisorCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AdvisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which advisor to aggregate.
     */
    where?: advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of advisors to fetch.
     */
    orderBy?: advisorOrderByWithRelationInput | advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned advisors
     **/
    _count?: true | AdvisorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdvisorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdvisorMaxAggregateInputType;
  };

  export type GetAdvisorAggregateType<T extends AdvisorAggregateArgs> = {
    [P in keyof T & keyof AggregateAdvisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvisor[P]>
      : GetScalarType<T[P], AggregateAdvisor[P]>;
  };

  export type advisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: advisorWhereInput;
    orderBy?: advisorOrderByWithAggregationInput | advisorOrderByWithAggregationInput[];
    by: AdvisorScalarFieldEnum[] | AdvisorScalarFieldEnum;
    having?: advisorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdvisorCountAggregateInputType | true;
    _min?: AdvisorMinAggregateInputType;
    _max?: AdvisorMaxAggregateInputType;
  };

  export type AdvisorGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AdvisorCountAggregateOutputType | null;
    _min: AdvisorMinAggregateOutputType | null;
    _max: AdvisorMaxAggregateOutputType | null;
  };

  type GetAdvisorGroupByPayload<T extends advisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvisorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AdvisorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AdvisorGroupByOutputType[P]>
          : GetScalarType<T[P], AdvisorGroupByOutputType[P]>;
      }
    >
  >;

  export type advisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      email?: boolean;
      phone?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['advisor']
  >;

  export type advisorSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    phone?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type advisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $advisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'advisor';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['advisor']
    >;
    composites: {};
  };

  type advisorGetPayload<S extends boolean | null | undefined | advisorDefaultArgs> = $Result.GetResult<
    Prisma.$advisorPayload,
    S
  >;

  type advisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    advisorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AdvisorCountAggregateInputType | true;
  };

  export interface advisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['advisor']; meta: { name: 'advisor' } };
    /**
     * Find zero or one Advisor that matches the filter.
     * @param {advisorFindUniqueArgs} args - Arguments to find a Advisor
     * @example
     * // Get one Advisor
     * const advisor = await prisma.advisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends advisorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, advisorFindUniqueArgs<ExtArgs>>,
    ): Prisma__advisorClient<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Advisor that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {advisorFindUniqueOrThrowArgs} args - Arguments to find a Advisor
     * @example
     * // Get one Advisor
     * const advisor = await prisma.advisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends advisorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, advisorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__advisorClient<
      $Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Advisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advisorFindFirstArgs} args - Arguments to find a Advisor
     * @example
     * // Get one Advisor
     * const advisor = await prisma.advisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends advisorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, advisorFindFirstArgs<ExtArgs>>,
    ): Prisma__advisorClient<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Advisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advisorFindFirstOrThrowArgs} args - Arguments to find a Advisor
     * @example
     * // Get one Advisor
     * const advisor = await prisma.advisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends advisorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, advisorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__advisorClient<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Advisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advisorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advisors
     * const advisors = await prisma.advisor.findMany()
     *
     * // Get first 10 Advisors
     * const advisors = await prisma.advisor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const advisorWithIdOnly = await prisma.advisor.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends advisorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, advisorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Advisor.
     * @param {advisorCreateArgs} args - Arguments to create a Advisor.
     * @example
     * // Create one Advisor
     * const Advisor = await prisma.advisor.create({
     *   data: {
     *     // ... data to create a Advisor
     *   }
     * })
     *
     **/
    create<T extends advisorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, advisorCreateArgs<ExtArgs>>,
    ): Prisma__advisorClient<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Advisors.
     *     @param {advisorCreateManyArgs} args - Arguments to create many Advisors.
     *     @example
     *     // Create many Advisors
     *     const advisor = await prisma.advisor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends advisorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, advisorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Advisor.
     * @param {advisorDeleteArgs} args - Arguments to delete one Advisor.
     * @example
     * // Delete one Advisor
     * const Advisor = await prisma.advisor.delete({
     *   where: {
     *     // ... filter to delete one Advisor
     *   }
     * })
     *
     **/
    delete<T extends advisorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, advisorDeleteArgs<ExtArgs>>,
    ): Prisma__advisorClient<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Advisor.
     * @param {advisorUpdateArgs} args - Arguments to update one Advisor.
     * @example
     * // Update one Advisor
     * const advisor = await prisma.advisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends advisorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, advisorUpdateArgs<ExtArgs>>,
    ): Prisma__advisorClient<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Advisors.
     * @param {advisorDeleteManyArgs} args - Arguments to filter Advisors to delete.
     * @example
     * // Delete a few Advisors
     * const { count } = await prisma.advisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends advisorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, advisorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Advisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advisors
     * const advisor = await prisma.advisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends advisorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, advisorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Advisor.
     * @param {advisorUpsertArgs} args - Arguments to update or create a Advisor.
     * @example
     * // Update or create a Advisor
     * const advisor = await prisma.advisor.upsert({
     *   create: {
     *     // ... data to create a Advisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advisor we want to update
     *   }
     * })
     **/
    upsert<T extends advisorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, advisorUpsertArgs<ExtArgs>>,
    ): Prisma__advisorClient<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Advisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advisorCountArgs} args - Arguments to filter Advisors to count.
     * @example
     * // Count the number of Advisors
     * const count = await prisma.advisor.count({
     *   where: {
     *     // ... the filter for the Advisors we want to count
     *   }
     * })
     **/
    count<T extends advisorCountArgs>(
      args?: Subset<T, advisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvisorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Advisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AdvisorAggregateArgs>(
      args: Subset<T, AdvisorAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdvisorAggregateType<T>>;

    /**
     * Group by Advisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {advisorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends advisorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: advisorGroupByArgs['orderBy'] }
        : { orderBy?: advisorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, advisorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAdvisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the advisor model
     */
    readonly fields: advisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for advisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__advisorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the advisor model
   */
  interface advisorFieldRefs {
    readonly id: FieldRef<'advisor', 'String'>;
    readonly first_name: FieldRef<'advisor', 'String'>;
    readonly last_name: FieldRef<'advisor', 'String'>;
    readonly email: FieldRef<'advisor', 'String'>;
    readonly phone: FieldRef<'advisor', 'String'>;
    readonly user_id: FieldRef<'advisor', 'String'>;
    readonly created_at: FieldRef<'advisor', 'DateTime'>;
    readonly updated_at: FieldRef<'advisor', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * advisor findUnique
   */
  export type advisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * Filter, which advisor to fetch.
     */
    where: advisorWhereUniqueInput;
  };

  /**
   * advisor findUniqueOrThrow
   */
  export type advisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * Filter, which advisor to fetch.
     */
    where: advisorWhereUniqueInput;
  };

  /**
   * advisor findFirst
   */
  export type advisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * Filter, which advisor to fetch.
     */
    where?: advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of advisors to fetch.
     */
    orderBy?: advisorOrderByWithRelationInput | advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for advisors.
     */
    cursor?: advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of advisors.
     */
    distinct?: AdvisorScalarFieldEnum | AdvisorScalarFieldEnum[];
  };

  /**
   * advisor findFirstOrThrow
   */
  export type advisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * Filter, which advisor to fetch.
     */
    where?: advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of advisors to fetch.
     */
    orderBy?: advisorOrderByWithRelationInput | advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for advisors.
     */
    cursor?: advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of advisors.
     */
    distinct?: AdvisorScalarFieldEnum | AdvisorScalarFieldEnum[];
  };

  /**
   * advisor findMany
   */
  export type advisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * Filter, which advisors to fetch.
     */
    where?: advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of advisors to fetch.
     */
    orderBy?: advisorOrderByWithRelationInput | advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing advisors.
     */
    cursor?: advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` advisors.
     */
    skip?: number;
    distinct?: AdvisorScalarFieldEnum | AdvisorScalarFieldEnum[];
  };

  /**
   * advisor create
   */
  export type advisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * The data needed to create a advisor.
     */
    data: XOR<advisorCreateInput, advisorUncheckedCreateInput>;
  };

  /**
   * advisor createMany
   */
  export type advisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many advisors.
     */
    data: advisorCreateManyInput | advisorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * advisor update
   */
  export type advisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * The data needed to update a advisor.
     */
    data: XOR<advisorUpdateInput, advisorUncheckedUpdateInput>;
    /**
     * Choose, which advisor to update.
     */
    where: advisorWhereUniqueInput;
  };

  /**
   * advisor updateMany
   */
  export type advisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update advisors.
     */
    data: XOR<advisorUpdateManyMutationInput, advisorUncheckedUpdateManyInput>;
    /**
     * Filter which advisors to update
     */
    where?: advisorWhereInput;
  };

  /**
   * advisor upsert
   */
  export type advisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * The filter to search for the advisor to update in case it exists.
     */
    where: advisorWhereUniqueInput;
    /**
     * In case the advisor found by the `where` argument doesn't exist, create a new advisor with this data.
     */
    create: XOR<advisorCreateInput, advisorUncheckedCreateInput>;
    /**
     * In case the advisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<advisorUpdateInput, advisorUncheckedUpdateInput>;
  };

  /**
   * advisor delete
   */
  export type advisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    /**
     * Filter which advisor to delete.
     */
    where: advisorWhereUniqueInput;
  };

  /**
   * advisor deleteMany
   */
  export type advisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which advisors to delete
     */
    where?: advisorWhereInput;
  };

  /**
   * advisor without action
   */
  export type advisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
  };

  /**
   * Model business_owner
   */

  export type AggregateBusiness_owner = {
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  export type Business_ownerMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    phone: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    email: number;
    phone: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Business_ownerMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    email?: true;
    phone?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Business_ownerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owner to aggregate.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned business_owners
     **/
    _count?: true | Business_ownerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Business_ownerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type GetBusiness_ownerAggregateType<T extends Business_ownerAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness_owner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness_owner[P]>
      : GetScalarType<T[P], AggregateBusiness_owner[P]>;
  };

  export type business_ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithAggregationInput | business_ownerOrderByWithAggregationInput[];
    by: Business_ownerScalarFieldEnum[] | Business_ownerScalarFieldEnum;
    having?: business_ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Business_ownerCountAggregateInputType | true;
    _min?: Business_ownerMinAggregateInputType;
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type Business_ownerGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  type GetBusiness_ownerGroupByPayload<T extends business_ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Business_ownerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Business_ownerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>
          : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>;
      }
    >
  >;

  export type business_ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        first_name?: boolean;
        last_name?: boolean;
        email?: boolean;
        phone?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business_owner']
    >;

  export type business_ownerSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    email?: boolean;
    phone?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type business_ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $business_ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business_owner';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business_owner']
    >;
    composites: {};
  };

  type business_ownerGetPayload<S extends boolean | null | undefined | business_ownerDefaultArgs> = $Result.GetResult<
    Prisma.$business_ownerPayload,
    S
  >;

  type business_ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    business_ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Business_ownerCountAggregateInputType | true;
  };

  export interface business_ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business_owner']; meta: { name: 'business_owner' } };
    /**
     * Find zero or one Business_owner that matches the filter.
     * @param {business_ownerFindUniqueArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends business_ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business_owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {business_ownerFindUniqueOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends business_ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends business_ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends business_ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Business_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Business_owners
     * const business_owners = await prisma.business_owner.findMany()
     *
     * // Get first 10 Business_owners
     * const business_owners = await prisma.business_owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const business_ownerWithIdOnly = await prisma.business_owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends business_ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business_owner.
     * @param {business_ownerCreateArgs} args - Arguments to create a Business_owner.
     * @example
     * // Create one Business_owner
     * const Business_owner = await prisma.business_owner.create({
     *   data: {
     *     // ... data to create a Business_owner
     *   }
     * })
     *
     **/
    create<T extends business_ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerCreateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Business_owners.
     *     @param {business_ownerCreateManyArgs} args - Arguments to create many Business_owners.
     *     @example
     *     // Create many Business_owners
     *     const business_owner = await prisma.business_owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends business_ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business_owner.
     * @param {business_ownerDeleteArgs} args - Arguments to delete one Business_owner.
     * @example
     * // Delete one Business_owner
     * const Business_owner = await prisma.business_owner.delete({
     *   where: {
     *     // ... filter to delete one Business_owner
     *   }
     * })
     *
     **/
    delete<T extends business_ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerDeleteArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Business_owner.
     * @param {business_ownerUpdateArgs} args - Arguments to update one Business_owner.
     * @example
     * // Update one Business_owner
     * const business_owner = await prisma.business_owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends business_ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Business_owners.
     * @param {business_ownerDeleteManyArgs} args - Arguments to filter Business_owners to delete.
     * @example
     * // Delete a few Business_owners
     * const { count } = await prisma.business_owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends business_ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Business_owners
     * const business_owner = await prisma.business_owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends business_ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business_owner.
     * @param {business_ownerUpsertArgs} args - Arguments to update or create a Business_owner.
     * @example
     * // Update or create a Business_owner
     * const business_owner = await prisma.business_owner.upsert({
     *   create: {
     *     // ... data to create a Business_owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business_owner we want to update
     *   }
     * })
     **/
    upsert<T extends business_ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpsertArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerCountArgs} args - Arguments to filter Business_owners to count.
     * @example
     * // Count the number of Business_owners
     * const count = await prisma.business_owner.count({
     *   where: {
     *     // ... the filter for the Business_owners we want to count
     *   }
     * })
     **/
    count<T extends business_ownerCountArgs>(
      args?: Subset<T, business_ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Business_ownerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Business_ownerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Business_ownerAggregateArgs>(
      args: Subset<T, Business_ownerAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusiness_ownerAggregateType<T>>;

    /**
     * Group by Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends business_ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: business_ownerGroupByArgs['orderBy'] }
        : { orderBy?: business_ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, business_ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusiness_ownerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business_owner model
     */
    readonly fields: business_ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business_owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__business_ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business_owner model
   */
  interface business_ownerFieldRefs {
    readonly id: FieldRef<'business_owner', 'String'>;
    readonly first_name: FieldRef<'business_owner', 'String'>;
    readonly last_name: FieldRef<'business_owner', 'String'>;
    readonly email: FieldRef<'business_owner', 'String'>;
    readonly phone: FieldRef<'business_owner', 'String'>;
    readonly user_id: FieldRef<'business_owner', 'String'>;
    readonly created_at: FieldRef<'business_owner', 'DateTime'>;
    readonly updated_at: FieldRef<'business_owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business_owner findUnique
   */
  export type business_ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner findUniqueOrThrow
   */
  export type business_ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the business_owner
       */
      select?: business_ownerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: business_ownerInclude<ExtArgs> | null;
      /**
       * Filter, which business_owner to fetch.
       */
      where: business_ownerWhereUniqueInput;
    };

  /**
   * business_owner findFirst
   */
  export type business_ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findFirstOrThrow
   */
  export type business_ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findMany
   */
  export type business_ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owners to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner create
   */
  export type business_ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a business_owner.
     */
    data: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
  };

  /**
   * business_owner createMany
   */
  export type business_ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many business_owners.
     */
    data: business_ownerCreateManyInput | business_ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business_owner update
   */
  export type business_ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a business_owner.
     */
    data: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
    /**
     * Choose, which business_owner to update.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner updateMany
   */
  export type business_ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update business_owners.
     */
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyInput>;
    /**
     * Filter which business_owners to update
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner upsert
   */
  export type business_ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the business_owner to update in case it exists.
     */
    where: business_ownerWhereUniqueInput;
    /**
     * In case the business_owner found by the `where` argument doesn't exist, create a new business_owner with this data.
     */
    create: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
    /**
     * In case the business_owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
  };

  /**
   * business_owner delete
   */
  export type business_ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter which business_owner to delete.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner deleteMany
   */
  export type business_ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owners to delete
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner without action
   */
  export type business_ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
  };

  /**
   * Model loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null;
    _avg: LoanAvgAggregateOutputType | null;
    _sum: LoanSumAggregateOutputType | null;
    _min: LoanMinAggregateOutputType | null;
    _max: LoanMaxAggregateOutputType | null;
  };

  export type LoanAvgAggregateOutputType = {
    amount: number | null;
    interest_rate: number | null;
    duration: number | null;
  };

  export type LoanSumAggregateOutputType = {
    amount: number | null;
    interest_rate: number | null;
    duration: number | null;
  };

  export type LoanMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    interest_rate: number | null;
    duration: number | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LoanMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    interest_rate: number | null;
    duration: number | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LoanCountAggregateOutputType = {
    id: number;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: number;
    end_date: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LoanAvgAggregateInputType = {
    amount?: true;
    interest_rate?: true;
    duration?: true;
  };

  export type LoanSumAggregateInputType = {
    amount?: true;
    interest_rate?: true;
    duration?: true;
  };

  export type LoanMinAggregateInputType = {
    id?: true;
    amount?: true;
    interest_rate?: true;
    duration?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LoanMaxAggregateInputType = {
    id?: true;
    amount?: true;
    interest_rate?: true;
    duration?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LoanCountAggregateInputType = {
    id?: true;
    amount?: true;
    interest_rate?: true;
    duration?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan to aggregate.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned loans
     **/
    _count?: true | LoanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LoanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LoanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LoanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LoanMaxAggregateInputType;
  };

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
    [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>;
  };

  export type loanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput;
    orderBy?: loanOrderByWithAggregationInput | loanOrderByWithAggregationInput[];
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum;
    having?: loanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoanCountAggregateInputType | true;
    _avg?: LoanAvgAggregateInputType;
    _sum?: LoanSumAggregateInputType;
    _min?: LoanMinAggregateInputType;
    _max?: LoanMaxAggregateInputType;
  };

  export type LoanGroupByOutputType = {
    id: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date;
    end_date: Date;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: LoanCountAggregateOutputType | null;
    _avg: LoanAvgAggregateOutputType | null;
    _sum: LoanSumAggregateOutputType | null;
    _min: LoanMinAggregateOutputType | null;
    _max: LoanMaxAggregateOutputType | null;
  };

  type GetLoanGroupByPayload<T extends loanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LoanGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
          : GetScalarType<T[P], LoanGroupByOutputType[P]>;
      }
    >
  >;

  export type loanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      interest_rate?: boolean;
      duration?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      vehicle?: boolean | loan$vehicleArgs<ExtArgs>;
      _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['loan']
  >;

  export type loanSelectScalar = {
    id?: boolean;
    amount?: boolean;
    interest_rate?: boolean;
    duration?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type loanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    vehicle?: boolean | loan$vehicleArgs<ExtArgs>;
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $loanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'loan';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      vehicle: Prisma.$vehiclePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        interest_rate: number;
        duration: number;
        start_date: Date;
        end_date: Date;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['loan']
    >;
    composites: {};
  };

  type loanGetPayload<S extends boolean | null | undefined | loanDefaultArgs> = $Result.GetResult<
    Prisma.$loanPayload,
    S
  >;

  type loanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    loanFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: LoanCountAggregateInputType | true;
  };

  export interface loanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan']; meta: { name: 'loan' } };
    /**
     * Find zero or one Loan that matches the filter.
     * @param {loanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends loanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loanFindUniqueArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Loan that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {loanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends loanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends loanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindFirstArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends loanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     *
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends loanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Loan.
     * @param {loanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     *
     **/
    create<T extends loanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loanCreateArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Loans.
     *     @param {loanCreateManyArgs} args - Arguments to create many Loans.
     *     @example
     *     // Create many Loans
     *     const loan = await prisma.loan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends loanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Loan.
     * @param {loanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     *
     **/
    delete<T extends loanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loanDeleteArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Loan.
     * @param {loanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends loanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpdateArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Loans.
     * @param {loanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends loanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends loanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Loan.
     * @param {loanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     **/
    upsert<T extends loanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpsertArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
     **/
    count<T extends loanCountArgs>(
      args?: Subset<T, loanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LoanAggregateArgs>(
      args: Subset<T, LoanAggregateArgs>,
    ): Prisma.PrismaPromise<GetLoanAggregateType<T>>;

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends loanGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loanGroupByArgs['orderBy'] }
        : { orderBy?: loanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, loanGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the loan model
     */
    readonly fields: loanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    vehicle<T extends loan$vehicleArgs<ExtArgs> = {}>(
      args?: Subset<T, loan$vehicleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the loan model
   */
  interface loanFieldRefs {
    readonly id: FieldRef<'loan', 'String'>;
    readonly amount: FieldRef<'loan', 'Int'>;
    readonly interest_rate: FieldRef<'loan', 'Int'>;
    readonly duration: FieldRef<'loan', 'Int'>;
    readonly start_date: FieldRef<'loan', 'DateTime'>;
    readonly end_date: FieldRef<'loan', 'DateTime'>;
    readonly user_id: FieldRef<'loan', 'String'>;
    readonly created_at: FieldRef<'loan', 'DateTime'>;
    readonly updated_at: FieldRef<'loan', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * loan findUnique
   */
  export type loanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan findUniqueOrThrow
   */
  export type loanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan findFirst
   */
  export type loanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan findFirstOrThrow
   */
  export type loanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan findMany
   */
  export type loanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loans to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan create
   */
  export type loanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The data needed to create a loan.
     */
    data: XOR<loanCreateInput, loanUncheckedCreateInput>;
  };

  /**
   * loan createMany
   */
  export type loanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * loan update
   */
  export type loanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The data needed to update a loan.
     */
    data: XOR<loanUpdateInput, loanUncheckedUpdateInput>;
    /**
     * Choose, which loan to update.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan updateMany
   */
  export type loanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>;
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput;
  };

  /**
   * loan upsert
   */
  export type loanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The filter to search for the loan to update in case it exists.
     */
    where: loanWhereUniqueInput;
    /**
     * In case the loan found by the `where` argument doesn't exist, create a new loan with this data.
     */
    create: XOR<loanCreateInput, loanUncheckedCreateInput>;
    /**
     * In case the loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loanUpdateInput, loanUncheckedUpdateInput>;
  };

  /**
   * loan delete
   */
  export type loanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter which loan to delete.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan deleteMany
   */
  export type loanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to delete
     */
    where?: loanWhereInput;
  };

  /**
   * loan.vehicle
   */
  export type loan$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    where?: vehicleWhereInput;
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    cursor?: vehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * loan without action
   */
  export type loanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      advisor?: boolean | user$advisorArgs<ExtArgs>;
      business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
      loan?: boolean | user$loanArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advisor?: boolean | user$advisorArgs<ExtArgs>;
    business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
    loan?: boolean | user$loanArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      advisor: Prisma.$advisorPayload<ExtArgs>[];
      business_owner: Prisma.$business_ownerPayload<ExtArgs>[];
      loan: Prisma.$loanPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    advisor<T extends user$advisorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$advisorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$advisorPayload<ExtArgs>, T, 'findMany'> | Null>;

    business_owner<T extends user$business_ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$business_ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan<T extends user$loanArgs<ExtArgs> = {}>(
      args?: Subset<T, user$loanArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.advisor
   */
  export type user$advisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the advisor
     */
    select?: advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: advisorInclude<ExtArgs> | null;
    where?: advisorWhereInput;
    orderBy?: advisorOrderByWithRelationInput | advisorOrderByWithRelationInput[];
    cursor?: advisorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdvisorScalarFieldEnum | AdvisorScalarFieldEnum[];
  };

  /**
   * user.business_owner
   */
  export type user$business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    cursor?: business_ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * user.loan
   */
  export type user$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    where?: loanWhereInput;
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    cursor?: loanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  export type VehicleAvgAggregateOutputType = {
    year: number | null;
    price: number | null;
  };

  export type VehicleSumAggregateOutputType = {
    year: number | null;
    price: number | null;
  };

  export type VehicleMinAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    price: number | null;
    loan_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleMaxAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    price: number | null;
    loan_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VehicleCountAggregateOutputType = {
    id: number;
    make: number;
    model: number;
    year: number;
    color: number;
    price: number;
    loan_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VehicleAvgAggregateInputType = {
    year?: true;
    price?: true;
  };

  export type VehicleSumAggregateInputType = {
    year?: true;
    price?: true;
  };

  export type VehicleMinAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    price?: true;
    loan_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleMaxAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    price?: true;
    loan_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VehicleCountAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    price?: true;
    loan_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle to aggregate.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned vehicles
     **/
    _count?: true | VehicleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: VehicleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: VehicleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VehicleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VehicleMaxAggregateInputType;
  };

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>;
  };

  export type vehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput;
    orderBy?: vehicleOrderByWithAggregationInput | vehicleOrderByWithAggregationInput[];
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum;
    having?: vehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
  };

  export type VehicleGroupByOutputType = {
    id: string;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    loan_id: string;
    created_at: Date;
    updated_at: Date;
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
  };

  type GetVehicleGroupByPayload<T extends vehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VehicleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
          : GetScalarType<T[P], VehicleGroupByOutputType[P]>;
      }
    >
  >;

  export type vehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      year?: boolean;
      color?: boolean;
      price?: boolean;
      loan_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      loan?: boolean | loanDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vehicle']
  >;

  export type vehicleSelectScalar = {
    id?: boolean;
    make?: boolean;
    model?: boolean;
    year?: boolean;
    color?: boolean;
    price?: boolean;
    loan_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type vehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loanDefaultArgs<ExtArgs>;
  };

  export type $vehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vehicle';
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        make: string;
        model: string;
        year: number;
        color: string;
        price: number;
        loan_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vehicle']
    >;
    composites: {};
  };

  type vehicleGetPayload<S extends boolean | null | undefined | vehicleDefaultArgs> = $Result.GetResult<
    Prisma.$vehiclePayload,
    S
  >;

  type vehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    vehicleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: VehicleCountAggregateInputType | true;
  };

  export interface vehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle']; meta: { name: 'vehicle' } };
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {vehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends vehicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleFindUniqueArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {vehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends vehicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<
      $Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends vehicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends vehicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     *
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends vehicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vehicle.
     * @param {vehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     *
     **/
    create<T extends vehicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleCreateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Vehicles.
     *     @param {vehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends vehicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vehicle.
     * @param {vehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     *
     **/
    delete<T extends vehicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleDeleteArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vehicle.
     * @param {vehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends vehicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Vehicles.
     * @param {vehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends vehicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, vehicleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends vehicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vehicle.
     * @param {vehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     **/
    upsert<T extends vehicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, vehicleUpsertArgs<ExtArgs>>,
    ): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
     **/
    count<T extends vehicleCountArgs>(
      args?: Subset<T, vehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends VehicleAggregateArgs>(
      args: Subset<T, VehicleAggregateArgs>,
    ): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends vehicleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicleGroupByArgs['orderBy'] }
        : { orderBy?: vehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, vehicleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vehicle model
     */
    readonly fields: vehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    loan<T extends loanDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, loanDefaultArgs<ExtArgs>>,
    ): Prisma__loanClient<
      $Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vehicle model
   */
  interface vehicleFieldRefs {
    readonly id: FieldRef<'vehicle', 'String'>;
    readonly make: FieldRef<'vehicle', 'String'>;
    readonly model: FieldRef<'vehicle', 'String'>;
    readonly year: FieldRef<'vehicle', 'Int'>;
    readonly color: FieldRef<'vehicle', 'String'>;
    readonly price: FieldRef<'vehicle', 'Int'>;
    readonly loan_id: FieldRef<'vehicle', 'String'>;
    readonly created_at: FieldRef<'vehicle', 'DateTime'>;
    readonly updated_at: FieldRef<'vehicle', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vehicle findUnique
   */
  export type vehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findUniqueOrThrow
   */
  export type vehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle findFirst
   */
  export type vehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findFirstOrThrow
   */
  export type vehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle findMany
   */
  export type vehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehicleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing vehicles.
     */
    cursor?: vehicleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` vehicles.
     */
    skip?: number;
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[];
  };

  /**
   * vehicle create
   */
  export type vehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to create a vehicle.
     */
    data: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
  };

  /**
   * vehicle createMany
   */
  export type vehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehicleCreateManyInput | vehicleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vehicle update
   */
  export type vehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The data needed to update a vehicle.
     */
    data: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
    /**
     * Choose, which vehicle to update.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle updateMany
   */
  export type vehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>;
    /**
     * Filter which vehicles to update
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle upsert
   */
  export type vehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * The filter to search for the vehicle to update in case it exists.
     */
    where: vehicleWhereUniqueInput;
    /**
     * In case the vehicle found by the `where` argument doesn't exist, create a new vehicle with this data.
     */
    create: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>;
    /**
     * In case the vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>;
  };

  /**
   * vehicle delete
   */
  export type vehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
    /**
     * Filter which vehicle to delete.
     */
    where: vehicleWhereUniqueInput;
  };

  /**
   * vehicle deleteMany
   */
  export type vehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehicleWhereInput;
  };

  /**
   * vehicle without action
   */
  export type vehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vehicleInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AdvisorScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    email: 'email';
    phone: 'phone';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AdvisorScalarFieldEnum = (typeof AdvisorScalarFieldEnum)[keyof typeof AdvisorScalarFieldEnum];

  export const Business_ownerScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    email: 'email';
    phone: 'phone';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Business_ownerScalarFieldEnum =
    (typeof Business_ownerScalarFieldEnum)[keyof typeof Business_ownerScalarFieldEnum];

  export const LoanScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    interest_rate: 'interest_rate';
    duration: 'duration';
    start_date: 'start_date';
    end_date: 'end_date';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VehicleScalarFieldEnum: {
    id: 'id';
    make: 'make';
    model: 'model';
    year: 'year';
    color: 'color';
    price: 'price';
    loan_id: 'loan_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type advisorWhereInput = {
    AND?: advisorWhereInput | advisorWhereInput[];
    OR?: advisorWhereInput[];
    NOT?: advisorWhereInput | advisorWhereInput[];
    id?: UuidFilter<'advisor'> | string;
    first_name?: StringFilter<'advisor'> | string;
    last_name?: StringFilter<'advisor'> | string;
    email?: StringFilter<'advisor'> | string;
    phone?: StringFilter<'advisor'> | string;
    user_id?: UuidFilter<'advisor'> | string;
    created_at?: DateTimeFilter<'advisor'> | Date | string;
    updated_at?: DateTimeFilter<'advisor'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type advisorOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type advisorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: advisorWhereInput | advisorWhereInput[];
      OR?: advisorWhereInput[];
      NOT?: advisorWhereInput | advisorWhereInput[];
      first_name?: StringFilter<'advisor'> | string;
      last_name?: StringFilter<'advisor'> | string;
      email?: StringFilter<'advisor'> | string;
      phone?: StringFilter<'advisor'> | string;
      user_id?: UuidFilter<'advisor'> | string;
      created_at?: DateTimeFilter<'advisor'> | Date | string;
      updated_at?: DateTimeFilter<'advisor'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type advisorOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: advisorCountOrderByAggregateInput;
    _max?: advisorMaxOrderByAggregateInput;
    _min?: advisorMinOrderByAggregateInput;
  };

  export type advisorScalarWhereWithAggregatesInput = {
    AND?: advisorScalarWhereWithAggregatesInput | advisorScalarWhereWithAggregatesInput[];
    OR?: advisorScalarWhereWithAggregatesInput[];
    NOT?: advisorScalarWhereWithAggregatesInput | advisorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'advisor'> | string;
    first_name?: StringWithAggregatesFilter<'advisor'> | string;
    last_name?: StringWithAggregatesFilter<'advisor'> | string;
    email?: StringWithAggregatesFilter<'advisor'> | string;
    phone?: StringWithAggregatesFilter<'advisor'> | string;
    user_id?: UuidWithAggregatesFilter<'advisor'> | string;
    created_at?: DateTimeWithAggregatesFilter<'advisor'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'advisor'> | Date | string;
  };

  export type business_ownerWhereInput = {
    AND?: business_ownerWhereInput | business_ownerWhereInput[];
    OR?: business_ownerWhereInput[];
    NOT?: business_ownerWhereInput | business_ownerWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    first_name?: StringFilter<'business_owner'> | string;
    last_name?: StringFilter<'business_owner'> | string;
    email?: StringFilter<'business_owner'> | string;
    phone?: StringFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type business_ownerOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type business_ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: business_ownerWhereInput | business_ownerWhereInput[];
      OR?: business_ownerWhereInput[];
      NOT?: business_ownerWhereInput | business_ownerWhereInput[];
      first_name?: StringFilter<'business_owner'> | string;
      last_name?: StringFilter<'business_owner'> | string;
      email?: StringFilter<'business_owner'> | string;
      phone?: StringFilter<'business_owner'> | string;
      user_id?: UuidFilter<'business_owner'> | string;
      created_at?: DateTimeFilter<'business_owner'> | Date | string;
      updated_at?: DateTimeFilter<'business_owner'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type business_ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: business_ownerCountOrderByAggregateInput;
    _max?: business_ownerMaxOrderByAggregateInput;
    _min?: business_ownerMinOrderByAggregateInput;
  };

  export type business_ownerScalarWhereWithAggregatesInput = {
    AND?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    OR?: business_ownerScalarWhereWithAggregatesInput[];
    NOT?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business_owner'> | string;
    first_name?: StringWithAggregatesFilter<'business_owner'> | string;
    last_name?: StringWithAggregatesFilter<'business_owner'> | string;
    email?: StringWithAggregatesFilter<'business_owner'> | string;
    phone?: StringWithAggregatesFilter<'business_owner'> | string;
    user_id?: UuidWithAggregatesFilter<'business_owner'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
  };

  export type loanWhereInput = {
    AND?: loanWhereInput | loanWhereInput[];
    OR?: loanWhereInput[];
    NOT?: loanWhereInput | loanWhereInput[];
    id?: UuidFilter<'loan'> | string;
    amount?: IntFilter<'loan'> | number;
    interest_rate?: IntFilter<'loan'> | number;
    duration?: IntFilter<'loan'> | number;
    start_date?: DateTimeFilter<'loan'> | Date | string;
    end_date?: DateTimeFilter<'loan'> | Date | string;
    user_id?: UuidFilter<'loan'> | string;
    created_at?: DateTimeFilter<'loan'> | Date | string;
    updated_at?: DateTimeFilter<'loan'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    vehicle?: VehicleListRelationFilter;
  };

  export type loanOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    interest_rate?: SortOrder;
    duration?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    vehicle?: vehicleOrderByRelationAggregateInput;
  };

  export type loanWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: loanWhereInput | loanWhereInput[];
      OR?: loanWhereInput[];
      NOT?: loanWhereInput | loanWhereInput[];
      amount?: IntFilter<'loan'> | number;
      interest_rate?: IntFilter<'loan'> | number;
      duration?: IntFilter<'loan'> | number;
      start_date?: DateTimeFilter<'loan'> | Date | string;
      end_date?: DateTimeFilter<'loan'> | Date | string;
      user_id?: UuidFilter<'loan'> | string;
      created_at?: DateTimeFilter<'loan'> | Date | string;
      updated_at?: DateTimeFilter<'loan'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      vehicle?: VehicleListRelationFilter;
    },
    'id'
  >;

  export type loanOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    interest_rate?: SortOrder;
    duration?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: loanCountOrderByAggregateInput;
    _avg?: loanAvgOrderByAggregateInput;
    _max?: loanMaxOrderByAggregateInput;
    _min?: loanMinOrderByAggregateInput;
    _sum?: loanSumOrderByAggregateInput;
  };

  export type loanScalarWhereWithAggregatesInput = {
    AND?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[];
    OR?: loanScalarWhereWithAggregatesInput[];
    NOT?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'loan'> | string;
    amount?: IntWithAggregatesFilter<'loan'> | number;
    interest_rate?: IntWithAggregatesFilter<'loan'> | number;
    duration?: IntWithAggregatesFilter<'loan'> | number;
    start_date?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'loan'> | string;
    created_at?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    advisor?: AdvisorListRelationFilter;
    business_owner?: Business_ownerListRelationFilter;
    loan?: LoanListRelationFilter;
    organization?: OrganizationListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    advisor?: advisorOrderByRelationAggregateInput;
    business_owner?: business_ownerOrderByRelationAggregateInput;
    loan?: loanOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      advisor?: AdvisorListRelationFilter;
      business_owner?: Business_ownerListRelationFilter;
      loan?: LoanListRelationFilter;
      organization?: OrganizationListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type vehicleWhereInput = {
    AND?: vehicleWhereInput | vehicleWhereInput[];
    OR?: vehicleWhereInput[];
    NOT?: vehicleWhereInput | vehicleWhereInput[];
    id?: UuidFilter<'vehicle'> | string;
    make?: StringFilter<'vehicle'> | string;
    model?: StringFilter<'vehicle'> | string;
    year?: IntFilter<'vehicle'> | number;
    color?: StringFilter<'vehicle'> | string;
    price?: IntFilter<'vehicle'> | number;
    loan_id?: UuidFilter<'vehicle'> | string;
    created_at?: DateTimeFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle'> | Date | string;
    loan?: XOR<LoanRelationFilter, loanWhereInput>;
  };

  export type vehicleOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    loan_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    loan?: loanOrderByWithRelationInput;
  };

  export type vehicleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: vehicleWhereInput | vehicleWhereInput[];
      OR?: vehicleWhereInput[];
      NOT?: vehicleWhereInput | vehicleWhereInput[];
      make?: StringFilter<'vehicle'> | string;
      model?: StringFilter<'vehicle'> | string;
      year?: IntFilter<'vehicle'> | number;
      color?: StringFilter<'vehicle'> | string;
      price?: IntFilter<'vehicle'> | number;
      loan_id?: UuidFilter<'vehicle'> | string;
      created_at?: DateTimeFilter<'vehicle'> | Date | string;
      updated_at?: DateTimeFilter<'vehicle'> | Date | string;
      loan?: XOR<LoanRelationFilter, loanWhereInput>;
    },
    'id'
  >;

  export type vehicleOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    loan_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: vehicleCountOrderByAggregateInput;
    _avg?: vehicleAvgOrderByAggregateInput;
    _max?: vehicleMaxOrderByAggregateInput;
    _min?: vehicleMinOrderByAggregateInput;
    _sum?: vehicleSumOrderByAggregateInput;
  };

  export type vehicleScalarWhereWithAggregatesInput = {
    AND?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    OR?: vehicleScalarWhereWithAggregatesInput[];
    NOT?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vehicle'> | string;
    make?: StringWithAggregatesFilter<'vehicle'> | string;
    model?: StringWithAggregatesFilter<'vehicle'> | string;
    year?: IntWithAggregatesFilter<'vehicle'> | number;
    color?: StringWithAggregatesFilter<'vehicle'> | string;
    price?: IntWithAggregatesFilter<'vehicle'> | number;
    loan_id?: UuidWithAggregatesFilter<'vehicle'> | string;
    created_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vehicle'> | Date | string;
  };

  export type advisorCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAdvisorInput;
  };

  export type advisorUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type advisorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAdvisorNestedInput;
  };

  export type advisorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type advisorCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type advisorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type advisorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBusiness_ownerInput;
  };

  export type business_ownerUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBusiness_ownerNestedInput;
  };

  export type business_ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanCreateInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLoanInput;
    vehicle?: vehicleCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
    vehicle?: vehicleUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: vehicleUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanCreateManyInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorUncheckedCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUncheckedUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan: loanCreateNestedOneWithoutVehicleInput;
  };

  export type vehicleUncheckedCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    loan_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateOneRequiredWithoutVehicleNestedInput;
  };

  export type vehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    loan_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleCreateManyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    loan_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    loan_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type advisorCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type advisorMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type advisorMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type business_ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type VehicleListRelationFilter = {
    every?: vehicleWhereInput;
    some?: vehicleWhereInput;
    none?: vehicleWhereInput;
  };

  export type vehicleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type loanCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    interest_rate?: SortOrder;
    duration?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanAvgOrderByAggregateInput = {
    amount?: SortOrder;
    interest_rate?: SortOrder;
    duration?: SortOrder;
  };

  export type loanMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    interest_rate?: SortOrder;
    duration?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    interest_rate?: SortOrder;
    duration?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanSumOrderByAggregateInput = {
    amount?: SortOrder;
    interest_rate?: SortOrder;
    duration?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type AdvisorListRelationFilter = {
    every?: advisorWhereInput;
    some?: advisorWhereInput;
    none?: advisorWhereInput;
  };

  export type Business_ownerListRelationFilter = {
    every?: business_ownerWhereInput;
    some?: business_ownerWhereInput;
    none?: business_ownerWhereInput;
  };

  export type LoanListRelationFilter = {
    every?: loanWhereInput;
    some?: loanWhereInput;
    none?: loanWhereInput;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type advisorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type business_ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type loanOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type LoanRelationFilter = {
    is?: loanWhereInput;
    isNot?: loanWhereInput;
  };

  export type vehicleCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    loan_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleAvgOrderByAggregateInput = {
    year?: SortOrder;
    price?: SortOrder;
  };

  export type vehicleMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    loan_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    loan_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type vehicleSumOrderByAggregateInput = {
    year?: SortOrder;
    price?: SortOrder;
  };

  export type userCreateNestedOneWithoutAdvisorInput = {
    create?: XOR<userCreateWithoutAdvisorInput, userUncheckedCreateWithoutAdvisorInput>;
    connectOrCreate?: userCreateOrConnectWithoutAdvisorInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutAdvisorNestedInput = {
    create?: XOR<userCreateWithoutAdvisorInput, userUncheckedCreateWithoutAdvisorInput>;
    connectOrCreate?: userCreateOrConnectWithoutAdvisorInput;
    upsert?: userUpsertWithoutAdvisorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAdvisorInput, userUpdateWithoutAdvisorInput>,
      userUncheckedUpdateWithoutAdvisorInput
    >;
  };

  export type userCreateNestedOneWithoutBusiness_ownerInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutBusiness_ownerNestedInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    upsert?: userUpsertWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBusiness_ownerInput, userUpdateWithoutBusiness_ownerInput>,
      userUncheckedUpdateWithoutBusiness_ownerInput
    >;
  };

  export type userCreateNestedOneWithoutLoanInput = {
    create?: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoanInput;
    connect?: userWhereUniqueInput;
  };

  export type vehicleCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>
      | vehicleCreateWithoutLoanInput[]
      | vehicleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutLoanInput | vehicleCreateOrConnectWithoutLoanInput[];
    createMany?: vehicleCreateManyLoanInputEnvelope;
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
  };

  export type vehicleUncheckedCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>
      | vehicleCreateWithoutLoanInput[]
      | vehicleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutLoanInput | vehicleCreateOrConnectWithoutLoanInput[];
    createMany?: vehicleCreateManyLoanInputEnvelope;
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoanInput;
    upsert?: userUpsertWithoutLoanInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLoanInput, userUpdateWithoutLoanInput>,
      userUncheckedUpdateWithoutLoanInput
    >;
  };

  export type vehicleUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>
      | vehicleCreateWithoutLoanInput[]
      | vehicleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutLoanInput | vehicleCreateOrConnectWithoutLoanInput[];
    upsert?: vehicleUpsertWithWhereUniqueWithoutLoanInput | vehicleUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: vehicleCreateManyLoanInputEnvelope;
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    update?: vehicleUpdateWithWhereUniqueWithoutLoanInput | vehicleUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?: vehicleUpdateManyWithWhereWithoutLoanInput | vehicleUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
  };

  export type vehicleUncheckedUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>
      | vehicleCreateWithoutLoanInput[]
      | vehicleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?: vehicleCreateOrConnectWithoutLoanInput | vehicleCreateOrConnectWithoutLoanInput[];
    upsert?: vehicleUpsertWithWhereUniqueWithoutLoanInput | vehicleUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: vehicleCreateManyLoanInputEnvelope;
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[];
    update?: vehicleUpdateWithWhereUniqueWithoutLoanInput | vehicleUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?: vehicleUpdateManyWithWhereWithoutLoanInput | vehicleUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type advisorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<advisorCreateWithoutUserInput, advisorUncheckedCreateWithoutUserInput>
      | advisorCreateWithoutUserInput[]
      | advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: advisorCreateOrConnectWithoutUserInput | advisorCreateOrConnectWithoutUserInput[];
    createMany?: advisorCreateManyUserInputEnvelope;
    connect?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
  };

  export type business_ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type loanCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type advisorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<advisorCreateWithoutUserInput, advisorUncheckedCreateWithoutUserInput>
      | advisorCreateWithoutUserInput[]
      | advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: advisorCreateOrConnectWithoutUserInput | advisorCreateOrConnectWithoutUserInput[];
    createMany?: advisorCreateManyUserInputEnvelope;
    connect?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
  };

  export type business_ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type loanUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type advisorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<advisorCreateWithoutUserInput, advisorUncheckedCreateWithoutUserInput>
      | advisorCreateWithoutUserInput[]
      | advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: advisorCreateOrConnectWithoutUserInput | advisorCreateOrConnectWithoutUserInput[];
    upsert?: advisorUpsertWithWhereUniqueWithoutUserInput | advisorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: advisorCreateManyUserInputEnvelope;
    set?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    disconnect?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    delete?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    connect?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    update?: advisorUpdateWithWhereUniqueWithoutUserInput | advisorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: advisorUpdateManyWithWhereWithoutUserInput | advisorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: advisorScalarWhereInput | advisorScalarWhereInput[];
  };

  export type business_ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type loanUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutUserInput | loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutUserInput | loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loanUpdateManyWithWhereWithoutUserInput | loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type advisorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<advisorCreateWithoutUserInput, advisorUncheckedCreateWithoutUserInput>
      | advisorCreateWithoutUserInput[]
      | advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?: advisorCreateOrConnectWithoutUserInput | advisorCreateOrConnectWithoutUserInput[];
    upsert?: advisorUpsertWithWhereUniqueWithoutUserInput | advisorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: advisorCreateManyUserInputEnvelope;
    set?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    disconnect?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    delete?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    connect?: advisorWhereUniqueInput | advisorWhereUniqueInput[];
    update?: advisorUpdateWithWhereUniqueWithoutUserInput | advisorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: advisorUpdateManyWithWhereWithoutUserInput | advisorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: advisorScalarWhereInput | advisorScalarWhereInput[];
  };

  export type business_ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type loanUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutUserInput | loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutUserInput | loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loanUpdateManyWithWhereWithoutUserInput | loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type loanCreateNestedOneWithoutVehicleInput = {
    create?: XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>;
    connectOrCreate?: loanCreateOrConnectWithoutVehicleInput;
    connect?: loanWhereUniqueInput;
  };

  export type loanUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>;
    connectOrCreate?: loanCreateOrConnectWithoutVehicleInput;
    upsert?: loanUpsertWithoutVehicleInput;
    connect?: loanWhereUniqueInput;
    update?: XOR<
      XOR<loanUpdateToOneWithWhereWithoutVehicleInput, loanUpdateWithoutVehicleInput>,
      loanUncheckedUpdateWithoutVehicleInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutAdvisorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAdvisorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAdvisorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAdvisorInput, userUncheckedCreateWithoutAdvisorInput>;
  };

  export type userUpsertWithoutAdvisorInput = {
    update: XOR<userUpdateWithoutAdvisorInput, userUncheckedUpdateWithoutAdvisorInput>;
    create: XOR<userCreateWithoutAdvisorInput, userUncheckedCreateWithoutAdvisorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAdvisorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAdvisorInput, userUncheckedUpdateWithoutAdvisorInput>;
  };

  export type userUpdateWithoutAdvisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAdvisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBusiness_ownerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
  };

  export type userUpsertWithoutBusiness_ownerInput = {
    update: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBusiness_ownerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
  };

  export type userUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutLoanInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLoanInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorUncheckedCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLoanInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
  };

  export type vehicleCreateWithoutLoanInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUncheckedCreateWithoutLoanInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleCreateOrConnectWithoutLoanInput = {
    where: vehicleWhereUniqueInput;
    create: XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>;
  };

  export type vehicleCreateManyLoanInputEnvelope = {
    data: vehicleCreateManyLoanInput | vehicleCreateManyLoanInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutLoanInput = {
    update: XOR<userUpdateWithoutLoanInput, userUncheckedUpdateWithoutLoanInput>;
    create: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLoanInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLoanInput, userUncheckedUpdateWithoutLoanInput>;
  };

  export type userUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUncheckedUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type vehicleUpsertWithWhereUniqueWithoutLoanInput = {
    where: vehicleWhereUniqueInput;
    update: XOR<vehicleUpdateWithoutLoanInput, vehicleUncheckedUpdateWithoutLoanInput>;
    create: XOR<vehicleCreateWithoutLoanInput, vehicleUncheckedCreateWithoutLoanInput>;
  };

  export type vehicleUpdateWithWhereUniqueWithoutLoanInput = {
    where: vehicleWhereUniqueInput;
    data: XOR<vehicleUpdateWithoutLoanInput, vehicleUncheckedUpdateWithoutLoanInput>;
  };

  export type vehicleUpdateManyWithWhereWithoutLoanInput = {
    where: vehicleScalarWhereInput;
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutLoanInput>;
  };

  export type vehicleScalarWhereInput = {
    AND?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
    OR?: vehicleScalarWhereInput[];
    NOT?: vehicleScalarWhereInput | vehicleScalarWhereInput[];
    id?: UuidFilter<'vehicle'> | string;
    make?: StringFilter<'vehicle'> | string;
    model?: StringFilter<'vehicle'> | string;
    year?: IntFilter<'vehicle'> | number;
    color?: StringFilter<'vehicle'> | string;
    price?: IntFilter<'vehicle'> | number;
    loan_id?: UuidFilter<'vehicle'> | string;
    created_at?: DateTimeFilter<'vehicle'> | Date | string;
    updated_at?: DateTimeFilter<'vehicle'> | Date | string;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    advisor?: advisorUncheckedCreateNestedManyWithoutUserInput;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: advisorUncheckedUpdateManyWithoutUserNestedInput;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type advisorCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type advisorUncheckedCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type advisorCreateOrConnectWithoutUserInput = {
    where: advisorWhereUniqueInput;
    create: XOR<advisorCreateWithoutUserInput, advisorUncheckedCreateWithoutUserInput>;
  };

  export type advisorCreateManyUserInputEnvelope = {
    data: advisorCreateManyUserInput | advisorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type business_ownerCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerCreateOrConnectWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerCreateManyUserInputEnvelope = {
    data: business_ownerCreateManyUserInput | business_ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type loanCreateWithoutUserInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vehicle?: vehicleCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutUserInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vehicle?: vehicleUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanCreateOrConnectWithoutUserInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>;
  };

  export type loanCreateManyUserInputEnvelope = {
    data: loanCreateManyUserInput | loanCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type advisorUpsertWithWhereUniqueWithoutUserInput = {
    where: advisorWhereUniqueInput;
    update: XOR<advisorUpdateWithoutUserInput, advisorUncheckedUpdateWithoutUserInput>;
    create: XOR<advisorCreateWithoutUserInput, advisorUncheckedCreateWithoutUserInput>;
  };

  export type advisorUpdateWithWhereUniqueWithoutUserInput = {
    where: advisorWhereUniqueInput;
    data: XOR<advisorUpdateWithoutUserInput, advisorUncheckedUpdateWithoutUserInput>;
  };

  export type advisorUpdateManyWithWhereWithoutUserInput = {
    where: advisorScalarWhereInput;
    data: XOR<advisorUpdateManyMutationInput, advisorUncheckedUpdateManyWithoutUserInput>;
  };

  export type advisorScalarWhereInput = {
    AND?: advisorScalarWhereInput | advisorScalarWhereInput[];
    OR?: advisorScalarWhereInput[];
    NOT?: advisorScalarWhereInput | advisorScalarWhereInput[];
    id?: UuidFilter<'advisor'> | string;
    first_name?: StringFilter<'advisor'> | string;
    last_name?: StringFilter<'advisor'> | string;
    email?: StringFilter<'advisor'> | string;
    phone?: StringFilter<'advisor'> | string;
    user_id?: UuidFilter<'advisor'> | string;
    created_at?: DateTimeFilter<'advisor'> | Date | string;
    updated_at?: DateTimeFilter<'advisor'> | Date | string;
  };

  export type business_ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    update: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    data: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
  };

  export type business_ownerUpdateManyWithWhereWithoutUserInput = {
    where: business_ownerScalarWhereInput;
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type business_ownerScalarWhereInput = {
    AND?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    OR?: business_ownerScalarWhereInput[];
    NOT?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    first_name?: StringFilter<'business_owner'> | string;
    last_name?: StringFilter<'business_owner'> | string;
    email?: StringFilter<'business_owner'> | string;
    phone?: StringFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
  };

  export type loanUpsertWithWhereUniqueWithoutUserInput = {
    where: loanWhereUniqueInput;
    update: XOR<loanUpdateWithoutUserInput, loanUncheckedUpdateWithoutUserInput>;
    create: XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>;
  };

  export type loanUpdateWithWhereUniqueWithoutUserInput = {
    where: loanWhereUniqueInput;
    data: XOR<loanUpdateWithoutUserInput, loanUncheckedUpdateWithoutUserInput>;
  };

  export type loanUpdateManyWithWhereWithoutUserInput = {
    where: loanScalarWhereInput;
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutUserInput>;
  };

  export type loanScalarWhereInput = {
    AND?: loanScalarWhereInput | loanScalarWhereInput[];
    OR?: loanScalarWhereInput[];
    NOT?: loanScalarWhereInput | loanScalarWhereInput[];
    id?: UuidFilter<'loan'> | string;
    amount?: IntFilter<'loan'> | number;
    interest_rate?: IntFilter<'loan'> | number;
    duration?: IntFilter<'loan'> | number;
    start_date?: DateTimeFilter<'loan'> | Date | string;
    end_date?: DateTimeFilter<'loan'> | Date | string;
    user_id?: UuidFilter<'loan'> | string;
    created_at?: DateTimeFilter<'loan'> | Date | string;
    updated_at?: DateTimeFilter<'loan'> | Date | string;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type loanCreateWithoutVehicleInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutVehicleInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanCreateOrConnectWithoutVehicleInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>;
  };

  export type loanUpsertWithoutVehicleInput = {
    update: XOR<loanUpdateWithoutVehicleInput, loanUncheckedUpdateWithoutVehicleInput>;
    create: XOR<loanCreateWithoutVehicleInput, loanUncheckedCreateWithoutVehicleInput>;
    where?: loanWhereInput;
  };

  export type loanUpdateToOneWithWhereWithoutVehicleInput = {
    where?: loanWhereInput;
    data: XOR<loanUpdateWithoutVehicleInput, loanUncheckedUpdateWithoutVehicleInput>;
  };

  export type loanUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleCreateManyLoanInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type vehicleUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type vehicleUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type advisorCreateManyUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerCreateManyUserInput = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanCreateManyUserInput = {
    id?: string;
    amount: number;
    interest_rate: number;
    duration: number;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type advisorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type advisorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type advisorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: vehicleUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: vehicleUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use LoanCountOutputTypeDefaultArgs instead
   */
  export type LoanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    LoanCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use advisorDefaultArgs instead
   */
  export type advisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    advisorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use business_ownerDefaultArgs instead
   */
  export type business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    business_ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use loanDefaultArgs instead
   */
  export type loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = loanDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use vehicleDefaultArgs instead
   */
  export type vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    vehicleDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
