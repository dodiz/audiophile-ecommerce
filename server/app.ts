import { Context } from "@/server/context";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  return next({
    ctx,
  });
});
