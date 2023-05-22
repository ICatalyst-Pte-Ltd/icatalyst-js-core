export type DtoType<IDFieldName extends string = 'id'> = {
    [key in IDFieldName]: string;
};
