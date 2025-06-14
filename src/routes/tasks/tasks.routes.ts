import { insertTasksSchema, selectTasksSchema } from "@/db/schema";
import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

const tags = ["Tasks"];

export const list = createRoute({
    path: "/tasks",
    method: "get",
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.array(selectTasksSchema), // Wrap in z.array()
            "List of tasks",
        ),
    },
});

export const create = createRoute({
    path: "/tasks",
    method: "post",
    tags,
    body: jsonContentRequired(
        insertTasksSchema,
        "Task to create",
    ),
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.array(selectTasksSchema), // Wrap in z.array()
            "Created tasks",
        ),
    },
});


export type ListRoute = typeof list;
export type CreateRoute = typeof create;