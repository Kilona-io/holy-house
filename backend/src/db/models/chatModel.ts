import { pgTable, serial, integer, timestamp } from 'drizzle-orm/pg-core';
import { users } from './userModel';

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    userId: integer('user_id')
        .references(() => users.id)
        .notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Chat = typeof chats.$inferSelect;
export type InsertChat = typeof chats.$inferInsert;
export type SelectChat = typeof chats.$inferSelect;
