import {User} from '@supabase/supabase-js';
import backendInstance from '../../config/backendInstance';
import {Message} from '../types/Message';
import {Chat} from '../types/Chat';
import Logger from '../helper/Logger';

const MESSAGE_ENDPOINT = '/chat';

const getMessages = async (
    user: User,
    chat: Chat
): Promise<Message[] | null> => {
    try {
        const response = await backendInstance.get(MESSAGE_ENDPOINT, {
            params: {
                user_id: user.id,
                chat_id: chat.id,
            },
        });
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

const createMessage = async (
    message: Message,
    user: User,
    chat?: Chat
): Promise<Message[] | null> => {
    try {
        const response = await backendInstance.post(
            MESSAGE_ENDPOINT + '/send',
            {
                message,
                userId: 3,
                chatId: chat?.id,
            }
        );
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

export {getMessages, createMessage};
