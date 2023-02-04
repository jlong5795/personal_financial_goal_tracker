import { createTRPCRouter } from "./trpc";
import { balancesRouter, bankAccountsRouter, goalsRouter } from "./routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  balances: balancesRouter,
  bankAccounts: bankAccountsRouter,
  goals: goalsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
