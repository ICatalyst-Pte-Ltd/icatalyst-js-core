import { BehaviorSubject } from 'rxjs';
import { I18NArguments } from '../i18n';
import { DTOPagedData, DtoType } from './types';
import { DtoObserverState } from './types/dto-observable-state.type';
export type ObservableDataTransforms<DataType> = {
    pagedResult?: (data: unknown) => DTOPagedData<DataType>;
    dtoTransforms?: ((data: unknown) => DataType)[];
};
type ObservableDataProps<ObserverType, DataType> = {
    global: boolean;
    name: string;
    idField: string;
    initialState?: Partial<ObserverType>;
    transforms?: Partial<ObservableDataTransforms<DataType>>;
};
export declare class ObservableData<IDFieldName extends string = 'id', DataType extends DtoType<IDFieldName> = DtoType<IDFieldName>, ObserverType extends DtoObserverState<DataType> = DtoObserverState<DataType>> {
    protected subject: BehaviorSubject<ObserverType>;
    private readonly name;
    private idField;
    private readonly transforms;
    constructor(args: ObservableDataProps<ObserverType, DataType>);
    setNextState(payload: Partial<ObserverType>): void;
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
