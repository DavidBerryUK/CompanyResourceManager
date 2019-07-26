import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import { IModelGenericMapper }                 from '@/repositories/modelMappers/interfaces/IModelGenericMapper';

export interface IRepositoryReadList<T> {
    getAll(baseUrl: string, convertor?: IModelGenericMapper<T> )
        : ApiResponse<GenericCollectionModel<T>>;
}
