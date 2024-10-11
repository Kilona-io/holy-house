import {User} from '@supabase/supabase-js';
import backendInstance from '../../config/backendInstance';
import Logger from '../helper/Logger';

const USER_ENDPOINT = '/user';

const getUser = async (): Promise<User | null> => {
    try {
        const response = await backendInstance.get(USER_ENDPOINT);
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

const createUser = async (user: User): Promise<User | null> => {
    try {
        const response = await backendInstance.post(USER_ENDPOINT, user);
        console.log(response.data);
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

const updateUser = async (user: User): Promise<User | null> => {
    try {
        const response = await backendInstance.put(USER_ENDPOINT, user);
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

const deleteUser = async (id: string): Promise<User | null> => {
    try {
        const response = await backendInstance.delete(`${USER_ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        Logger.error(error);
        return null;
    }
};

export {getUser, createUser, updateUser, deleteUser};
