import { db } from '../db';
import { users } from '../db/schema';
import { generateError } from '../utils/error';
import { Request, Response } from 'express';
import { eq } from 'drizzle-orm';

export const signInWithEmail = async (req: AuthRequest, res: Response) => {
    const { email } = req.body;
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
};

interface AuthRequest extends Request {
    userId?: number;
}

export const createUser = async (req: AuthRequest, res: Response) => {
    try {
        const { email } = req.body;

        const [user] = await db
            .insert(users)
            .values({
                email,
            })
            .returning({ id: users.id })
            .execute();

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(generateError(error, 'Error create a user'));
    }
};
