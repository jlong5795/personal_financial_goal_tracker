import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const bankAccountsRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.bankAccounts.findMany({
            where: {
                userId: ctx.session.user.id,
            }
        });
    }),

    getOne: protectedProcedure.input(
        z.object({ id: z.string() })
    ).query(({ ctx, input }) => {
        return ctx.prisma.bankAccounts.findUnique({
            where: {
                id: input.id,
            },
        });
    }),

    createOne: protectedProcedure.input(z.object({ accountName: z.string(), accountType: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.bankAccounts.create({
            data: {
                accountName: input.accountName,
                accountType: input.accountType,
                userId: ctx.session.user.id,
            },
        });
    }),

    updateOne: protectedProcedure.input(z.object({ accountName: z.string().optional(), accountType: z.string().optional(), id: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.bankAccounts.update({
            where: {
                id: input.id,
            },
            data: {
                accountName: input.accountName,
                accountType: input.accountType,
                userId: ctx.session.user.id,
            },
        });
    }),

    deleteOne: protectedProcedure.input(z.object({ id: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.bankAccounts.delete({
            where: {
                id: input.id,
            },
        });
    }),
})