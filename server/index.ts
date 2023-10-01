import { router } from "@/server/app";
import { productsRouter } from "@/server/routers";

export const appRouter = router({
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
