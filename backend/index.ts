import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Logger from './src/utils/helper/Logger';
import chatRouter from './src/routes/chatRoutes';
import userRouter from './src/routes/user';
// App congif.
const app: Application = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

dotenv.config({
    path: '.env',
});

app.use('/api/chat', chatRouter);
app.use('/api/user', userRouter);

// Port
const PORT: string | number = process.env['PORT'] || 8000;

app.listen(PORT, (): void => {
    Logger.info(`BACKEND -------- CONNECTED = http://localhost:${PORT}`);
});
