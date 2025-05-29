import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { pinoLogger } from "@/Middlewares/pino-logger.js";

import type { AppBindings } from "@/lib/types.js";
import { fa } from "zod/v4/locales";

export default function createApp() {
    const app = new OpenAPIHono<AppBindings>({
        strict: false,
    });
    app.use(serveEmojiFavicon("📝"));
    app.use(pinoLogger());

    app.notFound(notFound);
    app.onError(onError);
    return app;
}
