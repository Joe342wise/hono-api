import { createRouter } from "@/lib/create-app";
import { createRoute, z } from "@hono/zod-openapi";
import { jsonContent } from "stoker/openapi/helpers";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

const router = createRouter()
    .openapi(createRoute(
        {
            tags: ["Index"],
            method: "get",
            path: "/",
            responses: {
                [HttpStatusCodes.OK]: jsonContent(
                    createMessageObjectSchema("Welcome to the Hono API!"),
                        "Hono API Index",
                ),
            }
        }
    ),
    (c) => { return c.json({ message: "Welcome to the Hono API!" }); }
);


export default router;