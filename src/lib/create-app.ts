import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { pinoLogger } from "@/Middlewares/pino-logger";

import type { AppBindings } from "@/lib/types";

export function createRouter() {
    return new OpenAPIHono<AppBindings>({
        strict: false,
    });
}

export default function createApp() {
    const app = createRouter();
    app.use(serveEmojiFavicon("📝"));
    app.use(pinoLogger());

    app.notFound(notFound);
    app.onError(onError);
    return app;
}
