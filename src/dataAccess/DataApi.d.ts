import { AxiosInstance, AxiosResponse } from 'axios';
import { DtoType } from './types';
export declare type DataApiProps = {
    baseURL?: string;
    axios?: AxiosInstance;
    dtoPath: string;
};
export default class DataApi<DataType extends DtoType> {
    protected axios: AxiosInstance;
    private baseURL;
    private dtoPath;
    constructor(args: DataApiProps);
    setToken(tokenType: string, token: string): void;
    getBasePath(): string;
    findOne(id: string): Promise<AxiosResponse<DataType>>;
    findByIDs(ids: string[]): Promise<AxiosResponse<DataType[]>>;
    findAll(): Promise<AxiosResponse<DataType>>;
    findPage(): Promise<AxiosResponse<DataType>>;
    create(data: DataType): Promise<AxiosResponse<DataType>>;
    update(id: string, data: DataType): Promise<AxiosResponse<DataType>>;
    updatePartial(id: string, data: Partial<DataType>): Promise<AxiosResponse<DataType>>;
    remove(id: string): Promise<AxiosResponse<DataType>>;
}
