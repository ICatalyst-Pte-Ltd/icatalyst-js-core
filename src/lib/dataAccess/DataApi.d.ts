import { AxiosInstance, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { DtoType } from './types';
export type DataApiProps = {
    baseURL?: string;
    axios?: AxiosInstance;
    dtoPath: string;
};
export type PaginationProps = {
    offset: number;
    limit: number;
};
export type CancelAxios = () => void;
export default class DataApi<IDFieldName extends string, DataType extends DtoType<IDFieldName>> {
    protected axios: AxiosInstance;
    private baseURL;
    private dtoPath;
    constructor(args: DataApiProps);
    setToken(tokenType: string, token: string): void;
    getBasePath(): string;
    findOne(id: string): Observable<AxiosResponse<DataType>>;
    findAll(pagination?: PaginationProps, filter?: Partial<DataType>): Observable<AxiosResponse<DataType[]>>;
    findByIDs(ids: string[]): Observable<AxiosResponse<DataType[]>>;
    create(data: DataType): Observable<AxiosResponse<DataType>>;
    update(id: string, data: DataType): Observable<AxiosResponse<DataType>>;
    updatePartial(id: string, data: Partial<DataType>): Observable<AxiosResponse<DataType>>;
    remove(id: string): Observable<AxiosResponse<DataType>>;
}
