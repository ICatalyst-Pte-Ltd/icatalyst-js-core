export declare const Partial: <T>(Class: new () => T) => new () => { [P in keyof T]?: T[P] | undefined; };
