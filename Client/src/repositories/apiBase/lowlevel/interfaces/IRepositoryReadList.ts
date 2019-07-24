import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import { IObjectGenericMapper }                 from '@/repositories/objectMappers/interfaces/IObjectGenericMapper';

export interface IRepositoryReadList<T> {
    getAll(baseUrl: string, convertor?: IObjectGenericMapper<T> )
        : ApiResponse<GenericCollectionModel<T>>;
}
