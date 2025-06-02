import db from "@/db";
import type { ListRoute } from "./tasks.routes";
import type { AppRouteHandler } from "@/lib/types";

export const list:  AppRouteHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();
  return c.json(tasks);
}