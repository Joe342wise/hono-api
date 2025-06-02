import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const tasks = sqliteTable("tasks", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    done: integer("done", { mode: "boolean" }).notNull().default(false),
    createAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updateAt: integer("updated_at", { mode: "timestamp" })
        .$defaultFn(() => new Date())
        .$onUpdate(() => new Date()),
});

export const selectTasksSchema = createSelectSchema(tasks);

// If above doesn't work, use this manual schema instead:
// export const selectTasksSchema = z.object({
//     id: z.number(),
//     name: z.string(),
//     done: z.boolean(),
//     createAt: z.date(),
//     updateAt: z.date(),
// });