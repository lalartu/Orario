import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
export const orario = sqliteTable('orario', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    orario: text('orario'),
    lunedi: text('lunedi'),
    martedi: text('martedi'),
    mercoledi: text('mercoledi'),
    giovedi: text('giovedi'),
    venerdi: text('venerdi')
});
