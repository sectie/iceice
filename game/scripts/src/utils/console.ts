import { format } from './format';

function write(text: string) {
    for (const line of text.split('\n')) {
        if (line.length > 2047) {
            const postfix = '... (line have been trimmed because of a length limit)';
            print(`${line.slice(0, 2047 - postfix.length)}${postfix}`);
        } else {
            print(line);
        }
    }
}

function assert(value: any, message = 'console.assert', ...args: any[]) {
    if (!value) {
        error(message, args);
    }
}

function error(...args: any[]) {
    print('[ERROR]', format(...args));
}

const warn = error;

function log(...args: any[]) {
    write(format(...args));
}

const debug = log;
const info = log;

function clear() {
    SendToServerConsole(`clear`);
}


export const console = {
    assert,
    warn,
    error,
    log,
    debug,
    info,
    clear,
};

declare global {
    interface console {
        assert: typeof assert;
        warn: typeof warn;
        error: typeof error;
        log: typeof log;
        debug: typeof debug;
        info: typeof info;
        clear: typeof clear;
    }
}
