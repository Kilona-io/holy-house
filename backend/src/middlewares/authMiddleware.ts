import { Request, Response, NextFunction } from 'express';
import { supabaseAdmin } from '../config/supabaseClient';

interface AuthRequest extends Request {
    user?: any;
}

export const authenticateSupabaseToken = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    const {
        data: { user },
        error,
    } = await supabaseAdmin.auth.getUser(token);

    if (error || !user) {
        return res.status(401).json({ message: 'Not valid token' });
    }

    req.user = user;
    next();
};
