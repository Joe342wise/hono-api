import { createRouter } from "@/lib/create-app";
import { createRoute, z } from "@hono/zod-openapi";

const router = createRouter()
    .openapi(createRoute(
        {
            method: "get",
            path: "/",
            responses: {
                200: {
                    description: "Hono API Index",
                    content: {
                        "application/json": {
                            schema: z.object({
                                message: z.string(),
                            }),
                        },
                    },
                },
            }
        }
    ),
    (c) => { return c.json({ message: "Welcome to the Hono API!" }); }
);


export default router;