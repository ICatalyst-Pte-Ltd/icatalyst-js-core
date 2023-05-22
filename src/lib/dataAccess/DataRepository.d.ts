import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';
import DataApi, { PaginationProps } from './DataApi';
import { ObservableData, ObservableDataTransforms } from './ObservableData';
import { DtoObserverState, DtoType } from './types';
export type DataRepositoryProps<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>, ObserverStateType extends DtoObserverState<DataType> = DtoObserverState<DataType>, ObservableType extends ObservableData<IDFieldName, DataType, ObserverStateType> = ObservableData<IDFieldName, DataType, ObserverStateType>> = {
    baseURL?: string;
    axios?: AxiosInstance;
    dtoPath: string;
    global?: boolean;
    observableService?: ObservableType;
    apiService?: DataApi<IDFieldName, DataType>;
    transforms?: ObservableDataTransforms<DataType>;
    idField?: string;
};
export declare class DataRepository<IDFieldName extends string, DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>, ObserverStateType extends DtoObserverState<DataType> = DtoObserverState<DataType>, ObservableType extends ObservableData<IDFieldName, DataType, ObserverStateType> = ObservableData<IDFieldName, DataType, ObserverStateType>> {
    protected readonly dataApi: DataApi<IDFieldName, DataType>;
    protected readonly observableService: ObservableType;
    constructor(args: DataRepositoryProps<IDFieldName, DataType, ObserverStateType, ObservableType>);
    getBaseURL(): string;
    getState(): ObserverStateType;
    setToken(token: string): void;
    findAll(pagination?: PaginationProps, filter?: Partial<DataType>): Observable<DataType[]>;
    findOne(id: string): Observable<DataType>;
    findByIDs(ids: string[]): Observable<DataType[]>;
    create(data: DataType): Observable<DataType>;
    update(id: string, data: DataType): Observable<DataType>;
    updatePartial(id: string, data: Partial<DataType>): Observable<DataType>;
    remove(id: string): Observable<DataType>;
    getObservable(): import("rxjs").BehaviorSubject<ObserverStateType>;
}
