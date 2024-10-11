import {User} from '@supabase/supabase-js';
import supabase from '../../config/supabaseClient';
import Logger from '../helper/Logger';

const signIn = async (
    email: string,
    password: string
): Promise<User | null> => {
    const {
        data: {user},
        error,
    } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) Logger.error('Error sign in:', error);
    else Logger.info('User sign in:', user);
    return user;
};

export default signIn;
