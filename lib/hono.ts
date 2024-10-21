import { AppType } from "@/app/api/[[...route]]/route";
import { NEXT_PUBLIC_APP_URL } from "@/env";
import { hc } from "hono/client";

export const client = hc<AppType>(NEXT_PUBLIC_APP_URL!);
