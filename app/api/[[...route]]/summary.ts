import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  return c.json({ summary: true });
});

export default app;
