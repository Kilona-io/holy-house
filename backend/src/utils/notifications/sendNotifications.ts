import { sendPushNotificationsToUser } from './sendNotification';

export const sendNotifications = async (
    tokens: string[],
    title: string,
    body: string,
    riddleId: number
) => {
    if (tokens.length > 0) {
        await sendPushNotificationsToUser();
    }
};
