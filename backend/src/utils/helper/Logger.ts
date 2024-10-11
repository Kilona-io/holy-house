import { logger, consoleTransport } from 'react-native-logs';

enum LogLevel {
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
    SUCCESS = 'success',
}
const defaultConfig = {
    levels: {
        [LogLevel.DEBUG]: 0,
        [LogLevel.INFO]: 1,
        [LogLevel.WARN]: 2,
        [LogLevel.ERROR]: 3,
        [LogLevel.SUCCESS]: 4,
    },
    severity: 'debug',
    transport: consoleTransport,
    transportOptions: {
        colors: {
            info: 'blueBright',
            warn: 'yellowBright',
            error: 'redBright',
            success: 'greenBright',
        },
        extensionColors: {
            root: 'green',
            home: 'green',
        },
    },
    async: true,
    dateFormat: 'time',
    printLevel: true,
    printDate: true,
    fixedExtLvlLength: false,
    enabled: true,
};

const log = logger.createLogger<LogLevel>(defaultConfig).extend('root');

export default log;
