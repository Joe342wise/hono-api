import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { pinoLogger } from "./Middlewares/pino-logger.js";
import { PinoLogger } from "hono-pino";


type AppBindings = {
    Variables: {
        logger: PinoLogger;
    }
};

const app = new OpenAPIHono<AppBindings>();
app.use(serveEmojiFavicon(""));
app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(500);
  c.var.logger.debug("Only for testing");
  throw new Error("This is a test error");
});

app.notFound(notFound);
app.onError(onError);

export default app;
