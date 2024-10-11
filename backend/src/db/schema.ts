import { chats } from './models/chatModel';
import { messages } from './models/messageModel';
import { users } from './models/userModel';

export { chats, messages, users };

export type Chat = typeof chats.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type User = typeof users.$inferSelect;

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;

export type InsertChat = typeof chats.$inferInsert;
export type SelectChat = typeof chats.$inferSelect;

export type InsertMessage = typeof messages.$inferInsert;
export type SelectMessage = typeof messages.$inferSelect;
