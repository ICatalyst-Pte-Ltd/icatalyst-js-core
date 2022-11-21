import { BehaviorSubject } from 'rxjs';
import { I18NArguments } from '../i18n';
import { DTOPagedData, DtoType } from './types';
import { DtoObserverState } from './types/dto-observable-state.type';
export declare type ObservableDataTransforms<DataType> = {
    pagedResult: (data: any) => DTOPagedData<DataType>;
};
declare type ObservableDataProps<ObserverType, DataType> = {
    global: boolean;
    name: string;
    initialState?: Partial<ObserverType>;
    transforms?: Partial<ObservableDataTransforms<DataType>>;
};
export declare class ObservableData<DataType extends DtoType, ObserverType extends DtoObserverState<DataType> = DtoObserverState<DataType>> {
    protected subject: BehaviorSubject<ObserverType>;
    private name;
    private transforms;
    constructor(args: ObservableDataProps<ObserverType, DataType>);
    setNextState(payload: Partial<DtoObserverState<DataType> | ObserverType>): void;
    list(data: DataType[]): void;
    listing(flag: boolean): void;
    get(data: DataType): void;
    getting(flag: boolean): void;
    create(data: DataType): void;
    creating(flag: boolean): void;
    update(id: string, data: DataType): void;
    updating(flag: boolean): void;
    remove(id: string): void;
    removing(flag: boolean): void;
    error(errors: I18NArguments[]): void;
    getObservable(): BehaviorSubject<ObserverType>;
    getState(): ObserverType;
    getFromStateByID(id: string): DataType | undefined;
    getFromStateByIDs(ids: string[]): DataType | undefined;
}
export {};
