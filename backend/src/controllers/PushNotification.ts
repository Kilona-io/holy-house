import { Request, Response } from 'express';
import { generateError } from '../utils/error/index';

export const saveToke = async (req: Request, res: Response) => {
    try {
        res.status(200).json({});
    } catch (e) {
        res.status(404).json(generateError(e));
    }
};

export const sendPushNotifications = async (req: Request, res: Response) => {
    try {
        res.status(200);
    } catch (error) {
        res.status(404).json(
            generateError(error, 'An error occurred while sending push notifications')
        );
    }
};
