export type DTOPagedData<T> = {
    data: T[];
    totalCount: number;
    index: number;
    pageSize: number;
    pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        nextPage?: string;
        previousPage?: string;
    };
};
