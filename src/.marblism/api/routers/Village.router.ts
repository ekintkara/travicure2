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

        createMany: procedure.input($Schema.VillageInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).village.createMany(input as any))),

        create: procedure.input($Schema.VillageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).village.create(input as any))),

        deleteMany: procedure.input($Schema.VillageInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).village.deleteMany(input as any))),

        delete: procedure.input($Schema.VillageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).village.delete(input as any))),

        findFirst: procedure.input($Schema.VillageInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).village.findFirst(input as any))),

        findMany: procedure.input($Schema.VillageInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).village.findMany(input as any))),

        findUnique: procedure.input($Schema.VillageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).village.findUnique(input as any))),

        updateMany: procedure.input($Schema.VillageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).village.updateMany(input as any))),

        update: procedure.input($Schema.VillageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).village.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.VillageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VillageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VillageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VillageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.VillageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VillageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VillageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VillageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VillageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VillageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VillageGetPayload<T>, Context>) => Promise<Prisma.VillageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.VillageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VillageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VillageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VillageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.VillageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VillageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VillageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VillageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VillageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VillageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VillageGetPayload<T>, Context>) => Promise<Prisma.VillageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.VillageFindFirstArgs, TData = Prisma.VillageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VillageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VillageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VillageFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VillageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VillageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VillageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.VillageFindManyArgs, TData = Array<Prisma.VillageGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.VillageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.VillageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VillageFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VillageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.VillageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.VillageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.VillageFindUniqueArgs, TData = Prisma.VillageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VillageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VillageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VillageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VillageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VillageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VillageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.VillageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VillageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VillageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VillageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.VillageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VillageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VillageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VillageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VillageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VillageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VillageGetPayload<T>, Context>) => Promise<Prisma.VillageGetPayload<T>>
            };

    };
}
