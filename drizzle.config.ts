import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "./env";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
