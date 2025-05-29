import { PinoLogger } from "hono-pino";

import createApp from "@/lib/create-app.js";
import type { Hono } from "hono";
import { config } from "dotenv";
import configureOpenApi from "./lib/configure-open-api";


const app = createApp();

configureOpenApi(app);

export default app;
