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

        createMany: procedure.input($Schema.TroopInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).troop.createMany(input as any))),

        create: procedure.input($Schema.TroopInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).troop.create(input as any))),

        deleteMany: procedure.input($Schema.TroopInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).troop.deleteMany(input as any))),

        delete: procedure.input($Schema.TroopInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).troop.delete(input as any))),

        findFirst: procedure.input($Schema.TroopInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).troop.findFirst(input as any))),

        findMany: procedure.input($Schema.TroopInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).troop.findMany(input as any))),

        findUnique: procedure.input($Schema.TroopInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).troop.findUnique(input as any))),

        updateMany: procedure.input($Schema.TroopInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).troop.updateMany(input as any))),

        update: procedure.input($Schema.TroopInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).troop.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TroopCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TroopCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TroopCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TroopCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TroopCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TroopCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TroopGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TroopGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TroopCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TroopCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TroopGetPayload<T>, Context>) => Promise<Prisma.TroopGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TroopDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TroopDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TroopDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TroopDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TroopDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TroopDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TroopGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TroopGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TroopDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TroopDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TroopGetPayload<T>, Context>) => Promise<Prisma.TroopGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TroopFindFirstArgs, TData = Prisma.TroopGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TroopFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TroopGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TroopFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TroopFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TroopGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TroopGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TroopFindManyArgs, TData = Array<Prisma.TroopGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TroopFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TroopGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TroopFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TroopFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TroopGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TroopGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TroopFindUniqueArgs, TData = Prisma.TroopGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TroopFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TroopGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TroopFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TroopFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TroopGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TroopGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TroopUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TroopUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TroopUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TroopUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TroopUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TroopUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TroopGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TroopGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TroopUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TroopUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TroopGetPayload<T>, Context>) => Promise<Prisma.TroopGetPayload<T>>
            };

    };
}
