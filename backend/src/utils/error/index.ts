import log from '../helper/Logger';

export const generateError = (error: unknown, message = 'Something went wrong...') => {
    log.error('An unexpected error occurred:', error);
    return { message, error };
};
