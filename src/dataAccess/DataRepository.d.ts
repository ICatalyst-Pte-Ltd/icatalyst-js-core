import { AxiosInstance } from 'axios';
import DataApi from './DataApi';
import { ObservableData, ObservableDataTransforms } from './ObservableData';
import { DtoType } from './types';
export declare type DataRepositoryProps<DataType extends DtoType, ObservableType extends ObservableData<DataType> = ObservableData<DataType>> = {
    baseURL?: string;
    axios?: AxiosInstance;
    dtoPath: string;
    global?: boolean;
    observableService?: ObservableType;
    apiService?: DataApi<DataType>;
    transforms?: ObservableDataTransforms<DataType>;
};
export declare class DataRepository<DataType extends DtoType, ObservableType extends ObservableData<DataType, any> = ObservableData<DataType>> {
    protected readonly dataApi: DataApi<DataType>;
    protected readonly observableService: ObservableType;
    constructor(args: DataRepositoryProps<DataType, ObservableType>);
    getBaseURL(): string;
    getState(): any;
    setToken(token: string): void;
    findOne(id: string): Promise<void>;
    findByIDs(ids: string[]): Promise<void>;
    findAll(): Promise<void>;
    findPage(): Promise<void>;
    create(data: DataType): Promise<void>;
    update(id: string, data: DataType): Promise<void>;
    updatePartial(id: string, data: Partial<DataType>): Promise<void>;
    remove(id: string): Promise<void>;
    getObservable(): import("rxjs").BehaviorSubject<any>;
}
