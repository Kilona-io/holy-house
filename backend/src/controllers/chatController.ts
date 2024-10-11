import { Request, Response } from 'express';
import { db } from '../db';
import { chats, InsertChat, Message, messages, users } from '../db/schema';
import { openAIChat } from '../service/openAIService';
import { asc, eq, inArray } from 'drizzle-orm';
import { Sender } from '../types/Sender';
import log from '../utils/helper/Logger';
import { generateError } from '../utils/error';

interface AuthRequest extends Request {
    userId?: number;
    chatId?: number;
    message?: Message;
}

export const sendMessage = async (req: AuthRequest, res: Response) => {
    const { message, userId, chatId } = req.body;
    let chatIdLocal: number | undefined = chatId;
    if (!userId) return res.sendStatus(401);

    try {
        if (!chatIdLocal) {
            const [chat] = await db
                .insert(chats)
                .values({
                    id: chatIdLocal,
                    userId,
                })
                .returning({ id: chats.id })
                .execute();

            chatIdLocal = chat.id;
        }

        await db
            .insert(messages)
            .values({
                chatId: chatIdLocal,
                sender: Sender.USER,
                content: message,
            })
            .execute();

        const aiResponse = await openAIChat(message);

        const aiMessage = await db
            .insert(messages)
            .values({
                chatId: chatIdLocal,
                sender: Sender.AI,
                content: aiResponse,
            })
            .returning()
            .execute();

        res.json(aiMessage);
    } catch (error) {
        log.error('Error send message:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getChatHistory = async (req: AuthRequest, res: Response) => {
    const userId = req.userId;

    if (!userId) return res.sendStatus(401);

    try {
        const chatHistory = await db.select().from(chats).where(eq(chats.userId, userId)).execute();

        const chatIds = chatHistory.map((chat) => chat.id);

        const messagesList = await db
            .select({
                chatId: messages.chatId,
                sender: messages.sender,
                content: messages.content,
                timestamp: messages.timestamp,
            })
            .from(messages)
            .where(inArray(messages.chatId, chatIds))
            .orderBy(asc(messages.timestamp))
            .execute();

        res.status(200).json(messagesList);
    } catch (error) {
        log.error('Error history chata:', error);
        res.status(500).json(generateError(error, 'Server error'));
    }
};
