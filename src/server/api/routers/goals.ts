import { z } from "zod";
import dayjs from "dayjs";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const goalsRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.goals.findMany();
    }),

    getOne: protectedProcedure.input(
        z.object({ id: z.string() })
    ).query(({ ctx, input }) => {
        return ctx.prisma.goals.findUnique({
            where: {
                id: input.id,
            },
        });
    }),

    createOne: protectedProcedure.input(z.object({ bankAccountId: z.string(), description: z.string(), targetDate: z.date(), targetAmount: z.number() })).mutation(({ ctx, input }) => {
        return ctx.prisma.goals.create({
            data: {
                bankAccountId: input.bankAccountId,
                description: input.description,
                startDate: dayjs().toDate(),
                targetDate: input.targetDate,
                targetAmount: input.targetAmount,
            },
        });
    }),

    updateOne: protectedProcedure.input(z.object({ bankAccountId: z.string().optional(), description: z.string().optional(), id: z.string(), targetDate: z.date(), targetAmount: z.number() })).mutation(({ ctx, input }) => {
        return ctx.prisma.goals.update({
            where: {
                id: input.id,
            },
            data: {
                bankAccountId: input.bankAccountId,
                description: input.description,
                targetDate: input.targetDate,
                targetAmount: input.targetAmount,
            },
        });
    }),

    deleteOne: protectedProcedure.input(z.object({ id: z.string() })).mutation(({ ctx, input }) => {
        return ctx.prisma.goals.delete({
            where: {
                id: input.id,
            },
        });
    }),
})