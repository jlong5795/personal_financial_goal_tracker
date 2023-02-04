import { z } from "zod";
import dayjs from "dayjs";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const balancesRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.balances.findMany();
    }),

    getOne: protectedProcedure.input(
        z.object({ id: z.string() })
    ).query(({ ctx, input }) => {
        return ctx.prisma.balances.findUnique({
            where: {
                id: input.id,
            },
        });
    }),

    createOne: protectedProcedure.input(z.object({ amount: z.number(), bankAccountId: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.balances.create({
            data: {
                amount: input.amount,
                bankAccountId: input.bankAccountId,
                date: dayjs().toDate(),
            },
        });
    }),

    updateOne: protectedProcedure.input(z.object({ amount: z.number().optional(), bankAccountId: z.string().optional(), date: z.date().optional(), id: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.balances.update({
            where: {
                id: input.id,
            },
            data: {
                amount: input.amount,
                bankAccountId: input.bankAccountId,
                date: input.date,
            },
        });
    }),

    deleteOne: protectedProcedure.input(z.object({ id: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.balances.delete({
            where: {
                id: input.id,
            },
        });
    }),
})