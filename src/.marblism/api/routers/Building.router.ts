/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.BuildingInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).building.createMany(input as any))),

        create: procedure.input($Schema.BuildingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).building.create(input as any))),

        deleteMany: procedure.input($Schema.BuildingInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).building.deleteMany(input as any))),

        delete: procedure.input($Schema.BuildingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).building.delete(input as any))),

        findFirst: procedure.input($Schema.BuildingInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).building.findFirst(input as any))),

        findMany: procedure.input($Schema.BuildingInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).building.findMany(input as any))),

        findUnique: procedure.input($Schema.BuildingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).building.findUnique(input as any))),

        updateMany: procedure.input($Schema.BuildingInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).building.updateMany(input as any))),

        update: procedure.input($Schema.BuildingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).building.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BuildingCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BuildingCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BuildingCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BuildingCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BuildingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BuildingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BuildingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BuildingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BuildingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BuildingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BuildingGetPayload<T>, Context>) => Promise<Prisma.BuildingGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BuildingDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BuildingDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BuildingDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BuildingDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BuildingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BuildingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BuildingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BuildingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BuildingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BuildingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BuildingGetPayload<T>, Context>) => Promise<Prisma.BuildingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BuildingFindFirstArgs, TData = Prisma.BuildingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BuildingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BuildingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BuildingFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BuildingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BuildingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BuildingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BuildingFindManyArgs, TData = Array<Prisma.BuildingGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.BuildingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BuildingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BuildingFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BuildingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BuildingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BuildingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BuildingFindUniqueArgs, TData = Prisma.BuildingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BuildingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BuildingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BuildingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BuildingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BuildingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BuildingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BuildingUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BuildingUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BuildingUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BuildingUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BuildingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BuildingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BuildingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BuildingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BuildingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BuildingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BuildingGetPayload<T>, Context>) => Promise<Prisma.BuildingGetPayload<T>>
            };

    };
}
