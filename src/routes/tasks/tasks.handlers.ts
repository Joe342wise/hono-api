import db from "@/db";
import type { CreateRoute, ListRoute } from "./tasks.routes";
import type { AppRouteHandler } from "@/lib/types";

export const list:  AppRouteHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();
  const serializedTasks = tasks.map(task => ({
    ...task,
    createAt: task.createAt ? task.createAt.toISOString() : "",
    updateAt: task.updateAt ? task.updateAt.toISOString() : ""
  }));
  return c.json(serializedTasks);
}

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const tasks = await c.req.json();
  const result = await db.insert(tasks).values(tasks).returning();
  const inserted = Array.isArray(result) ? result[0] : result;
  return c.json(inserted);
};