import {User} from '@supabase/supabase-js';
import supabase from '../../config/supabaseClient';
import Logger from '../helper/Logger';

const signUp = async (
    email: string,
    password: string
): Promise<User | null> => {
    const {
        data: {user},
        error,
    } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) Logger.error('Error sign up:', JSON.stringify(error));
    else Logger.info('User sign up:', user);
    return user;
};
export default signUp;
