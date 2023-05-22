export type Primitive = string | boolean | number;
export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export * from './application-info.type';
export * from './module-base.type';
export * from './method-keys.type';
export * from './omit';
export * from './omit-big-5.type';
export * from './partial';
export * from './updatable-type';
export * from './version.type';
