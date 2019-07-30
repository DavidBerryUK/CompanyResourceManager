import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { IModelGenericMapper }                  from '@/repositories/modelMappers/interfaces/IModelGenericMapper';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export interface IRepositoryReadList<T> {
    getAll(baseUrl: string, convertor?: IModelGenericMapper<T> )
        : ApiResponse<GenericCollectionModel<T>>;
}
