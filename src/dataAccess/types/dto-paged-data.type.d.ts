export declare type DTOPagedData<T> = {
    data: T[];
    totalCount: number;
    pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        nextPage?: string;
        previousPage?: string;
    };
};
