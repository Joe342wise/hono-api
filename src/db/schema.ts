import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tasls = sqliteTable("tasks", {
    id: integer("id", {mode: "number"}).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    done: integer("done", {mode: "boolean"}).notNull().default(false),
    createAt: integer("created_at", {mode: "timestamp"}).$defaultFn(() => new Date()),
    updateAt: integer("updated_at", {mode: "timestamp"}).$defaultFn(() => new Date).$onUpdate(() => new Date()),
});
