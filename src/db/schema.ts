import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tasls = sqliteTable("tasks", {
    id: integer("id", {mode: "number"}).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    done: integer("done", {mode: "boolean"}).notNull().default(false),
    createdAt: integer("created_at", {mode: "timestamp"}).default(sql`(strftime('%s', 'now'))`),
    updatedAt: integer("updated_at", {mode: "timestamp"}).$onUpdate(() => new Date()),
});
