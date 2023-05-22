import { I18NArguments } from '../../i18n';
import { DTOPagedData } from './dto-paged-data.type';
export type DtoObserverState<Type> = {
    page: DTOPagedData<Type>;
    lastRetrieved: Type | null;
    listing: boolean;
    creating: boolean;
    updating: boolean;
    removing: boolean;
    getting: boolean;
    errors: I18NArguments[];
};
