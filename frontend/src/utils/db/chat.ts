import {User} from '@supabase/supabase-js';
import backendInstance from '../../config/backendInstance';
import {Chat} from '../types/Chat';
import Logger from '../helper/Logger';

const CHAT_ENDPOINT = '/chats';

const getChats = async (user: User): Promise<Chat[] | null> => {
    try {
        const response = await backendInstance.get(CHAT_ENDPOINT, {
            params: {
                user_id: user.id,
            },
        });
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

const getChat = async (user: User, chatId: string): Promise<Chat | null> => {
    try {
        const response = await backendInstance.get(
            `${CHAT_ENDPOINT}/${chatId}`,
            {
                params: {
                    user_id: user.id,
                },
            }
        );
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

export {getChats, getChat};
