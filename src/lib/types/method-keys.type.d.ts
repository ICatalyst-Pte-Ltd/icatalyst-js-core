export type MethodKeys<T, E> = {
    [K in keyof T]: T[K] extends E ? K : never;
}[keyof T];
