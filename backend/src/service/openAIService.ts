import OpenAI from 'openai';
import prompt from '../constants/prompt';
import { Message } from '../db/schema';
import log from '../utils/helper/Logger';

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

const model = 'gpt-4o';
const temperature = 0.5;
const maxTokens = 1000;

export const openAIChat = async (message: Message): Promise<string> => {
    try {
        const response = await client.chat.completions.create({
            model,
            messages: [
                {
                    role: 'user',
                    content: `${prompt} \n Message from user: ${message.content}`,
                },
            ],
            temperature,
            max_tokens: maxTokens,
        });

        const aiMessage = response.choices[0].message.content || '';

        return aiMessage.trim();
    } catch (error) {
        log.error('Error OpenAI:', error);
        throw new Error('Error with AI service');
    }
};
