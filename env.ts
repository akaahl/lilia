import { config } from "dotenv";

config({ path: ".env" });

export const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
export const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;
export const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
export const NEXT_PUBLIC_CLERK_SIGN_IN_URL =
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL;
export const NEXT_PUBLIC_CLERK_SIGN_UP_URL =
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;

export const DATABASE_URL = process.env.DATABASE_URL!;

export const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL;
