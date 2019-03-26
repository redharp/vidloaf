import * as pino from 'pino';

class LogProvider {
    private baseLogger: pino.BaseLogger = pino();
    private children: Logger[] = [];

    getLogger(module: string): Logger {
        const existingLogger = this.children.filter(l => l.getName() === module)[0];
        if (existingLogger) return existingLogger;
        const childLogger: Logger = new Logger(this.baseLogger.child({ module }), module);
        this.children.push(childLogger);
        return childLogger;
    }
}

export class Logger {
    logger: pino.Logger;
    name: string;

    constructor(logger: pino.Logger, name: string) {
        this.logger = logger;
        this.name = name;
    }
    info(msg: string): void {
        this.logger.info(msg);
    }

    debug(msg: string): void {
        this.logger.debug(msg);
    }

    warn(msg: string): void {
        this.logger.warn(msg);
    }

    getName() {
        return this.name;
    }
}

const logProvider: LogProvider = new LogProvider();

const test = logProvider.getLogger('testLogger');

const test2 = logProvider.getLogger('testLogger');

test.warn('test');
test2.warn('test');