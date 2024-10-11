import { pgTable, serial, integer, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { chats } from './chatModel';

export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),
    chatId: integer('chat_id')
        .references(() => chats.id)
        .notNull(),
    sender: varchar('sender', { length: 10 }).notNull(), // USER or AI
    content: text('content').notNull(),
    timestamp: timestamp('timestamp').defaultNow().notNull(),
});

export type Message = typeof messages.$inferSelect;
export type InsertMessage = typeof messages.$inferInsert;
export type SelectMessage = typeof messages.$inferSelect;
