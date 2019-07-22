import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export interface IRepositoryReadList<T> {
    getAll(baseUrl: string, convertor?: IObjectArrayMapper<T> )
        : ApiResponse<GenericCollectionModel<T>>;
}
