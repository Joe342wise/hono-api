import type { ListRoute } from "./tasks.routes";
import type { AppRouteHandler } from "@/lib/types";

export const list:  AppRouteHandler<ListRoute> = (c) => {
  return c.json([
    { name: "Task 1", done: false },
    { name: "Task 2", done: true },
    { name: "Task 3", done: false },
  ]);
}