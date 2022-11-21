export declare type Primitive = string | boolean | number;
export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export * from './application-info.type';
export * from './module-base.type';
export * from './omit';
export * from './partial';
export * from './updatable-type';
export * from './version.type';
