/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createOrganizationRouter from "./Organization.router";
import createVillageRouter from "./Village.router";
import createTroopRouter from "./Troop.router";
import createResourceRouter from "./Resource.router";
import createBuildingRouter from "./Building.router";
import createTaskRouter from "./Task.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as VillageClientType } from "./Village.router";
import { ClientType as TroopClientType } from "./Troop.router";
import { ClientType as ResourceClientType } from "./Resource.router";
import { ClientType as BuildingClientType } from "./Building.router";
import { ClientType as TaskClientType } from "./Task.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        village: createVillageRouter(router, procedure),
        troop: createTroopRouter(router, procedure),
        resource: createResourceRouter(router, procedure),
        building: createBuildingRouter(router, procedure),
        task: createTaskRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    village: VillageClientType<AppRouter>;
    troop: TroopClientType<AppRouter>;
    resource: ResourceClientType<AppRouter>;
    building: BuildingClientType<AppRouter>;
    task: TaskClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
